import React from 'react'
import styled from 'styled-components'
import { bool, func } from 'prop-types'
import CloseIcon from '../assets/CloseIcon'
import ModalStyle from './ModalStyle'

const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: black;
  opacity: 0.8;
`

const Modal = ({ on, onChange, children }) => {
  if (!on) return null

  return (
    <ModalStyle>
      <Backdrop />
      <div className="__content">
        <div
          className="__exit-button"
          onClick={onChange}
        >
            <CloseIcon />
        </div>
        {children}
      </div>
    </ModalStyle>
  )
}

Modal.propTypes = {
  on: bool,
  onChange: func
}

export default Modal
