import React from 'react'

/**
 * 框架信息卡片组件
 */
export default class InfoCard extends React.Component {
  render () {
    return (
      <div className="ui card">
        <div className="content">
          <a className="header"><img className="ui avatar image" src="images/default_avatar.jpg" />小王</a>
          <div className="meta">
            销售部-销售经理
          </div>
          <div className="description">
            南京销售有限公司
          </div>
        </div>
      </div>
    )
  }
}
