import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends PureComponent {

    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return (
            <div>Goodbye.</div>
        )
    }
}

export default connect(null, actions)(Signout);
