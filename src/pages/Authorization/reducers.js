import { GET_USER } from './actions';

export function authorizationReducer(state = [], action) {
     switch (action.type) {
         case GET_USER:
             return [...state, action];

         default:
             return state;
     }
}