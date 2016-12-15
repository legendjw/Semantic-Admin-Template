import React, { PropTypes } from 'react'
import TabItem from './TabItem'

/**
 * 标签菜单项列表组件
 */
export default class TabItemList extends React.Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    const { tabs, actions } = this.props

    return (
      <div id="tab-menu" className="ui tiny menu">
        {tabs.map(item =>
          <TabItem key={'tab_menu_' + item.id} tab={item} {...actions} />
        )}
        <div className="right menu">
          <div className="item">
            <div className="ui transparent left icon input">
              <i className="search link icon"></i>
              <input type="text" placeholder="全局搜索..." />
            </div>
          </div>
          <a className="item">
            <i className="mail outline icon"></i>
            23
          </a>
          <a className="item">
            退出&nbsp;<i className="sign out icon"></i>
          </a>
        </div>
      </div>
    )
  }
}
