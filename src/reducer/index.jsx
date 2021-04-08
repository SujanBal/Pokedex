import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import pokemonListReducer from './pokemonListReducer';
import pokecardReducer from './pokecardReducer';
import navbarReducer from './navbarReducer';


const AllReducers = combineReducers({ loadingReducer, pokemonListReducer, pokecardReducer, navbarReducer })

export default AllReducers;