import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTasks } from '../../actions/tasks'

class TasksHOC extends Component {

  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    if (this.props.loading) {
      return <div className="loader">Loading...</div>
    } else {
      return <div>{this.props.children}</div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.tasks.loading
  }
}
  
export default connect(mapStateToProps, {getTasks})(TasksHOC)