import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const path = require('path');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state: []
    };
  }

  render() {
    return (
      <div>
        Give it a try
        {this.path}
      </div>
    );
  }
}

//Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
