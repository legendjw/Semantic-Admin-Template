import React, { PropTypes } from 'react'
import TabFrame from './TabFrame'

/**
 * 标签框架列表组件
 */
export default class TabFrameList extends React.Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired
  }

  render () {
    return (
      <div id="tab-frame">
        {this.props.tabs.map(item =>
          <TabFrame key={'tab_frame_' + item.id} tab={item} />
        )}
      </div>
    )
  }
}
