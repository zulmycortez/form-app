import React from 'react'
import { func, shape, string } from 'prop-types'
import { CheckIcon } from '../assets'
import Button from './Button'
import FormStyle from './FormStyle'

const FormView = ({ onSubmit, onChange, onModalChange, values, error }) => {
  return (
    <FormStyle>
      <h4>Complete the fields below.</h4>
      <form onSubmit={onSubmit}>
        <div className="__form-item">
          <label>First Name*</label>
          <input
            name="firstName"
            value={values.firstName}
            onChange={onChange}
            placeholder={"First Name"}
          />
          <div className="__valid">
            {values.firstName.length > 1 && <CheckIcon />} 
          </div>
        </div>
        <div className="__form-item">
          <label>Last Name*</label>
          <input
            name="lastName"
            value={values.lastName}
            onChange={onChange}
            placeholder={"Last Name"}
          />
          <div className="__valid">
            {values.lastName.length > 1 && <CheckIcon />} 
          </div>
        </div>
        <div className="__form-item">
          <label>Date of Birth*</label>
          <input
            name="dob"
            value={values.dob}
            onChange={onChange}
            placeholder={"Date of Birth"}
          />
          <div className="__valid">
            {values.dob.length > 1 && <CheckIcon />} 
          </div>
        </div>
        <div className="__form-item">
          <label>Phone Number*</label>
          <input
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={onChange}
            placeholder={"Phone Number"}
          />
          <div className="__valid">
            {values.phoneNumber.length > 1 && <CheckIcon />} 
          </div>
        </div>
        <div className="__form-item">
          <label>Address*</label>
          <input
            name="address"
            value={values.address}
            onChange={onChange}
            placeholder={"Address"}
          />
          <div className="__valid">
            {values.address.length > 1 && <CheckIcon />} 
          </div>
        </div>
        <div className="__form-item">
          <label>Note</label>
          <input
            name="note"
            value={values.note}
            onChange={onChange}
            placeholder={"Note"}
          />
        </div>
        <div className="__error">
          {error ? 'Please fill out all the required fields' : ''}
        </div>
        <div className="__action-buttons">
          <Button
            onClick={onModalChange}
          >
              Cancel
          </Button>
          <Button
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </FormStyle>
  )
}

FormView.propTypes = {
  onSubmit: func,
  onModalChange: func,
  values: shape({
    firstName: string,
    lastName: string,
    dob: string,
    phoneNumber: string,
    address: string,
    note: string
  })
}

export default FormView
