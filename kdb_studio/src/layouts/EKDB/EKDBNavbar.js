import { AppBar, Toolbar, Box, Hidden, IconButton } from '@material-ui/core';
import Logo from '../../components/Logo';
import AccountBox from '../../components/AccountBox';
import MenuIcon from '@material-ui/icons/Menu';

const EKDBNavbar = ({ onMobileNavOpen, ...rest }) => {
  return (
    <AppBar
      elevation={0} // 그림자 0
      {...rest}
    >
      <Toolbar sx={{ height: 64 }}>
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <AccountBox></AccountBox>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default EKDBNavbar;
