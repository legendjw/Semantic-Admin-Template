import React, { PropTypes } from 'react'

/**
 * 标签框架组件
 */
export default class TabFrame extends React.Component {
  static propTypes = {
    tab: PropTypes.object.isRequired
  }

  render () {
    const tab = this.props.tab
    const display = tab.hasOwnProperty('active') && tab.active === true ? 'block' : 'none'

    return (
      <iframe style={{display: display}} src={tab.url} width="100%" height="100%" data-id={tab.id} frameBorder="0" scrolling="auto"></iframe>
    )
  }
}
