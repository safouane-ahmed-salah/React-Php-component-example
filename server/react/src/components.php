<?php 
namespace React\Tag;

use React\Component;

class Header extends Component{
    function render(){
        return new div([
            new div('PHP-REACT', ['class'=> 'pe-4 font-weight-bold']), 
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
            new Route(new Page1, ['path'=> '/page1', 'exact' => true]),
            new Route(new Page2, ['path'=> '/page2', 'exact' => true]),
            new Route(new Page3, ['path'=> '/page3/:id']),
        ], ['class'=> 'container py-2']);
    }
}