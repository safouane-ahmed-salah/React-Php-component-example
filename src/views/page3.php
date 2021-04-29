<?php

namespace React\Tag;

use React\Component;

class Page3 extends Component{
    function render(){
        return [
            new h1('Page 3'),
            new div('the parameter of the route'),
            new div(json_encode($this->props->route)),
            new CodeWrap(['file'=> __FILE__]),
        ];
    }
}