import React, { Component } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import EKDBCreateDialog from './EKDBCreateDialog';

class EKDBListToolbar extends Component {

  render() {

    const { ekdb, onSetEKDBProps, onHandleCreateEKDB } = this.props;

    return (
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <EKDBCreateDialog
            ekdb={ ekdb }
            onSetEKDBProps={onSetEKDBProps}
            onHandleCreateEKDB={onHandleCreateEKDB}
          />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Card>
            <CardContent>
              <Box sx={{ maxWidth: 500 }}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon
                          fontSize="small"
                          color="action"
                        >
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="Search EKDB"
                  variant="outlined"
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    );
  }
}

export default EKDBListToolbar;
