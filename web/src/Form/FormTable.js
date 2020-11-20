import React, { useEffect, useState } from 'react'
import { func } from 'prop-types'
import axios from 'axios'
import {
  Table, TableBody, TableCell, TableHead, TableRow,
  TableSortLabel
} from '../libs'
import { Modal } from '../components'
import { TrashIcon, EditIcon } from '../assets'
import FormEdit from './FormEdit'
import formTableCols from './formTableCol'
import FormTableStyle from './FormTableStyle'

const FormTable = ({ onRefresh }) => {
  const [data, setData] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  const [sortBy, setSortBy] = useState("")
  const [orderDirection, setOrderDirection] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [editting, setEditting] = useState(false)

  const onModalChange = () => {
    setEditting(editting => !editting)
  }

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:3000/api/account')
      .then(res => { setData(res.data.data); setLoading(false) })
      .catch(() => setError(true))
  }, [])

  const onDelete = id => () => {
    axios.delete(`http://localhost:3000/api/account/${id}`)
      .then(() => { onRefresh(); })
  }

  const onEditClick = id => () => {
    setEditting(true);
    setSelectedId(id);
  }

  const onSort = id => () => {
    setSortBy(id);
    setOrderDirection(orderDirection => !orderDirection)
  };

  const sortedData = (data, direction) => {
    if (!data) return []
    if (direction) {
      return data.sort((a,b) => a[sortBy] > b[sortBy] ? 1 : -1)
    }
    return data.sort((a,b) => a[sortBy] < b[sortBy] ? 1 : -1)
  }

  if (!data) return 'No data'
  if (loading) return 'Loading...'
  if (error) return 'Error loading data'

  return (
    <FormTableStyle>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {formTableCols.map(item => (
              <TableCell
                key={item.id}
                sortDirection={orderDirection ? 'asc' : 'desc'}
              >
                <TableSortLabel
                  active={orderDirection === item.id}
                  direction={orderDirection ? 'desc' : 'asc'}
                  onClick={onSort(item.id)}
                >
                  {item.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData(data, orderDirection).map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.dob}</TableCell>
              <TableCell>{item.phoneNumber}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>
                <div className="__action-icons">
                  <EditIcon onClick={onEditClick(item._id)}/>
                  <TrashIcon onClick={onDelete(item._id)} />
                </div>
                <Modal
                  on={editting}
                  onChange={onModalChange}
                >
                  <FormEdit
                    id={selectedId}
                    onRefresh={onRefresh}
                    onModalChange={onModalChange}
                  />
                </Modal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </FormTableStyle>
  )
}

FormTable.propTypes = {
  onRefresh: func
}

export default FormTable
