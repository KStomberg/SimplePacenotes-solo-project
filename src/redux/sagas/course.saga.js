import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCourseSaga(action) {
    console.log('in fetchCourseSaga');

    let response = yield axios({
        method: 'get',
        url: '/api/course',
    });
    //SET_COURSE GOES HERE
}

function* pacenoteSaga() {
    yield takeLatest('FETCH_COURSE', fetchCourseSaga)
}

export default pacenoteSaga;