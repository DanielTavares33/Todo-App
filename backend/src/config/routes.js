const express = require('express')

module.exports = function (server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router) // Middleware only to the urls that start with '/api'

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos') // to use all the methods created at the todoService file
}