import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactTable from "react-table"
import "react-table/react-table.css"
import moment from 'moment'
import { looseMatch } from '../../utils/functions'
import TaskDetailsContainer from './TaskDetailsContainer'
import { updateTask } from '../../actions/tasks'

const Button = ({backgroundColor, status}) => <button style={{backgroundColor, color: 'white'}}>{status}</button>
const ActionButton = ({status, submitStatus, props}) => <button style={{backgroundColor: 'gray', border: 'none', padding: '0px 15px 0px 15px', margin: '0px 3px 0px 3px'}} onClick={() => submitStatus(props, status)}>{status}</button>

const TaskTable = ({tasks, updateTask}) => {

  const submitStatus = (props, status) => {
    updateTask({client: {id: props.original.client.id}, id: props.original.id, status})
  }

  const statusButtons = (props) => {
    let { status } = props.original
    return(
      <div>
        {status === 'open' ? <Button backgroundColor={'#2F7696'} status={'open'} /> : <ActionButton status={'open'} submitStatus={submitStatus} props={props} /> }
        {status === 'pending' ? <Button backgroundColor={'#FD8D7a'}status={'pending'} /> : <ActionButton status={'pending'} submitStatus={submitStatus} props={props} /> }
        {status === 'revision' ? <Button backgroundColor={'#C92F2F'} status={'revision'} /> : <ActionButton status={'revision'} submitStatus={submitStatus} props={props} /> }
        {status === 'completed' ? <Button backgroundColor={'#1ECF01'} status={'completed'} /> : <ActionButton status={'completed'} submitStatus={submitStatus} props={props} /> }
      </div>
    )
  }

  let columns = [
    {
      Header: 'Due Date',
      accessor: 'due_date',
      Cell: props => <p style={{margin: '0'}}>{props.value ? moment(`${props.value}`,"YYYY-MM-DD").format('MM/DD/YYYY') : ''}</p>
    },
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Client',
      accessor: 'client_id',
      Cell: props => <Link to={`/clients/${props.original.client.id}`}>{props.original.client.name}</Link>
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: props => statusButtons(props)
    }
  ]

  return (
    <ReactTable
      data={tasks}
      columns={columns}
      defaultPageSize={tasks.length > 50 ? 50 : tasks.length < 5 ? 5 : tasks.length }
      filterable={true}
      defaultFilterMethod={looseMatch}
      SubComponent={row => <TaskDetailsContainer task={row.original} /> }
      defaultSorted={[{
        id: 'due_date',
        desc: false
      }]}
    />
  )
}


export default connect(null, {updateTask})(TaskTable)