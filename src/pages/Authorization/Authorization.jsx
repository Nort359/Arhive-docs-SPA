import React, { Component, Fragment } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Form from '../../components/Form';

// Styles for elements
const styles = {
    input: {
        marginTop: -10
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        height: 'auto'
    },
    overlayButton: {
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default class Authorization extends Component {
    static path = '/authorization';

    render() {
        return (
            <Fragment>
                <Form header={ 'Авторизация' }>
                    <TextField
                        hintText={ 'Email...' }
                        floatingLabelText={ 'Введите Email' }
                        style={ styles.input }
                        onChange={ (event, email) => {} }
                    /><br/>
                    <TextField
                        hintText={ 'Пароль...' }
                        floatingLabelText={ 'Введите пароль' }
                        style={ styles.input }
                    /><br/>

                    <RaisedButton
                        label="Войти"
                        primary={ true }
                        fullWidth={ true }
                        style={ styles.button }
                        overlayStyle={ styles.overlayButton }
                    />

                </Form>
            </Fragment>
        );
    }
}
