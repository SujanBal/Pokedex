import React from "react";
import "./NavbarLogo.scss";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgPokemon } from "react-icons/cg";
import { AiFillShopping } from "react-icons/ai";
import { RiUser3Fill } from "react-icons/ri";
import "./NavbarItem.scss";
import {useSelector, useDispatch} from 'react-redux'

export default function NavbarItem() {
	const navbar = useSelector(state => state.navbarReducer)
	const searches = useSelector(state => state.searchReducer)
	const dispatch = useDispatch()
	return (
		<nav className="navbar-bottom">
			<div className="container flex flex-ai-c">
				<div className="navbar-bottom-hamburger" onClick={()=>dispatch({type:'toggleNavbar'})}>
					<i className="far fa-grip-lines-vertical"></i>
				</div>
				<div className={navbar.show ? "navbar-bottom-menu show flex" : 'navbar-bottom-menu flex'}>
					<NavLink exact to="/" activeClassName="active">
						<div className="navbar-bottom-menu-item">
							<FaHome className="icon" />
							<p>Home</p>
						</div>
					</NavLink>
					<NavLink to="/pokedex" activeClassName="active">
						<div className="navbar-bottom-menu-item">
							<CgPokemon className="icon pokeball" />
							<p>Pokedex</p>
						</div>
					</NavLink>
					<NavLink to="/shop" activeClassName="active">
						<div className="navbar-bottom-menu-item">
							<AiFillShopping className="icon " />
							<p>Shop</p>
						</div>
					</NavLink>
					
					
					<NavLink to="/signin" activeClassName="active">
						<div className="navbar-bottom-menu-item">
							<RiUser3Fill className="icon " />
							<p>Login</p>
						</div>
					</NavLink>
				</div>
				<div className="blank">
					<input value={searches.searchitem} onChange={(e)=>dispatch({type:'inputHandler', payload:e.target.value})} placeholder='Search your pokemons' />
					<select value={searches.searchby} onChange={(e)=>dispatch({type:'selectHandler', payload:e.target.value})} name="searchby" id="searchby">
						<option value="name">By Name</option>
						<option value="gender">By Gender</option>
						<option value="region">By Region</option>
						<option value="habitat">By Habitat</option>
					</select>

				</div>
			</div>
		</nav>
	);
}
