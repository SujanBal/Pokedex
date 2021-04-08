const pokecardReducer = (state = { show: false, content: [] }, action) => {
    switch (action.type) {
        case 'showPokecard':
            return {...state,show:true, content: action.payload}
    
        case 'closePokecard':
            return {...state,show:false}
    
        default:
            return state;
    }
}
 
export default pokecardReducer;