import{c9 as e,ca as t,cb as i,cd as r,ce as s,cs as o,co as a,ci as c,eE as n,eF as l,cm as p,cn as d,ch as w,cq as u}from"./3ptQIBJb.js";import{n as m,o as h,r as f}from"./LgAAmdpy.js";import{c as g,U as b}from"./nddBALH4.js";import"./D-K7S1-h.js";import"./D0MC3uiJ.js";import"./ByssTI6i.js";import"./D5pQnr8G.js";import"./tPawBPYT.js";import"./D7KjvUes.js";const k=e`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var v=function(e,t,i,r){var s,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let x=class extends r{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return s`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return s` <wui-flex class="networks">
      ${e?.map(e=>s` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};x.styles=[t,i,k],v([m({type:Array})],x.prototype,"networkImages",void 0),v([m()],x.prototype,"text",void 0),x=v([g("wui-compatible-network")],x);const y=e`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var N=function(e,t,i,r){var s,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let C=class extends r{constructor(){super(),this.unsubscribe=[],this.address=o.state.address,this.profileName=o.state.profileName,this.network=a.state.activeCaipNetwork,this.unsubscribe.push(o.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName):c.showError("Account not found")}),a.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=n.getNetworkImage(this.network);return s` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${b.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${l.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${h(l.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=a.getAllRequestedCaipNetworks(),t=a.checkIfSmartAccountEnabled(),i=a.state.activeCaipNetwork,r=e.filter(e=>e?.chainNamespace===i?.chainNamespace);if(p(i?.chainNamespace)===d.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return i?s`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[n.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const o=r?.filter(e=>e?.assets?.imageId)?.slice(0,5),c=o.map(n.getNetworkImage).filter(Boolean);return s`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${c}
    ></wui-compatible-network>`}onReceiveClick(){w.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(u.copyToClopboard(this.address),c.showSuccess("Address copied"))}catch{c.showError("Failed to copy")}}};C.styles=y,N([f()],C.prototype,"address",void 0),N([f()],C.prototype,"profileName",void 0),N([f()],C.prototype,"network",void 0),C=N([g("w3m-wallet-receive-view")],C);export{C as W3mWalletReceiveView};
