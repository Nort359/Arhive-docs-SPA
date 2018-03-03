import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import { grey400, red400 } from 'material-ui/styles/colors';

import './Input.scss';

const styles = {
    fontIcon: {
        position: 'absolute',
        bottom: 12,
        right: 10,
        color: grey400 // '#BDBDBD'
    },
    fontIconLift: {
        position: 'absolute',
        bottom: 42,
        right: 10,
        color: red400 // #EF5350
    }
};

function Input({ children, icon, lift }) {
    return (
        <div className={ 'input-container' }>
            { children }
            <FontIcon className="material-icons"
                      style={ lift ? styles.fontIconLift : styles.fontIcon }
            >{ icon }</FontIcon>
        </div>
    );
}

Input.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string,
    lift: PropTypes.bool.isRequired
};

export default Input;
