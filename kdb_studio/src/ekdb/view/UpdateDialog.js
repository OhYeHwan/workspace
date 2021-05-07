import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box, TextField, Button } from '@material-ui/core';

class UpdateDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  UpdateSubmit = () => {
    // this.props.funcInsert();
    this.handleClose();
  };

  render() {
    const { funcOnChange, target } = this.props;
    const { open } = this.state;
    return (
      <Box>
        <Button
          color="primary"
          variant="contained"
          onClick={this.handleClickOpen}
        >
          {this.props.children}
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            {this.props.children}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>{this.props.children} 입니다.</DialogContentText>
            <TextField
              value={target ? target.name : ''}
              onChange={event => funcOnChange('name', event.target.value)}
              margin="dense"
              id="Name"
              label="EKDB Name"
              fullWidth
            />
            <TextField
              value={target ? target.des : ''}
              onChange={event => funcOnChange('des', event.target.value)}
              multiline
              rows={6}
              margin="dense"
              id="description"
              label="EKDB Description"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.UpdateSubmit}>
              {this.props.children}
            </Button>
            <Button onClick={this.handleClose} color="primary">
              취소
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }
}

export default UpdateDialog;
