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
            new div([
                'View documentation in ',
                new a('this link', ['href'=> 'https://github.com/safwan39/PHP-React-Component/wiki']),
            ], ['class'=> 'mb-1']),
            new div([
                'Find the code of the site ',
                new a('here', ['href'=> 'https://github.com/safwan39/React-Php-component-example']),
            ],['class'=> 'mb-1']),
            new small('Note: bellow every page there\'s the code that constructs it', ['class'=> 'mb-2 text-muted text-small']),
            new div(
                array_map(function($v){ return new div($this->renderCard("$v.php"), ['class'=> 'col-md-6']); }, ['app', 'components']),
            ['class'=> 'row']),
        ];
    }
}