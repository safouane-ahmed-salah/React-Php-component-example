<?php

namespace React;

## ---old way of state management
// const phpReact = {setState: function(id,state, onUpdate){ 
//     var comp = document.getElementById(id); if(!comp) return;
//     var prevState = this.getState(id); 
//     if(typeof state === "function") state = state(prevState);
//     var xhttp = new XMLHttpRequest();
//     var params = {id,state};
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             comp.outerHTML = this.responseText;
//             if(typeof onUpdate === "function") onUpdate();
//         }
//     };
//     xhttp.open("POST", location.href, true);
//     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xhttp.send("phpreact="+ JSON.stringify({id,state,prevState}));
// },
// getState: function(id){ 
//     try{
//         var comp = document.getElementById(id); 
//         return JSON.parse(comp.getAttribute("prevstate")); 
//     }catch(e){ return {} }
// }
// }

abstract class Component{
    private static $isTagsSet = false; //flag to track if all html tag classes created

    //all html tags that are allowed
    private static $htmlTags = ['div','p','img','a','ul','li', 'h1','h2','h3','h4','h5','h6','iframe','article', 'form','input','textarea','select','option', 'link', 'script', 'button', 'nav', 'title', 'meta', 'code', 'pre', 'span', 'i'];
    
    private static $hasNoChild = ['img', 'link', 'input', 'meta']; //tags that have no children 
    private const tagNameSpace= 'React\Tag'; //name space for the tags
    
    private static $counter = 1; // counter for generating sequencial id
    protected $id = ''; //the current id of the component
    protected $state = []; //the current state

