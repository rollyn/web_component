import{h}from"../mycomponent.core.js";var SideDrawer=function(){function e(){}return e.prototype.render=function(){return h("aside",null,h("header",null,h("h1",null,this.title)),h("main",null,h("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"uc-side-drawer"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{title:{type:String,attr:"title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"aside{position:fixed;top:0;left:0;width:30rem;max-width:80%;height:100vh;background:rgba(0,0,0,.05);-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26)}"},enumerable:!0,configurable:!0}),e}();export{SideDrawer as UcSideDrawer};