const t=window.mycomponent.h;class e{render(){return t("aside",null,t("header",null,t("h1",null,this.title)),t("main",null,t("slot",null)))}static get is(){return"uc-side-drawer"}static get encapsulation(){return"shadow"}static get properties(){return{title:{type:String,attr:"title"}}}static get style(){return"aside.sc-uc-side-drawer{position:fixed;top:0;left:0;width:30rem;max-width:80%;height:100vh;background:rgba(0,0,0,.05);-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26)}"}}export{e as UcSideDrawer};