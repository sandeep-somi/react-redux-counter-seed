import * as types from '../actions/actionTypes';

const initialState = {
  counter: 0,
}

export default function (state = initialState, action) {
  switch (action.types) {
    case types.INCREMENT_COUNTER :
      return {...state, counter: action.no }
    case types.DECREMENT_COUNTER :
      return {...state, counter: action.no}

    default :
      return {...state}
  }
}
