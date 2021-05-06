import React, { Component } from 'react';
import EKDBListToolbar from './EKDBListToolbar';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';


@inject("ekdbStore")
@observer
@autobind
class EKDBListToolbarContainer extends Component {

    onSetEKDBProps(name, value) {
        this.props.ekdbStore.setEKDBProps(name, value);
    }
    
    onAddEKDB() {
        let { ekdb } = this.props.ekdbStore;
        this.props.ekdbStore.addEKDB(ekdb);
    }

    onHandleCreateEKDB(ekdb) {
        this.props.ekdbStore.handleCreateEKDB(ekdb);
    }

    render() {
        const { ekdbStore } = this.props;
        return (
            <EKDBListToolbar
                ekdb={ekdbStore.ekdb}
                onSetEKDBProps={this.onSetEKDBProps}
                onHandleCreateEKDB={this.onHandleCreateEKDB}
            />
        );
    }

}

export default EKDBListToolbarContainer;