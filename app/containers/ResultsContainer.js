var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var connect = require('react-redux').connect;
var actions = require('../actions/git-info-actions');

//repos/:owner/:repo/git/trees/:branchname?recursive=1

var ResultsContainer = React.createClass({
  componentWillMount: function (){
    // var gitInfo = this.props.params;
    var gitInfo = this.props;
    githubHelpers.getFiles(gitInfo.owner, gitInfo.repo, gitInfo.sha)
    .then(function(info){
      this.props.onGitInfo(info);
      this.props.dispatch(actions.updateTree(info.data.tree));
    }.bind(this));

  },
  render: function () {
    console.log('results container render called');
    console.log(this.props);
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>All Files</h1>
        <Results gitHubData={this.props.stuff}/>
      </div>
    )
  }
});

var mapStateToProps = function (state, props){
  console.log('Results Container Map State To Props');
  console.log(state);

  return {
    owner: state.owner,
    repo: state.repo,
    sha: state.sha,
    data: state.data
  }
}

module.exports = connect(mapStateToProps)(ResultsContainer);