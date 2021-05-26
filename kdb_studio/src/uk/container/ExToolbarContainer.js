import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Box, IconButton } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject('exStore')
@observer
@autobind
class ExToolbarContainer extends React.Component {
  funcAddRootUk = () => {
    this.props.exStore.funcAddRootUk();
  };

  render() {
    return (
      <Box sx={{ height: '5%', boxShadow: 1 }}>
        <IconButton arial-labe="Add root UK" onClick={this.funcAddRootUk}>
          <AddIcon />
        </IconButton>
      </Box>
    );
  }
}

export default ExToolbarContainer;
