import React, { PropTypes } from 'react'

/**
 * 标签菜单项组件
 */
export default class TabItem extends React.Component {
  static propTypes = {
    tab: PropTypes.object.isRequired,
    setTabActive: PropTypes.func.isRequired
  }

  handleTabClick (tab, e) {
    e.preventDefault()

    this.props.setTabActive(tab)
  }

  handleRemoveClick (tab, e) {
    e.preventDefault()
    e.stopPropagation()

    this.props.removeTab(tab)

    return false
  }

  render () {
    const { tab } = this.props
    const className = tab.hasOwnProperty('active') && tab.active === true ? 'item active' : 'item'

    return (
      <a className={className} onClick={(e) => this.handleTabClick(tab, e)}>
        {tab.name}
        &nbsp;&nbsp;<i className="remove icon" title="关闭窗口" onClick={(e) => this.handleRemoveClick(tab, e)}></i>
      </a>
    )
  }
}
