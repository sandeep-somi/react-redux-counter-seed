import types from './actionTypes';
import store from '../../store';

const {dispatch} = store;

export function incrementCounter(no) {
  dispatch({
    type: types.INCREMENT_COUNTER,
    no
  })
}

export function decrementCounter(no) {
  dispatch({
    type: types.DECREMENT_COUNTER,
    no
  })
}
