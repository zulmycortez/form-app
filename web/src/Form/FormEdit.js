import React, { useState, useEffect } from 'react'
import { func, string } from 'prop-types'
import axios from 'axios'
import { FormView, FormStyle } from '../components'

const defaultlValues = {
  firstName: '',
  lastName: '',
  dob: '',
  phoneNumber: '',
  address: '',
  note: ''
}

const FormEdit = ({ id, onModalChange, onRefresh }) => {
  const [values, setValues] = useState(defaultlValues)

  useEffect(() => {
    axios.get(`http://localhost:3000/api/account/${id}`)
      .then(res => setValues(res.data.data))
  }, [id])

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onEdit = (id, v) => {
    axios.put(`http://localhost:3000/api/account/${id}`, {...v})
      .then(res => { onModalChange(); onRefresh(); })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onEdit(id, values);
  }

  return (
    <FormStyle>
      <FormView
        values={values}
        onChange={onChange}
        onSubmit={onSubmit}
        onModalChange={onModalChange}
      />
    </FormStyle>
  )
}

FormEdit.propTypes = {
  id: string,
  onModalChange: func,
  onRefresh: func
}

export default FormEdit
