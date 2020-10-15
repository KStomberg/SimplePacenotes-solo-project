import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCourseSaga(action) {
    console.log('in fetchCourseSaga');

    let response = yield axios({
        method: 'GET',
        url: '/api/course',
    });
    yield put({
        type: 'SET_COURSE',
        payload: response.data
    });
}

function* pacenoteSaga() {
    yield takeLatest('FETCH_COURSE', fetchCourseSaga)
}

export default pacenoteSaga;