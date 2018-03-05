/**
 * Created by Nort359@gmail.com on 02.03.2018.
 */
export const inputsData = {
    email: {
        id: 'userEmail',
        stateName: 'email',
        type: 'email',
        icon: 'mail',
        patternOk: /^([a-z0-9_.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
        hintText: 'Email...',
        floatText: 'Введите Email',
        messageError: 'Email введён неккоректно'
    },
    password: {
        id: 'userPassword',
        stateName: 'password',
        type: 'password',
        icon: 'vpn_key',
        hintText: 'Пароль...',
        floatText: 'Введите пароль'
    }
};
