import React from "react";
import { useSelector, useDispatch} from "react-redux";
import "./Pokecard.scss";

export default function Pokecard() {
	const pokecardReducer = useSelector((state) => state.pokecardReducer);
	const dispatch = useDispatch();
	const { show, content } = pokecardReducer;
	const {
		id,
		name,
		image,
		weight,
		height,
		base_experience,
		pokeabilities,
		pokestats,
	} = content;
	let { poketypes } = content;
	let imagebg;
	switch (poketypes && poketypes[0]) {
		case "dark":
			imagebg = "dark.jpg";
			break;
		case "ghost":
			imagebg = "ghost.jpg";
			break;
		case "ground":
			imagebg = "ground.jpg";
			break;
		case "ice":
			imagebg = "ice.jpg";
			break;
		case "electric":
			imagebg = "electric.jpg";
			break;
		case "psychic":
			imagebg = "psychic.jpg";
			break;
		case "rock":
			imagebg = "rock.jpg";
			break;
		case "steel":
			imagebg = "steel.jpg";
			break;
		case "water":
			imagebg = "water.jpeg";
			break;
		case "grass":
			imagebg = "grass.jpg";
			break;
		case "bug":
			imagebg = "bug.jpg";
			break;
		case "poison":
			imagebg = "poison.jpg";
			break;
		case "fighting":
			imagebg = "fighting.jpg";
			break;
		case "flying":
			imagebg = "flying.jpg";
			break;
		case "fairy":
			imagebg = "fairy.jpg";
			break;
		case "dragon":
			imagebg = "dragon.jpg";
			break;
		default:
			imagebg = "normal.png";
	}

	// useEffect(() => {
	// 	const body = document.querySelector("body");
	// 	const pokecard = document.querySelector(".pokecard");
	// 	if (pokecard.classList.contains("show")) {
	// 		body.style.overflow = "hidden";
	// 	} else {
	// 		body.style.overflowY = "scroll";
	// 	}
	// }, [show]);
	return (
		<>
			<div className={show ? "pokecard show" : "pokecard"}>
				<div className="pokecard-image">
					<p className="id">#{id}</p>
					<i
						className="fa fa-times"
						onClick={() => dispatch({ type: "closePokecard" })}
					></i>
					<img
						className="pokecard-image-background"
						src={`images/${imagebg}`}
						alt="pokemon-background"
					/>
					<img className="pokecard-image-main" src={image} alt={name} />
				</div>

				<h1>{name}</h1>
				<h5>BE {base_experience}</h5>
				<div className="pokecard-detail flex flex-jc-sb flex-ai-c">
					<div className="pokecard-detail-child">
						<i class="fas fa-weight"></i>
						<p>
							{weight}
							<span> lb</span>
						</p>
					</div>

					{poketypes && poketypes.map((type, index) => {
						return (
							<div key={index}>
								<i class="fab fa-gg-circle"></i>
								<p>{type}</p>
							</div>
						);
					})}

					<div className="pokecard-detail-child">
						<i class="fas fa-text-height"></i>
						<p>
							{height}
							<span> dm</span>
						</p>
					</div>
				</div>

				<div className="pokecard-abilities">
					<h4>Abilities</h4>
					<div className="flex flex-jc-c flex-ai-c">
						{pokeabilities && pokeabilities.map((ability, index) => {
							return (
								<p
									className={pokeabilities[0].length > 1 ? "slash" : null}
									key={index}
								>
									{ability}
								</p>
							);
						})}
					</div>
				</div>
				<div className="pokecard-stats">
					<h4>Pokemon Stats</h4>
					{pokestats && pokestats.map((stats, index) => {
						const { base_stat, stat } = stats;
						return (
							<p key={index} className="flex flex-ai-c">
								<label for="stat">{stat}: </label>
								<meter id="stat" value={base_stat} min="0" max="100"></meter>
							</p>
						);
					})}
				</div>
			</div>
		</>
	);
}
