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

const UKeditor = (props) => {

  const {
    uk,
    onSetUKProps,
    onCreateUK,
  } = props;

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    onCreateUK(uk);
  }

  return (
    <Card>
      <CardHeader title="UK Editor" />
      <Divider />
      <PerfectScrollbar>
        <CardContent>
          <>
            <Typography color="textSecondary" gutterBottom>
              UK Name
          </Typography>
            <TextField
              id="UK Name"
              label="필수 입력란"
              style={{ margin: 2 }}
              required
              fullWidth
              value={uk && uk.name ? uk.name : ""}
              onChange={(event) => onSetUKProps("name", event.target.value)}
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
              value={uk && uk.description ? uk.description : ""}
              onChange={(event) => onSetUKProps("description", event.target.value)}
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
              value={uk && uk.uri ? uk.uri : ""}
              onChange={(event) => onSetUKProps("uri", event.target.value)}
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
              value={uk && uk.question ? uk.question : ""}
              onChange={(event) => onSetUKProps("question", event.target.value)}
              margin="normal"
              variant="outlined"
            />
          </>
        </CardContent>
      </PerfectScrollbar>
      <Divider />
      <form onClick={handleCreateSubmit}>
        <CardActions>
          <Button
            color="primary"
            fullWidth
            variant="text"
            >
            Edit
          </Button>
        </CardActions>
      </form>
    </Card>
  )
};

export default UKeditor;
