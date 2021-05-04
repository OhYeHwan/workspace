import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
Typography,
  CardActionArea,
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { useNavigate } from 'react-router-dom';

const EKDBCard = ({ EKDB, ...rest }) => {
    const navigate = useNavigate();
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
            {...rest}
        >
            <CardActionArea onClick={() => { navigate('/uk', { replace: true }); }}>
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            pb: 3
                        }}
                    >
                        <Avatar
                            alt="EKDB"
                            variant="square"
                        />
                    </Box>
                    <Typography
                        align="center"
                        color="textPrimary"
                        gutterBottom
                        variant="h4"
                    >
                        {EKDB.EKDB_NAME}
                    </Typography>
                    <Typography
                        align="center"
                        color="textPrimary"
                        variant="body1"
                    >
                        {EKDB.EKDB_DES}
                    </Typography>
                </CardContent>
                <Box sx={{ flexGrow: 1 }} />
                <Divider />
                <Box sx={{ p: 2 }}>
                    <Grid
                        container
                        spacing={2}
                        sx={{ justifyContent: 'space-between' }}
                    >
                        <Grid
                            item
                            sx={{
                                alignItems: 'center',
                                display: 'flex'
                            }}
                        >
                            <AccessTimeIcon color="action" />
                            <Typography
                                color="textSecondary"
                                display="inline"
                                sx={{ pl: 1 }}
                                variant="body2"
                            >
                                Updated 2hr ago
          </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </CardActionArea>
        </Card>
    );
};

EKDBCard.propTypes = {
  EKDB: PropTypes.object.isRequired
};

export default EKDBCard;
