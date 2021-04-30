import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { experimentalStyled } from '@material-ui/core';
import KDBNavbar from './KDBNavbar';
import KDBSidebar from './KDBSidebar';

const KDBLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const KDBLayoutWrapper = experimentalStyled('div')(
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

const KDBLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const KDBLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const KDBLayout = () => {

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <KDBLayoutRoot>
          <KDBNavbar onMobileNavOpen={() => setMobileNavOpen(true)}/>
      <KDBSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <KDBLayoutWrapper>
        <KDBLayoutContainer>
          <KDBLayoutContent>
            <Outlet />
          </KDBLayoutContent>
        </KDBLayoutContainer>
      </KDBLayoutWrapper>
    </KDBLayoutRoot>
  );
};

export default KDBLayout;
