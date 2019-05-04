class Tooltip extends HTMLElement {
	constructor() {
		super();
		this._tooltipContainer;
		this._tooltipText = 'default';
		this.attachShadow({mode:'open'});
		this.shadowRoot.innerHTML = `
		  <style>
		    div {
		    	color:red;
		    }
		    .highlight {
		    	background-color:red;
		    }
		    ::slotted(.highlight) {
		    	border-bottom: 1px dotted red;
		    }
		    :host {
		    	border-top: 2px dotted red;
		    }
		  </style>
		  <span>(?)</span>
		  <slot>default</slot>
		`;
		//const template = document.querySelector('#tooltip-template');
		//this.shadowRoot.appendChild(template.content.cloneNode(true));

	}
	connectedCallback() {
		//const tooltipIcon = document.createElement('span');
		//tooltipIcon.textContent = ' (?)';
		const tooltipIcon = this.shadowRoot.querySelector('span');
		tooltipIcon.addEventListener('mouseenter',this._showTooltip.bind(this));
		tooltipIcon.addEventListener('mouseleave',this._hideTooltip.bind(this));
		this.shadowRoot.appendChild(tooltipIcon);
		this.style.position='relative';
		if (this.hasAttribute('text')) {
			this._tooltipText = this.getAttribute('text');
		}
	}
	_showTooltip() {
		this._tooltipContainer = document.createElement('div');
		this._tooltipContainer.textContent=this._tooltipText;
		// this._tooltipContainer.style.backgroundColor='black';
		// this._tooltipContainer.style.color='white';
		// this._tooltipContainer.style.position='absolute';
		this.shadowRoot.appendChild(this._tooltipContainer);
	}
	_hideTooltip() {
		this.shadowRoot.removeChild(this._tooltipContainer);
	}
}

customElements.define('my-tooltip',Tooltip);
