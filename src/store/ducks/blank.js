import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  resetStore: []
})


const INITIAL_STATE = {
  loading: false,
  error: null
}

const resetStore = (state = INITIAL_STATE) => ({
  state
})

export default createReducer(INITIAL_STATE, {
  [Types.RESET_STORE]: resetStore
})