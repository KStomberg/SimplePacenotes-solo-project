import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import CourseItem from '../CourseItem/CourseItem'
import './CoursePage.css'


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
      console.log('json stringify', this.props.store.course.courseReducer);
    return (
      <div class='coursePage'>
        <h2>List of all courses:</h2>
        {this.props.store.course.courseReducer.map((course) => (
            <CourseItem key={course.id} course={course} />
        ))}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CoursePage);
