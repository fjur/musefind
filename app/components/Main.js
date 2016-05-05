var React = require('react');
require('../styles/main.css');

var Main = React.createClass({
  getInitialState: function (){
    return {
      owner: null,
      repo: null,
      sha: 'master'
    }
  },
  handleGitInfo: function (info){
    this.setState({
      stuff: info
    })
  },
  render: function () {
    var children = React.cloneElement(this.props.children, {

      stuff: this.state.stuff,
      onGitInfo: this.handleGitInfo

    });
    return (
      <div>
        {children}
      </div>
    )
  }
});

module.exports = Main;