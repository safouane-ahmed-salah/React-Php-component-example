<?php

namespace React\Tag;

use React\Component;

class Page3 extends Component{
    function render(){
        return [
            new h1('Page 3'),
            new div(json_encode($this->props->route)),
            new div(highlight_string(file_get_contents(__FILE__), true), ['class'=> 'bg-light rounded p-4 mt-5']),
        ];
    }
}