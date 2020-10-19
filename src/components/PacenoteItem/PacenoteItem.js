import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Modal from 'react-modal';

//Material-UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PacenoteItem extends Component {
  state = {
    modalIsOpen: false,
    pacenoteToEdit: {
      id: this.props.pacenote.id,
      course_id: this.props.pacenote.course_id,
      turnSeverity: this.props.pacenote.turn_severity,
      into: this.props.pacenote.continue_option,
      cut: this.props.pacenote.cut_option,
      direction: this.props.pacenote.turn_direction,
      jump: this.props.pacenote.jump,
      loose: this.props.pacenote.loose,
      caution: this.props.pacenote.caution,
      flat: this.props.pacenote.flat,
      distance: this.props.pacenote.distance,
      note: this.props.pacenote.note,
    },
  };

  componentDidMount() {
    Modal.setAppElement('body');
  }

  setModalIsOpen = () => {
    this.setState({
      ...this.state,
      modalIsOpen: true,
    });

    console.log('modal state', this.state.modalIsOpen);
  };

  setModalIsClosed = () => {
    this.setState({
      ...this.state,
      modalIsOpen: false,
    });

    console.log('modal state', this.state.modalIsOpen);
  };

  updatePacenote = () => {
    let pacenoteToUpdate = this.props.pacenote;
    console.log('Update pacenote clicked with id of:', pacenoteToUpdate.id);

    this.props.dispatch({
      type: 'UPDATE_PACENOTE',
      payload: this.state.pacenoteToEdit,
    });
  };

  deletePacenote = () => {
    let pacenoteToDelete = this.props.pacenote;
    console.log('Delete pacenote clicked with id of:', pacenoteToDelete.id);

    this.props.dispatch({
      type: 'DELETE_PACENOTE',
      payload: pacenoteToDelete.id,
    });
  };

  onChangeHandler = (value, propertyName) => {
    console.log('Changing:', propertyName, value);
    if (value === undefined) {
      debugger;
    }
    this.setState({
      ...this.state,
      pacenoteToEdit: {
        ...this.state.pacenoteToEdit,
        [propertyName]: value,
      },
    });
  };

  onTextChangeHandler = (event, propertyName) => {
    console.log('Changing:', event, propertyName);
    this.setState({
      ...this.state,
      pacenoteToEdit: {
        ...this.state.pacenoteToEdit,
        [propertyName]: event.target.value,
      },
    });
  };

  booleanChangeHandlerJump = (event, propertyName) => {
    console.log('Changing:', event, propertyName);
    this.setState({
      ...this.state,
      pacenoteToEdit: {
        ...this.state.pacenoteToEdit,
        [propertyName]: !this.state.pacenoteToEdit.jump,
      },
    });
  };

  booleanChangeHandlerLoose = (event, propertyName) => {
    console.log('Changing:', event, propertyName);
    this.setState({
      ...this.state,
      pacenoteToEdit: {
        ...this.state.pacenoteToEdit,
        [propertyName]: !this.state.pacenoteToEdit.loose,
      },
    });
  };

  booleanChangeHandlerCaution = (event, propertyName) => {
    console.log('Changing:', event, propertyName);
    this.setState({
      ...this.state,
      pacenoteToEdit: {
        ...this.state.pacenoteToEdit,
        [propertyName]: !this.state.pacenoteToEdit.caution,
      },
    });
  };

  booleanChangeHandlerFlat = (event, propertyName) => {
    console.log('Changing:', event, propertyName);
    this.setState({
      ...this.state,
      pacenoteToEdit: {
        ...this.state.pacenoteToEdit,
        [propertyName]: !this.state.pacenoteToEdit.flat,
      },
    });
  };

  render() {
    console.log('PacenoteItem state:', this.state);
    return (
      <div>
        <p>{this.props.pacenote.turn_severity}</p>
        <p>{this.props.pacenote.continue_option}</p>
        <p>{this.props.pacenote.cut_option}</p>
        <p>{this.props.pacenote.turn_direction}</p>
        <p>{JSON.stringify(this.props.pacenote.jump)}</p>
        <p>{JSON.stringify(this.props.pacenote.loose)}</p>
        <p>{JSON.stringify(this.props.pacenote.caution)}</p>
        <p>{JSON.stringify(this.props.pacenote.flat)}</p>
        <p>{this.props.pacenote.distance}</p>
        <p>{this.props.pacenote.note}</p>

        <Button variant="contained" onClick={this.setModalIsOpen}>
          Edit
        </Button>
        <Button variant="contained" onClick={this.deletePacenote}>
          Delete
        </Button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.setModalIsClosed}
        >
          <div id="editPacenoteContainer">
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item>
                <p>Turn Severity</p>
                <ToggleButtonGroup
                  size="medium"
                  value={this.state.turnSeverity}
                  exclusive
                  onChange={(event, value) =>
                    this.onChangeHandler(value, 'turnSeverity')
                  }
                >
                  <ToggleButton value="1">
                    <label>1</label>
                  </ToggleButton>
                  <ToggleButton value="2">
                    <label>2</label>
                  </ToggleButton>
                  <ToggleButton value="3">
                    <label>3</label>
                  </ToggleButton>
                  <ToggleButton value="4">
                    <label>4</label>
                  </ToggleButton>
                  <ToggleButton value="5">
                    <label>5</label>
                  </ToggleButton>
                  <ToggleButton value="6">
                    <label>6</label>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              <Grid item>
                <p>Into?</p>
                <ToggleButtonGroup
                  size="medium"
                  value={this.state.into}
                  exclusive
                  onChange={(event, value) =>
                    this.onChangeHandler(value, 'into')
                  }
                >
                  <ToggleButton value="into">
                    <label>Into</label>
                  </ToggleButton>
                  <ToggleButton value="then">
                    <label>Then</label>
                  </ToggleButton>
                  <ToggleButton value="and">
                    <label>And</label>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              <Grid item>
                <p>Cut?</p>
                <ToggleButtonGroup
                  size="medium"
                  value={this.state.cut}
                  exclusive
                  onChange={(event, value) =>
                    this.onChangeHandler(value, 'cut')
                  }
                >
                  <ToggleButton value="cut">
                    <label>Cut</label>
                  </ToggleButton>
                  <ToggleButton value="dontCut">
                    <label>Don't Cut</label>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              <Grid item>
                <p>Direction</p>
                <ToggleButtonGroup
                  size="medium"
                  value={this.state.direction}
                  exclusive
                  onChange={(event, value) =>
                    this.onChangeHandler(value, 'direction')
                  }
                >
                  <ToggleButton value="left">
                    <label>Left</label>
                  </ToggleButton>
                  <ToggleButton value="right">
                    <label>Right</label>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </div>
          <div id="miscOptionsContainer">
            <p>Misc Options</p>
            <Button
              variant="contained"
              value="jump"
              onClick={(event) => this.booleanChangeHandlerJump(event, 'jump')}
            >
              Jump
            </Button>
            <Button
              variant="contained"
              value="loose"
              onClick={(event) =>
                this.booleanChangeHandlerLoose(event, 'loose')
              }
            >
              Loose/Slippy
            </Button>
            <br></br>
            <Button
              variant="contained"
              value="caution"
              onClick={(event) =>
                this.booleanChangeHandlerCaution(event, 'caution')
              }
            >
              Caution
            </Button>
            <Button
              variant="contained"
              value="flat"
              onClick={(event) => this.booleanChangeHandlerFlat(event, 'flat')}
            >
              Flat
            </Button>
            <br></br>
            <TextField
              id="distance"
              label="Distance (Meters)"
              variant="outlined"
              type="number"
              value={this.state.distance}
              onChange={(event) => this.onTextChangeHandler(event, 'distance')}
            />
            <br></br>
            <TextField
              id="note"
              label="Notes"
              placeholder="You can come back to this later"
              multiline
              rows={4}
              variant="outlined"
              value={this.state.note}
              onChange={(event) => this.onTextChangeHandler(event, 'note')}
            />
          </div>

          <div id="submitClearContainer">
            <Button variant="contained" onClick={this.updatePacenote}>
              Update Pacenote
            </Button>
            <Button variant="contained" onClick={this.setModalIsClosed}>
              Cancel
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PacenoteItem);
