import{c9 as e,ca as t,cd as r,ce as i}from"./3ptQIBJb.js";import{n as a,o}from"./LgAAmdpy.js";import{c as s}from"./nddBALH4.js";import"./D0oan3tr.js";const l=e`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var n=function(e,t,r,i){var a,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(o<3?a(s):o>3?a(t,r,s):a(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let p=class extends r{constructor(){super(...arguments),this.disabled=!1}render(){return i`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${o(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?i`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};p.styles=[t,l],n([a()],p.prototype,"errorMessage",void 0),n([a({type:Boolean})],p.prototype,"disabled",void 0),n([a()],p.prototype,"value",void 0),n([a()],p.prototype,"tabIdx",void 0),p=n([s("wui-email-input")],p);
