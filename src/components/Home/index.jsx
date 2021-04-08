import React from "react";
import Pokecard from "./Pokecard";
import PokemonList from "./PokemonList";

export default function index() {
	return <>
		<PokemonList />
		<Pokecard />
	</>;
}
