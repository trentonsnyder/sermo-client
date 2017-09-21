import React from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table"
import "react-table/react-table.css"
import moment from 'moment'
import { looseMatch } from '../../utils/functions'
import TaskDetailsContainer from './TaskDetailsContainer'

const TaskTable = ({tasks}) => {

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
      accessor: 'status'
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


export default TaskTable


