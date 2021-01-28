import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        {/* If the user insert a none existing url he must be redirected to the '/todos' */}
        <Redirect from="*" to="/todos" />
    </Router>
)