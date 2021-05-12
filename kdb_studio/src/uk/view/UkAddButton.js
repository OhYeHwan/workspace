import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';

class UkAddButton extends React.Component {
  render() {
    const { funcAddUk } = this.props;
    return (
      <Tooltip title="UK 추가하기">
        <IconButton arial-labe="Add UK" onClick={funcAddUk}>
          <AddIcon />
        </IconButton>
      </Tooltip>
    );
  }
}

export default UkAddButton;
