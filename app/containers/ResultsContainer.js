var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

//repos/:owner/:repo/git/trees/:branchname?recursive=1
var ResultsContainer = React.createClass({
  componentWillMount: function (){
    console.log('ResultsContainer did Mount');
    console.log(this.props);
    var gitInfo = this.props.params;
    githubHelpers.getFiles(gitInfo.owner, gitInfo.repo, gitInfo.sha)
    .then(function(info){
      console.log('setting state');
      console.log(info);
      this.props.onGitInfo(info);
    }.bind(this))

  },
  render: function () {
    console.log('Results Container Render');
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>All Files</h1>
        <Results gitHubData={this.props.data}/>

      </div>
    )
  }
});

module.exports = ResultsContainer;