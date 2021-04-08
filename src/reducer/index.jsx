import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import pokemonListReducer from './pokemonListReducer';


const AllReducers = combineReducers({ loadingReducer, pokemonListReducer })

export default AllReducers;