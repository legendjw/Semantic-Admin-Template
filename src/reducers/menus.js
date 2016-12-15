import { handleActions } from 'redux-actions'

export const menu = handleActions({
  REQUEST_MENUS: (state, action) => {
    return Object.assign({}, state, {
      isFetching: true
    })
  },
  RECEIVE_MENUS: (state, action) => {
    return Object.assign({}, state, {
      isFetching: false,
      items: action.payload.menus
    })
  }
}, {isFetching: false, items: []})
