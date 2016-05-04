var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

//repos/:owner/:repo/git/trees/:branchname?recursive=1
var ResultsContainer = React.createClass({
  componentWillMount: function (){
    var gitInfo = this.props.params;
    githubHelpers.getFiles(gitInfo.owner, gitInfo.repo, gitInfo.sha)
    .then(function(info){
      this.props.onGitInfo(info);
    }.bind(this))

  },
  render: function () {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>All Files</h1>
        <Results gitHubData={this.props.data}/>

      </div>
    )
  }
});

module.exports = ResultsContainer;