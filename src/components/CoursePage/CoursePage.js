import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class CoursePage extends Component {

  componentDidMount() {
      this.getCourse();
  }

  getCourse = () => {
      console.log('in getCourse');

      this.props.dispatch({
          type: 'FETCH_COURSE'
      });
  }

  render() {
      console.log('json stringify', JSON.stringify(this.props));
    return (
      <div>
        <h2>Test</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CoursePage);
