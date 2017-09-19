import React from 'react'
import { Link } from 'react-router-dom'
import { formatPhoneNumber, looseMatch } from '../utils/functions'

import ReactTable from "react-table";
import "react-table/react-table.css";

const ClientTable = ({clients}) => {

  let columns = [
    {
      Header: 'Name',
      accessor: 'name',
      Cell: props => <Link to={`/clients/${props.original.id}`}>{props.value}</Link>
    },
    {
      Header: 'Phone Number',
      accessor: 'phone_number',
      Cell: ({value}) => (formatPhoneNumber(value))
    }
  ]

  return (
    <ReactTable
      data={clients}
      columns={columns}
      defaultPageSize={clients.length > 50 ? 50 : clients.length}
      filterable={true}
      defaultFilterMethod={looseMatch}
    />
  )
}

export default ClientTable


