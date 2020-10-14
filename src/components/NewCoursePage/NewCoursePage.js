//React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Material-UI
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import './NewCoursePage.css';



function NewCoursePage() {
  
  const [turnSeverityState,  setTurnSeverityState] = React.useState();
  const [intoState,  setIntoState] = React.useState();
  const [cutState,  setCutState] = React.useState();
  const [directionState,  setDirectionState] = React.useState();


  const handlerList = [
    setTurnSeverityState,
    setIntoState,
    setCutState,
    setDirectionState
  ]

  function getHandler(index) {
    return (event, newState) => {
      console.log(newState);
      return handlerList[index](newState);
    }
  }

    return (
      <div>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <p>Turn Severity</p>
            <ToggleButtonGroup size="medium" value={turnSeverityState} exclusive onChange={getHandler(0)} >
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
        </Grid>

        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <p>Into?</p>
            <ToggleButtonGroup size="medium" value={intoState} exclusive onChange={getHandler(1)}>
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
        </Grid>

        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <p>Cut?</p>
            <ToggleButtonGroup size="medium" value={cutState} exclusive onChange={getHandler(2)}>
              <ToggleButton value="cut">
                <label>Cut</label>
              </ToggleButton>
              <ToggleButton value="dontCut">
                <label>Don't Cut</label>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>

        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <p>Direction</p>
            <ToggleButtonGroup size="medium" value={directionState} exclusive onChange={getHandler(3)}>
              <ToggleButton value="left">
                <label>Left</label>
              </ToggleButton>
              <ToggleButton value="right">
                <label>Right</label>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>

        <div id="miscOptionsContainer"></div>
      </div>
    );
  }

export default connect(mapStoreToProps)(NewCoursePage);
