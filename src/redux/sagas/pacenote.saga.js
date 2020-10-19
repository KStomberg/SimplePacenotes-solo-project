import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPacenoteSaga(action) {
    console.log('in fetchPacenoteSaga');

    let response = yield axios({
        method: 'GET',
        url: `/api/pacenote/${action.payload}`
    })
    yield put({
        type:'SET_PACENOTE',
        payload: response.data
    });
}

function* createPacenoteSaga(action) {
    console.log('action.payload to send DB from createPacenoteSaga', action.payload);

    yield axios({
        method: 'POST',
        url: '/api/pacenote',
        data: action.payload,
    });

    yield put ({
        type: 'FETCH_PACENOTE'
    })
    
}

function* deletePacenoteSaga(action) {
    console.log('action.payload to send DB from deletePacenoteSaga', action.payload);

    yield axios({
        method: 'DELETE',
        url: `/api/pacenote/${action.payload}`,
    })

    yield put ({
        type: 'FETCH_PACENOTE'
    })
}

function* updatePacenoteSaga(action) {
    console.log('action.payload to send DB from updatePacenoteSaga', action.payload);

    yield axios({
        method: 'PUT',
        url: '/api/pacenote',
        data: action.payload,
    });

    yield put ({
        type: 'FETCH_PACENOTE'
    })
}

function* pacenoteSaga() {
    yield takeLatest('FETCH_PACENOTE', fetchPacenoteSaga)
    yield takeLatest('CREATE_PACENOTE', createPacenoteSaga)
    yield takeLatest('DELETE_PACENOTE', deletePacenoteSaga)
    yield takeLatest('UPDATE_PACENOTE', updatePacenoteSaga)
}

export default pacenoteSaga;