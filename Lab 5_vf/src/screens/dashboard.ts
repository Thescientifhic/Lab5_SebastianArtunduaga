import "../components/export";
import { LineAction } from "../components/export"
import { addObserver, appState } from "../store/index";



class Dashboard extends HTMLElement {

  btnContainer: LineAction[] =[];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }


  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = '<h1>hi</h1>';

        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "")
        this.shadowRoot?.appendChild(link);

          const block = document.createElement("app-block");
          block.classList.add("app-container");
          this.shadowRoot?.appendChild(block);

          this.btnContainer.forEach((container)=> {
            this.shadowRoot?.append(container);
          })

          const skin = document.createElement ("div")
          skin.classList.add("app-container");

          const DivHead = document.createElement("img");
          DivHead.src= appState.head;
          DivHead.classList.add("app-head");
          skin.appendChild(DivHead);


          const DivTorso = document.createElement("img");
          DivTorso.src = appState.torso;
          DivTorso.classList.add("app-torso");
          skin.appendChild(DivTorso);

          const DivFeet = document.createElement("img");
          DivFeet.src = appState.feet;
          DivFeet.classList.add("app-feet");
          skin.appendChild(DivFeet);


          this.shadowRoot?.appendChild(skin);
      }
    }
  }


customElements.define("app-dashboard", Dashboard);
export default Dashboard;