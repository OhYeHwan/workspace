import { AppBar, Toolbar, Box, Hidden, IconButton } from '@material-ui/core';
import Logo from './Logo';
import AccountBox from './AccountBox';
import MenuIcon from '@material-ui/icons/Menu';

const UKNavbar = ({onMobileNavOpen, ...rest}) => {
    
    return (
        <AppBar
            elevation={0} // 그림자 0
            {...rest}
        >
            <Toolbar sx={{ height: 64 }}>
                <Logo />
                <Box sx={{ flexGrow: 1 }} />
                <Hidden lgDown>
                    <AccountBox />
                </Hidden>
                <Hidden lgUp>
                    <IconButton
                        color="inherit"
                        onClick={onMobileNavOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
};

export default UKNavbar;