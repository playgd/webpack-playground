'use strict'

import express from 'express'
import content from './content'

const app = express()

app.get('/api', (req, res) => {
  res.send(content)
})

export default app
