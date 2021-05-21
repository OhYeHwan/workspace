import { Helmet } from 'react-helmet';
import ExListContainer from '../uk/container/ExListContainer';
import { Box, Container, Grid } from '@material-ui/core';

const UK = () => (
  <>
    <Helmet>
      <title>KDB Studio</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={1}>
          <Grid sx={{ boxShadow: '2' }} item xl={2} lg={2} md={12} xs={12}>
            <ExListContainer />
          </Grid>
          <Grid
            sx={{ boxShadow: '2' }}
            item
            xl={10}
            lg={10}
            md={12}
            xs={12}
          ></Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default UK;
