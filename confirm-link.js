class ConfirmLink extends HTMLAnchorElement {

	connectedCallback() {

		this.addEventListener('click', event => {
			if (!confirm('Leave?')) {
				event.preventDefault();	
			} 
		});
	}
}

customElements.define('my-confirm-link',ConfirmLink,{ extends: 'a'});