import React, { Component } from 'react';
import ReactDom from 'react-dom';

import A from './components/a';
import B from './components/b';


class Index extends Component{
  render() {
    return <div><A/><B/></div>
  }
}

ReactDom.render(<Index />, document.getElementById('main'));