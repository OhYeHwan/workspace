import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core';
import UKNavbar from './UKNavbar';
import UKSidebar from './UKSidebar';
import { useState } from 'react';

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
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
      <UKLayoutRoot>
      <UKNavbar onMobileNavOpen={()=> setMobileNavOpen(true)}/>
      <UKSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
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
