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
            new h1('Home Page'),
            new div(
                array_map(function($v){ return new div($this->renderCard("$v.php"), ['class'=> 'col-md-6']); }, ['app', 'components']),
            ['class'=> 'row']),
        ];
    }
}