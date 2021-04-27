import React, { Component } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { inject, observer } from "mobx-react";

@inject("xsdStore")
@observer
class SearchbarContainer extends Component {
  onChangeSearchText(searchText) {
    this.props.xsdStore.setSearchText(searchText);
  }
  render() {
    return (
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(event) => this.onChangeSearchText(event.target.value)}
      />
    );
  }
}

export default SearchbarContainer;
