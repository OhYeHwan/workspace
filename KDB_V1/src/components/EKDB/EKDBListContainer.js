import React, { Component } from 'react';
import EKDBCard from './EKDBCard';
import { inject, observer } from 'mobx-react';
import { Grid } from '@material-ui/core';

@inject("ekdbStore")
@observer
class EKDBListContainer extends Component {
    
    render() {
        const { ekdbStore } = this.props;
        ekdbStore.getEKDBs();
        const ekdbs = ekdbStore.ekdbs
        return (
            <>
                {ekdbs.map((ekdb) => (
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