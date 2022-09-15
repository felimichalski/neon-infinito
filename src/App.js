import { MantineProvider } from '@mantine/core'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import ErrorPage from './views/404.js';
import HomePage from './views/HomePage';

function App() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <MantineProvider theme={{colorScheme: 'dark', focusRing: 'never', white: 'white'}}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />}/>
          <Route path="/categorias" element={<HomePage />}/>
          <Route path="/proyectos" element={<HomePage />}/>
          <Route path="/nosotros" element={<HomePage />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MantineProvider>
    </AnimatePresence>
  );
}

export default App;
