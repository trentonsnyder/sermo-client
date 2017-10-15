import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
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

class Authenticated extends React.Component {
  state = {
    notification: false
  }

  componentDidMount() {
    // TODO: i don't want this token in the url...
    // TODO: maybe move this is its own component
    const cable = ActionCable.createConsumer(`ws://localhost:3001/cable?token=${cookies.get('sermoToken')}`)
    cable.subscriptions.create({
      channel: 'MessagesChannel'
    },
    {
      received: (data) => {
        console.log(data)
        // if user is in /chat/:id that matches data.conversation.client_id
          // append to message reducer
        // if user is in /chat or /chat/:id and doesn't match 
          // the sidebar conversation needs a notification: true
        // else
          // this.setState({notification: true})
      }
    })
  }

  clearNotification = () => {
    this.setState({notification: false})
  }

  render() {
    return (
      <div>
        <div>
          <NavBar notification={this.state.notification} clearNotification={this.clearNotification} />
        </div>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <ClientsHOC>
            <Route path='/chat' component={ChatContainer} />
            <TasksHOC>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '100%', maxWidth: '1200px', padding: '12px'}}>
                  <Route exact path='/clients' component={ClientsContainer} />
                  <Route exact path='/clients/:id' component={ClientDetails}/>
                  <Route exact path='/tasks' component={TasksContainer} />
                </div>
              </div>
            </TasksHOC>
          </ClientsHOC>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    messages: state.messages.messages
  }
}

export default withRouter(connect(mapStateToProps)(Authenticated))