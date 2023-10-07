import BtnImage, { AttributeBtn } from "../buttonAction/btn";
import skins from "../../service/skinDatas";




export default class LineAction extends HTMLElement {

    constructor(){
    super();
    this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML= '';

    const headDiv = document.createElement("div");
    const torsoDiv = document.createElement("div");
    const feetDiv = document.createElement("div");

        const skinInstance = new skins();
        const skinDatas = skinInstance.get();


    for(let i = 0; i<5 ; i++){
        const headButton = document.createElement("img-button") as BtnImage;
        headButton.setAttribute(AttributeBtn.head, skinDatas[i].imghead);
        headDiv.appendChild(headButton);
        }

    for(let i = 0; i<5 ; i++){
        const torsoButton = document.createElement("img-button") as BtnImage;
        torsoButton.setAttribute(AttributeBtn.torso, skinDatas[i].imgtorso);
        torsoDiv.appendChild(torsoButton);
        }

    for(let i = 0; i<5 ; i++){
        const feetButton = document.createElement("img-button") as BtnImage;
        feetButton.setAttribute(AttributeBtn.feet, skinDatas[i].imgfeet);
        feetDiv.appendChild(feetButton);
        }

        this.shadowRoot?.appendChild(headDiv);
        this.shadowRoot?.appendChild(torsoDiv);
        this.shadowRoot?.appendChild(feetDiv);


    }

}

customElements.define("app-line", LineAction);