//React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Material-UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import DownIcon from '@material-ui/icons/KeyboardArrowDown';

import './EditCoursePage.css';
import PacenoteItem from '../PacenoteItem/PacenoteItem';

class NewCoursePage extends Component {
  state = {
    pacenote: {
      courseId: Number(this.props.match.params.id),
      turnSeverity: '',
      into: '',
      cut: '',
      direction: '',
      jump: false,
      loose: false,
      caution: false,
      flat: false,
      distance: '',
      note: '',
    },
    material: {
      drawOpenStatus: false,
    },
  };

  componentDidMount() {
    this.getCourse();
    this.getPacenote();
  }

  getCourse = () => {
    let courseId = Number(this.props.match.params.id);

    if (courseId) {
      this.props.dispatch({
        type: 'FETCH_COURSE',
        payload: courseId,
      });
    }
  };

  handleDrawerOpen = () => {
    this.setState({
      ...this.state,
      material: {
        ...this.state.material,
        drawOpenStatus: true,
      },
    });
  };

  handleDrawerClose = () => {
    this.setState({
      ...this.state,
      material: {
        ...this.state.material,
        drawOpenStatus: false,
      },
    });
  };

  getPacenote = () => {
    let courseId = Number(this.props.match.params.id);
    console.log('fetching pacenote of course id:', courseId);

    this.props.dispatch({
      type: 'FETCH_PACENOTE',
      payload: courseId,
    });
  };

  onChangeHandler = (value, propertyName) => {
    console.log('Changing:', propertyName, value);
    if (value === undefined) {
      debugger;
    }
    this.setState({
      ...this.state,
      pacenote: {
        ...this.state.pacenote,
        [propertyName]: value,
      },
    });
  };

  onTextChangeHandler = (event, propertyName) => {
    console.log('Changing:', event, propertyName);
    this.setState({
      ...this.state,
      pacenote: {
        ...this.state.pacenote,
        [propertyName]: event.target.value,
      },
    });
  };

  booleanChangeHandlerJump = (event, propertyName) => {
    console.log('Changing:', event, propertyName);
    this.setState({
      ...this.state,
      pacenote: {
        ...this.state.pacenote,
        [propertyName]: !this.state.jump,
      },
    });
  };

  booleanChangeHandlerLoose = (event, propertyName) => {
    console.log('Changing:', event, propertyName);
    this.setState({
      ...this.state,
      pacenote: {
        ...this.state.pacenote,
        [propertyName]: !this.state.loose,
      },
    });
  };

  booleanChangeHandlerCaution = (event, propertyName) => {
    console.log('Changing:', event, propertyName);
    this.setState({
      ...this.state,
      pacenote: {
        ...this.state.pacenote,
        [propertyName]: !this.state.caution,
      },
    });
  };

  booleanChangeHandlerFlat = (event, propertyName) => {
    console.log('Changing:', event, propertyName);
    this.setState({
      ...this.state,
      pacenote: {
        ...this.state.pacenote,
        [propertyName]: !this.state.flat,
      },
    });
  };

  clearState = () => {
    console.log('clearState Clicked!');
    this.setState({
      ...this.state,
      pacenote: {
        ...this.state.pacenote,
        turnSeverity: '',
        into: '',
        cut: '',
        direction: '',
        jump: false,
        loose: false,
        caution: false,
        flat: false,
        distance: '',
        note: '',
      },
    });
  };

  addPacenote = () => {
    console.log('clicked submit button', this.state);
    this.props.dispatch({
      type: 'CREATE_PACENOTE',
      payload: this.state.pacenote,
    });
    this.clearState();
    this.getPacenote();
  };

  render() {
    console.log('this.state:', this.state, 'this.props', this.props);
    return (
      <div>
        <div id="displayPacenoteContainer">
          <Grid container spacing={3}>
            {this.props.store.pacenote.pacenoteReducer.map((pacenote) => (
              <Grid item xs={12} sm={6} md={3} key={pacenote.id}>
                <Paper>
                  <PacenoteItem
                    key={pacenote.id}
                    id={pacenote.id}
                    pacenote={pacenote}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
        <Drawer open={this.state.material.drawOpenStatus} anchor="bottom">
          <Fab
            color="primary"
            aria-label="add"
            onClick={this.handleDrawerClose}
          >
            <DownIcon />
          </Fab>
          <Grid container>
            <Grid item xs={6}>
              <div id="turnOptionContainer">
                <p>Turn Options</p>
                <br />
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
              </div>
            </Grid>

            <Grid item xs={6}>
              <div id="miscOptionsContainer">
                <p>Misc Options</p>
                <Button
                  variant="contained"
                  value="jump"
                  onClick={(event) =>
                    this.booleanChangeHandlerJump(event, 'jump')
                  }
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
                  onClick={(event) =>
                    this.booleanChangeHandlerFlat(event, 'flat')
                  }
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
                  onChange={(event) =>
                    this.onTextChangeHandler(event, 'distance')
                  }
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
            </Grid>
          </Grid>

          <div id="submitClearContainer">
            <Button variant="contained" onClick={this.addPacenote}>
              Submit Pacenote
            </Button>
            <Button variant="contained" onClick={this.clearState}>
              Clear all
            </Button>
          </div>
        </Drawer>
        <Fab color="primary" aria-label="add" onClick={this.handleDrawerOpen}>
          <UpIcon />
        </Fab>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewCoursePage);
