import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from '../common/app'

const renderComponent () => {
  render (
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector('[data-js="root"]')
  )
}

if (module.hot) {
  module.hot.accept('../common/app', () => {
    renderComponent()
  })
}
