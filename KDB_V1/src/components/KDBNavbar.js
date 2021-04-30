import { AppBar, Toolbar, Box } from '@material-ui/core';
import Logo from './Logo';
import AccountBox from './AccountBox';

const KDBNavbar = ({Login, ...rest}) => {
    
    return (
        <AppBar
            elevation={0} // 그림자 0
            {...rest}
        >
            <Toolbar sx={{ height: 64 }}>
                <Logo />
                <Box sx={{ flexGrow: 1 }} />
                <AccountBox />
            </Toolbar>
        </AppBar>
    )
};

export default KDBNavbar;