export class SideDrawer {
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
    static get style() { return "/**style-placeholder:uc-side-drawer:**/"; }
}
