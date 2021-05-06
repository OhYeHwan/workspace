import { AppBar, Toolbar, Box } from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = ({ Login, ...rest }) => {
  return (
    <AppBar
      elevation={0} // 그림자 0
      {...rest}
    >
      <Toolbar sx={{ height: 64 }}>
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
