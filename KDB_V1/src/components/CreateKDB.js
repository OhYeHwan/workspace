import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const CreateKDB = () => (
    <Card
        sx={{
            display: 'flex',
            height: 240,
            width: 220
        }}
    >
        <CardContent>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
            </Box>
        </CardContent>
    </Card>
);

export default CreateKDB;