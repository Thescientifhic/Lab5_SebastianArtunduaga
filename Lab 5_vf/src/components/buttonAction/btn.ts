import { appState, dispatch } from "../../store/index";
import { changeHead, changeTorso, changeFeet } from "../../store/action";

export enum AttributeBtn {
    "head" = "head",
    "torso" = "torso",
    "feet" = "feet",

}

export default class BtnImage extends HTMLElement{
    head?: string;
    torso?: string;
    feet?: string;



    static get observedAttributes(){
        const attrs: Record <AttributeBtn, null> ={
            head: null,
            torso: null,
            feet: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(
        propName: AttributeBtn,
        oldValue: string | undefined,
        newValue: string | undefined){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
            this.mount();
        }

        mount(){
            this.render();

            const btn = this.shadowRoot?.querySelector('button');
            btn?.addEventListener("click", () => {
                 if (this.head) {
                  dispatch(changeHead(
                    this.head
            ));} else if (this.torso) {
                    dispatch(changeTorso(
                    this.torso
            ));} else if (this.feet) {
                    dispatch(changeFeet(
                    this.feet
            ));
            }
             console.log(appState)
        });

        }

        constructor(){
            super();
            this.attachShadow({mode: "open"});
        }

        connectedCallback(){
            this.render();
        }

        render(){
            if(this.shadowRoot)
            this.shadowRoot.innerHTML= '';

            const btns = this.ownerDocument.createElement("button")
            const icon = this.ownerDocument.createElement("img")
            icon.setAttribute("src", `${this.head || this.torso || this.feet}`)

            btns.appendChild(icon)
            this.shadowRoot?.appendChild(btns);
        }
}

customElements.define("img-button", BtnImage);