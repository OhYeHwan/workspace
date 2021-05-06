import React, { Component } from 'react';
import EKDBCard from './EKDBCard';
import { inject, observer } from 'mobx-react';
import { Grid } from '@material-ui/core';
import autobind from 'autobind-decorator';

@inject("ekdbStore")
@inject("ukStore")
@observer
@autobind
class EKDBCardListContainer extends Component {

    // 처음 렌더링 시 서버로부터 EKDBs 데이터를 받아온다.
    componentDidMount() {
        this.props.ekdbStore.getEKDBs();
    }

    onSetEKDBProps(name, value) {
        this.props.ekdbStore.setEKDBProps(name, value);
    }

    onHandleDeleteEKDB(ekdb) {
        this.props.ekdbStore.handleDeleteEKDB(ekdb);
    }

    onHandleUpdateEKDB(ekdb) {
        this.props.ekdbStore.handleUpdateEKDB(ekdb);
    }

    render() {
        const { ekdbStore } = this.props;
        return (
            <>
                {this.props.ekdbStore.ekdbs.map((EKDB) => (
                    <Grid
                        item
                        key = { EKDB.EKDB_NAME }
                        lg = { 4}
                        md = { 6}
                        xs = { 12}
                    >
                        <EKDBCard
                            ekdb={ekdbStore.ekdb}
                            EKDB={EKDB}
                            onSetEKDBProps={this.onSetEKDBProps}
                            onHandleCreateEKDB={this.onHandleCreateEKDB}
                            onHandleDeleteEKDB={this.onHandleDeleteEKDB}
                            onHandleUpdateEKDB={this.onHandleUpdateEKDB}
                        />
                    </Grid>
                ))}
            </>
        );
    }

}

export default EKDBCardListContainer;