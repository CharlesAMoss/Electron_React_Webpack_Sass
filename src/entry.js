'use strict';
require('../static/sass/main.scss');

var React = require('react');
var ReactDom = require('react-dom');

var App = React.createClass({
  render: function () {
      return (
        <div><h1 className="site__title">Hello React! BAYBAY</h1></div>
      )
    }
});


ReactDom.render(<App />, document.getElementById('react-root'));
