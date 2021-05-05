import React, { Component } from 'react';
import EKDBCard from './EKDBCard';
import { inject, observer } from 'mobx-react';
import { Grid } from '@material-ui/core';
import autobind from 'autobind-decorator';



@inject("ekdbStore")
@observer
@autobind
class EKDBListContainer extends Component {

    componentDidMount() {
        this.props.ekdbStore.getEKDBs();
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.ekdbStore._ekdbs.length !== this.props.ekdbStore._ekdbs.length) {
    //         this.props.ekdbStore.getEKDBs();
    //     }
    //     console.log(prevProps.ekdbStore._ekdbs.length);
    //     console.log(this.props.ekdbStore._ekdbs.length);
    // }

    render() {
        return (
            <>
                {this.props.ekdbStore.ekdbs.map((ekdb) => (
                    <Grid
                        item
                        key={ekdb.EKDB_NAME}
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <EKDBCard EKDB={ekdb} />
                    </Grid>
                ))}
            </>
        );
    }

}

export default EKDBListContainer;