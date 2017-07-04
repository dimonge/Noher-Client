import { call, put } from 'redux-saga/effects'
import TodosActions from '../Redux/TodosRedux'

export function * getTodos (api, request) {
  const response = yield call(api.getTodos)
  if (response.ok) {
    const todos = response
    yield put(TodosActions.todosSuccess(todos))
  } else {
    yield put(TodosActions.todosFailure())
  }
}
