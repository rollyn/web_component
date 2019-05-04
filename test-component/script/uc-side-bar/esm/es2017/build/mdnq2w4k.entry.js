import { h } from '../mycomponent.core.js';

class SideDrawer {
    render() {
        return (h("aside", null,
            h("header", null,
                h("h1", null, this.title)),
            h("main", null,
                h("slot", null))));
    }
    static get is() { return "uc-side-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "title": {
            "type": String,
            "attr": "title"
        }
    }; }
    static get style() { return "aside{position:fixed;top:0;left:0;width:30rem;max-width:80%;height:100vh;background:rgba(0,0,0,.05);-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26)}"; }
}

export { SideDrawer as UcSideDrawer };
