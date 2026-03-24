const express = require('express')

const router = express.Router()

router.get('databases/create', (req, res) => res.json({ status: 'error', message: 'Not implemented', data: null }))

router.get('databases/use', (req, res) => res.json({ status: 'error', message: 'Not implemented', data: null }))

router.get('tables/create', (req, res) => res.json({ status: 'error', message: 'Not implemented', data: null }))

router.get('tables/:id/select', (req, res) => res.json({ status: 'error', message: 'Not implemented', data: null }))

router.get('tables/:id/insert', (req, res) => res.json({ status: 'error', message: 'Not implemented', data: null }))

router.get('tables/:id/update', (req, res) => res.json({ status: 'error', message: 'Not implemented', data: null }))

router.get('tables/:id/delete', (req, res) => res.json({ status: 'error', message: 'Not implemented', data: null }))

module.exports = router