    /*
        run the first time when first component called 
        responsible for:
        - setting all tags class component
        - setting the script that controls the state
    */
    private function setTags(){
        @ob_start();
        foreach(self::$htmlTags as $el){
            eval("namespace ". self::tagNameSpace ."; class $el extends \React\Component{}");
        }
        self::$isTagsSet = true;

        //script tag to setup setState function
        echo new \React\Tag\script('!function(w, d){ 
            var setdoms = function(){ 
                d.querySelectorAll("[component-id] *:not([component-id])").forEach(function(node){
                    if(node.setState) return;
                    node.getState = getState;
                    node.setState = setState;
                }); 
            },
            setState = function(state, onUpdate){ 
                var comp = this.closest("[component-id]"); if(!comp) return;
                var id = comp.getAttribute("component-id");
                var key = this.getAttribute("key");
                var isFocused = document.activeElement === this;
                var val = this.value;
                var prevState = this.getState(); 
                if(typeof state === "function") state = state(prevState);
                var xhttp = new XMLHttpRequest();
                var params = {id,state, prevState};
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        comp.outerHTML = this.responseText;
                        if(isFocused && key){
                            var newThis = d.querySelector("[component-id=\'"+ id +"\'] [key=\'"+ key +"\']");
                            if(newThis){ 
                                newThis.focus();
                                if(val){
                                    newThis.value = ""; 
                                    newThis.value = val;
                                }
                            }
                        }
                        if(typeof onUpdate === "function") onUpdate();
                        setdoms();
                    }
                };
                xhttp.open("POST", location.href, true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send("phpreact="+ JSON.stringify(params));
            }, 
            getState = function(){
                try{ 
                    var comp = this.closest("[component-id]"); 
                    return JSON.parse(comp.getAttribute("component-state")); 
                }catch(e){ return {} }
            };

            w.addEventListener("load", setdoms); 
        }(window, document)');
    }
    
    /*
        @return the current component tag name
    */
    protected function getTagName(){
        return trim(str_replace(self::tagNameSpace, '', get_class($this)), '\\');
    }

    /*
        @return check if the current component is html tag
    */
    protected function isHtmlTage(){
        return in_array($this->getTagName(), self::$htmlTags);
    }

    /*
        @return check if the current component is has no children
    */
    protected function hasNoChild(){
        return in_array($this->getTagName(), self::$hasNoChild);
    }

    /*
        register custom html tag
        @param: $tag: string|array[list of string] html tags
        @param: $hasNoChild: bool if the tags accept no children    
    */
    static function registerTag($tags, $hasNoChild = false){
        self::$htmlTags= array_unique(array_merge(self::$htmlTags, self::parseTags($tags)));
        if($hasNoChild) $this->setHasNoChild($tags); 
    }

    /*
        set the custom tags that has no children
        @param: $tag: string|array[list of string] html tags   
    */
    static function setHasNoChild($tags){
        self::$hasNoChild= array_unique(array_merge(self::$hasNoChild, self::parseTags($tags)));
    }

    /* 
        @param: $tags: string|array -- array string to be parse
        @return: parsed array string
    */
    private static function parseTags($tags){
        return array_map(function($tag){ return self::parseAttribute($tag); }, (array)$tags);
    }

    /* 
        allow only [words or dash] for attribute or tag
        @param: $attr: string -- the string to be parse
        @return: parsed string
    */
    private static function parseAttribute($attr){
        return preg_replace('/[^\w-]/','', $attr); //allow only [words or dash]
    }

    /*
        render the html tag only
    */
    function render(){
        if(!$this->isHtmlTage()) return '';

        $tag = $this->getTagName();
        $innerHtml = '';
        $attr = []; 
        foreach($this->props as $k=> $v){ 
            if($k == 'dangerouslyInnerHTML'){ //if has dangerouslyInnerHTML attribute
                $innerHtml = $v; continue;
            } 
            $att = self::parseAttribute($k); //allow only [words or dash]
            $val = htmlspecialchars( is_object($v) || is_array($v) ? json_encode($v) : $v); //escape html

            $attr[] = "$att='$val'"; 
        }

        $attributes = implode(' ',$attr);

        //if theres innerHtml then ignore children else escape any string passed as html 
        $children = $innerHtml ? [$innerHtml] : 
            array_map(function($v)use($tag){ return is_string($v) && $tag!='script' ? htmlspecialchars($v) : $v; }, $this->children);
        $children = implode('', $children);

        return "<$tag $attributes>$children</$tag>";
    }

    /*
        parse the components to html
        @return: html string 
    */
    function __toString(){
        $components = $this->render();

        //save state of custom component in top html wrapper
        if(!$this->isHtmlTage() && $components instanceof Component && $components->isHtmlTage()){
            $components->props = (object)array_merge((array)$components->props, ['component-id'=> $this->id, 'component-state'=> $this->state]);
        }

        if(!is_array($components)) $components = [$components]; //must be list of components

        //if custom component the render should return component or list of components
        if(!$this->isHtmlTage()) $components = array_filter($components, function($v){ return $v instanceof Component; });
        
        return implode('', $components);
    }

    /*
        construct the tag with list of child component and props 
        @param: $children: component|array[of component]  
        @param: $props: associative array of key=> value
        
        @usage: Component($children, $props) or Component($props) if exists in hasNoChild 
    */
    function __construct($children = [], $props = []){
        if(!self::$isTagsSet) $this->setTags();
        $hasNoChild = $this->hasNoChild();
        $this->setId();

        if(!is_array($children)) $children = [$children];

        //set properties
        $this->props = (object)($hasNoChild ? $children : $props);
        $this->children = $hasNoChild ? [] : $children;
        $this->state = (object)$this->state;

        //listen to state change
        $this->setStateListener();
    }

    /*
        run only when state has been updated
        @param: $oldState: [object] the previous state
        @param: $currentState: [object] the current state
    */
    function componentDidUpdate($oldState, $currentState){}

    /*
        set unique id of each custom component
        it's used to check against when state updated
    */
    private function setId(){
        if($this->isHtmlTage()) return;
        $this->id = md5(self::$counter); //generate id
        self::$counter++;
    }

    /*
        ajax listner of state update
        ajax posts 'phpreact' with json that has attributes [id: component id, state: the new state, prevState: the current state];
    */
    private function setStateListener(){
        if(empty($_POST['phpreact'])) return;
        $post = json_decode($_POST['phpreact']);
        if(!$post || $post->id != $this->id) return;
        $oldState = $post->prevState;
        $this->state = (object)array_merge((array)$oldState, (array)$post->state);
        $this->componentDidUpdate($oldState, $this->state); 
        @ob_end_clean();
        die($this);
    }
}
