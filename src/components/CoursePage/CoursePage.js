import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Material-UI
import Button from '@material-ui/core/Button';

import CourseItem from '../CourseItem/CourseItem'
import './CoursePage.css'


class CoursePage extends Component {

    state= {
        newCourse: ''
    }

  componentDidMount() {
      this.getCourse();
  }

  getCourse = () => {
      console.log('in getCourse');

      this.props.dispatch({
          type: 'FETCH_COURSE'
      });
  }

  addCourse = () => {
      console.log('addCourse button clicked');

      this.props.dispatch({
          type: 'CREATE_COURSE',
          payload: this.state
      })
      this.setState({
        newCourse: ''
      });
  }

  render() {
      console.log('json stringify', this.props.store.course.courseReducer);
    return (
      <div class='coursePage'>
        <h2>List of all courses:</h2>
        <Button variant='contained' onClick={this.addCourse} > New Course </Button>
        {this.props.store.course.courseReducer.map((course) => (
            <CourseItem key={course.id} course={course} />
        ))}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CoursePage);
