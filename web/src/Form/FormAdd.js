import React, { useState } from 'react'
import axios from 'axios'
import { func, shape, string } from 'prop-types'
import { FormView, FormStyle } from '../components'

const defaultValues = {
  firstName: '',
  lastName: '',
  dob: '',
  phoneNumber: '',
  address: '',
  note: ''
}

const FormAdd = ({ onModalChange, onRefresh, initialValues }) => {
  const [values, setValues] = useState(initialValues)
  const [error, setError] = useState(null)

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onPost = (v) => {
    axios.post('http://localhost:3000/api/account', {...v})
      .then(() => {
        onRefresh();
        onModalChange();
        setError(false);
      })
      .catch(() => setError(true))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onPost(values);
  }

  return (
    <FormStyle>
      <FormView
        values={values}
        onChange={onChange}
        onSubmit={onSubmit}
        onModalChange={onModalChange}
        error={error}
      />
    </FormStyle>
  )
}

FormAdd.propTypes = {
  onModalChange: func,
  onRefresh: func,
  initialValues: shape({
    firstName: string,
    lastName: string,
    dob: string,
    phoneNumber: string,
    address: string,
    note: string
  })
}

FormAdd.defaultProps = {
  initialValues: defaultValues
}

export default FormAdd
