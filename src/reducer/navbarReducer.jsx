const navbarReducer = (state = { show: false}, action)=>{
    switch (action.type) {
        case 'toggleNavbar':
            return {...state, show:!state.show};
        default:
           return state;
    }
}

export default navbarReducer;