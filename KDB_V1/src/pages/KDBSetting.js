import { Helmet } from 'react-helmet';
import {
    Box,
    Container,
    Grid,
    Pagination,
} from '@material-ui/core'
// import CreateKDB from '../components/CreateKDB';
import EKDBListToolbar from '../components/EKDB/EKDBListToolbar';
import EKDBCard from '../components/EKDB/EKDBCard';
import ekdbs from '../components/EKDB/EKDBItems';

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
                <EKDBListToolbar />
                <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {ekdbs.map((ekdb) => (
              <Grid
                item
                key={ekdb.id}
                lg={4}
                md={6}
                xs={12}
                > 
                    <EKDBCard EKDB={ekdb} />
              </Grid>
            ))}
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