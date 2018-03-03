export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';

const mockUser = {
    id: '1',
    email: 'Nort359@gmail.com',
    password: '203040',
    name: 'Maxim',
    surname: 'Prosvirkin'
};

export function getUser(email) {
    // TODO проверить пароль, когда будет БД
    if (mockUser.email === email) {
        const obj = { type: GET_USER };
        return Object.assign({}, obj, mockUser);
    }

    return {};
}

const newUser = {
    id: '2',
    email: 'AkS-LH@yandex.ru',
    password: '203040',
    name: 'Maxim',
    surname: 'Prosvirkin'
};

export function addUser() {
    const obj = { type: ADD_USER };
    return Object.assign({}, obj, newUser);
}
