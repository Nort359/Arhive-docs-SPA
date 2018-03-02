import React, { Component, Fragment } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Form from '../../components/Form';
import Input from '../../components/Input';

// Imports data for inputs
import { inputsData } from './inputsData';

// Styles for elements
const styles = {
    // For inputs
    input: {
        marginTop: -10
    },
    // For buttons
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

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            }
        };

        this.handleAuthorization = this.handleAuthorization.bind(this);
        this.handleBlurEmail = this.handleBlurEmail.bind(this);
    }

    handleAuthorization() {
        let errors = { email: '', password: '' };

        if (!this.state.email) errors.email = 'Email не может быть пустым';
        if (!this.state.password) errors.password = 'Пароль не может быть пустым';

        if (errors.email || errors.password) {
            this.setState({ errors });

            return false;
        }

        console.log('Email: ', this.state.email);
        console.log('Password: ', this.state.password);

        this.setState({ errors });
    }

    handleBlurEmail() {
        const pattern = inputsData.email.patternOk; // Регулярное выражение для проверки ввода email
        let errors = { email: '' }; // Объект ошибок ввода email

        if (!pattern.test(this.state.email)) { // Если ввод пользователя не прошёл проверку
            errors.email = 'Email введён некоректно'; // Добавляем ошибку

            this.setState({ errors }); // Обновляем state
            return false; // Выходим из метода
        }

        this.setState({ errors }); // Обновляем state. Ошибок нет.

    }


    render() {
        const { email, password } = inputsData;

        return (
            <Fragment>
                <Form header={ 'Авторизация' }>

                    <Input icon={ email.icon }>
                        <TextField /* Input Email */
                            hintText={ email.hintText }
                            floatingLabelText={ email.floatText }
                            style={ styles.input }
                            type={ email.type }
                            value={ this.state.email }
                            errorText={ this.state.errors.email }
                            onBlur={ this.handleBlurEmail }
                            onChange={ (event, email) => this.setState({ email }) }
                        />
                    </Input><br/>


                    <Input icon={ password.icon }>
                        <TextField /* Input Пароль */
                            hintText={ password.hintText }
                            floatingLabelText={ password.floatText }
                            style={ styles.input }
                            type={ password.type }
                            value={ this.state.password }
                            errorText={ this.state.errors.password }
                            onChange={ (event, password) => this.setState({ password }) }
                        />
                    </Input><br/>

                    <RaisedButton /* Кнопка Войти */
                        label="Войти"
                        primary={ true }
                        // TODO change backgroundColor of this button
                        fullWidth={ true }
                        style={ styles.button }
                        overlayStyle={ styles.overlayButton }
                        onClick={ this.handleAuthorization }
                    />

                </Form>
            </Fragment>
        );
    }
}
