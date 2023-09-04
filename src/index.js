import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/fonts.scss';
import './styles/globals.scss';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "react-redux";
import store from './features/store'

if (!process.env.REACT_APP_IN_DEVELOPMENT) {
  console.log = () => {}
  console.error = () => {}
  console.debug = () => {}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ChakraProvider resetCSS={false}>
          <App /> 
        </ChakraProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);

