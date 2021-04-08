import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'

const url='https://pokeapi.co/api/v2/pokemon/'

function App() {
	const dispatch = useDispatch()

    const loading = useSelector(state => state.loadingReducer)
	useEffect(() => {
        const fetchdata = async () => {
            let number;
            let response;
            let pokemons;
            for (number = (12 * loading.times) + 1; number <= 12 * (loading.times + 1); number++) {
                response = await fetch(`${url}${number}`)
                pokemons = await response.json()
    
                const { id, name, abilities, base_experience, height, weight, types, stats } = pokemons
                const pokeabilities = [abilities.map(i => {
                    const { ability } = i
                    return ability.name
                })]
				
				let padToThree = (id) => {
					if (id <= 999) {
						return `00${id}`.slice(-3)
					}
					return id
				}
				const image=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(id)}.png`
                const poketypes = [types.map(i => {
                    const { type } = i;
                    return type.name
                })]
                const pokestats = [stats.map(i => {
                    const { base_stat, stat } = i;
                    return { base_stat: base_stat, stat: stat.name }
                })]
                const pokemonDetails = { id:padToThree(id), name, height, weight, base_experience, image, poketypes, pokeabilities, pokestats }
    
              
            
                dispatch({ type: 'addPokemons', payload: pokemonDetails })
                
            }
            dispatch({ type: 'loadingFalse' })
        }
        fetchdata()
            
       
    },[dispatch, loading.times])

	return (
	
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/pokedex'>
					{/* <Home /> */}
				</Route>
			</Switch>
			<Footer />
		</Router>
		
	);
}

export default App;
