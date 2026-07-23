import{c9 as t,ca as e,cd as o,ce as r}from"./3ptQIBJb.js";import{n as a}from"./LgAAmdpy.js";import{c as i}from"./nddBALH4.js";const s=t`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;var c=function(t,e,o,r){var a,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(s=(i<3?a(s):i>3?a(e,o,s):a(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s};let l=class extends o{constructor(){super(...arguments),this.text=""}render(){return r`${this.template()}`}template(){return this.text?r`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};l.styles=[e,s],c([a()],l.prototype,"text",void 0),l=c([i("wui-separator")],l);
