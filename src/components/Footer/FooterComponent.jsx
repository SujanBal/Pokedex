import React from "react";
import './FooterComponent.scss'

export default function FooterComponent() {
	return (
		<footer className="copyright">
			<div className="container">
				<p>Copyright &copy; 2021 The Pokedex. All Rights Reserved.</p>
				<p>
					Terms of Use | Privacy Policy |
					<span>
						<i className="fab fa-twitter"></i>
						<i className="fab fa-facebook"></i>
						<i className="fab fa-instagram"></i>
					</span>
				</p>
			</div>
		</footer>
	);
}
