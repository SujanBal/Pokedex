import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './PokemonList.scss'



export default function PokemonList() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loadingReducer)
    const pokemonList = useSelector(state => state.pokemonListReducer)
    const searches = useSelector(state => state.searchReducer)
    const loadMoreHandler = () => {
        dispatch({ type: 'loadingTrue', payload: loading.times + 1 })
    }

    // if (loading.isLoading) {
    //     return <h1>Loading...</h1>
    // }
    return (
        <div className="pokemon-container">
            {searches.searchList.length === 0 ?
                (<div className="container">
                    <div className="pokemon-list">
                        {pokemonList.map((pokemon) => {
                            const { id, name, image } = pokemon;
                            return <div key={id} className='pokemon'>
                                <div className="pokemon-image" onClick={() => { dispatch({ type: 'showPokecard', payload: pokemon }) }}>
                                    <div className="pokemon-image-text flex flex-jc-c flex-ai-c">
                                        <h1>View Detail</h1>
                                    </div>
                                    <img src={image} alt={name} />
                                </div>
                                <p>#{id}</p>
                                <h1>{name}</h1>
                                {/* {poketypes.map((poketype, index) => {
                                return <span key={index}>{poketype}</span>
                            })} */}
                            </div>
                        })}
                    </div>
                    {!loading.isLoading && <div className="loadmorebtn flex flex-jc-c flex-ai-c">
                        <button onClick={loadMoreHandler}>Explore more</button>
                    </div>}
                </div>) :
                (<div className="container">
                    <div className="pokemon-list search">
                    {searches.searchList.map((pokemon) => {
                        const { id, name, image } = pokemon;
                        return <div key={id} className='pokemon'>
                            <div className="pokemon-image" onClick={() => { dispatch({ type: 'showPokecard', payload: pokemon }) }}>
                                <div className="pokemon-image-text flex flex-jc-c flex-ai-c">
                                    <h1>View Detail</h1>
                                </div>
                                <img src={image} alt={name} />
                            </div>
                            <p>#{id}</p>
                            <h1>{name}</h1>
                        </div>
                    })}
                    </div>
                </div>)}
        </div>
    )
}
