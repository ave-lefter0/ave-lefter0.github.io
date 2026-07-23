import{cs as t,co as e,cl as o,ch as r,cx as i,ci as a,cq as n,e_ as s,ck as l,c9 as c,ca as u,cd as g,ce as d,cb as p}from"./3ptQIBJb.js";import{n as h,o as f}from"./LgAAmdpy.js";import{c as w}from"./nddBALH4.js";import"./D0MC3uiJ.js";async function v(o){r.push("ConnectingSocial");const c=i.getAuthConnector();let u=null;try{const r=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(c&&o){if(n.isTelegram()||(u=function(){try{return n.returnOpenHref(`${l.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(t){throw new Error("Could not open social popup")}}()),u)t.setSocialWindow(u,e.state.activeChain);else if(!n.isTelegram())throw new Error("Could not create social popup");const{uri:i}=await c.provider.getSocialRedirectUri({provider:o});if(!i)throw u?.close(),new Error("Could not fetch the social redirect uri");if(u&&(u.location.href=i),n.isTelegram()){s.setTelegramSocialProvider(o);const t=n.formatTelegramSocialLoginUrl(i);n.openHref(t,"_top")}clearTimeout(r)}}catch(g){u?.close(),a.showError(g?.message)}}async function y(n){t.setSocialProvider(n,e.state.activeChain),o.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:n}}),"farcaster"===n?await async function(){r.push("ConnectingFarcaster");const o=i.getAuthConnector();if(o&&!t.state.farcasterUrl)try{const{url:r}=await o.provider.getFarcasterUri();t.setFarcasterUrl(r,e.state.activeChain)}catch(n){r.goBack(),a.showError(n)}}():await v(n)}const b=c`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var m=function(t,e,o,r){var i,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(a<3?i(n):a>3?i(e,o,n):i(e,o))||n);return a>3&&n&&Object.defineProperty(e,o,n),n};let x=class extends g{constructor(){super(...arguments),this.logo="google"}render(){return d`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};x.styles=[u,b],m([h()],x.prototype,"logo",void 0),x=m([w("wui-logo")],x);const j=c`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var C=function(t,e,o,r){var i,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(a<3?i(n):a>3?i(e,o,n):i(e,o))||n);return a>3&&n&&Object.defineProperty(e,o,n),n};let S=class extends g{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return d`
      <button ?disabled=${this.disabled} tabindex=${f(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?d` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};S.styles=[u,p,j],C([h()],S.prototype,"logo",void 0),C([h()],S.prototype,"name",void 0),C([h()],S.prototype,"align",void 0),C([h()],S.prototype,"tabIdx",void 0),C([h({type:Boolean})],S.prototype,"disabled",void 0),S=C([w("wui-list-social")],S);export{y as e};
