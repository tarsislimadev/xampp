#!/usr/bin/env node

const { port } = require('./config.js')
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/api/v1', require('./api/v1/'))

app.listen(port, () => console.log(`Listening on ${port}`))
