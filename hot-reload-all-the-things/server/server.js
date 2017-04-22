import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../common/app'

const app = express()

app.get('/api', (req, res) => {
  res.send({ message: 'I am a server route and can also be hot reloaded!' })
})

app.get('*', (req, res) => {
  const application = renderToString(<App />)
  const html = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Hot reload all the things!</title>
      </head>

      <body>
        <div data-js="root">${application}</div>
      </body>
    </html>
  `

  res.send(html)
})

export default app
