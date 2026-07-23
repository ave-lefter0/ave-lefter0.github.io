import{c9 as e,cd as t,ch as o,dE as s,ce as r}from"./3ptQIBJb.js";import{n as i,r as n}from"./LgAAmdpy.js";import{c as h}from"./nddBALH4.js";import{T as a}from"./Dnnm_Cui.js";const c={interpolate(e,t,o){if(2!==e.length||2!==t.length)throw new Error("inputRange and outputRange must be an array of length 2");const s=e[0]||0,r=e[1]||0,i=t[0]||0,n=t[1]||0;return o<s?i:o>r?n:(n-i)/(r-s)*(o-s)+i}},p=e`
  :host {
    width: 100%;
    display: block;
  }
`;var d=function(e,t,o,s){var r,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,s);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(n=(i<3?r(n):i>3?r(t,o,n):r(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n};let l=class extends t{constructor(){super(),this.unsubscribe=[],this.text="",this.open=a.state.open,this.unsubscribe.push(o.subscribeKey("view",()=>{a.hide()}),s.subscribeKey("open",e=>{e||a.hide()}),a.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),a.hide()}render(){return r`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return r`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||a.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||a.hide()}};l.styles=[p],d([i()],l.prototype,"text",void 0),d([n()],l.prototype,"open",void 0),l=d([h("w3m-tooltip-trigger")],l);export{c as M};
