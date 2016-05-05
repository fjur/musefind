var React = require('react');
var githubHelpers = require('../utils/githubHelpers');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var Prompt = require('../components/Prompt');
var connect = require('react-redux').connect;
var actions = require('../actions/git-info-actions');

var Home = React.createClass({
  updateOwner: function (event){
    this.props.dispatch(actions.updateOwner(event.target.value));
  },
  updateRepo: function (event){
    this.props.dispatch(actions.updateRepo(event.target.value));
  },
  updateBranch: function (event){
    this.props.dispatch(actions.updateSha(event.target.value));
  },
  render: function (){
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>Donald Trump Demands Git Files</h1>
        <form>
          <Prompt onUpdateParams={this.updateOwner} title="UserName"/>
          <Prompt onUpdateParams={this.updateRepo} title="Repo"/>
          <Prompt onUpdateParams={this.updateBranch} title="Branch"/>
        </form>
        <Link to={"/results/" + this.props.owner + "/" + this.props.repo + "/" + this.props.sha}>
          <button type="submit" className="btn btn-lg btn-success">Get Files Checked</button>
        </Link>
      </div>
      )
  }
});

var mapStateToProps = function (state, props){
  return {
    owner: state.owner,
    repo: state.repo,
    sha: state.sha
  }
}

module.exports = connect(mapStateToProps)(Home);
