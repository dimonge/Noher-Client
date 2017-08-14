import { call, put } from 'redux-saga/effects'
import TodosActions from '../Redux/TodosRedux'

export function * getTodoList (api) {
  const response = yield call(api.getTodoList)
  if (response.ok) {
    const todos = response
    yield put(TodosActions.todosSuccess(todos))
  } else {
    yield put(TodosActions.todosFailure())
  }
}

export function * postTodo (api, payload) {
  const response = yield call(api.postTodo, payload)
  if (response.ok) {
    yield put(TodosActions.addTodo(payload))
  } else {
    yield put(TodosActions.todosFailure())
  }
}

export function * putTodo (api, id, payload) {
  const response = yield call(api.putTodo, id, payload)
  if (response.ok) {
    yield put(TodosActions.updateTodo())
  } else {
    yield put(TodosActions.todosFailure())
  }
}

export function * deleteTodo (api, id) {
  const response = yield call(api.deleteTodo)
  if (response.ok) {
    yield put(TodosActions.deleteTodo(id))
  } else {
    yield put
  }
}
