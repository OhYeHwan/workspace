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
import InputDialog from './InputDialog';
import React from 'react';

class Cards extends React.Component {
  render() {
    const { ekdb } = this.props;

    return (
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <CardActionArea onClick={event => console.log(event)}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pb: 3,
              }}
            >
              <Avatar alt="ekdb" variand="square" />
            </Box>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h4"
            >
              {ekdb.name}
            </Typography>
            <Typography align="center" color="textPrimary" variant="body1">
              {ekdb.des}
            </Typography>
          </CardContent>
          <Box sx={{ flexGrow: 1 }} />
          <Divider />
        </CardActionArea>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex',
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
                display: 'flex',
              }}
            >
              <InputDialog>수정하기</InputDialog>
              <Button>삭제</Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    );
  }
}

Cards.propTypes = {
  ekdb: PropTypes.object.isRequired,
};

export default Cards;
