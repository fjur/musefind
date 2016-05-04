var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');


var ResultsContainer = React.createClass({
  getInitialState: function (){
    return {
      data: null
    }
  }, 
  componentWillMount: function (){
    // githubHelpers.getFiles();
    console.log('ResultsContainer did Mount');
    console.log(this.props);
    githubHelpers.getFiles()
    .then(function(info){
      console.log('setting state');
      console.log(info);
      this.setState({
        data: info
      })
    }.bind(this))

  },
  render: function () {
    console.log('Results Container Render');
    return (
      <div>
        <h1>Hello From ResultsContai\ner</h1>
        <Results gitHubData={this.state.data}/>

      </div>
    )
  }
});

module.exports = ResultsContainer;