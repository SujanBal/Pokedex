import React from "react";
import './FooterComponent.scss'

export default function FooterComponent() {
	return (
		<footer class="copyright">
			<div class="container">
				<p>Copyright &copy; 2021 The Pokedex. All Rights Reserved.</p>
				<p>
					Terms of Use | Privacy Policy |
					<span>
						<i class="fab fa-twitter"></i>
						<i class="fab fa-facebook"></i>
						<i class="fab fa-instagram"></i>
					</span>
				</p>
			</div>
		</footer>
	);
}
