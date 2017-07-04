import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  todosRequest: null,
  todosSuccess: ['payload'],
  todosFailure: null
})

export const TodosTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  payload: null,
  fetching: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the temperature for a city
export const request = (state, { username }) =>
  state.merge({ fetching: true })

// successful temperature lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// failed to get the temperature
export const failure = (state) =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TODOS_REQUEST]: request,
  [Types.TODOS_SUCCESS]: success,
  [Types.TODOS_FAILURE]: failure
})
