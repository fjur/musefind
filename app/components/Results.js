var React = require('react');
var TreeItem = require('./TreeItem');
var BlobItem = require('./BlobItem');


var Results = React.createClass({
  getGitFiles: function (){
      return this.props.gitHubData.data.tree.map(function(item, index){
        var indent = item.path.split('/').length - 1; //get dynamic indentation of tree
        if (item.type === "tree"){
          return <TreeItem key={index} size={indent} type={'tree'} path={item.path} />
        } else if (item.type === "blob"){
          return <BlobItem key={index} size={indent} type={'blob'} path={item.path} />
        }

      });
  },
  render: function () {
    if (this.props.gitHubData && this.props.gitHubData.data.tree){
      var list = this.getGitFiles();
    }

    return (
      <div>
          {list && list}
      </div>
    )
  }
});

module.exports = Results;