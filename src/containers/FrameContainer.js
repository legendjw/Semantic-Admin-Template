import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FrameMenu from '../components/Frame/Menu/Menu'
import FrameTab from '../components/Frame/Tab/Tab'
import * as FrameActions from '../actions'

const FrameContainer = ({menu, tab, actions}) => (
  <div className="ui fluid container">
    <FrameMenu menus={menu.items} isFetching={menu.isFetching} addTab={actions.addTab} fetchMenus={actions.fetchMenus} />
    <FrameTab tabs={tab.items} actions={actions} />
  </div>
)

FrameContainer.propTypes = {
  menu: PropTypes.object.isRequired,
  tab: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  menu: state.menu,
  tab: state.tab
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(FrameActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrameContainer)
