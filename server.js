var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = process.env.PORT || 3001
app.listen(port)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/menus', function(req, res) {
  res.json([
    {
      id: 1,
      name: '登录页面',
      parent_id: '',
      url: 'login.html',
      sort: 0
    },
    {
      id: 2,
      name: '通用页面',
      parent_id: '',
      url: '',
      sort: 0
    },
    {
      id: 3,
      name: '列表页面',
      parent_id: 2,
      url: '',
      sort: 0
    }
  ])
})

app.post('/api/signin', function(req, res) {

  if (req.body.session.username == 'admin' && req.body.session.password == 'admin') {
    res.json({status: 1, url: '/'})
  }
  else {
    res.json({status: 0, message: '用户名或者密码错误'})
  }
})
