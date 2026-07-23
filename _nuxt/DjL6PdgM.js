import{eD as e,eG as t,cq as a,co as n,ck as s,h6 as i,cj as r,h7 as o,cl as c,ci as u,cs as l,ch as m,dE as d,cy as p,cz as h,cA as w,c9 as y,cd as g,ce as f,eF as x,cx as I,eE as P}from"./3ptQIBJb.js";import{o as E,r as b}from"./LgAAmdpy.js";import{c as v}from"./nddBALH4.js";import"./D4Z0BSxx.js";import"./D0MC3uiJ.js";import"./D4xqaXOE.js";import"./BiCWaQU-.js";import"./ByssTI6i.js";import"./OtI9-muE.js";import"./DpsQTQI6.js";import"./DXAmvGyj.js";import"./BxzIr_gC.js";import"./tPawBPYT.js";import"./CwO4hvnm.js";const S="INVALID_PAYMENT_CONFIG",A="INVALID_RECIPIENT",N="INVALID_ASSET",C="INVALID_AMOUNT",k="UNKNOWN_ERROR",T="UNABLE_TO_INITIATE_PAYMENT",U="INVALID_CHAIN_NAMESPACE",D="GENERIC_PAYMENT_ERROR",_="UNABLE_TO_GET_EXCHANGES",R="ASSET_NOT_SUPPORTED",O="UNABLE_TO_GET_PAY_URL",$="UNABLE_TO_GET_BUY_STATUS",L={[S]:"Invalid payment configuration",[A]:"Invalid recipient address",[N]:"Invalid asset specified",[C]:"Invalid payment amount",[k]:"Unknown payment error occurred",[T]:"Unable to initiate payment",[U]:"Invalid chain namespace",[D]:"Unable to process payment",[_]:"Unable to get exchanges",[R]:"Asset not supported by the selected exchange",[O]:"Unable to get payment URL",[$]:"Unable to get buy status"};class M extends Error{get message(){return L[this.code]}constructor(e,t){super(L[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,M)}}class j extends Error{}async function W(t,a){const n=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${e.getSnapshot().projectId}`,{sdkType:s,sdkVersion:i,projectId:r}=e.getSnapshot(),o={jsonrpc:"2.0",id:1,method:t,params:{...a||{},st:s,sv:i,projectId:r}},c=await fetch(n,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),u=await c.json();if(u.error)throw new j(u.error.message);return u}async function Y(e){return(await W("reown_getExchanges",e)).result}const F=["eip155","solana"],G={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function K(e,a){const{chainNamespace:n,chainId:s}=t.parseCaipNetworkId(e),i=G[n];if(!i)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`);let r=i.native.assetNamespace,o=i.native.assetReference;"native"!==a&&(r=i.defaultTokenNamespace,o=a);return`${`${n}:${s}`}/${r}:${o}`}const z="unknown",H=w({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),V={state:H,subscribe:e=>h(H,()=>e(H)),subscribeKey:(e,t)=>p(H,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.subscribeEvents(),this.initializeAnalytics(),H.isConfigured=!0,c.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:H.exchanges,configuration:{network:H.paymentAsset.network,asset:H.paymentAsset.asset,recipient:H.recipient,amount:H.amount}}}),await d.open({view:"Pay"})},resetState(){H.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},H.recipient="0x0",H.amount=0,H.isConfigured=!1,H.error=null,H.isPaymentInProgress=!1,H.isLoading=!1,H.currentPayment=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new M(S);try{H.paymentAsset=e.paymentAsset,H.recipient=e.recipient,H.amount=e.amount,H.openInNewTab=e.openInNewTab??!0,H.redirectUrl=e.redirectUrl,H.payWithExchange=e.payWithExchange,H.error=null}catch(t){throw new M(S,t.message)}},getPaymentAsset:()=>H.paymentAsset,getExchanges:()=>H.exchanges,async fetchExchanges(){try{H.isLoading=!0;const e=await Y({page:0,asset:K(H.paymentAsset.network,H.paymentAsset.asset),amount:H.amount.toString()});H.exchanges=e.exchanges.slice(0,2)}catch(e){throw u.showError(L.UNABLE_TO_GET_EXCHANGES),new M(_)}finally{H.isLoading=!1}},async getAvailableExchanges(e){try{const t=e?.asset&&e?.network?K(e.network,e.asset):void 0;return await Y({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(t){throw new M(_)}},async getPayUrl(e,t,a=!1){try{const n=Number(t.amount),s=await async function(e){return(await W("reown_getExchangePayUrl",e)).result}({exchangeId:e,asset:K(t.network,t.asset),amount:n.toString(),recipient:`${t.network}:${t.recipient}`});return c.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e},headless:a}}),a&&(this.initiatePayment(),c.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:H.paymentId||z,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e}}})),s}catch(n){if(n instanceof Error&&n.message.includes("is not supported"))throw new M(R);throw new Error(n.message)}},async openPayUrl(e,t,n=!1){try{const s=await this.getPayUrl(e.exchangeId,t,n);if(!s)throw new M(O);const i=e.openInNewTab??!0?"_blank":"_self";return a.openHref(s.url,i),s}catch(s){throw H.error=s instanceof M?s.message:L.GENERIC_PAYMENT_ERROR,new M(O)}},subscribeEvents(){H.isConfigured||(r.subscribeKey("connections",e=>{e.size>0&&this.handlePayment()}),l.subscribeKey("caipAddress",e=>{const t=r.hasAnyConnection(s.CONNECTOR_ID.WALLET_CONNECT);e&&(t?setTimeout(()=>{this.handlePayment()},100):this.handlePayment())}))},async handlePayment(){H.currentPayment={type:"wallet",status:"IN_PROGRESS"};const e=l.state.caipAddress;if(!e)return;const{chainId:c,address:m}=t.parseCaipAddress(e),p=n.state.activeChain;if(!m||!c||!p)return;if(!i.getProvider(p))return;const h=n.state.activeCaipNetwork;if(h&&!H.isPaymentInProgress)try{this.initiatePayment();const e=n.getAllRequestedCaipNetworks(),t=n.getAllApprovedCaipNetworkIds();switch(await async function(e){const{paymentAssetNetwork:t,activeCaipNetwork:s,approvedCaipNetworkIds:i,requestedCaipNetworks:r}=e,o=a.sortRequestedNetworks(i,r).find(e=>e.caipNetworkId===t);if(!o)throw new M(S);if(o.caipNetworkId===s.caipNetworkId)return;const c=n.getNetworkProp("supportsAllNetworks",o.chainNamespace);if(!i?.includes(o.caipNetworkId)&&!c)throw new M(S);try{await n.switchActiveNetwork(o)}catch(u){throw new M(D,u)}}({paymentAssetNetwork:H.paymentAsset.network,activeCaipNetwork:h,approvedCaipNetworkIds:t,requestedCaipNetworks:e}),await d.open({view:"PayLoading"}),p){case s.CHAIN.EVM:"native"===H.paymentAsset.asset&&(H.currentPayment.result=await async function(e,t,a){if(t!==s.CHAIN.EVM)throw new M(U);if(!a.fromAddress)throw new M(S,"fromAddress is required for native EVM payments.");const n="string"==typeof a.amount?parseFloat(a.amount):a.amount;if(isNaN(n))throw new M(S);const i=e.metadata?.decimals??18,o=r.parseUnits(n.toString(),i);if("bigint"!=typeof o)throw new M(D);return await r.sendTransaction({chainNamespace:t,to:a.recipient,address:a.fromAddress,value:o,data:"0x"})??void 0}(H.paymentAsset,p,{recipient:H.recipient,amount:H.amount,fromAddress:m})),H.paymentAsset.asset.startsWith("0x")&&(H.currentPayment.result=await async function(e,t){if(!t.fromAddress)throw new M(S,"fromAddress is required for ERC20 EVM payments.");const a=e.asset,n=t.recipient,i=Number(e.metadata.decimals),c=r.parseUnits(t.amount.toString(),i);if(void 0===c)throw new M(D);return await r.writeContract({fromAddress:t.fromAddress,tokenAddress:a,args:[n,c],method:"transfer",abi:o.getERC20Abi(a),chainNamespace:s.CHAIN.EVM})??void 0}(H.paymentAsset,{recipient:H.recipient,amount:H.amount,fromAddress:m})),H.currentPayment.status="SUCCESS";break;case s.CHAIN.SOLANA:H.currentPayment.result=await async function(e,t){if(e!==s.CHAIN.SOLANA)throw new M(U);if(!t.fromAddress)throw new M(S,"fromAddress is required for Solana payments.");const a="string"==typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(a)||a<=0)throw new M(S,"Invalid payment amount.");try{if(!i.getProvider(e))throw new M(D,"No Solana provider available.");const n=await r.sendTransaction({chainNamespace:s.CHAIN.SOLANA,to:t.recipient,value:a,tokenMint:t.tokenMint});if(!n)throw new M(D,"Transaction failed.");return n}catch(n){if(n instanceof M)throw n;throw new M(D,`Solana payment failed: ${n}`)}}(p,{recipient:H.recipient,amount:H.amount,fromAddress:m,tokenMint:"native"===H.paymentAsset.asset?void 0:H.paymentAsset.asset}),H.currentPayment.status="SUCCESS";break;default:throw new M(U)}}catch(w){H.error=w instanceof M?w.message:L.GENERIC_PAYMENT_ERROR,H.currentPayment.status="FAILED",u.showError(H.error)}finally{H.isPaymentInProgress=!1}},getExchangeById:e=>H.exchanges.find(t=>t.id===e),validatePayConfig(e){const{paymentAsset:t,recipient:a,amount:n}=e;if(!t)throw new M(S);if(!a)throw new M(A);if(!t.asset)throw new M(N);if(null==n||n<=0)throw new M(C)},handlePayWithWallet(){const e=l.state.caipAddress;if(!e)return void m.push("Connect");const{chainId:a,address:s}=t.parseCaipAddress(e),i=n.state.activeChain;s&&a&&i?this.handlePayment():m.push("Connect")},async handlePayWithExchange(e){try{H.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:a}=H.paymentAsset,n={network:t,asset:a,amount:H.amount,recipient:H.recipient},s=await this.getPayUrl(e,n);if(!s)throw new M(T);return H.currentPayment.sessionId=s.sessionId,H.currentPayment.status="IN_PROGRESS",H.currentPayment.exchangeId=e,this.initiatePayment(),{url:s.url,openInNewTab:H.openInNewTab}}catch(t){return H.error=t instanceof M?t.message:L.GENERIC_PAYMENT_ERROR,H.isPaymentInProgress=!1,u.showError(H.error),null}},async getBuyStatus(e,t){try{const a=await async function(e){return(await W("reown_getExchangeBuyStatus",e)).result}({sessionId:t,exchangeId:e});return"SUCCESS"!==a.status&&"FAILED"!==a.status||c.sendEvent({type:"track",event:"SUCCESS"===a.status?"PAY_SUCCESS":"PAY_ERROR",properties:{source:"pay",paymentId:H.paymentId||z,configuration:{network:H.paymentAsset.network,asset:H.paymentAsset.asset,recipient:H.recipient,amount:H.amount},currentPayment:{type:"exchange",exchangeId:H.currentPayment?.exchangeId,sessionId:H.currentPayment?.sessionId,result:a.txHash}}}),a}catch(a){throw new M($)}},async updateBuyStatus(e,t){try{const a=await this.getBuyStatus(e,t);H.currentPayment&&(H.currentPayment.status=a.status,H.currentPayment.result=a.txHash),"SUCCESS"!==a.status&&"FAILED"!==a.status||(H.isPaymentInProgress=!1)}catch(a){throw new M($)}},initiatePayment(){H.isPaymentInProgress=!0,H.paymentId=crypto.randomUUID()},initializeAnalytics(){H.analyticsSet||(H.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{if(H.currentPayment?.status&&"UNKNOWN"!==H.currentPayment.status){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[H.currentPayment.status];c.sendEvent({type:"track",event:e,properties:{source:"pay",paymentId:H.paymentId||z,configuration:{network:H.paymentAsset.network,asset:H.paymentAsset.asset,recipient:H.recipient,amount:H.amount},currentPayment:{type:H.currentPayment.type,exchangeId:H.currentPayment.exchangeId,sessionId:H.currentPayment.sessionId,result:H.currentPayment.result}}})}}))}},q=y`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  .token-display {
    padding: var(--wui-spacing-s) var(--wui-spacing-m);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-bg-125);
    margin-top: var(--wui-spacing-s);
    margin-bottom: var(--wui-spacing-s);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--wui-spacing-xs);
  }
`;var B=function(e,t,a,n){var s,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(r=(i<3?s(r):i>3?s(t,a,r):s(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r};let J=class extends g{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=V.state.exchanges,this.isLoading=V.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=l.state.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(V.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(V.subscribeKey("isLoading",e=>this.isLoading=e)),this.unsubscribe.push(l.subscribe(e=>this.connectedWalletInfo=e.connectedWalletInfo)),V.fetchExchanges()}get isWalletConnected(){return"connected"===l.state.status}render(){return f`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="s">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){const e=V.getPaymentAsset();this.networkName=e.network,this.tokenSymbol=e.metadata.symbol,this.amount=V.state.amount.toString()}renderPayWithWallet(){return function(e){const{chainNamespace:a}=t.parseCaipNetworkId(e);return F.includes(a)}(this.networkName)?f`<wui-flex flexDirection="column" gap="s">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`:f``}renderPaymentHeader(){let e=this.networkName;if(this.networkName){const t=n.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.networkName);t&&(e=t.name)}return f`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="large-700" color="fg-100">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="xxs">
            <wui-text variant="paragraph-600" color="fg-100">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${e?f`
                  <wui-text variant="small-500" color="fg-200"> on ${e} </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){const e=this.connectedWalletInfo?.name||"connected wallet";return f`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        data-testid="wallet-payment-option"
      >
        <wui-flex alignItems="center" gap="s">
          <wui-wallet-image
            size="sm"
            imageSrc=${E(this.connectedWalletInfo?.icon)}
            name=${E(this.connectedWalletInfo?.name)}
          ></wui-wallet-image>
          <wui-text variant="paragraph-500" color="inherit">Pay with ${e}</wui-text>
        </wui-flex>
      </wui-list-item>

      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="disconnect"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${!1}
      >
        <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return f`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="walletPlaceholder"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="paragraph-500" color="inherit">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?f`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:0===this.exchanges.length?f`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-100">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map(e=>f`
        <wui-list-item
          @click=${()=>this.onExchangePayment(e.id)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          ?disabled=${null!==this.loadingExchangeId}
        >
          <wui-flex alignItems="center" gap="s">
            ${this.loadingExchangeId===e.id?f`<wui-loading-spinner color="accent-100" size="md"></wui-loading-spinner>`:f`<wui-wallet-image
                  size="sm"
                  imageSrc=${E(e.imageUrl)}
                  name=${e.name}
                ></wui-wallet-image>`}
            <wui-text flexGrow="1" variant="paragraph-500" color="inherit"
              >Pay with ${e.name} <wui-spinner size="sm" color="fg-200"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `)}onWalletPayment(){V.handlePayWithWallet()}async onExchangePayment(e){try{this.loadingExchangeId=e;const t=await V.handlePayWithExchange(e);t&&(await d.open({view:"PayLoading"}),a.openHref(t.url,t.openInNewTab?"_blank":"_self"))}catch(t){u.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(e){e.stopPropagation();try{await r.disconnect()}catch{u.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}};J.styles=q,B([b()],J.prototype,"amount",void 0),B([b()],J.prototype,"tokenSymbol",void 0),B([b()],J.prototype,"networkName",void 0),B([b()],J.prototype,"exchanges",void 0),B([b()],J.prototype,"isLoading",void 0),B([b()],J.prototype,"loadingExchangeId",void 0),B([b()],J.prototype,"connectedWalletInfo",void 0),J=B([v("w3m-pay-view")],J);const Z=y`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }
`;var X=function(e,t,a,n){var s,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(r=(i<3?s(r):i>3?s(t,a,r):s(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r};let Q=class extends g{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=V.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return f`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;default:"exchange"===V.state.currentPayment?.type?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet")}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();default:return this.loaderTemplate()}}setupExchangeSubscription(){"exchange"===V.state.currentPayment?.type&&(this.exchangeSubscription=setInterval(async()=>{const e=V.state.currentPayment?.exchangeId,t=V.state.currentPayment?.sessionId;e&&t&&(await V.updateBuyStatus(e,t),"SUCCESS"===V.state.currentPayment?.status&&clearInterval(this.exchangeSubscription))},4e3))}setupSubscription(){V.subscribeKey("isPaymentInProgress",e=>{e||"in-progress"!==this.paymentState||(V.state.error||!V.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout(()=>{"disconnected"!==r.state.status&&d.close()},3e3))}),V.subscribeKey("error",e=>{e&&"in-progress"===this.paymentState&&(this.paymentState="error",this.updateMessages())})}loaderTemplate(){const e=x.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4,a=this.getPaymentIcon();return f`
      <wui-flex justifyContent="center" alignItems="center" style="position: relative;">
        ${a?f`<wui-wallet-image size="lg" imageSrc=${a}></wui-wallet-image>`:null}
        <wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>
      </wui-flex>
    `}getPaymentIcon(){const e=V.state.currentPayment;if(e){if("exchange"===e.type){const t=e.exchangeId;if(t){const e=V.getExchangeById(t);return e?.imageUrl}}if("wallet"===e.type){const e=l.state.connectedWalletInfo?.icon;if(e)return e;const t=n.state.activeChain;if(!t)return;const a=I.getConnectorId(t);if(!a)return;const s=I.getConnectorById(a);if(!s)return;return P.getConnectorImage(s)}}}successTemplate(){return f`<wui-icon size="xl" color="success-100" name="checkmark"></wui-icon>`}errorTemplate(){return f`<wui-icon size="xl" color="error-100" name="close"></wui-icon>`}};Q.styles=Z,X([b()],Q.prototype,"loadingMessage",void 0),X([b()],Q.prototype,"subMessage",void 0),X([b()],Q.prototype,"paymentState",void 0),Q=X([v("w3m-pay-loading-view")],Q);async function ee(e){return V.handleOpenPay(e)}async function te(e,t=3e5){if(t<=0)throw new M(S,"Timeout must be greater than 0");try{await ee(e)}catch(a){if(a instanceof M)throw a;throw new M(T,a.message)}return new Promise((e,a)=>{let n=!1;const s=setTimeout(()=>{n||(n=!0,u(),a(new M(D,"Payment timeout")))},t);function i(){if(n)return;const t=V.state.currentPayment,a=V.state.error,i=V.state.isPaymentInProgress;return"SUCCESS"===t?.status?(n=!0,u(),clearTimeout(s),void e({success:!0,result:t.result})):"FAILED"===t?.status?(n=!0,u(),clearTimeout(s),void e({success:!1,error:a||"Payment failed"})):void(!a||i||t||(n=!0,u(),clearTimeout(s),e({success:!1,error:a})))}const r=re("currentPayment",i),o=re("error",i),c=re("isPaymentInProgress",i),u=(l=[r,o,c],()=>{l.forEach(e=>{try{e()}catch{}})});var l;i()})}function ae(){return V.getExchanges()}function ne(){return V.state.currentPayment?.result}function se(){return V.state.error}function ie(){return V.state.isPaymentInProgress}function re(e,t){return V.subscribeKey(e,t)}const oe={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ce={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ue={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},le={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},me={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},de={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},pe={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},he={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},we={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ye={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ge={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},fe={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},xe={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Ie={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}};export{Q as W3mPayLoadingView,J as W3mPayView,de as arbitrumUSDC,ge as arbitrumUSDT,oe as baseETH,ue as baseSepoliaETH,ce as baseUSDC,le as ethereumUSDC,we as ethereumUSDT,ae as getExchanges,ie as getIsPaymentInProgress,se as getPayError,ne as getPayResult,ee as openPay,me as optimismUSDC,ye as optimismUSDT,te as pay,pe as polygonUSDC,fe as polygonUSDT,Ie as solanaSOL,he as solanaUSDC,xe as solanaUSDT};
