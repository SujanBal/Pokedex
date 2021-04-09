const pokemonListReducer = (state = [], action)=>{
    switch (action.type) {
        case 'addPokemons':
            if (state.id === action.payload.id) {
               return state
            }
            return [...state, action.payload]
        default:
            return state;
    }
    
}

export default pokemonListReducer;