import React from 'react';
import {render} from 'react-dom';
require("!style!css!sass!../public/css/style.scss");
import UserInput from './user-input.jsx';
import Marked from 'marked';
import UserOutput from './user-output.jsx';
var marked = require('marked');

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input: '',
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
