import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box, TextField, Button } from '@material-ui/core';

const EKDBCreateDialog = (props) => {
  const {
    ekdb,
    EKDB,
    onSetEKDBProps,
    onHandleCreateEKDB,
    handleUpdateEKDB,
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    EKDB
      ? onSetEKDBProps('EKDB_NAME', EKDB.EKDB_NAME)
      : onSetEKDBProps('EKDB_NAME', '');
    EKDB
      ? onSetEKDBProps('EKDB_DES', EKDB.EKDB_DES)
      : onSetEKDBProps('EKDB_DES', '');
  };

  const handleClose = () => {
    setOpen(false);
    onSetEKDBProps('EKDB_NAME', '');
    onSetEKDBProps('EKDB_DES', '');
  };

  const handleCreateSubmit = () => {
    // event.preventDefault();
    onHandleCreateEKDB(ekdb);
    handleClose();
  };

  const handleUpdateSubmit = () => {
    handleUpdateEKDB(ekdb);
    handleClose();
  };

  return (
    <Box>
      <Button color="primary" variant="contained" onClick={handleClickOpen}>
        {props.children}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.children}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.children} 입니다.</DialogContentText>
          <TextField
            disabled={props.children === '수정하기' ? true : false}
            value={ekdb && ekdb.EKDB_NAME ? ekdb.EKDB_NAME : ''}
            onChange={(event) =>
              onSetEKDBProps('EKDB_NAME', event.target.value)
            }
            margin="dense"
            id="Name"
            label="EKDB Name"
            fullWidth
          />
          <TextField
            multiline
            rows={6}
            value={ekdb && ekdb.EKDB_DES ? ekdb.EKDB_DES : ''}
            onChange={(event) => onSetEKDBProps('EKDB_DES', event.target.value)}
            margin="dense"
            id="description"
            label="EKDB Description"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <form
            onClick={
              props.children === 'EKDB 생성하기'
                ? handleCreateSubmit
                : handleUpdateSubmit
            }
          >
            <Button color="primary">{props.children}</Button>
          </form>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EKDBCreateDialog;
