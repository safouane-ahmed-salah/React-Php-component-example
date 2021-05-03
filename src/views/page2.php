<?php

namespace React\Tag;

use React\Component;

class Page2 extends Component{
    function render(){
        return [
            new h1('Page 2'),
            new div('Wizard Example', ['class'=> 'border-bottom mb-3']),
            new div(
                array_map(function(){ return  new div(new ListItems,['class'=> 'col-md-3']); }, range(0,3))
            ,['class'=> 'row']),
            new ItemWrapper,
            new CodeWrap(['file'=> __FILE__]),
        ];
    }
}


class ItemWrapper extends Component{    
    protected $state = ['component'=>  0];
    
    function render(){
        $component = $this->state->component;

        return new div([
         new div(array_map(function(){ return new ListItems; }, range(0,$component))),
         new button('Add Component', ['onclick'=> 'this.setState(prev=> ({component: prev.component +1}))', 'class'=> 'btn btn-primary']),   
        ], ['class'=> 'border-top mt-3']);
    }

}


class ListItems extends Component{
    var $list = [
        ['hi', 'you', 'here', 'try'],
        ['wizard', 'fpr', 'everyone', 'match'],
        ['trial', 'bootstrap', 'card', 'footbal'],
    ];
    protected $state = ['stage'=>  0];
    
    function render(){
        $stage = $this->state->stage;
        $list = $this->list[$stage] ?? [];

        return new div([
            new div(new ul(array_map(function($v){ return new li($v); }, $list)), ['class'=> 'card-body']),
            new div([
                $stage> 0 ? new button('Back', ['class'=> 'btn btn-secondary btn-sm', 'onclick'=> 'this.setState(prev => ({stage: prev.stage - 1}))']) : null,
                $stage< count($this->list)-1 ? new button('Next', ['class'=> 'btn btn-primary btn-sm ms-2', 'onclick'=> 'this.setState(prev => ({stage: prev.stage + 1}))']) : null,
            ], ['class'=> 'card-footer d-flex justify-content-end']),
        ], ['class'=> 'card my-2']);
    }

}