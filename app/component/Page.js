var Form = require('./form');
var Input = require('./input');
var React = require('react');
var FlatButton = require('material-ui').FlatButton;
var Snackbar = require('material-ui').Snackbar;

module.exports = React.createClass({
  editButton: function(){
    if(this.props.hasEdit){
      return (<button>Edit</button>);
    }
  },
  getDefaultProps : function() {
      return {
        "hasEdit" : true,
        "hasSave"  : false,
        "isModelToLoad": true
      };
  },
  renderInputs: function renderInputs(){
    var inputs ={};
    for(var key in this.props.data ){
      if(key !=="metadata"){
        inputs[key] = <Input name={key} data={this.props.data.metadata[key]}/>;
      }
    }
    return inputs;
  },
  _handleSave: function(){
    this.refs.snackbar.show();

  },
  renderResults: function(){
    return results;
  },
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
      <div class="page">
        <form>
          {this.renderInputs()}
        </form>
        <FlatButton label="Save"  onTouchTap={this._handleSave} />
        <Snackbar ref="snackbar"
          message="The information was successfully updated."
          action="undo" />
      </div>
    );
  }
});
