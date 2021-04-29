import { AppBar, Toolbar } from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => (
    <AppBar
        style={{
            background: '#000000'
        }}
        elevation={0} // 그림자 0
        {...props}
    >
        <Toolbar sx={{ height: 64 }}>
            <Logo />
        </Toolbar>
    </AppBar>

);

export default MainNavbar;