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
  Button,
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { useNavigate } from 'react-router-dom';
import EKDBCreateDialog from './EKDBCreateDialog';


const EKDBCard = (props) => {

    const {
        ekdb,
        EKDB,
        onSetEKDBProps,
        onHandleDeleteEKDB,
        onHandleUpdateEKDB,
    } = props;

    const handleDeleteSubmit = () => {
        console.log(EKDB.EKDB_NAME);
        onHandleDeleteEKDB(EKDB.EKDB_NAME);
    }

    const handleUpdateEKDB = () => {
        console.log("EKDB Card handleUpdateEKDB");
        onHandleUpdateEKDB(ekdb);
    }

    const navigate = useNavigate();
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
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
                            alt="ekdb"
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
            </CardActionArea>
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
                        <Grid
                            item
                            sx={{
                                alignItems: 'center',
                                display: 'flex'
                            }}
                        >
                            <EKDBCreateDialog
                                ekdb={ekdb}
                                EKDB={EKDB}
                                onSetEKDBProps={onSetEKDBProps}
                                handleUpdateEKDB={handleUpdateEKDB}
                            >
                                수정하기
                            </EKDBCreateDialog>
                            <Button onClick={handleDeleteSubmit} variant="contained" color="secondary">
                                삭제
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
        </Card>
    );
};

EKDBCard.propTypes = {
  ekdb: PropTypes.object.isRequired
};

export default EKDBCard;
