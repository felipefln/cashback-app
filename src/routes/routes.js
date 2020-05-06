import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from '../pages/Login/index'
import Register from '../pages/Register/index'
import Dashboard from '../pages/Dashboard/index'

export default function Routes() {
    return (
        <Router>
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/dashboard" component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}
