import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/TodosRedux'

test('request', (t) => {
  const state = reducer(INITIAL_STATE, Actions.todosRequest())

  t.true(state.fetching)
})

test('success', (t) => {
  const state = reducer(INITIAL_STATE, Actions.todosSuccess())

  t.false(state.fetching)
  //  t.is(state.avatar, avatar)
  t.is(null, state.error)
})

test('failure', (t) => {
  const state = reducer(INITIAL_STATE, Actions.todosFailure())

  t.false(state.fetching)
  t.true(state.error)
  t.is(null, state.payload)
})
