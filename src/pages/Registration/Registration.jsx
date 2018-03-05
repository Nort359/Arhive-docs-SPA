import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

import Form from '../../components/Form';
import Input from '../../components/Input';

// Import paths to another pages
import { paths } from '../../routes';

// Imports data for inputs
import { inputsData } from './inputsData';

// Import styles
import { styles } from './styles';

class Registration extends Component {
    static path = '/registration';

    _inputs = {
        lastName: '',
        firstName: '',
        middleName: '',
        email: '',
        password: '',
        passwordAgain: ''
    };

    _inputsErrors = Object.assign({}, this._inputs);

    constructor(props) {
        super(props);

        this.state = {
            ...this._inputs,
            errors: {
                ...this._inputsErrors
            }
        };

        this.checkInputOnPattern = this.checkInputOnPattern.bind(this); // Проверяет значение input на соответствие паттерну
        this.checkPasswordsOnEqual = this.checkPasswordsOnEqual.bind(this); // Проверяет равны ли пароли
        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleBlurInput = this.handleBlurInput.bind(this); // Метод обработчик события blur на объекте input
    }

    /**
     * Проверяет значение input на соответствие паттерну
     * @param {object} input — объект input, который нужно проверять
     * @returns {boolean} - true если не сответствует, иначе false
     */
    checkInputOnPattern(input) {
        return !input.patternOk.test(this.state[input.stateName]);
    }

    /**
     * Проверяет равны ли пароли
     * @returns {boolean} — true если не равны, иначе false
     */
    checkPasswordsOnEqual() {
        return this.state.password !== this.state.passwordAgain
    }

    /**
     * Метод обработчик события click по кнопке ЗАРЕГИСТРИРОВАТЬСЯ
     * @returns {function} — Замыкание, для удобной передачи аргументов в компоненте
     */
    handleClickButton(inputs) {
        return () => {
            const errors = this._inputsErrors; // Объект ошибок ввода input.

            let count = 0; // Счётчик количества ошибок

            for (let input in inputs) {
                if (inputs.hasOwnProperty(input)) {
                    if (this.state[input] === '' && input !== 'middleName') {
                        errors[input] = `Поле '${inputs[input].title}' пустое`;
                        count += 1;
                    }
                }
            }

            if (count > 0) { // Если есть ошибки
                return this.setState({ errors });
            }

            for (let input in inputs) {
                if (inputs.hasOwnProperty(input)) {
                    if (input !== 'passwordAgain' && this.checkInputOnPattern(inputs[input])) {
                        errors[input] = inputs[input].messageError;
                        count += 1;
                    } else if (input === 'passwordAgain' && this.checkPasswordsOnEqual()) {
                        errors[input] = inputs[input].messageError;
                        count += 1;
                    }
                }
            }

            if (count > 0) { // Если есть ошибки
                return this.setState({ errors });
            }

            // TODO далее следует проверить email, существует или не существует в БД
        }
    }

    /**
     * Метод обработчик события blur на объекте input
     * @param {object} input — объект input, который нужно проверять
     * @param {boolean} condition — Условие, по которому нужно проверять объект input
     * @returns {function} — Замыкание, для удобной передачи аргументов в компоненте
     */
    handleBlurInput(input, condition = false) {
        return () => {
            const errors = this._inputsErrors; // Объект ошибок ввода input.

            if (condition) { // Если ввод пользователя не прошёл проверку
                errors[input.stateName] = input.messageError; // Добавляем ошибку

                this.setState({ errors }); // Обновляем state
                return false; // Выходим из метода
            }

            errors[input.stateName] = '';

            this.setState({ errors }); // Обновляем state. Ошибок нет.
        }
    }

    render() {
        // Деструктурировнное присваивание объектов input
        const {
            lastName, // Фамилия
            firstName, // Имя
            middleName, // Отчество
            email, // email
            password, // Пароль
            passwordAgain // Повторный пароль
        } = inputsData;

        return (
            <Fragment>
                <Form header={ 'Регистрация' }>

                    <Input floatText={ lastName.floatText }
                           hintText={ lastName.hintText }
                           type={ lastName.type }
                           value={ this.state.lastName }
                           errorText={ this.state.errors.lastName }
                           onChange={ (event, lastName) => this.setState({ lastName }) }
                           onBlur={ this.handleBlurInput(lastName, this.checkInputOnPattern(lastName)) }
                    />

                    <Input floatText={ firstName.floatText }
                           hintText={ firstName.hintText }
                           type={ firstName.type }
                           value={ this.state.firstName }
                           errorText={ this.state.errors.firstName }
                           onChange={ (event, firstName) => this.setState({ firstName }) }
                           onBlur={ this.handleBlurInput(firstName, this.checkInputOnPattern(firstName)) }
                    />

                    <Input floatText={ middleName.floatText }
                           hintText={ middleName.hintText }
                           type={ middleName.type }
                           value={ this.state.middleName }
                           errorText={ this.state.errors.middleName }
                           onChange={ (event, middleName) => this.setState({ middleName }) }
                           onBlur={ this.handleBlurInput(middleName, this.checkInputOnPattern(middleName)) }
                    />

                    <Input floatText={ email.floatText }
                           hintText={ email.hintText }
                           type={ email.type }
                           icon={ email.icon }
                           value={ this.state.email }
                           errorText={ this.state.errors.email }
                           onChange={ (event, email) => this.setState({ email }) }
                           onBlur={ this.handleBlurInput(email, this.checkInputOnPattern(email)) }
                    />

                    <Input floatText={ password.floatText }
                           hintText={ password.hintText }
                           type={ password.type }
                           icon={ password.icon }
                           value={ this.state.password }
                           errorText={ this.state.errors.password }
                           onChange={ (event, password) => this.setState({ password }) }
                           onBlur={ this.handleBlurInput(password, this.checkInputOnPattern(password)) }
                    />

                    <Input floatText={ passwordAgain.floatText }
                           hintText={ passwordAgain.hintText }
                           type={ passwordAgain.type }
                           value={ this.state.passwordAgain }
                           errorText={ this.state.errors.passwordAgain }
                           onChange={ (event, passwordAgain) => this.setState({ passwordAgain }) }
                           onBlur={ this.handleBlurInput(passwordAgain, this.checkPasswordsOnEqual()) }
                    />

                    <RaisedButton label="Зарегистрироваться"
                                  primary={ true }
                                  fullWidth={ true }
                                  style={ styles.button }
                                  overlayStyle={ styles.overlayButton }
                                  onClick={ this.handleClickButton(inputsData) }
                        // TODO change backgroundColor of this button
                    />

                    <div className={ 'authorization__links' }>
                        <Link to={ paths.authorization } className={ 'authorization__links_link' }>У меня уже есть аккаунт</Link>
                        <Link to={ paths.startPage } className={ 'authorization__links_link' }>На стартовую страницу</Link>
                    </div>

                </Form>
            </Fragment>
        );
    }
}

// First method for connect method
const mapStateToProps = state => {
    return {
        test: state
    };
};

// Second method for connect method
const mapDispatchToProps = dispatch => {
    return {
        getUser: email => dispatch(getUser(email))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
