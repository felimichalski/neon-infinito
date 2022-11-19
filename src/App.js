import { MantineProvider } from '@mantine/core'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";

import CustomFonts from './components/CustomFonts'

import ErrorPage from './views/404.js';
import HomePage from './views/HomePage';
import Search from './views/Search.js';

import "react-toastify/dist/ReactToastify.css";

function App() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <ParallaxProvider>
        <MantineProvider 
          theme={{
            colorScheme: 'dark',
            focusRing: 'never',
            fontFamily: ['Gotham', 'Proxima Nova'],
            fontFamilyMonospace: ['Gotham', 'Proxima Nova'],
            headings: {
              fontFamily: ['Gotham', 'Proxima Nova']
            },
            breakpoints: {
              xs: 350,
              sm: 600,
              md: 850,
              lg: 1100,
              xl: 1400,
            },
          }}
        >
          <CustomFonts />
          <ToastContainer pauseOnHover={false} theme='dark' autoClose={2000}/>
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage />}/>
            <Route path="/categories" element={<HomePage />}/>
            <Route path="/projects" element={<HomePage />}/>
            <Route path="/contact" element={<HomePage />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </MantineProvider>
      </ParallaxProvider>
    </AnimatePresence>
  );
}

export default App;
