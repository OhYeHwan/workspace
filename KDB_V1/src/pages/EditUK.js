import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
// import UKeditor from '../components/edit_uk/UKeditor';
import UKlist from '../components/edit_uk/UKlist';
import UKeditorContainer from '../components/edit_uk/UKeditorContainer';
      
const EditUK = () => (
  <>  
    <Helmet>
      <title>KDB Studio</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            lg={4}
            md={12}
            xl={3}
            xs={12}
          >
            <UKlist sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <UKeditorContainer sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default EditUK;
