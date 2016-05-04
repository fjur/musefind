var React = require('react');
var TreeItem = require('./TreeItem');
var BlobItem = require('./BlobItem');


var Results = React.createClass({
  componentWillMount: function (){
    // githubHelpers.getFiles();
    console.log('Results did Mount');
    console.log(this.props);
  },
  getGitFiles: function (){
      console.log('getGitFiles');
      console.log(this.props);
      return this.props.gitHubData.data.tree.map(function(item, index){
        var indent = item.path.split('/').length - 1;
        
        // var whiteSpace = '';
        
        // for (var i = 0 ; i < indent ; i++){
        //   whiteSpace = whiteSpace + '-'
        // }

        if (item.type === "tree"){
          // return <p>{whiteSpace + 'TREE ' + item.path}</p>
          return <TreeItem key={index} size={indent} type={'tree'} path={item.path} />
        } else if (item.type === "blob"){
          return <BlobItem key={index} size={indent} type={'blob'} path={item.path} />
          // return <p>{whiteSpace + 'BLOB ' + item.path}</p>
        }

      });

  },
  render: function () {
    console.log('Results Render');
    console.log(this.props.gitHubData);
    if (this.props.gitHubData && this.props.gitHubData.data.tree){
      console.log('Enter get GIT DATA for results');
      var list = this.getGitFiles();
    }

    return (
      <div>
        <h1>Hello From Results</h1>
          {list && list}
      </div>
    )
  }
});

module.exports = Results;