import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions'

export const { addTab, removeTab, setTabActive } = createActions({
  ADD_TAB: (tab) => ({ tab: tab }),
  REMOVE_TAB: (tab) => ({ tab: tab }),
  SET_TAB_ACTIVE: (tab) => ({ tab: tab })
})

export const { requestMenus, receiveMenus } = createActions({
  RECEIVE_MENUS: (json) => ({ menus: json })
}, 'REQUEST_MENUS')

export const fetchMenus = () => dispatch => {
  dispatch(requestMenus())
  return fetch(`/api/menus`, {credentials: 'include'})
    .then(response => response.json())
    .then(json => dispatch(receiveMenus(json)))
}
