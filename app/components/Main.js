var React = require('react');
require('../styles/main.css');

var Main = React.createClass({

  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;