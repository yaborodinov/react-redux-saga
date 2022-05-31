import {call, put, takeEvery} from 'redux-saga/effects'
import { hideLoader, showAlert, showLoader } from './actions'
import { FETCHED_POSTS, REQUEST_POSTS } from './types'

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)                 //1* takeEvery говорит что нам нужно обрабатывать каждый action поступающий в стор | сейчас следим за REQUEST_POSTS
    //2* на каждый сайд эффект мы будем выполнять sagaWorker
}

function* sagaWorker() {
    try {
        yield put(showLoader())    //3* метод put позволяет диспатчить некоторые события в store  | ставим loader в значение true
    const payload = yield call(fetchPosts) //5* далее мы говорим что нам необходимо подождать пока мы выполним с потомщью метода call функцию fetchPosts | и присваеваем это значение переменной payload
    yield put({               // 6* теперь нужно задиспатчить в store
        type: FETCHED_POSTS,
        payload: payload      // 6* и передать в payload наши посты
    })
    yield put(hideLoader())    // 7* скрываем loader
    } catch (error) {
        yield put(showAlert(error.message))   // если какая-нибудь ошибка - диспатчим эти 2 экшна
        yield put(hideLoader())
    }
}

async function fetchPosts() {            //4* функция для запроса на сервер (просто вынесли ее)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const posts = await response.json()
    return await posts
}
