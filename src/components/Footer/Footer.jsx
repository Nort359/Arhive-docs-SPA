// Import necessary libraries
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import Styles
import './Footer.scss';

function CopyRight() {
    const now = new Date();
    const currentYear = now.getFullYear();
    return (
        <div className={ 'footer__copyright' }>
            @ Бугульминские электрические сети { currentYear } г.
        </div>
    );
}

function Footer(prop) {
    return (
        <Fragment>
            <footer className={ 'footer' }>
                <p>
                    <Link to={ prop.startPagePath } className={ 'footer__link' }>На главную</Link>
                </p>
                <p>
                    <Link to={ prop.authorizationPath } className={ 'footer__link' }>Авторизоваться</Link>
                </p>
            </footer>
            <CopyRight />
        </Fragment>
    );
}

Footer.propTypes = {
    startPagePath: PropTypes.string,
    authorizationPath: PropTypes.string
};

export default Footer;
