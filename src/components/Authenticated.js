import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
import ClientsHOC from './hoc/ClientsHOC'
import TasksHOC from './hoc/TasksHOC'
import ClientsContainer from './clients/ClientsContainer'
import ChatContainer from './chat/ChatContainer'
import ClientDetails from './clients/ClientDetails'
import TasksContainer from './tasks/TasksContainer'
import ActionCable from 'actioncable'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

// TODO: i don't want this token in the url...
let cable = ActionCable.createConsumer(`ws://localhost:3001/cable?token=${cookies.get('sermoToken')}`)

class Authenticated extends React.Component {
  componentDidMount() {
    cable.subscriptions.create({
      channel: 'OnlineChannel'
    },
    {
      received: (data) => {
        console.log('received', data)
      }
    })
  }
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <ClientsHOC>
              <Route path='/chat' component={ChatContainer} />
              <TasksHOC>
                <Route exact path='/clients' component={ClientsContainer} />
                <Route exact path='/clients/:id' component={ClientDetails}/>
                <Route exact path='/tasks' component={TasksContainer} />
              </TasksHOC>
            </ClientsHOC>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Authenticated