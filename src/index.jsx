import React, { Component } from 'react';
import ReactDom from 'react-dom';


class Index extends Component{
  render() {
    return <div>Test React2</div>
  }
}

ReactDom.render(<Index />, document.getElementById('main'));