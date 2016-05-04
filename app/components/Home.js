var React = require('react');
var githubHelpers = require('../utils/githubHelpers');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var Prompt = require('./Prompt');

var Home = React.createClass({
  updateOwner: function (event){
    this.props.onUpdateOwner(event.target.value);
  },
  updateRepo: function (event){
    this.props.onUpdateRepo(event.target.value);
  },
  updateBranch: function (event){
    this.setState({
      sha: event.target.value
    });
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

module.exports = Home;
