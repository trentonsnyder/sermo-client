import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
import ClientsHOC from './hoc/ClientsHOC'
import ClientsContainer from './ClientsContainer'
import ClientDetails from './ClientDetails'

const Authenticated = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <ClientsHOC>
            <Route exact path='/clients' component={ClientsContainer} />
            <Route exact path='/clients/:id' component={ClientDetails}/>
          </ClientsHOC>
        </Switch>
      </div>
    </div>
  )
}

export default Authenticated