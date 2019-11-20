import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import blank from './blank'

const blankPersistConfig = {
  key: 'blank',
  storage
}

export default combineReducers({
  blank: persistReducer(blankPersistConfig, blank)
})