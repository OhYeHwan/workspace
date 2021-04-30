import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core';
import UKNavbar from './UKNavbar';
import UKSidebar from './UKSidebar';

const UKLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const UKLayoutWrapper = experimentalStyled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 50
    }
  })
);

const UKLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const UKLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const UKLayout = () => {

  return (
    <UKLayoutRoot>
      <UKNavbar />
      <UKSidebar />
      <UKLayoutWrapper>
        <UKLayoutContainer>
          <UKLayoutContent>
            <Outlet />
          </UKLayoutContent>
        </UKLayoutContainer>
      </UKLayoutWrapper>
    </UKLayoutRoot>
  );
};

export default UKLayout;
