var React = require('react');

var BlobItem = function(props){
  return (
    <div className="row">
      <div className={"col-md-6 col-md-offset-" + props.size}>
        <div className="panel panel-default">
          <div className="panel-body file-item blob-item">
            <strong>{props.type}</strong> {props.path}
          </div>
        </div>
      </div>
    </div>
  )
};

module.exports = BlobItem;