import { all } from 'redux-saga/effects'
import blank from './blank'

export default function* root() {
  yield all([
    ...blank
  ])
}