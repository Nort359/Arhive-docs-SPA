const mockApiData = [
    {
        id: 1,
        name: 'Enter Sandman'
    },
    {
        id: 2,
        name: 'Welcome Home'
    },
    {
        id: 3,
        name: 'Master of Puppets'
    },
    {
        id: 4,
        name: 'Pain'
    }
];

// Async method
export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('I`ve got tracks');
        dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData });
    }, 2000);
};
