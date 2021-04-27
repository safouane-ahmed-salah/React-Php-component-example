<?php 
namespace React\Tag;

use React\Component;


class CodeWrap extends Component{
    function __construct($props){
        self::setHasNoChild($this->getTagName()); //does not accept children
        parent::__construct($props);
    }
    /*
        another way
        function __construct($props){
            parent::__construct(null, $props);
        }
    */


    function render(){
        return new div(null, ['class'=> 'bg-light rounded p-4','dangerouslyInnerHTML'=> highlight_string(file_get_contents($this->props->file), true)]);
    }
}

class Head extends Component{
    function render(){
        return [
            new meta(['name'=> 'viewport', 'content'=> "width=device-width, initial-scale=1"]),
            new title('PHP-REACT SAMPLE'),
            new link(['href'=> 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css', 'rel'=> 'stylesheet']),
        ];
    }
}

class Footer extends Component{
    function render(){
        return new script(null,['src'=> 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js']);
    }
}

class Header extends Component{
    function render(){
        return new div([
            new div( new a('PHP-REACT', ['href'=> '/', 'class'=> 'navbar-brand']), ['class'=> 'pe-4 font-weight-bold']), 
            new ul([
                new RouteLink('Page 1', ['to'=> '/page1']),
                new RouteLink('Page 2', ['to'=> '/page2']),
                new RouteLink('Page 3/:id=12', ['to'=> '/page3/12']),
            ], ['class'=> 'navbar-nav'])
        ], 
        ['class'=> 'navbar navbar-expand-lg navbar-dark bg-dark p-3 text-white']);
    }
}

class Content extends Component{
    function render(){
        return new div([
            new Route(new Home, ['path'=> '/', 'exact' => true]),
            new Route(new Page1, ['path'=> '/page1', 'exact' => true]),
            new Route(new Page2, ['path'=> '/page2', 'exact' => true]),
            new Route(new Page3, ['path'=> '/page3/:id']),
        ], ['class'=> 'container py-2']);
    }
}