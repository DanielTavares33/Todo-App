const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidators: true })// to return the value already updated and run the validations

module.exports = Todo