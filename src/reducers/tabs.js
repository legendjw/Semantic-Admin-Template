import { handleActions } from 'redux-actions'

function getTabInfo(state, currentTab) {
  let info = {
    haveTab: false,
    currentTabIndex: undefined,
    activeTabIndex: undefined
  }
  state.items.forEach((tab, index) => {
    if (tab.id === currentTab.id) {
      info.haveTab = true
      info.currentTabIndex = index
    }
    if (tab.hasOwnProperty('active') && tab.active) {
      info.activeTabIndex = index
    }
  })
  return info
}

export const tab = handleActions({
  ADD_TAB: (state, action) => {
    let currentTab = action.payload.tab
    let tabInfo = getTabInfo(state, currentTab)
    let newState = Object.assign({}, state)
    if (tabInfo.activeTabIndex !== undefined) {
      newState['items'][tabInfo.activeTabIndex]['active'] = false
    }

    if (tabInfo.haveTab) {
      newState['items'][tabInfo.currentTabIndex]['active'] = true
      return newState
    }
    else {
      newState.items.push(currentTab)
      return newState
    }
  },

  REMOVE_TAB: (state, action) => {
    let currentTab = action.payload.tab
    let tabInfo = getTabInfo(state, currentTab)
    let newState = Object.assign({}, state)
    if (tabInfo.currentTabIndex === tabInfo.activeTabIndex) {
      if (newState['items'][tabInfo.currentTabIndex + 1]) {
        newState['items'][tabInfo.currentTabIndex + 1]['active'] = true
      }
      else if (newState['items'][tabInfo.currentTabIndex - 1]) {
        newState['items'][tabInfo.currentTabIndex - 1]['active'] = true
      }
    }
    newState.items.splice(tabInfo.currentTabIndex, 1)
    return newState
  },

  SET_TAB_ACTIVE: (state, action) => {
    let currentTab = action.payload.tab
    let tabInfo = getTabInfo(state, currentTab)
    let newState = Object.assign({}, state)
    if (tabInfo.activeTabIndex !== undefined) {
      newState['items'][tabInfo.activeTabIndex]['active'] = false
    }
    newState['items'][tabInfo.currentTabIndex]['active'] = true

    return newState
  }
}, {items: []})
