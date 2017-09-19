import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
import ClientsHOC from './hoc/ClientsHOC'
import TasksHOC from './hoc/TasksHOC'
import ClientsContainer from './ClientsContainer'
import ClientDetails from './ClientDetails'
import TasksContainer from './TasksContainer'

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
            {/* <TasksHOC>
              <Route exact path='/tasks' component={TasksContainer} />
            </TasksHOC> */}
          </ClientsHOC>
        </Switch>
      </div>
    </div>
  )
}

export default Authenticated