import styled from 'styled-components'

const AppStyle = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .__add-button {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    svg {
      cursor: pointer;
    }
  }
  .__form-header {
    text-align: center;
  } 
`

export default AppStyle
