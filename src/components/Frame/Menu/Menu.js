import React, { PropTypes } from 'react'
import InfoCard from './InfoCard'
import MenuItem from './MenuItem'
import Tree from '../../../library/tree'

/**
 * 主框架菜单组件
 */
export default class Menu extends React.Component {
  static propTypes = {
    menus: PropTypes.array.isRequired,
    addTab: PropTypes.func.isRequired,
    fetchMenus: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { fetchMenus } = this.props
    fetchMenus()
  }

  render () {
    const { menus, addTab } = this.props
    const treeMenus = Tree.listToTree(menus)

    let menuItems = treeMenus.map(menu => {
      if (menu.hasOwnProperty('childs') && menu.childs.length > 0) {
        return (
          <div className="item" key={'menu_' + menu.id}>
            <div className="header">{menu.name}</div>
            <div className="menu">
              {menu.childs.map(child =>
                <MenuItem key={'menu_' + child.id} menu={child} addTab={addTab} />
              )}
            </div>
          </div>
        )
      }
      else {
        return <MenuItem key={'menu_' + menu.id} menu={menu} addTab={addTab} />
      }
    })

    return (
      <div id="menu-container" className="ui small vertical left menu">
        <div className="item">
          <InfoCard />
        </div>

        {menuItems}
      </div>
    )
  }
}
