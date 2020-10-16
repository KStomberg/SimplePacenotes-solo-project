//React/Redux
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Material-UI
import Button from '@material-ui/core/Button';

class courseItem extends Component {

    getPacenote = () => {
        console.log('course to edit id:', this.props.course.id);

        this.props.dispatch({
            type: 'FETCH_PACENOTE',
            payload: this.props.course.id
        });
    }

    editCourse = () => {
        console.log('course to edit id:', this.props.course.id);
        this.props.history.push(`/editcourse/${this.props.course.id}`)
    }

    render() {
        console.log('this.props in courseItem', this.props);
        return(
            <div>
                <p>{this.props.course.course_name}</p>
                <Button variant='contained' value={this.props.course.id} onClick={this.editCourse}>Edit</Button>
            </div>
        )
    }
}

export default connect()(withRouter(courseItem));