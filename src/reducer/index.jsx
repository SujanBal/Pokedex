import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import pokemonListReducer from './pokemonListReducer';
import pokecardReducer from './pokecardReducer';


const AllReducers = combineReducers({ loadingReducer, pokemonListReducer, pokecardReducer })

export default AllReducers;