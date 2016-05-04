var React = require('react');
var ListItem = require('./ListItem');

var Results = React.createClass({
  getGitFiles: function (){
      return this.props.gitHubData.data.tree.map(function(item, index){
        var indent = item.path.split('/').length - 1; //get dynamic indentation of tree
        if (item.type === "tree"){
          return <ListItem key={index} size={indent} type={'tree'} path={item.path} />
        } else if (item.type === "blob"){
          return <ListItem key={index} size={indent} type={'blob'} path={item.path} />
        }

      });
  },
  render: function () {
    var list = <ListItem key={0} size={0} type={'error'} path={''} />
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