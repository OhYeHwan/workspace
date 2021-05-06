import { Box, Avatar } from '@material-ui/core';

const user = {
  avatar: '/static/images/avatars/avatar_12.png',
  email: 'azss0470@gmail.com',
  name: 'YeHwan Oh',
};

const Account = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      alignItems: 'center',
    }}
  >
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        p: 1,
      }}
    >
      <Avatar
        alt={user.name}
        src={user.avatar}
        sx={{
          cursor: 'pointer',
          width: 32,
          height: 32,
        }}
      />
    </Box>
    <Box
      sx={{
        alignItems: 'flex-start',
        flexDirection: 'row',
      }}
    >
      <Box fontSize="16px">{user.name}</Box>

      <Box fontSize="12px">{user.email}</Box>
    </Box>
  </Box>
);

export default Account;
