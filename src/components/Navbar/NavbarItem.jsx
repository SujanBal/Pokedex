import React from "react";
import "./NavbarLogo.scss";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgPokemon } from "react-icons/cg";
import { AiFillShopping } from "react-icons/ai";
import { RiUser3Fill } from "react-icons/ri";
import "./NavbarItem.scss";

export default function NavbarItem() {
	return (
		<nav className="navbar-bottom">
			<div className="container flex flex-ai-c">
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
				<div className="blank"></div>
				<NavLink to="/signin" activeClassName="active">
					<div className="navbar-bottom-menu-item">
						<RiUser3Fill className="icon " />
						<p>Login</p>
					</div>
				</NavLink>
			</div>
		</nav>
	);
}
