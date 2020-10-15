//React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Material-UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import './NewCoursePage.css';

class NewCoursePage extends Component {
  state = {
    turnSeverity: '',
    into: '',
    cut: '',
    direction: '',
    jump: '',
    loose: '',
    caution: '',
    flat: '',
    distance: '',
    note: '',
  };

  onChangeHandler = (value, propertyName) => {
    console.log('Changing:', propertyName, value);
    if (value === undefined) {
      debugger;
    }
    this.setState({
      ...this.state,
      [propertyName]: value,
    });
  };

  booleanChangeHandler = (event, propertyName) => {
    if (this.propertyName.value === false) {
      this.setState({
        ...this.state,
        [propertyName]: true,
      });
    } else if (this.propertyName.value === true) {
      this.setState({
        ...this.state,
        [propertyName]: false,
      });
    }
    console.log('test', propertyName, event.target.value);
  };

  stateTest = () => {
    console.log(this.state);
    return this.state;
  };

  render() {
    console.log('this.state:', this.state);
    return (
      <div>
        <button onClick={this.stateTest}>Test State</button>
        <div id="createTurnContainer">
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <p>Turn Severity</p>
              <ToggleButtonGroup
                size="medium"
                value={this.state.turnSeverity}
                exclusive
                onChange={(event, value) => this.onChangeHandler(value, 'turnSeverity')}
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
                onChange={(event, value) => this.onChangeHandler(value, 'into')}
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
                onChange={(event, value) => this.onChangeHandler(value, 'cut')}
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
                onChange={(event, value) => this.onChangeHandler(value, 'direction')}
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
            onClick={(event) => this.booleanChangeHandler(event, 'jump')}
          >
            Jump
          </Button>
          <Button
            variant="contained"
            value="loose"
            onClick={(event) => this.booleanChangeHandler(event, 'loose')}
          >
            Loose/Slippy
          </Button>
          <br></br>
          <Button
            variant="contained"
            value="caution"
            onClick={(event) => this.booleanChangeHandler(event, 'caution')}
          >
            Caution
          </Button>
          <Button
            variant="contained"
            value="flat"
            onClick={(event) => this.booleanChangeHandler(event, 'flat')}
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
            onChange={(event) => this.onChangeHandler(event, 'distance')}
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
            onChange={(event) => this.onChangeHandler(event, 'note')}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewCoursePage);
