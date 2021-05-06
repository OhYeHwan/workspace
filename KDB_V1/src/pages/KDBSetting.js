import { Helmet } from 'react-helmet';
import {
    Box,
    Container,
    Grid,
    Pagination,
} from '@material-ui/core'
import EKDBListToolbarContainer from '../components/EKDB/EKDBListToolbarContainer';
import EKDBCardListContainer from '../components/EKDB/EKDBCardListContainer'

const KDBSetting = () => (
    <>
        <Helmet>
            <title>EKDB Setting</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                height: '100%',
                py: 3,
            }}
        >
            <Container maxWidth={false}>
                <EKDBListToolbarContainer />
                <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            <EKDBCardListContainer/>
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={1}
            size="small"
          />
        </Box>
      </Container>
        </Box>
    </>
);

export default KDBSetting;