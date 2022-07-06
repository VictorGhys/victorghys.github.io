class Navigation extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <!-- Nav -->
		<nav id="nav">
			<ul class="links">
				<li><a href="index.html">Projects</a></li>
				<li><a href="jams.html">Jams</a></li>
				<li><a href="art.html">Art</a></li>
				<li><a href="Victor Ghys CV.pdf" target="_blank" rel="noopener noreferrer">Resume (CV)</a></li>
				<!-- <li><a href="generic.html">Generic Page</a></li> -->
				<!--<li><a href="elements.html">Elements Reference</a></li> -->
			</ul>
			<ul class="icons">
				<!-- <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li> -->
				<li><a href="https://www.linkedin.com/in/victor-ghys-446bb9198/" class="icon brands fa-linkedin" target="_blank" rel="noopener noreferrer"><span
							class="label">LinkedIn</span></a></li>
				<li><a href="https://github.com/VictorGhys" class="icon brands fa-github" target="_blank" rel="noopener noreferrer"><span
							class="label">GitHub</span></a></li>
				<li><a href="mailto:victor.ghys@gmail.com" class="icon regular alt fa-envelope" target="_blank" rel="noopener noreferrer"><span
					class="label">Email</span></a></li>
			</ul>
		</nav>
    `;
    }
  }

  customElements.define('navigation-component', Navigation);