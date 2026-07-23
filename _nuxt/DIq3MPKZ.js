import{eG as e,eD as t,cl as n,cs as s,cq as a,ci as r,cw as o,cp as i,cy as c,cz as u,cA as m,c9 as p,cd as h,co as d,ce as g,eE as l,ch as y}from"./3ptQIBJb.js";import{r as w}from"./LgAAmdpy.js";import{c as x}from"./nddBALH4.js";import"./D4Z0BSxx.js";import"./BiCWaQU-.js";import"./ByssTI6i.js";import"./OtI9-muE.js";import"./1UqPZgvr.js";import"./DpsQTQI6.js";import"./D0MC3uiJ.js";import"./tPawBPYT.js";import"./CwO4hvnm.js";const f={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};class P extends Error{}async function I(e,n){const s=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${t.getSnapshot().projectId}&source=fund-wallet`,{sdkType:a,sdkVersion:r,projectId:o}=t.getSnapshot(),i={jsonrpc:"2.0",id:1,method:e,params:{...n||{},st:a,sv:r,projectId:o}},c=await fetch(s,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}),u=await c.json();if(u.error)throw new P(u.error.message);return u}function k(t,n){const{chainNamespace:s,chainId:a}=e.parseCaipNetworkId(t),r=f[s];if(!r)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${s}`);let o=r.native.assetNamespace,i=r.native.assetReference;"native"!==n&&(o=r.defaultTokenNamespace,i=n);return`${`${s}:${a}`}/${o}:${i}`}const b={paymentAsset:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:0}},amount:0,tokenAmount:0,tokenPrice:null,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:""},E=m(b),v={state:E,subscribe:e=>u(E,()=>e(E)),subscribeKey:(e,t)=>c(E,e,t),resetState(){Object.assign(E,{...b})},async fetchTokenPrice(){E.priceLoading=!0;const e=o(),t=await i.fetchTokenPrice({addresses:[e]});E.tokenPrice=t.fungibles?.[0]?.price||null,E.priceLoading=!1},getTokenAmount(){if(!E.tokenPrice)throw new Error("Cannot get token price");const e=new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:4}).format(E.amount/E.tokenPrice);return Number(e)},setAmount(e){E.amount=e,E.tokenPrice&&(E.tokenAmount=this.getTokenAmount())},setPaymentAsset(e){E.paymentAsset=e},async fetchExchanges(){try{E.isLoading=!0;const e=await async function(e){return(await I("reown_getExchanges",e)).result}({page:0,asset:k(E.paymentAsset.network,E.paymentAsset.asset),amount:E.amount.toString()});E.exchanges=e.exchanges.slice(0,2)}catch(e){throw r.showError("Unable to get exchanges"),new Error("Unable to get exchanges")}finally{E.isLoading=!1}},async getPayUrl(e,t){try{const s=Number(t.amount),a=await async function(e){return(await I("reown_getExchangePayUrl",e)).result}({exchangeId:e,asset:k(t.network,t.asset),amount:s.toString(),recipient:`${t.network}:${t.recipient}`});return n.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:s},currentPayment:{type:"exchange",exchangeId:e},source:"fund-from-exchange",headless:!1}}),a}catch(s){if(s instanceof Error&&s.message.includes("is not supported"))throw new Error("Asset not supported");throw new Error(s.message)}},async handlePayWithExchange(e){try{if(!s.state.address)throw new Error("No account connected");E.isPaymentInProgress=!0,E.paymentId=crypto.randomUUID(),E.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:n}=E.paymentAsset,r={network:t,asset:n,amount:E.tokenAmount,recipient:s.state.address},o=await this.getPayUrl(e,r);if(!o)throw new Error("Unable to initiate payment");E.currentPayment.sessionId=o.sessionId,E.currentPayment.status="IN_PROGRESS",E.currentPayment.exchangeId=e,a.openHref(o.url,"_blank","popup=yes,width=480,height=720,noopener,noreferrer")}catch(t){E.error="Unable to initiate payment",r.showError(E.error)}},async waitUntilComplete({exchangeId:e,sessionId:t,paymentId:n,retries:s=20}){const a=await this.getBuyStatus(e,t,n);if("SUCCESS"===a.status||"FAILED"===a.status)return a;if(0===s)throw new Error("Unable to get deposit status");return await new Promise(e=>{setTimeout(e,5e3)}),this.waitUntilComplete({exchangeId:e,sessionId:t,paymentId:n,retries:s-1})},async getBuyStatus(e,t,a){try{if(!E.currentPayment)throw new Error("No current payment");const r=await async function(e){return(await I("reown_getExchangeBuyStatus",e)).result}({sessionId:t,exchangeId:e});return E.currentPayment.status=r.status,"SUCCESS"!==r.status&&"FAILED"!==r.status||(E.currentPayment.result=r.txHash,E.isPaymentInProgress=!1,n.sendEvent({type:"track",event:"SUCCESS"===r.status?"PAY_SUCCESS":"PAY_ERROR",properties:{source:"fund-from-exchange",paymentId:a,configuration:{network:E.paymentAsset.network,asset:E.paymentAsset.asset,recipient:s.state.address||"",amount:E.amount},currentPayment:{type:"exchange",exchangeId:E.currentPayment?.exchangeId,sessionId:E.currentPayment?.sessionId,result:r.txHash}}})),r}catch(r){return{status:"UNKNOWN",txHash:""}}},reset(){E.currentPayment=void 0,E.isPaymentInProgress=!1,E.paymentId="",E.paymentAsset={network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:0}},E.amount=0,E.tokenAmount=0,E.tokenPrice=null,E.priceLoading=!1,E.error=null,E.exchanges=[],E.isLoading=!1}},A=p`
  .amount-input-container {
    border-radius: var(--wui-border-radius-m);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-bg-100);
  }

  .container {
    background-color: var(--wui-color-bg-125);
  }
`;var S=function(e,t,n,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};const $=[10,50,100];let C=class extends h{constructor(){super(),this.unsubscribe=[],this.network=d.state.activeCaipNetwork,this.exchanges=v.state.exchanges,this.isLoading=v.state.isLoading,this.amount=v.state.amount,this.tokenAmount=v.state.tokenAmount,this.priceLoading=v.state.priceLoading,this.isPaymentInProgress=v.state.isPaymentInProgress,this.currentPayment=v.state.currentPayment,this.paymentId=v.state.paymentId,this.unsubscribe.push(v.subscribe(e=>{this.exchanges=e.exchanges,this.isLoading=e.isLoading,this.amount=e.amount,this.tokenAmount=e.tokenAmount,this.priceLoading=e.priceLoading,this.paymentId=e.paymentId,this.isPaymentInProgress=e.isPaymentInProgress,this.currentPayment=e.currentPayment;e.isPaymentInProgress&&e.currentPayment?.exchangeId&&e.currentPayment?.sessionId&&e.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),v.reset()}firstUpdated(){v.fetchExchanges(),v.fetchTokenPrice()}render(){return g`
      <wui-flex flexDirection="column" gap="xs" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesTemplate(){return g`
      <wui-flex
        flexDirection="column"
        gap="xs"
        .padding=${["xs","s","s","s"]}
        class="exchanges-container"
      >
        ${this.exchanges.map(e=>g`<wui-list-item
              @click=${()=>this.onExchangeClick(e)}
              chevron
              variant="image"
              imageSrc=${e.imageUrl}
              ?loading=${this.isLoading}
              ?disabled=${!this.amount}
            >
              <wui-text variant="paragraph-500" color="fg-200">
                Deposit from ${e.name}
              </wui-text>
            </wui-list-item>`)}
      </wui-flex>
    `}amountInputTemplate(){return g`
      <wui-flex flexDirection="column" gap="s" .padding=${["0","s","s","s"]} class="amount-input-container">
        <wui-flex justifyContent="space-between">
          <wui-text variant="paragraph-500" color="fg-200">Asset</wui-text>
          <wui-chip-button
            data-testid="deposit-from-exchange-asset-button"
            text=${this.network?.nativeCurrency.symbol||""}
            imageSrc=${l.getNetworkImage(this.network)}
            size="sm"
            variant="gray"
            icon=${null}
          ></wui-chip-button>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" justifyContent="center">
          <wui-flex alignItems="center" gap="4xs">
            <wui-text variant="2xl-500" color="fg-200">${this.amount}</wui-text>
            <wui-text variant="paragraph-500" color="fg-200">USD</wui-text>
          </wui-flex>
          ${this.tokenAmountTemplate()}
          </wui-flex>
          <wui-flex justifyContent="space-between" gap="xs">
            ${$.map(e=>g`<wui-button @click=${()=>this.onPresetAmountClick(e)} variant=${this.amount===e?"accent":"shade"} size="sm" fullWidth>$${e}</wui-button>`)}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){return this.priceLoading?g`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:g`
      <wui-text variant="paragraph-500" color="fg-200">
        ${this.tokenAmount} ${this.network?.nativeCurrency.symbol}
      </wui-text>
    `}async onExchangeClick(e){this.amount&&await v.handlePayWithExchange(e.id)}handlePaymentInProgress(){this.isPaymentInProgress&&this.currentPayment?.exchangeId&&this.currentPayment?.sessionId&&this.paymentId&&(r.showLoading("Deposit in progress..."),y.replace("Account"),v.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(e=>{"SUCCESS"===e.status?r.showSuccess("Deposit completed"):"FAILED"===e.status&&r.showError("Deposit failed")}))}onPresetAmountClick(e){v.setAmount(e)}};C.styles=A,S([w()],C.prototype,"network",void 0),S([w()],C.prototype,"exchanges",void 0),S([w()],C.prototype,"isLoading",void 0),S([w()],C.prototype,"amount",void 0),S([w()],C.prototype,"tokenAmount",void 0),S([w()],C.prototype,"priceLoading",void 0),S([w()],C.prototype,"isPaymentInProgress",void 0),S([w()],C.prototype,"currentPayment",void 0),S([w()],C.prototype,"paymentId",void 0),C=S([x("w3m-deposit-from-exchange-view")],C);export{C as W3mDepositFromExchangeView};
