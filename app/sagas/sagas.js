import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { actions } from '../consts/ActionsConsts';

function* getFakeData() {
    const mock = new MockAdapter(axios, { delayResponse: 3000 });
    yield mock.onGet('/users').reply(200, {
        users: [{id: 1, name: 'John Smith'}],
    });
    yield axios.get('/users').then((response) => {
        console.log(response.data);
    });
    yield put({type: actions.SET_IS_LOADING, payload: false});
}

export default function* watchGetMockyData() {
    yield takeEvery(actions.START_REDUX_SAGA, getFakeData);
}