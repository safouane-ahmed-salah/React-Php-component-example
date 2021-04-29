<?php 
namespace React\Tag;

use React\Component;

class Route extends Component{
    static $basePath = '';
    protected $props = ['exact'=> false, 'path'=> '']; //default props
    
    protected function isActive($path){
        $request_uri = $_SERVER['REQUEST_URI'];
        $route = self::$basePath.$path;

        $regex = preg_quote($route, '#');
        preg_match_all('/:(\w+)/', $regex, $this->params);
        //convert params to regexp
        $regex = preg_replace(['#(/[\\\]):\w+#', '#\\\[?]#'], ['(/\w+)', '?'], $regex);
        
        if($this->props->exact) 
            $regex .='$';

        //if not matched
        return preg_match('#^'.$regex. '#', $request_uri, $this->matches);
    }

    function render(){
        if(!$this->isActive($this->props->path)) return;
        $params = new \stdClass;    

        if($this->params[1]){
            foreach($this->params[1] as $i => $p){
                $params->$p = trim($this->matches[$i + 1], '/') ?? null;
            }
        }
        
        //append route paramenters to child component
        foreach($this->children as $child) $child->props->route = $params;

        return $this->children;
    }
}

class RouteLink extends Route{
    function render(){
        $class = 'nav-link';
        if($this->isActive($this->props->to)) $class .=' active';
        return new li(
            new a($this->children, ['href'=> self::$basePath.$this->props->to, 'class'=> $class]), 
            ['class'=> 'nav-item']);
    }
}