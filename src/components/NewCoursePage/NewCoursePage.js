import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './NewCoursePage.css';

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
        <fieldset>
          <div id="createTurnContainer">
            <div id="turnSeverityRadio">
              <p class='pDescriptor'>Turn Severity</p>

              <input
                type="radio"
                class="radioStyle"
                id="severityOne"
                name="turnSeverity"
                value="1"
              />
              <label htmlFor="severityOne">1</label>

              <input
                type="radio"
                class="radioStyle"
                id="severityTwo"
                name="turnSeverity"
                value="2"
              />
              <label htmlFor="severityTwo">2</label>

              <input
                type="radio"
                class="radioStyle"
                id="severityThree"
                name="turnSeverity"
                value="3"
              />
              <label htmlFor="severityThree">3</label>

              <input
                type="radio"
                class="radioStyle"
                id="severityFour"
                name="turnSeverity"
                value="4"
              />
              <label htmlFor="severityFour">4</label>

              <input
                type="radio"
                class="radioStyle"
                id="severityFive"
                name="turnSeverity"
                value="5"
              />
              <label htmlFor="severityFive">5</label>

              <input
                type="radio"
                class="radioStyle"
                id="severitySix"
                name="turnSeverity"
                value="6"
              />
              <label htmlFor="severitySix">6</label>
            </div>

            <div id="cutOptionRadio">
              <p class='pDescriptor'>Cut?</p>

              <input
                type="radio"
                class="radioStyle"
                id="selectedCut"
                name="cutOption"
                value="cut"
              />
              <label htmlFor="selectedCut">Cut</label>

              <input
                type="radio"
                class="radioStyle"
                id="selectedRegular"
                name="cutOption"
                value="regular"
              />
              <label htmlFor="selectedRegular">Regular</label>

              <input
                type="radio"
                class="radioStyle"
                id="selectedDontCut"
                name="cutOption"
                value="dontCut"
              />
              <label htmlFor="selectedDontCut">Don't Cut</label>
            </div>

            <div id="intoOptionRadio">
              <p class='pDescriptor'>Into?</p>

              <input
                type="radio"
                class="radioStyle"
                id="selectedInto"
                name="intoOption"
                value="into"
              />
              <label htmlFor="selectedInto">Into</label>

              <input
                type="radio"
                class="radioStyle"
                id="selectedThen"
                name="intoOption"
                value="Then"
              />
              <label htmlFor="selectedThen">Then</label>

              <input
                type="radio"
                class="radioStyle"
                id="selectedAnd"
                name="intoOption"
                value="and"
              />
              <label htmlFor="selectedAnd">And</label>
            </div>

            <div id="directionOptionRadio">
              <p class='pDescriptor'>Direction?</p>

              <input
                type="radio"
                class="radioStyle"
                id="selectedLeft"
                name="directionOption"
                value="left"
              />
              <label htmlFor="selectedLeft">Left</label>

              <input
                type="radio"
                class="radioStyle"
                id="selectedRight"
                name="directionOption"
                value="right"
              />
              <label htmlFor="selectedRight">Right</label>
            </div>
          </div>
        </fieldset>

        <div id="miscOptionsContainer"></div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewCoursePage);
