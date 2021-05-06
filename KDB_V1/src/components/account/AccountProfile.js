import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@material-ui/core';

const user = {
  avatar: '/static/images/avatars/avatar_12.png',
  city: 'Seoul',
  country: 'Republic of Korea',
  jobTitle: 'Senior Developer',
  name: 'YeHwan Oh',
  timezone: 'GTM-7',
};

const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 200,
            width: 200,
            margin: '10px',
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h3">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body1">
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography color="textSecondary" variant="body1">
          {`${moment().format('hh:mm A')} ${user.timezone}`}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button color="primary" fullWidth variant="text">
        Upload picture
      </Button>
    </CardActions>
  </Card>
);

export default AccountProfile;
