class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
		<!-- Footer -->
		<footer id="footer">
			<section class="split contact">
				<section class="alt">
					<h3>Location</h3>
					<p>Leuven, Belgium</p>
				</section>
				<!-- <section>
								<h3>Phone</h3>
								<p><a href="#">(000) 000-0000</a></p>
							</section> -->
				<section>
					<h3>Email</h3>
					<p><a href="mailto:victor.ghys@gmail.com">victor.ghys@gmail.com</a></p>
				</section>
				<section>
					<h3>Social</h3>
					<ul class="icons alt">
						<!-- <li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li> -->
						
						<li><a href="https://www.linkedin.com/in/victor-ghys-446bb9198/"
							class="icon brands alt fa-linkedin" target="_blank" rel="noopener noreferrer"><span class="label">LinkedIn</span></a></li>
						<li><a href="https://github.com/VictorGhys" class="icon brands alt fa-github" target="_blank" rel="noopener noreferrer"><span
							class="label">GitHub</span></a></li>
						<li><a href="https://sketchfab.com/victorghys" class="icon solid alt fa-cube" target="_blank" rel="noopener noreferrer"><span
							class="label">Sketchfab</span></a></li>
						<li><a href="https://victorghys.itch.io/" class="icon brands fa-itch-io" target="_blank" rel="noopener noreferrer"><span
							class="label">Itch.io</span></a></li>
						<li><a href="mailto:victor.ghys@gmail.com" class="icon regular alt fa-envelope" target="_blank" rel="noopener noreferrer"><span
							class="label">Email</span></a></li>
					</ul>
				</section>
			</section>
		</footer>
		
		<!-- Copyright -->
		<div id="copyright">
			<ul><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
		</div>
    `;
    }
  }

  customElements.define('footer-component', Footer);