import "../export";

export default class Block extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = '';

        const links = this.ownerDocument.createElement("link")
            links.setAttribute("rel", "stylesheet")
            links.setAttribute("href", "")
            this.shadowRoot?.appendChild(links);

        const blockButtons = document.createElement('app-line');
        this.shadowRoot?.appendChild(blockButtons)
    }
}

customElements.define('app-block', Block);