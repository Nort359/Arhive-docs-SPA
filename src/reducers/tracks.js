// Initial data for reducer
const initialState = [];

// Reducer
export function tracks(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TRACK':
            return [
                ...state,
                action.payload
            ];

        default:
            return state;
    }
}
