import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import pokemonListReducer from './pokemonListReducer';
import pokecardReducer from './pokecardReducer';
import navbarReducer from './navbarReducer';
import searchReducer from './searchReducer';


const AllReducers = combineReducers({ loadingReducer, pokemonListReducer, pokecardReducer, navbarReducer, searchReducer })

export default AllReducers;