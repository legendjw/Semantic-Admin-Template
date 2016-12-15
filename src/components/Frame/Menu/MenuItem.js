import React, { PropTypes } from 'react'

/**
 * 主框架菜单项组件
 */
export default class MenuItem extends React.Component {
  static propTypes = {
    menu: PropTypes.object.isRequired
  }

  handleClick (item, e) {
    e.preventDefault()

    this.props.addTab({
      id: item.id, 
      name: item.name, 
      url: item.url, 
      active: true
    })
  }

  render () {
    const { menu } = this.props

    return <a className="item" href={menu.url} onClick={(e) => this.handleClick(menu, e)}>{menu.name}</a>
  }
}
