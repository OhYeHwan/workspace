import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import CardsContainer from '../ekdb/container/CardsContainer';
import ToolbarContainer from '../ekdb/container/ToolbarContainer';

const EKDB = () => (
  <>
    <Helmet>
      <title>EKDB</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        height: '100%',
        py: 3,
      }}
    >
      <Container maxWidth={false}>
        <ToolbarContainer />
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            <CardsContainer />
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3,
          }}
        ></Box>
      </Container>
    </Box>
  </>
);

export default EKDB;
