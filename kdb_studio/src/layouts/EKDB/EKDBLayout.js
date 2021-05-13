import { Outlet } from 'react-router-dom';
// import { useState } from 'react';
import { experimentalStyled } from '@material-ui/core';
import EKDBNavbar from './EKDBNavbar';
import EKDBSidebar from './EKDBSidebar';

const EKDBLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
}));

const EKDBLayoutWrapper = experimentalStyled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 50,
  },
}));

const EKDBLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

const EKDBLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});

const EKDBLayout = () => {
  // const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <EKDBLayoutRoot>
      {/* <EKDBNavbar onMobileNavOpen={() => setMobileNavOpen(true)} /> */}
      <EKDBNavbar />
      <EKDBSidebar
      // onMobileClose={() => setMobileNavOpen(false)}
      // openMobile={isMobileNavOpen}
      />
      <EKDBLayoutWrapper>
        <EKDBLayoutContainer>
          <EKDBLayoutContent>
            <Outlet />
          </EKDBLayoutContent>
        </EKDBLayoutContainer>
      </EKDBLayoutWrapper>
    </EKDBLayoutRoot>
  );
};

export default EKDBLayout;
