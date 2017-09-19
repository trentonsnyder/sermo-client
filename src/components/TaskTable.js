import React from 'react'
import { looseMatch } from '../utils/functions'
import ReactTable from "react-table";
import "react-table/react-table.css";

const TaskTable = ({tasks}) => {

  let columns = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Due Date',
      accessor: 'due_date'
    }
  ]

  return (
    <ReactTable
      data={tasks}
      columns={columns}
      defaultPageSize={tasks.length > 50 ? 50 : tasks.length}
      filterable={true}
      defaultFilterMethod={looseMatch}
    />
  )
}

export default TaskTable


