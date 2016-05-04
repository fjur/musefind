var React = require('react');
var githubHelpers = require('../utils/githubHelpers');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var Prompt = require('./Prompt');

var Home = React.createClass({
  updateOwner: function (event){
    this.props.onUpdateOwner(event.target.value);
    // console.log('updateOwner');
    // this.setState({
    //   owner: event.target.value
    // });
  },
  updateRepo: function (event){
    this.props.onUpdateOwner(event.target.value);
    // console.log('updateRepo');
    // this.setState({
    //   repo: event.target.value
    // });
  },
  updateBranch: function (event){
    console.log('updateBranch');
    this.setState({
      sha: event.target.value
    });
  },
  handleSubmit: function (event){
    e.preventDefault();
    this.props.onSubmitInfo(event);
  },
  render: function (){
    console.log('Home render');
    console.log(this.props);
    return (
      <div className="jumbotron col-sm-4 col-sm-offset-4 text-center">
        <h1>Donald Trump Demands Git Files</h1>
        <form onSubmit={this.handleSubmit}>
          <Prompt onUpdateParams={this.updateOwner} title="UserName"/>
          <Prompt onUpdateParams={this.updateRepo} title="Repo"/>
          <Prompt onUpdateParams={this.updateBranch} title="Branch"/>
        </form>

        <Link to="/results">
          <button type="submit" className="btn btn-lg btn-success">Get Files Checked</button>
        </Link>
        
      </div>
      )
  }
});

module.exports = Home;
