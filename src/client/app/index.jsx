import React from 'react';
import {render} from 'react-dom';
require("!style!css!sass!../public/css/style.scss");
import UserInput from './user-input.jsx';
import Marked from 'marked';
import UserOutput from './user-output.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    const myString = 
"Try typing the below markdown...\n\n# I'm the biggest heading!\n## I'm a real big heading!\n### I'm a stocky heading!\n#### I'm a smaller heading!\n##### I'm a tiny heading!\n" +
"###### Do I even lift?\nEmphasis, aka italics, with *asterisks* or _underscores_.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n" +
"Combined emphasis with **asterisks and _underscores_**.\nStrikethrough uses two tildes. ~~Scratch this.~~\n\n1. First ordered list item\n" +
"2. Another item\n⋅⋅* Unordered sub-list.\n 1. Actual numbers don't matter, just that it's a number\n ⋅⋅1. Ordered sub-list\n4. And another item.\n\n"+
"[I'm an inline-style link](https://www.google.com)\n[I'm an inline-style link with title](https://www.google.com \"Google's Homepage\")";
    this.state = {
      input: myString,
      markedInput: ''
    };
  }
  
  updateInput (newInput) {
    this.setState({
      input: newInput
    });
  }
  
  render () {
    return (
    <div className='container'>
      <UserInput startInput={this.state.input} onInputChange={this.updateInput.bind(this)} />
      <UserOutput input={this.state.input}/>
    </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
