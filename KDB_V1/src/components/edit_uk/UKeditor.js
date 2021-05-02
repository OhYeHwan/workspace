import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

const UKeditor = (props) => (
  <Card {...props}>
    <CardHeader title="UK Editor" />
    <Divider />
    <PerfectScrollbar>
      <CardContent>
        <form>
          <Typography color="textSecondary" gutterBottom>
            UK Name
          </Typography>
          <TextField
            id="UK Name"
            label="필수 입력란"
            style={{ margin: 2 }}
            required
            fullWidth
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
            margin="normal"
            variant="outlined"
          />
          <Divider style={{ margin: 20 }} />
          <Typography color="textSecondary" gutterBottom>
            URI
          </Typography>
          <TextField
            id="URI"
            style={{ margin: 2 }}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Divider style={{ margin: 20 }} />
          <Typography color="textSecondary" gutterBottom>
            Question
          </Typography>
          <TextField
            id="Question"
            style={{ margin: 2 }}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </form>
      </CardContent>
    </PerfectScrollbar>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Edit
      </Button>
    </CardActions>
  </Card>
);

export default UKeditor;
