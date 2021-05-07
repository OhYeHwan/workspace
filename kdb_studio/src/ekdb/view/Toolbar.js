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
import InsertDialog from './InsertDialog';

class Toolbar extends Component {
  render() {
    const { funcInsert, funcOnChange, funcSearchEkdb, target } = this.props;

    return (
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <InsertDialog
            funcInsert={funcInsert}
            funcOnChange={funcOnChange}
            target={target}
          >
            EKDB 생성하기
          </InsertDialog>
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
                        <SvgIcon fontSize="small" color="action">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  onChange={event => funcSearchEkdb(event.target.value)}
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

export default Toolbar;
