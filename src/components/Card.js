import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="gds-card">
                { children }
            </div>
        );
    }
}

Card.propTypes = {
    children: PropTypes.node
};

export default Card;
