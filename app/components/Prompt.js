var React = require('react');

function Prompt(props){

  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
            <div className="form-group">
              <label >GitHub {props.title}</label>
              <input className="form-control" onChange={props.onUpdateParams} id={"github-" + props.title} placeholder={"github " + props.title} type="text" />
            </div>
        </div>
      </div>
    </div>
  )
}

module.exports = Prompt;