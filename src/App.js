import { MantineProvider } from '@mantine/core'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import ThemeProvider from './theme';

import CustomFonts from './components/CustomFonts'

import ErrorPage from './views/404';
import HomePage from './views/HomePage';
import Search from './views/Search';
import BackofficeLayout from './views/Backoffice/layout';

import "react-toastify/dist/ReactToastify.css";
import Dashboard from './components/AdminDashboard/Dashboard';

function App() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <ParallaxProvider>
          <MantineProvider 
            theme={{
              colorScheme: 'dark',
              focusRing: 'never',
              fontFamily: ['Gotham', 'Proxima Nova', 'Lexend'],
              fontFamilyMonospace: ['Gotham', 'Proxima Nova', 'Lexend'],
              headings: {
                fontFamily: ['Gotham', 'Proxima Nova', 'Lexend']
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
        <ThemeProvider>

            <CustomFonts />
            <ToastContainer pauseOnHover={false} theme='dark' autoClose={2000}/>
            <Routes location={location} key={location.pathname}>
              <Route index element={<HomePage />}/>
              <Route path="/categories" element={<HomePage />}/>
              <Route path="/projects" element={<HomePage />}/>
              <Route path="/contact" element={<HomePage />}/>
              <Route path="/search" element={<Search />}/>
              <Route path="/404" element={<ErrorPage />} />
              <Route path="/backoffice" element={<BackofficeLayout />}>
                  <Route index element={<Dashboard />}/>
              </Route>
              <Route path="*" element={<Navigate replace to='/404' />} />
            </Routes>
        </ThemeProvider>
          </MantineProvider>
      </ParallaxProvider>
    </AnimatePresence>
  );
}

export default App;
