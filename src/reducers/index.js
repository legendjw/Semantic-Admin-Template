import { combineReducers } from 'redux'
import { menu } from './menus'
import { tab } from './tabs'

export default combineReducers({
  menu,
  tab
})
