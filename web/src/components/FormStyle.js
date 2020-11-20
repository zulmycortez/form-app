import styled from 'styled-components'

const FormStyle = styled.div`
  h4 {
    font-size: 1.5rem;
  }
  .__form-item {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    label {
      padding-bottom: .5rem;
    }
    input {
      position: relative;
      padding: .5rem;
    }
    .__valid {
      position: absolute;
      right: 2.5rem;
      margin-top: 2.2rem;
    }
  }
  .__action-buttons {
    display: flex;
    margin-top: 1rem;
    justify-content: flex-end;
    > button {
      margin-left: 1.5rem;
    }
  }
  .__error {
    display: flex;
    margin-top: 1rem;
    justify-content: flex-end;
  }
`

export default FormStyle
