export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    items: null
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}

export default reducer;