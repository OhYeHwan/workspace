import React, { Component } from "react";
import XsdEditFormView from "../views/XsdEditFormView";
import { inject, observer } from "mobx-react";
import autobind from "autobind-decorator";
import generateId from "../IDGenerator";

@inject("xsdStore")
@autobind
@observer
class XsdEditFormContainer extends Component {
  onSetXsdProps(name, value) {
    this.props.xsdStore.setXsdProps(name, value);
  }

  onAddXsd() {
    let { xsd } = this.props.xsdStore;
    xsd = {
      id: generateId(5),
      file_name: "undefined.xsd",
      code: "Input XSD Code",
    };
    this.props.xsdStore.addXsd(xsd);
  }

  onUpdateXsd() {
    this.props.xsdStore.updateXsd();
  }

  onRemoveXsd() {
    this.props.xsdStore.removeXsd();
  }

  render() {
    const { xsdStore } = this.props;

    return (
      <XsdEditFormView
        xsd={xsdStore.xsd}
        onSetXsdProps={this.onSetXsdProps}
        onAddXsd={this.onAddXsd}
        onUpdateXsd={this.onUpdateXsd}
        onRemoveXsd={this.onRemoveXsd}
      />
    );
  }
}

export default XsdEditFormContainer;
