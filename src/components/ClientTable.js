import React from 'react'
import { Link } from 'react-router-dom'
import { formatPhoneNumber } from '../utils/functions'

import ReactTable from "react-table";
import "react-table/react-table.css";

const ClientTable = ({clients}) => {

  const looseMatch = (filter, row) => row[filter.id].toString().toLowerCase().includes((filter.value).toString().toLowerCase());

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
      defaultPageSize={10}
      filterable={true}
      defaultFilterMethod={looseMatch}
    />
  )
}

export default ClientTable


