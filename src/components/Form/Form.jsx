import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

function Form({ header, children }) {
    return (
        <div className='form-section'>
            <h2 className={ 'form-section__head' }>{ header }</h2>

            <form>
                { children }
            </form>
        </div>
    );

}

Form.propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
};

export default Form
