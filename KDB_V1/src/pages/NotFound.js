import { Helmet } from 'react-helmet';
import { Box, Container, Typography } from '@material-ui/core';

const NotFound = () => (
  <>
    <Helmet>
      <title>404</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography align="center" color="textPrimary" variant="h2">
          404: 페이지를 찾을 수 없습니다.
        </Typography>
        <Typography align="center" color="textPrimary" variant="subtitle2">
          입력하신 주소를 다시 한번 확인해 주세요.
        </Typography>
      </Container>
    </Box>
  </>
);

export default NotFound;
