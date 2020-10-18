import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Material-UI
import Button from '@material-ui/core/Button';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PacenoteItem extends Component {
  state = {
    heading: 'Class Component',
  };

  updatePacenote = () => {
    let pacenoteToUpdate = this.props.pacenote
    console.log('Update pacenote clicked with id of:', pacenoteToUpdate.id);
  }

  deletePacenote = () => {
    let pacenoteToDelete = this.props.pacenote
    console.log('Delete pacenote clicked with id of:', pacenoteToDelete.id);

    this.props.dispatch({
      type: 'DELETE_PACENOTE',
      payload: pacenoteToDelete.id,
    });
  }

  render() {
    return (
      <div>
        <p>{this.props.pacenote.turn_severity}</p>
        <p>{this.props.pacenote.cut_option}</p>
        <p>{this.props.pacenote.continue_option}</p>
        <p>{this.props.pacenote.turn_direction}</p>
        <p>{JSON.stringify(this.props.pacenote.jump)}</p>
        <p>{JSON.stringify(this.props.pacenote.caution)}</p>
        <p>{JSON.stringify(this.props.pacenote.flat)}</p>
        <p>{JSON.stringify(this.props.pacenote.loose)}</p>
        <p>{this.props.pacenote.distance}</p>
        <p>{this.props.pacenote.note}</p>
        <Button variant="contained" onClick={this.updatePacenote}>Edit</Button>
        <Button variant="contained" onClick={this.deletePacenote}>Delete</Button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PacenoteItem);
