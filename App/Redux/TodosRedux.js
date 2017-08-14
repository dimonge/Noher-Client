import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  todosRequest: null,
  todosSuccess: ['payload'],
  todosFailure: null,
  addTodo: ['payload'],
  updateTodo: ['id', 'payload'],
  deleteTodo: ['id'],
  getSingleTodo: ['payload']
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

export const addTodo = (state, action) => {
  const { payload } = action
  return Object.assign({}, state, {
    payload: Object.assign({}, state.payload, {
      data: Object.assign({}, state.payload.data, {
        items: state.payload.data.items.concat(payload)
      })
    })
  })
  // eturn state.merge({payload: state.payload.merge(payload)})
}

export const updateTodo = (state, action) => {
  const {id, payload} = action
  const items = state.payload.data.items
  let todos = items.map((todo) => {
    if (todo.id === id) {
      return todo.merge(payload)
    }
    return todo
  })
  return Object.assign({}, state, {
    payload: Object.assign({}, state.payload, {
      data: Object.assign({}, state.payload.data, {
        items: todos
      })
    })
  })
}

export const deleteTodo = (state, action) => {
  const { id } = action
  return state.payload.filter(todo => todo.id !== id)
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TODOS_REQUEST]: request,
  [Types.TODOS_SUCCESS]: success,
  [Types.TODOS_FAILURE]: failure,
  [Types.ADD_TODO]: addTodo,
  [Types.UPDATE_TODO]: updateTodo,
  [Types.DELETE_TODO]: deleteTodo
})
