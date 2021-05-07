import React from 'react';
import Cards from '../view/Cards';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { Grid } from '@material-ui/core';
import { action } from 'mobx';

@inject('ekdbStore')
@observer
@autobind
class CardsContainer extends React.Component {
  componentDidMount() {
    this.props.ekdbStore.funcGet();
  }

  @action
  funcGet = e => {
    this.props.ekdbStore.funcGet();
  };

  @action
  funcDel = e => {
    this.props.ekdbStore.funcDel();
  };

  @action
  funcOnChange = (id, value) => {
    this.props.ekdbStore.funcOnChange(id, value);
  };

  @action
  funcDoAction = e => {
    let order = e.target.id;
    this.props.ekdbStore.funcDoAction(order);
    e.preventDefault();
  };

  render() {
    let { ekdbs, searchEkdb } = this.props.ekdbStore;
    const { target, action } = this.props.ekdbStore;

    // ekdbs 배열안에 있는 각각의 원소들에서
    // name의 값에 searchEkdb 문자가 존재한다면 리턴
    ekdbs = ekdbs.filter(
      ekdb => ekdb.name.toLowerCase().indexOf(searchEkdb.toLowerCase()) !== -1,
    );

    return ekdbs.map(ekdb => (
      <Grid item key={ekdb.name} lg={4} md={6} xs={12}>
        <Cards
          ekdb={ekdb}
          target={target}
          action={action}
          funcGet={this.funcGet}
          funcDoAction={this.funcDoAction}
          funcOnChange={this.funcOnChange}
          funcDel={this.funcDel}
        />
      </Grid>
    ));
  }
}

export default CardsContainer;
