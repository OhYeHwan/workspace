import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
  Button,
  Box,
} from '@material-ui/core';
import { observer } from 'mobx-react';

@observer
class ExUkEditor extends React.Component {
  render() {
    const { target } = this.props;

    return (
      <Card>
        <CardHeader title="UK Editor" />
        <Divider />
        <PerfectScrollbar>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              UK Name
            </Typography>
            <TextField
              id="UK Name"
              label="필수 입력"
              style={{ margin: 2 }}
              required
              fullWidth
              value={target.name}
              margin="normal"
              variant="outlined"
            />
            <Divider style={{ margin: 20 }} />
            <Typography color="textSecondary" gutterBottom>
              Description
            </Typography>
            <TextField
              id="Description"
              style={{ margin: 2 }}
              fullWidth
              multiline
              rows={4}
              value={target.des}
              margin="normal"
              variant="outlined"
            />
          </CardContent>
        </PerfectScrollbar>
        <Divider />
        <Box sx={{ textAlign: 'center' }}>
          <Button color="primary" variant="contained" size="large">
            저장하기
          </Button>
        </Box>
      </Card>
    );
  }
}

export default ExUkEditor;
