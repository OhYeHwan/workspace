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
  Chip,
  Box,
  InputAdornment,
} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import { observer } from 'mobx-react';

@observer
class UkEditor extends React.Component {
  render() {
    const {
      uks,
      target,
      funcUpdateUk,
      funcTargetOnChange,
      funcAddQuestion,
      funcRemoveQuestion,
      funcKeyPress,
      // funcQuestionChange,
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
              disabled={uks.length === 0 ? true : false}
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
              disabled={uks.length === 0 ? true : false}
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
              disabled={uks.length === 0 ? true : false}
              id="Question"
              style={{ margin: 2 }}
              fullWidth
              margin="normal"
              variant="outlined"
              value={target.question ? target.question : ''}
              onChange={event =>
                funcTargetOnChange('question', event.target.value)
              }
              InputProps={{
                onKeyPress: funcKeyPress,
                endAdornment: (
                  <InputAdornment position="end">
                    <Button onClick={uks.length === 0 ? null : funcAddQuestion}>
                      <InputIcon />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ boxShadow: 3, p: 1, mt: 2 }}>
              {target.questions.map(question => (
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
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="outlined" size="large">
            내용편집
          </Button>
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={funcUpdateUk}
          >
            저장하기
          </Button>
        </Box>
      </Card>
    );
  }
}

export default UkEditor;
