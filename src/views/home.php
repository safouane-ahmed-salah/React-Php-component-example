<?php

namespace React\Tag;

use React\Component;

class Home extends Component{

    private function renderCard($file){
        return new div([
            new div($file, ['class'=> 'card-header']),
            new div(new CodeWrap(['file'=> __DIR__."/../$file"]),['class'=> 'card-body p-0 overflow-auto']),
        ], ['class'=> 'card']);
    }

    function render(){
        return [
            new h1('PHP-REACT frameword Page'),
            new div('This framework is aiming to mimic reactjs component way of rendering html'),
            new div('check the code of the site bellow every page', ['class'=> 'mb-2']),
            new div(
                array_map(function($v){ return new div($this->renderCard("$v.php"), ['class'=> 'col-md-6']); }, ['app', 'components']),
            ['class'=> 'row']),
        ];
    }
}