import "./components/export"
import "./screens/dashboard"

class AppContainer extends  HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
        const appCont = this.ownerDocument.createElement("app-dashboard");
        this.shadowRoot.appendChild(appCont);
       }
    }
}

customElements.define("app-container", AppContainer)
export default AppContainer;