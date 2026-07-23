import{c9 as t,cd as e,ce as i}from"./3ptQIBJb.js";import{c as r}from"./nddBALH4.js";import"./B6b8YLs9.js";import"./LgAAmdpy.js";import"./CwO4hvnm.js";import"./D0MC3uiJ.js";import"./tPawBPYT.js";import"./_d8xReMN.js";import"./ByssTI6i.js";import"./1UqPZgvr.js";const o=t`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let s=class extends e{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=o,s=function(t,e,i,r){var o,s=arguments.length,l=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(s<3?o(l):s>3?o(e,i,l):o(e,i))||l);return s>3&&l&&Object.defineProperty(e,i,l),l}([r("w3m-transactions-view")],s);export{s as W3mTransactionsView};
