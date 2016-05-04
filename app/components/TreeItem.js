var React = require('react');

var TreeItem = function(props){
  return (
    <div className="row">
      <div className={"col-md-3 col-md-offset-" + props.size}>
        <div className="panel panel-default">
          <div className="panel-body">
            {props.type} {props.path}
          </div>
        </div>
      </div>
    </div>
  )
};

module.exports = TreeItem;