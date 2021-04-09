const searchReducer = (state = { searchitem: '', searchby: 'name', searchList:[]}, action)=>{
    switch (action.type) {
        case 'inputHandler':
            return { ...state, searchitem: action.payload};
        case 'selectHandler':
            return { ...state, searchby: action.payload};
        case 'addSearchPokemons':
            return { ...state, searchList: [action.payload] }
        case 'removeSearchPokemons':
            return { ...state, searchList: [] }
        default:
           return state;
    }
}

export default searchReducer;