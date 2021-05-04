import { Helmet } from 'react-helmet';
import {
    Box,
    Container,
    Grid,
    Pagination,
} from '@material-ui/core'
import EKDBListToolbarContainer from '../components/EKDB/EKDBListToolbarContainer';
import EKDBListContainer from '../components/EKDB/EKDBListContainer'

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
            <EKDBListContainer/>
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