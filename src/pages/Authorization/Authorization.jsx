import React, { Fragment } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import Form from '../../components/Form';
import Input from '../../components/Input';

// Styles for button
const styles = {
    button: {
        marginTop: 10,
        marginBottom: 10,
        height: 'auto'
    },
    overlay: {
        paddingTop: 10,
        paddingBottom: 10
    }
};

function Authorization() {
    return (
        <Fragment>
            <Form header={ 'Авторизация' }>
                <Input hintText={ 'Email...' }
                       floatText={ 'Введите Email' }
                />
                <Input hintText={ 'Пароль...' }
                       floatText={ 'Введите пароль' }
                />

                <RaisedButton
                    label="Войти"
                    primary={ true }
                    fullWidth={ true }
                    style={ styles.button }
                    overlayStyle={ styles.overlay }
                />

            </Form>
        </Fragment>
    );
}

Authorization.path = '/authorization';

export default Authorization;