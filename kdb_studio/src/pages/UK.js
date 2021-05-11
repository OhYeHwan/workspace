import { Helmet } from 'react-helmet';
import EditorContainer from '../uk/container/EditorContainer';
import ListViewContainer from '../uk/container/ListViewContainer';
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
          <Grid item lg={4} md={12} xl={3} xs={12}>
            <ListViewContainer />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <EditorContainer />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default UK;
