//React/Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Material-UI
import Button from '@material-ui/core/Button';

//Script imports
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

  addCoursePrompt= () => {
    let newCourse = prompt("Name of course?");

    this.props.dispatch({
        type: 'CREATE_COURSE',
        payload: {
            userId: this.props.store.user.id,
            newCourse: newCourse
        }
    })
    this.getCourse();
  }

  render() {
      console.log('log in render', this.props.store, 'state', this.state);
    return (
      <div id='coursePage'>
        <h2>List of all courses:</h2>
        <Button variant='contained' onClick={this.addCoursePrompt}> New Course </Button>
        {this.props.store.course.courseReducer.map((course) => (
            <CourseItem key={course.id} course={course} />
        ))}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CoursePage);
