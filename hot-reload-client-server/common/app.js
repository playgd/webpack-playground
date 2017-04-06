'use strict'

import React from 'react'
import loadAsync from './load-async'

const Title = loadAsync(import('./title'))

const App = () => <div><Title>Titleeee</Title></div>

export default App
