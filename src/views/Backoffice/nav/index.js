import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { Box, Button, Drawer, Stack } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import NavSection from './nav-section';

import navConfig from './config';

import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const renderContent = (
    <Box
      sx={{
        height: 1,
        my: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <NavSection data={navConfig} />

      <Stack alignItems="center" spacing={3} sx={{ borderRadius: 2, position: 'relative' }}>
        <Button variant="contained">
          <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
            Volver al inicio
          </Link>
        </Button>
      </Stack>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
