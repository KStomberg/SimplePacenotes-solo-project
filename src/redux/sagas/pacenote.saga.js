import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createPacenoteSaga(action) {
    console.log('action.payload to send DB from createPacenoteSaga', action.payload);

    yield axios({
        method: 'POST',
        url: '/api/pacenote',
        data: action.payload,
    });
}

function* pacenoteSaga() {
    yield takeLatest('CREATE_PACENOTE', createPacenoteSaga)
}

export default pacenoteSaga;