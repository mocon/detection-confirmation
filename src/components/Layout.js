import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="gds-layout__container">
                <div className="gds-layout__row">
                    <div className="gds-layout__column--md-12">
                        { children }
                    </div>
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
