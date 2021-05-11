import React from 'react';
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
} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';

class Editor extends React.Component {
  render() {
    const {
      target,
      question,
      questions,
      funcTargetOnChange,
      funcAddQuestion,
      funcRemoveQuestion,
      funcKeyPress,
      funcQuestionChange,
    } = this.props;
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
              value={target && target.name ? target.name : ''}
              onChange={event => funcTargetOnChange('name', event.target.value)}
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
              value={target && target.des ? target.des : ''}
              onChange={event => funcTargetOnChange('des', event.target.value)}
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
              value={question ? question : ''}
              onChange={event => funcQuestionChange(event.target.value)}
              InputProps={{
                onKeyPress: funcKeyPress,
                endAdornment: (
                  <InputAdornment position="end">
                    <Button onClick={funcAddQuestion}>
                      <InputIcon />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ boxShadow: 3, p: 1, mt: 2 }}>
              {questions.map(question => (
                <Chip
                  key={question.id}
                  sx={{ p: 1, m: 1 }}
                  label={question.q}
                  onDelete={() => funcRemoveQuestion(question.id)}
                  color="primary"
                />
              ))}
            </Box>
          </CardContent>
        </PerfectScrollbar>
        <Divider />
        <CardActions>
          <Button color="primary" fullWidth variant="text">
            Edit
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Editor;
