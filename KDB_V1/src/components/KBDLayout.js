import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core';
import KDBNavbar from './KDBNavbar';

const KDBLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
}));

const KDBLayoutWrapper = experimentalStyled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
  // [theme.breakpoints.up('lg')]: {
  //   paddingLeft: 210
  // }
}));

const KDBLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

const KDBLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});

const KDBLayout = () => {
  return (
    <KDBLayoutRoot>
      <KDBNavbar />
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
