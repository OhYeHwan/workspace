import { Helmet } from 'react-helmet';
import {
    Box,
    Container,
    Card,
    Grid,
    Pagination
} from '@material-ui/core'

const KDBSetting = () => (
    <>
        <Helmet>
            <title>EKDB Setting</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3
            }}
        >
            <Container maxWidth={false}>
                <Box sx={{ pt: 3 }}>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Card>
                            dsaddsaddsaddsad
                        </Card>
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