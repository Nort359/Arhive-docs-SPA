import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';

// Import styles
import './Input.scss';
import { styles } from './styles';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFocus: false
        };

        this.getStyleIcon = this.getStyleIcon.bind(this);
        this.getIcon = this.getIcon.bind(this);
    }

    /**
     * Метод предназначен для отображения правильного цвета иконки:
     * - Если элемент input ВЫДЕЛЕН (active), и НЕТ ошибок ввода, цвет будет: $mailColor - главный цвет
     * - Если элемент input ВЫДЕЛЕН (active), и ЕСТЬ ошибоки ввода, цвет будет: red400 ('#EF5350') - красный
     * - Если элемент input НЕ ВЫДЕЛЕН (active), и НЕТ ошибок ввода, цвет будет: grey400 ('#BDBDBD') - серый
     * - Если элемент input НЕ ВЫДЕЛЕН (active), и ЕСТЬ ошибок ввода, цвет будет: red400 ('#EF5350') - красный
     * - Если элемент input НЕ ВЫДЕЛЕН (active), и НЕТ ошибок ввода и значение НЕ ПУСТОЕ (value != ''), цвет будет: $mailColor - главный цвет
     * @returns {object} - Объект стилей, для иконки
     */
    getStyleIcon() {
        if (this.state.isFocus === true ) { // Если элемент input активный
            return this.props.errorText ? // Проверяем, есть ли ошибка
                styles.fontIconLift : // Если да, то красим иконку красным и приподнимаем её
                styles.fontIconFocus; // Если нет, красим в цвет $mainColor
        } else { // Если элемент input НЕ активный
            if (this.props.value === '') {
                return this.props.errorText ? // Проверяем, есть ли ошибка
                    styles.fontIconLift : // Если да, то красим иконку красным и приподнимаем её
                    styles.fontIcon; // Если нет, красим в серый цвет
            } else {
                return this.props.errorText ? // Проверяем, есть ли ошибка
                    styles.fontIconLift : // Если да, то красим иконку красным и приподнимаем её
                    styles.fontIconFocus; // Если нет, красим в цвет $mainColor
            }
        }
    }

    /**
     * Метод возвращает иконку, которую нужно отобразить в определённый момент времени
     * @returns {string} - Название иконки (font icon)
     */
    getIcon() {
        // Проверям, вводилось ли в input хоть что-то
        if (this.props.value === '' && this.props.errorText === '') { // Если нет
            return this.props.icon; // Возвращаем иконку по умолчанию (переданную в компонент)
        }

        // Если же элемент input не пустой, проверяем есть ли в нём ошибки
        return this.props.errorText === '' ?
            'thumb_up' : // если нет, меняем иконку на палец вверх
            'thumb_down'; // иначе меняем иконку на палец вниз
    }

    render() {
        // Деструктурировнное присваивание свойств (props)
        const {
            hintText, // {string} Текст, отображающися после того, как произошло событие onFocus на элементе input
            floatText, // {string} Всплывающий текст. Всплывает после срабатываения события onFocus на элементе input
            style, // {string} Стили, переданные для элемента input
            type, // {string} Тип input
            value, // {string} Значение input
            errorText, // {string} Текст ошибки, если она есть=
            onBlur, // {function} Событие, срабатывающее, кого элемент input перестаёт бысть активным
            onChange, // {function} Событие, срабатывающее когда значение элемента input изменяется
            onFocus, // {function} Событие, срабатывающее когда элемент input становится активным
        } = this.props;

        return (
            <div className={ 'input-container' }>

                <TextField hintText={ hintText }
                           floatingLabelText={ floatText }
                           style={ style || styles.input }
                           type={ type }
                           value={ value }
                           errorText={ errorText }
                           onBlur={ (event, value) => {
                               this.setState({ isFocus: false });
                               if (onBlur !== undefined && typeof onBlur === 'function')
                                   onBlur(event, value);
                           } }
                           onChange={ (event, value) => {
                               if (onChange !== undefined && typeof onChange === 'function')
                                   onChange(event, value);
                           } }
                           onFocus={ (event, value) => {
                               this.setState({ isFocus: true });
                               if (onFocus !== undefined && typeof onFocus === 'function')
                                   onFocus(event, value);
                           } }
                />

                <FontIcon className="material-icons"
                          style={ this.getStyleIcon() }
                >{ this.getIcon() }</FontIcon>
            </div>
        );
    }
}

Input.propTypes = {
    hintText: PropTypes.string,
    floatText: PropTypes.string.isRequired,
    style: PropTypes.object,
    type: PropTypes.string,
    value: PropTypes.string,
    errorText: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    icon: PropTypes.string
};

export default Input;
