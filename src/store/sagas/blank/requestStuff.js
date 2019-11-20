import {
  put, delay, call, takeLatest
} from 'redux-saga/effects'
import isFunction from 'lodash/isFunction'

function* requestStuff(params) {

  try {
    yield delay(500)



    if (isFunction(params.callback)) {
      yield params.callback()
    }

  } catch (error) {
    
  }
}


export default [takeLatest('request_stuff', requestStuff)]
