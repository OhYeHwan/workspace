import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import React from 'react';
import ListView from '../view/ListView';

@inject('ukStore')
@observer
@autobind
class ListViewContainer extends React.Component {
  render() {
    return <ListView />;
  }
}

export default ListViewContainer;
