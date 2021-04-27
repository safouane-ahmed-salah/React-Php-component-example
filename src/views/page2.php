<?php

namespace React\Tag;

use React\Component;

class Page2 extends Component{
    function render(){
        return [
            new h1('Page 2'),
            new CodeWrap(['file'=> __FILE__]),
        ];
    }
}