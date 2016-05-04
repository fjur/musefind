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
  componentWillMount: function (){
    // githubHelpers.getFiles();
    console.log('Main did Mount');
  },
  handleUpdateOwner: function (value){
    console.log('handleUpdateOwner');
    this.setState({
      owner: value
    })
  },
  handleUpdateRepo: function (value){
    console.log('handleUpdateRepo');
    this.setState({
      repo: value
    })
  },
  handleUpdateSha: function (value){
    console.log('handleUpdateSha');
    this.setState({
      sha: value
    })
  },
  handleSubmitInfo: function (value){
    console.log('handleSubmitInfo');
  },
  render: function () {
    console.log('Main Render');
    console.log(this.state);
    var children = React.cloneElement(this.props.children, {
      owner: this.state.owner,
      repo: this.state.repo,
      sha: this.state.sha,

      onUpdateOwner: this.handleUpdateOwner,
      onUpdateRepo: this.handleUpdateRepo,
      onUpdateSha: this.handleUpdateSha,
      onSubmitInfo: this.handleSubmitInfo

    });
    return (
      <div>
        {children}
      </div>
    )
  }
});

module.exports = Main;