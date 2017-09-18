import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageHeader extends Component {
    render() {
        const { productName, pageName } = this.props;

        return (
            <header className="gds-page-header -pointer-events--none">
                <div className="gds-page-header__product-bar">
                    <h6 className="gds-page-header__product-name">{ productName }</h6>
                    <img
                        className="gds-page-header__logo gds-page-header__logo--expanded"
                        src="https://c.gumgum.com/ads/com/gumgum/logo/logo-white.svg"
                        alt="GumGum logo"
                    />
                </div>
                <div className="gds-page-header__nav-bar">
                    <div className="gds-page-header__primary-nav">
                        <button className="gds-page-header__menu">
                            <span className="gds-page-header__menu-line" />
                            <span className="gds-page-header__menu-line" />
                            <span className="gds-page-header__menu-line" />
                            <span className="gds-page-header__menu-line" />
                        </button>
                        <h4 className="gds-page-header__page-name">{ pageName }</h4>
                    </div>
                    <div className="gds-page-header__secondary-nav" />
                    <div className="-clear-both" />
                </div>
            </header>
        );
    }
}

PageHeader.propTypes = {
    productName: PropTypes.string,
    pageName: PropTypes.string
};

export default PageHeader;
