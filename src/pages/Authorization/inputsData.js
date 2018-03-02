/**
 * Created by Nort359@gmail.com on 02.03.2018.
 */
export const inputsData = {
    email: {
        id: 'userEmail',
        type: 'email',
        icon: 'mail',
        patternOk: /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
        hintText: 'Email...',
        floatText: 'Введите Email'
    },
    password: {
        id: 'userPassword',
        type: 'password',
        icon: 'vpn_key',
        hintText: 'Пароль...',
        floatText: 'Введите пароль'
    }
};
