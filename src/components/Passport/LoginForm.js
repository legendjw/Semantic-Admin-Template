import React from 'react'
import $ from 'jquery'
import fetch from 'isomorphic-fetch'
import '../../../public/css/login.css'

/**
 * 登录表单
 */
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {status: 'default'}

    this.loginValidateSuccess = this.loginValidateSuccess.bind(this);
  }

  componentDidMount() {
    $("#login-form").form({
      on: 'blur',
      inline: false,
      fields: this.validateFields,
      onSuccess: this.loginValidateSuccess
    });
  }

  get validateFields() {
    return {
      'session-username': {
        rules: [
          {
            type: 'empty',
            prompt: '请输入用户名'
          }
        ]
      },
      'session-password': {
        rules: [
          {
            type: 'empty',
            prompt: '请输入密码'
          }
        ]
      }
    }
  }

  loginValidateSuccess (event, fields) {
    if (this.state.status !== 'fetching') {
      this.setState({status: 'fetching'})
    }
    else {
      return
    }

    fetch('/api/signin', {
      method: 'POST',
      headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" }),
      body: $("#login-form").serialize()
    }).then(response => response.json()).then(json => {
      if (json.status == 1) {
        this.setState({status: 'success'})
        window.location.href = json.url
      }
      else {
        this.setState({status: 'error'})
        $("#login-form").form('add errors', [
            json.message
        ])
      }
    })

    event.preventDefault();
  }

  render () {
    let buttonClass = 'ui fluid large teal submit button'
    let buttonName = '登录'
    if (this.state.status === 'fetching') {
      buttonClass += " loading"
    }
    else if (this.state.status === 'success') {
      buttonName = '登录成功'
    }

    return (
      <div className="login ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">
              开启一天的美好生活~
            </div>
          </h2>
          <form id="login-form" className="ui large form" action="" method="post">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input placeholder="手机号/邮箱" type="text" name="session[username]" id="session-username" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input placeholder="密码" type="password" name="session[password]" id="session-password" />
                </div>
              </div>
              <div className={buttonClass}>
                {buttonName}
              </div>
            </div>

            <div className="ui error message"></div>
          </form>
          <div className="ui message">
            还没有账号? <a href="/signup">注册</a> 
          </div>
        </div>
      </div>
    )
  }
}
