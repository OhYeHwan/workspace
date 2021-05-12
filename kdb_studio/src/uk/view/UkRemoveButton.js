import { IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';

class UkRemoveButton extends React.Component {
  submitRemove = () => {
    let id = this.props.id;
    console.log(id);
    this.props.funcRemoveUk(id);
  };

  render() {
    return (
      <Tooltip title="UK 삭제하기">
        <IconButton arial-labe="Remove UK" onClick={this.submitRemove}>
          <RemoveIcon color="secondary" fontSize="small" />
        </IconButton>
      </Tooltip>
    );
  }
}

export default UkRemoveButton;
