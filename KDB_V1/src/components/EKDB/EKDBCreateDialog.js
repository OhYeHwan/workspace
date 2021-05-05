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
        onSetEKDBProps,
        onHandleCreateEKDB,
    } = props;

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onSetEKDBProps("title", "");
        onSetEKDBProps("description", "")
    };

    const handleCreateSubmit = (event) => {
        // event.preventDefault();
        onHandleCreateEKDB(ekdb);
        handleClose();
    }

    return (
        <Box>
            <Button
                color="primary"
                variant="contained"
                onClick={handleClickOpen}
            >
                EKDB 생성하기
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id = "form-dialog-title">EKDB 생성하기</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        EKDB 생성하기 입니다.
                    </DialogContentText>
                    <TextField
                        value={ ekdb.title ? ekdb.title : ""}
                        onChange={(event) => onSetEKDBProps("title", event.target.value)}
                        margin="dense"
                        id="title"
                        label="EKDB title"
                        fullWidth
                    />
                    <TextField
                        multiline
                        rows={6}
                        value={ ekdb.description ? ekdb.description : ""}
                        onChange={(event => onSetEKDBProps("description", event.target.value))}
                        margin="dense"
                        id="description"
                        label="EKDB Description"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <form onClick={handleCreateSubmit}>
                        <Button color="primary">
                            생성하기
                        </Button>
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