import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../Dashboard'
import NavBar from '../NavBar'
import Clients from '../Clients'

const Authenticated = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/clients' component={Clients}/>
        </Switch>
      </div>
    </div>
  )
}

export default Authenticated;