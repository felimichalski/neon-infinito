import { MantineProvider } from '@mantine/core'
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';

import './App.css';

function App() {

  const location = useLocation();

  return (
    <MantineProvider theme={{colorScheme: 'dark', focusRing: 'never', white: 'white'}}>
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />}/>
        <Route path="/catalogo" element={<HomePage />}/>
        <Route path="/proyectos" element={<HomePage />}/>
        <Route path="/nosotros" element={<HomePage />}/>
      </Routes>
    </MantineProvider>
  );
}

export default App;
