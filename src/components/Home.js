require('./../../static/sass/main.scss');
const React = require('react');

const Home = React.createClass({
  render: function () {
      return (
        <div><h1 className="site__title">Hello form home! BAYBAY</h1></div>
      )
    }
});

module.exports = Home;
