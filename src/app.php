<?php
namespace React\Tag;

use React\Component;

class App extends Component{
    function render(){
        return [
            new Head,
            new Header,
            new Content,
            new Footer,
        ];
    }
}