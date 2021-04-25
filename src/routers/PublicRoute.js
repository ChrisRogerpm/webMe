import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { About } from '../components/About/About'

export const PublicRoute = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={About} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}
