import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';

import './Input.scss';

const styles = {
    fontIcon: {
        position: 'absolute',
        bottom: 15,
        right: 10,
        color: '#BDBDBD'
    }
};

function Input({ children, icon }) {
    return (
        <div className={ 'input-container' }>
            { children }
            <FontIcon className="material-icons"
                      style={ styles.fontIcon }
            >{ icon }</FontIcon>
        </div>
    );
}

Input.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string
};

export default Input;
