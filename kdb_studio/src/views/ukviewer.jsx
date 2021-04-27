import React, { Component } from "react";
import { Box } from "@material-ui/core";
import XsdEditFormContainer from "../containers/XsdEditFormContainer";
import XsdListContainer from "../containers/XsdListContainer";
import SearchbarContainer from "../containers/SearchbarContainer";
class UKviewer extends Component {
  render() {
    return (
      <Box display="flex" flexDirection="row">
        <Box style={{ width: "200px" }} p={1} m={1} bgcolor="grey.200">
          <SearchbarContainer />
          <XsdListContainer />
        </Box>
        <Box p={1} m={1} bgcolor="grey.200">
          <XsdEditFormContainer />
        </Box>
      </Box>
    );
  }
}

export default UKviewer;
