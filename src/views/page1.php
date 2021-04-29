<?php

namespace React\Tag;

use React\Component;

class Page1 extends Component{
    function render(){
        return [
            new h1('Page 1'),
            new div(array_map(function(){  return new div(new Card, ['class' => 'col-md-2 my-2']);}, range(0, 11)), ['class'=> 'row']), 
            new CodeWrap(['file'=> __FILE__]),
        ];
    }
}

class Card extends Component{
    var $state = ['counter' => 1];

    function render(){
        $counter = $this->state->counter;

        return new div([
            new div([
                "counter: $counter",
                new div([
                    'keep focus on input keyup therefor, we need key prop',
                    new input(['value'=> $counter,'onkeyup'=> 'this.setState({counter: parseInt(this.value)})', 'key'=>'12', 'type'=> 'number']),
                ], ['class'=> 'py-2', 'style'=> 'font-size:12px;color:orange'])
            ], ['class'=> 'card-body']),
            new InnerCard,
            new div([
                new button('Increment state counter', [
                    'onclick'=> 'this.setState(prevState=>({counter: prevState.counter + 1}))', 
                    'class' => 'm-auto btn btn-sm btn-primary',
                    'style'=> 'font-size:12px'
                ]),
            ], ['class'=> 'card-footer'])
        ], ['class'=> 'card']);
    }
}

class InnerCard extends Component{ 
    var $state = ['value'=> 10];

    function render(){
        return new div(
            new button($this->state->value, ['onclick'=> 'this.setState(prev => ({value: prev.value + 3}))', 'class'=> 'btn btn-secondary btn-block'])
        );
    }
}