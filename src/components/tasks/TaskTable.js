import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { looseMatch } from '../../utils/functions'
import ReactTable from "react-table"
import moment from 'moment'
import "react-table/react-table.css"
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
      defaultPageSize={tasks.length > 50 ? 50 : tasks.length}
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

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks
  }
}


export default connect(mapStateToProps)(TaskTable)


