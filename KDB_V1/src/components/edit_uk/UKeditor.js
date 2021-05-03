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
  Chip,
  Box,
  InputAdornment,
  Grid
} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';

const UKeditor = (props) => {

  const {
    uk,
    question,
    questions,
    onSetUKProps,
    onChangeQuestion,
    onCreateUK,
    onAddQuestion,
    onRemoveQuestion,
    onKeyPress,
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
              value={question ? question : ""}
              onChange={(event) => onChangeQuestion(event.target.value)}
              margin="normal"
              variant="outlined"
              InputProps={{
                onKeyPress: onKeyPress,
                endAdornment: (
                  <InputAdornment position="end" >
                      <Button  onClick={onAddQuestion}>
                        <InputIcon/>
                      </Button>
                  </InputAdornment>
                )
              }}
            />
            <Box sx={{ boxShadow: 3, p: 1, mt: 2 }} >
              {questions.map((question) => (
                <Chip
                  sx={{p: 1 , m: 1}}
                    label={question.q}
                    onDelete = {() => onRemoveQuestion(question.id)}
                    color="primary" 
                  />
              ))}
            </Box>
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
