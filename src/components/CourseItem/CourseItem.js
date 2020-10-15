import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class courseItem extends Component {

    render() {
        console.log('this.props in courseItem', this.props);
        return(
            <div>
                <p>{this.props.course.course_name}</p>
            </div>
        )
    }
}

export default connect()(withRouter(courseItem));