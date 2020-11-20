import styled from 'styled-components'

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  .__content {
    position: relative;
    top: 10%;
    margin: 0 auto;
    z-index: 3;
    background-color: white;
    width: 70%;
    padding: 2rem;
    .__exit-button {
      float: right;
      cursor: pointer;
    }
  }
`

export default ModalStyle
