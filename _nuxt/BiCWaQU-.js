import{c9 as o,ca as i,cb as t,cc as s,cd as e,ce as r}from"./3ptQIBJb.js";import{n as a}from"./LgAAmdpy.js";import"./D0MC3uiJ.js";import{c}from"./nddBALH4.js";const n=o`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    :host(:not([size='sm'])) button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var d=function(o,i,t,s){var e,r=arguments.length,a=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(o,i,t,s);else for(var c=o.length-1;c>=0;c--)(e=o[c])&&(a=(r<3?e(a):r>3?e(i,t,a):e(i,t))||a);return r>3&&a&&Object.defineProperty(i,t,a),a};let l=class extends e{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){this.dataset.size=this.size;let o="",i="";switch(this.size){case"lg":o="--wui-border-radius-xs",i="--wui-spacing-1xs";break;case"sm":o="--wui-border-radius-3xs",i="--wui-spacing-xxs";break;default:o="--wui-border-radius-xxs",i="--wui-spacing-2xs"}return this.style.cssText=`\n    --local-border-radius: var(${o});\n    --local-padding: var(${i});\n    `,r`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};l.styles=[i,t,s,n],d([a()],l.prototype,"size",void 0),d([a({type:Boolean})],l.prototype,"disabled",void 0),d([a()],l.prototype,"icon",void 0),d([a()],l.prototype,"iconColor",void 0),l=d([c("wui-icon-link")],l);
