import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import '../public/css/semantic.css'
import '../public/css/frame.css'
import './library/semantic.js'
import FrameContainer from './containers/FrameContainer'
import LoginForm from './components/Passport/LoginForm'

const devBuild = process.env.NODE_ENV !== 'production'
let store

if (devBuild) {
  const logger = createLogger()
  store = createStore(
    reducer, 
    compose(
      applyMiddleware(logger, thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
else {
  store = createStore(
    reducer,
    applyMiddleware(thunk)
  )
}

const frameRoot = document.getElementById('frame-root')
if (frameRoot) {
  ReactDOM.render(
    <Provider store={store}>
      <FrameContainer />
    </Provider>,
    frameRoot
  )
}

const loginRoot = document.getElementById('login-root')
if (loginRoot) {
  ReactDOM.render(
    <LoginForm />,
    loginRoot
  )
}
