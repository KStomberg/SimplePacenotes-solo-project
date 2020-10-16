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

function* createCourseSaga(action) {
    console.log('in createCourseSaga, action.payload is:', action.payload);

    yield axios({
        method: 'POST',
        url: '/api/course',
        data: action.payload
    });
}

function* pacenoteSaga() {
    yield takeLatest('FETCH_COURSE', fetchCourseSaga);
    yield takeLatest('CREATE_COURSE', createCourseSaga); 
}

export default pacenoteSaga;