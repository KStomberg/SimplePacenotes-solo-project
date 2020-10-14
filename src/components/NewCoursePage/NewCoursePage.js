import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './NewCoursePage.css'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class NewCoursePage extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    return (
      <div>

        <div id='createTurnContainer'>

            <div id='turnSeverityRadio'>

              <p>Turn Severity</p>

              <input type='radio' id='severityOne' name='turnSeverity' value='1' />
              <label htmlFor='severityOne'>1</label>
              
              <input type='radio' id='severityTwo' name='turnSeverity' value='2' />
              <label htmlFor='severityTwo'>2</label>

              <input type='radio' id='severityThree' name='turnSeverity' value='3' />
              <label htmlFor='severityThree'>3</label>

              <input type='radio' id='severityFour' name='turnSeverity' value='4' />
              <label htmlFor='severityFour'>4</label>

              <input type='radio' id='severityFive' name='turnSeverity' value='5' />
              <label htmlFor='severityFive'>5</label>

              <input type='radio' id='severitySix' name='turnSeverity' value='6' />
              <label htmlFor='severitySix'>6</label>

            </div>


            <div id='cutOption'>
              <p>Cut?</p>

                <input type='radio' id='selectedCut' name='cutOption' value='cut' />
                <label htmlFor='selectedCut'>Cut</label>

                <input type='radio' id='selectedRegular' name='cutOption' value='regular' />
                <label htmlFor='selectedRegular'>Regular</label>

                <input type='radio' id='selectedDontCut' name='cutOption' value='dontCut' />
                <label htmlFor='selectedDontCut'>Don't Cut</label>

            </div>

        </div>

        <div id='miscOptionsContainer'>

        </div>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewCoursePage);
