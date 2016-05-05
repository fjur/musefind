var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');
var connect = require('react-redux').connect;
var actions = require('../actions/git-info-actions');


var ResultsContainer = React.createClass({
  componentWillMount: function (){
    var gitInfo = this.props.params;
    githubHelpers.getFiles(gitInfo.owner, gitInfo.repo, gitInfo.sha);
  },
  componentWillUnmount: function (){
    this.props.dispatch(actions.resetStatus());
  },
  render: function () {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>All Files</h1>
        <Results 
        gitHubData={this.props.tree}
        status={this.props.status}
        statusText={this.props.statusText}/>
      </div>
    )
  }
});

var mapStateToProps = function (state, props){
  return {
    owner: state.owner,
    repo: state.repo,
    sha: state.sha,
    tree: state.tree,
    status: state.status,
    statusText: state.statusText
  }
}

module.exports = connect(mapStateToProps)(ResultsContainer);