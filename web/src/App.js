import React, { useState } from 'react'
import AddIcon from './assets/AddIcon'
import { Modal } from './components'
import { FormAdd, FormTable } from './Form'
import AppStyle from './AppStyle'

const App = () => {
  const [modalOn, setModalOn] = useState(false)
  const [refresh, setRefresh] = useState(0)

  const onModalChange = () => {
    setModalOn(modalOn => !modalOn)
  }

  const onRefresh = () => {
    setRefresh(refresh => refresh + 1)
  }

  return (
    <AppStyle>
      <Modal
        on={modalOn}
        onChange={onModalChange}
      >
        <FormAdd
          onModalChange={onModalChange}
          onRefresh={onRefresh}
        />
      </Modal>
      <h3 className="__form-header">
        Add a favorite person.
      </h3>
      <FormTable
        key={refresh}
        onRefresh={onRefresh}
      />
      <AddIcon
        onClick={onModalChange}
        className="__add-button"
      />
    </AppStyle>
  )
}

export default App;
