import React, { PropTypes } from 'react'
import TabItemList from './TabItemList'
import TabFrameList from './TabFrameList'

/**
 * 主框架标签页组件
 */
export default class Tab extends React.Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    const { tabs, actions } = this.props

    return (
      <div id="tab-container">
        <TabItemList tabs={tabs} actions={actions} />
        <TabFrameList tabs={tabs} />
      </div>
    )
  }
}
