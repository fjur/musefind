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
  handleUpdateOwner: function (value){
    this.setState({
      owner: value
    })
  },
  handleUpdateRepo: function (value){
    this.setState({
      repo: value
    })
  },
  handleUpdateSha: function (value){
    this.setState({
      sha: value
    })
  },
  handleGitInfo: function (info){
    this.setState({
      data: info
    })
  },
  render: function () {
    var children = React.cloneElement(this.props.children, {
      owner: this.state.owner,
      repo: this.state.repo,
      sha: this.state.sha,
      data: this.state.data,

      onUpdateOwner: this.handleUpdateOwner,
      onUpdateRepo: this.handleUpdateRepo,
      onUpdateSha: this.handleUpdateSha,
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