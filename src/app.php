<?php
namespace React\Tag;

use React\Component;

class App extends Component{
    function render(){
        return [
            new link(['href'=> 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css', 'rel'=> 'stylesheet']),
            new Header,
            new Content,
            new script(null,['src'=> 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js']),
        ];
    }
}