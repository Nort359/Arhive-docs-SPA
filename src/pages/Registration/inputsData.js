/**
 * Created by Nort359@gmail.com on 03.03.2018.
 */
export const inputsData = {
    lastName: {
        id: 'lastName',
        stateName: 'lastName',
        patternOk: /^[a-zA-Zа-яА-ЯёйЁЙ]{3,20}$/i,
        hintText: 'Фамилия...',
        floatText: 'Введите фамилию',
        title: 'Фамилия',
        messageError: 'Фамилия введена неккоректно'
    },
    firstName: {
        id: 'firstName',
        stateName: 'firstName',
        patternOk: /^[a-zA-Zа-яА-ЯёйЁЙ]{3,20}$/i,
        hintText: 'Имя...',
        floatText: 'Введите имя',
        title: 'Имя',
        messageError: 'Имя введео неккоректно'
    },
    middleName:{
        id: 'middleName',
        stateName: 'middleName',
        patternOk: /^[a-zA-Zа-яА-ЯёйЁЙ]{0,20}$/i,
        hintText: 'Отчество...',
        floatText: 'Введите отчество',
        title: 'Отчество',
        messageError: 'Отчество введено неккоректно'
    },
    email: {
        id: 'email',
        stateName: 'email',
        type: 'email',
        icon: 'mail',
        patternOk: /^([a-z0-9_.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
        hintText: 'Email...',
        floatText: 'Введите Email',
        title: 'Email',
        messageError: 'Email введён неккоректно'
    },
    password: {
        id: 'password',
        stateName: 'password',
        type: 'password',
        icon: 'vpn_key',
        hintText: 'Пароль...',
        floatText: 'Введите пароль',
        // patternOk: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        patternOk: /^.{6,}$/,
        title: 'Пароль',
        messageError: 'Должен содержать минимум 6 символов'
    },
    passwordAgain: {
        id: 'passwordAgain',
        stateName: 'passwordAgain',
        type: 'password',
        hintText: 'Пароль...',
        floatText: 'Повторите пароль',
        title: 'Повторный пароль',
        messageError: 'Пароли не совпадают'
    },
    department: {
        id: 'department',
        stateName: 'department',
        placeholder: 'Выберите отдел'
    },
    position: {
        id: 'position',
        stateName: 'position',
        placeholder: 'Выберите должность'
    }
};
