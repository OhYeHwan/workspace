import React, { PureComponent } from "react";
import { TextField, Grid, Button, TextareaAutosize } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

class XsdEditFormView extends PureComponent {
  render() {
    const {
      xsd,
      onSetXsdProps,
      onAddXsd,
      onUpdateXsd,
      onRemoveXsd,
    } = this.props;

    return (
      <form noValidate>
        <Grid>
          <TextField
            margin="dense"
            id="outlined-basic"
            label="File Name(.xsd)"
            variant="standard"
            value={xsd && xsd.file_name ? xsd.file_name : ""}
            onChange={(event) => onSetXsdProps("file_name", event.target.value)}
          />
        </Grid>
        <TextareaAutosize
          style={{ width: "800px" }}
          aria-label="minimum height"
          rowsMin={20}
          placeholder="INPUT XSD CODE"
          value={xsd && xsd.code ? xsd.code : ""}
          onChange={(event) => onSetXsdProps("code", event.target.value)}
        />

        <Grid container justify="flex-end">
          <Button
            variant="contained"
            color="default"
            startIcon={<NoteAddIcon />}
            onClick={onAddXsd}
          >
            New XSD
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={onUpdateXsd}
          >
            Save
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={onRemoveXsd}
          >
            Delete
          </Button>
        </Grid>
      </form>
    );
  }
}

export default XsdEditFormView;
