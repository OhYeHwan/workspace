// import React from 'react';
// import UKeditor from './UKeditor';
// import { inject, observer } from 'mobx-react';


// const UKeditorContainer = (props) => {

//     const onSetUKProps = (name, value) => {
//         props.ukStore.setUKProps(name, value);
//     }

//     const { ukStore } = props;

//     return (
//         <UKeditor
//             uk={ukStore.uk}
//             onSetUKProps={onSetUKProps}
//         />
//     );
// };

// export default inject('ukStore')(observer(UKeditorContainer));

import React, { Component } from 'react';
import UKeditor from './UKeditor';
import { inject, observer } from 'mobx-react';
import autobind from "autobind-decorator";

@inject("ukStore")
@observer
@autobind
class UKeditorContainer extends Component {

    onSetUKProps(name, value) {
        this.props.ukStore.setUKProps(name, value);
    }

    render() {
        const { ukStore } = this.props;
        return (
            <UKeditor
                uk={ukStore.uk}
                onSetUKProps={this.onSetUKProps}
            />
        );
    }
}

export default UKeditorContainer;