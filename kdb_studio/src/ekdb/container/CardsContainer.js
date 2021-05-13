import React from 'react';
import Cards from '../view/Cards';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { Grid } from '@material-ui/core';
import { action } from 'mobx';

@inject('ekdbStore')
@inject('ukStore')
@observer
@autobind
class CardsContainer extends React.Component {
  componentDidMount() {
    this.props.ekdbStore.funcGet();
  }

  @action
  funcSetDBid = DBid => {
    this.props.ukStore.funcSetDBid(DBid);
  };

  @action
  funcUpdate = id => {
    this.props.ekdbStore.funcUpdate(id);
  };

  @action
  funcDel = id => {
    this.props.ekdbStore.funcDel(id);
  };

  @action
  funcOnChange = (key, value) => {
    this.props.ekdbStore.funcOnChange(key, value);
  };

  render() {
    let { ekdbs, searchEkdb } = this.props.ekdbStore;
    const { target } = this.props.ekdbStore;

    // ekdbs 배열안에 있는 각각의 원소들에서
    // name의 값에 searchEkdb 문자가 존재한다면 리턴
    ekdbs = ekdbs.filter(
      ekdb => ekdb.name.toLowerCase().indexOf(searchEkdb.toLowerCase()) !== -1,
    );

    return ekdbs.map(ekdb => (
      <Grid item key={ekdb.id} lg={4} md={6} xs={12}>
        <Cards
          ekdb={ekdb}
          target={target}
          funcSetDBid={this.funcSetDBid}
          funcOnChange={this.funcOnChange}
          funcDel={this.funcDel}
          funcUpdate={this.funcUpdate}
        />
      </Grid>
    ));
  }
}

export default CardsContainer;
