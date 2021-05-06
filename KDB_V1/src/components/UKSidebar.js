import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Drawer, Hidden, List } from '@material-ui/core';
import {
  User as UserIcon,
  PlusCircle as PlusCircleIcon,
  Home as HomeIcon,
} from 'react-feather';
import NavItem from './NavItem';

const items = [
  {
    href: '/uk',
    icon: PlusCircleIcon,
    title: 'Edit UK',
  },
  {
    href: '/uk/account',
    icon: UserIcon,
    title: 'Account',
  },
  {
    href: '/kdb',
    icon: HomeIcon,
    title: 'Home',
  },
];

const UKSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname, onMobileClose, openMobile]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box sx={{ p: 0 }}>
        <List>
          {items.map(item => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 60,
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 60,
              top: 64,
              height: 'calc(100% - 64px)',
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

UKSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

UKSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default UKSidebar;
