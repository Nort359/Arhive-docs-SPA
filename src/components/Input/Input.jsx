import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const Input = ({ hintText, floatText }) => (
    <div>
        <TextField
            hintText={ hintText }
            floatingLabelText={ floatText }
            style={ { marginTop: -10 } }
        /><br />
    </div>
);

Input.propTypes = {
    hintText: PropTypes.string,
    floatText: PropTypes.string.isRequired
};

export default Input;