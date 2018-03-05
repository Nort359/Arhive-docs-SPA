import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

import Form from '../../components/Form';
import Input from '../../components/Input';

// Imports actions
import { getUser } from './actions';

// Import paths to another pages
import { paths } from '../../routes';

// Imports data for inputs
import { inputsData } from './inputsData';

// Import styles
import './Authorization.scss';
import { styles } from './styles';

class Authorization extends Component {
    static path = '/authorization';

    _inputs = {
        email: '',
        password: ''
    };

    _inputErrors = Object.assign({}, this._inputs);

    constructor(props) {
        super(props);

        this.state = {
            ...this._inputs,
            errors: {
                ...this._inputErrors
            }
        };

        this.handleAuthorization = this.handleAuthorization.bind(this);
        this.handleBlurInput = this.handleBlurInput.bind(this);
    }

    /**
     * Метод обработчик события click по кнопке ВОЙТИ
     * @returns {boolean} — false если одно из полей пустое
     */
    handleAuthorization() {
        let errors = { email: '', password: '' };

        if (!this.state.email) errors.email = 'Email не может быть пустым';
        if (!this.state.password) errors.password = 'Пароль не может быть пустым';

        if (errors.email || errors.password) {
            this.setState({ errors });
            return false;
        }

        this.setState({ errors }); // Обновляем state. Ошибок нет.
        this.props.getUser(this.state.email); // Отправляем action. Получаем пользователя
    }

    /**
     * Метод обработчик события blur на объекте input
     * @param {object} input — объект input, который нужно проверять
     * @param {boolean} condition — Условие, по которому нужно проверять объект input
     * @returns {function} — Замыкание, для удобной передачи аргументов в компоненте
     */
    handleBlurInput(input, condition = false) {
        return () => {
            const errors = this._inputErrors; // Объект ошибок ввода input. Безопасное копирование объекта

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
        const { email, password } = inputsData;

        return (
            <Fragment>
                <Form header={ 'Авторизация' }>

                    <Input floatText={ email.floatText }
                           hintText={ email.hintText }
                           icon={ email.icon }
                           value={ this.state.email }
                           onChange={ (event, email) => this.setState({ email }) }
                           onBlur={ this.handleBlurInput(email) }
                           errorText={ this.state.errors.email }
                    />

                    <Input floatText={ password.floatText }
                           hintText={ password.hintText }
                           style={ styles.input }
                           type={ password.type }
                           value={ this.state.password }
                           errorText={ this.state.errors.password }
                           onChange={ (event, password) => this.setState({ password }) }
                    />

                    <RaisedButton label="Войти" /* Кнопка Войти */
                                  primary={ true }
                                  fullWidth={ true }
                                  style={ styles.button }
                                  overlayStyle={ styles.overlayButton }
                                  onClick={ this.handleAuthorization }
                        // TODO change backgroundColor of this button
                    />

                    <div className={ 'authorization__links' }>
                        <Link to={ paths.registration } className={ 'authorization__links_link' }>Ещё не зарегестрированы?</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
