import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 16px 'Roboto', sans-serif;
    background: #f0f0f5;
    -webkit-font--smoothing: antialiased;
  }
  
  input, button, textarea {
    font: 400 20px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
