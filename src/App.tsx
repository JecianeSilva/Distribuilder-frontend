import React, { Suspense } from 'react';
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';
import Home from './pages/Home/Index';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <>
      <Suspense fallback={<>Carregando...</>}>
        <Home />
      </Suspense>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        pauseOnHover
      /></>
  </ThemeProvider>
)

export default App
