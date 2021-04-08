const loadingReducer = (state = { isLoading: true, times:0}, action)=>{
    switch (action.type) {
        case 'loadingFalse':
            return {...state, isLoading:false};
        case 'loadingTrue':
            return {...state, isLoading:true, times:action.payload};;
        default:
           return state;
    }
}

export default loadingReducer;