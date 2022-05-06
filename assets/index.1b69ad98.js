var P=Object.defineProperty,R=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var C=(n,e,t)=>e in n?P(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,j=(n,e)=>{for(var t in e||(e={}))O.call(e,t)&&C(n,t,e[t]);if(T)for(var t of T(e))_.call(e,t)&&C(n,t,e[t]);return n},k=(n,e)=>R(n,D(e));import{j as S,r as l,A,H as q,R as E,p as z,W as H,C as K,S as F,B as G,a as J}from"./vendor.8d65ff0a.js";const Q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const b of a)if(b.type==="childList")for(const o of b.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const b={};return a.integrity&&(b.integrity=a.integrity),a.referrerpolicy&&(b.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?b.credentials="include":a.crossorigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function c(a){if(a.ep)return;a.ep=!0;const b=t(a);fetch(a.href,b)}};Q();const f=S.exports.jsx,r=S.exports.jsxs;var U="/web3-app-solidity/assets/logo.60ecbcf0.png";const L=({title:n,classProps:e})=>f("li",{className:`mx-4 cursour-pointer ${e}`,children:n}),V=()=>{const[n,e]=l.exports.useState(!1);return r("nav",{className:"w-full flex md:justify-center justify-between items-center p-4",children:[f("div",{className:"md:flex-[0.5] flex-initial justify-center items-center",children:f("img",{src:U,alt:"logo",className:"w-32 cursor-pointer"})}),r("ul",{className:"text-white md:flex hidden list-none flex-row justify-between items-center flex-initial",children:[["Market","Exchange","Tutorials","Wallets"].map((t,c)=>f(L,{title:t},t+c)),f("li",{className:"bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]",children:"Login"})]}),r("div",{className:"flex relative",children:[n?f(A,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!1)}):f(q,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!0)}),n&&r("ul",{className:"z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in",children:[f("li",{className:"text-xl w-full my-2",children:f(A,{onClick:()=>e(!1)})}),["Market","Exchange","Tutorials","Wallets"].map((t,c)=>f(L,{title:t,classProps:"my-2 text-lg"},t+c))]})]})]})},X="hh-sol-artifact-1",Y="Transactions",Z="contracts/Transactions.sol",f0=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"keyword",type:"string"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address payable",name:"reciever",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"string",name:"keyword",type:"string"}],name:"addToBlockchain",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllTrnsactions",outputs:[{components:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"reciever",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"},{internalType:"string",name:"keyword",type:"string"}],internalType:"struct Transactions.TransferStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTransactionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],e0="0x608060405234801561001057600080fd5b50610c0d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632e7700f014610046578063cc2d7ead14610064578063d86f394c14610080575b600080fd5b61004e61009e565b60405161005b91906108db565b60405180910390f35b61007e600480360381019061007991906105e1565b6100a7565b005b610088610269565b60405161009591906108b9565b60405180910390f35b60008054905090565b60016000808282546100b991906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190805190602001906101f89291906104ac565b506080820151816004015560a082015181600501908051906020019061021f9291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161025b9695949392919061084a565b60405180910390a150505050565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156104a357838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461037690610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546103a290610ad9565b80156103ef5780601f106103c4576101008083540402835291602001916103ef565b820191906000526020600020905b8154815290600101906020018083116103d257829003601f168201915b505050505081526020016004820154815260200160058201805461041290610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461043e90610ad9565b801561048b5780601f106104605761010080835404028352916020019161048b565b820191906000526020600020905b81548152906001019060200180831161046e57829003601f168201915b5050505050815250508152602001906001019061028d565b50505050905090565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea2646970667358221220f5e95ce26e2a650a69c19740d5e794a85c6e298fd425d7bed92fae39e1e1c65d64736f6c63430008000033",t0="0x608060405234801561001057600080fd5b50600436106100415760003560e01c80632e7700f014610046578063cc2d7ead14610064578063d86f394c14610080575b600080fd5b61004e61009e565b60405161005b91906108db565b60405180910390f35b61007e600480360381019061007991906105e1565b6100a7565b005b610088610269565b60405161009591906108b9565b60405180910390f35b60008054905090565b60016000808282546100b991906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190805190602001906101f89291906104ac565b506080820151816004015560a082015181600501908051906020019061021f9291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161025b9695949392919061084a565b60405180910390a150505050565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156104a357838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461037690610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546103a290610ad9565b80156103ef5780601f106103c4576101008083540402835291602001916103ef565b820191906000526020600020905b8154815290600101906020018083116103d257829003601f168201915b505050505081526020016004820154815260200160058201805461041290610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461043e90610ad9565b801561048b5780601f106104605761010080835404028352916020019161048b565b820191906000526020600020905b81548152906001019060200180831161046e57829003601f168201915b5050505050815250508152602001906001019061028d565b50505050905090565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea2646970667358221220f5e95ce26e2a650a69c19740d5e794a85c6e298fd425d7bed92fae39e1e1c65d64736f6c63430008000033",a0={},n0={};var b0={_format:X,contractName:Y,sourceName:Z,abi:f0,bytecode:e0,deployedBytecode:t0,linkReferences:a0,deployedLinkReferences:n0};const s0=b0.abi,r0="0x6cbC25fA1E7d80E5678fA2847AD1A07a9130635d",M=E.createContext(),{ethereum:d}=window,c0=()=>{const e=new H(d).getSigner();return new K(r0,s0,e)},o0=({children:n})=>{const[e,t]=l.exports.useState(""),[c,a]=l.exports.useState(!1),[b,o]=l.exports.useState(localStorage.getItem("transactionCount")),[m,u]=l.exports.useState({addressTo:"",amount:"",keyword:"",message:""}),h=(s,x)=>{u(g=>k(j({},g),{[x]:s.target.value}))},y=async()=>{try{if(!d)return alert("Please install metamask");const s=await d.request({method:"eth_accounts"});s.length?t(s[0]):console.log("No accounts found")}catch(s){throw console.log(s),new Error("No ethereum object.")}},B=async()=>{try{if(!d)return alert("Please install metamask");const s=await d.request({method:"eth_requestAccounts"});t(s[0])}catch(s){throw console.log(s),new Error("No ethereum object.")}},I=async()=>{try{if(!d)return alert("Please install metamask");const{addressTo:s,amount:x,keyword:g,message:W}=m,v=c0(),N=z(x);await d.request({method:"eth_sendTransaction",params:[{from:e,to:s,gas:"0x5208",value:N._hex}]});const w=await v.addToBlockchain(s,N,W,g);a(!0),console.log(`Loading - ${w.hash}`),await w.wait(),console.log(`Success - ${w.hash}`),a(!1);const $=await v.getTransactionCount();o($.toNumber())}catch(s){throw console.log(s),new Error("No ethereum object.")}};return l.exports.useEffect(()=>{y()},[]),f(M.Provider,{value:{connectWallet:B,currentAccount:e,formData:m,setformData:u,handleChange:h,sendTransaction:I},children:n})},i="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",p=({placeholder:n,name:e,type:t,value:c,handleChange:a})=>f("input",{placeholder:n,type:t,step:"0.0001",value:c,onChange:b=>a(b,e),className:"my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"}),l0=()=>{const{currentAccount:n,connectWallet:e,formData:t,sendTransaction:c,handleChange:a}=l.exports.useContext(M),b=o=>{const{addressTo:m,amount:u,keyword:h,message:y}=t;o.preventDefault(),!(!m||!u||!h||!y)&&c()};return f("div",{className:"flex w-full justify-center items-center",children:r("div",{className:"flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4",children:[r("div",{className:"flex flex-1 justify-start items-start flex-col mf:mr-10",children:[r("h1",{className:"text-3xl sm:text-5xl text-white text-gradient py-1",children:["Send Crypto ",f("br",{})," across the world"]}),f("p",{className:"text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base",children:"Explore the crypto world. Buy and sell crypto easily on Krypto."}),!n&&f("button",{type:"button",onClick:e,className:"flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]",children:f("p",{className:"text-white text-base font-semibold",children:"Connect Wallet"})}),r("div",{className:"grid sm:grid-cols-3 grid-cols-2 w-full mt-10",children:[f("div",{className:`rounded-tl-2xl ${i}`,children:"Reliabillity"}),f("div",{className:`${i}`,children:"Security"}),f("div",{className:`rounded-tr-2xl ${i}`,children:"Ethereum"}),f("div",{className:`rounded-bl-2xl ${i}`,children:"Web 3.0"}),f("div",{className:`${i}`,children:"Low fees"}),f("div",{className:`rounded-br-2xl ${i}`,children:"Blockchain"})]})]}),r("div",{className:"flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10",children:[f("div",{className:"p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ",children:r("div",{className:"flex justify-between flex-col w-full h-full",children:[r("div",{className:"flex justify-between items-start",children:[f("div",{className:"w-10 h-10 rounded-full border-2 border-white flex justify-center items-center",children:f(F,{fontSize:21,color:"#fff"})}),f(G,{fontSize:17,color:"#fff"})]}),r("div",{children:[f("p",{className:"text-white font-light text-sm",children:"Address"}),f("p",{className:"text-white font-semibold text-lg mt-1",children:"Ethereum"})]})]})}),r("div",{className:"p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism",children:[f(p,{placeholder:"Address To",name:"addressTo",type:"text",handleChange:a}),f(p,{placeholder:"Amount (ETH)",name:"amount",type:"number",handleChange:a}),f(p,{placeholder:"Keyword (Gif)",name:"keyword",type:"text",handleChange:a}),f(p,{placeholder:"Enter Message",name:"message",type:"text",handleChange:a}),f("div",{className:"h-[1px] w-full bg-gray-400 my-2"}),f("button",{type:"button",onClick:b,className:"text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer",children:"Send now"})]})]})]})})},d0=()=>f("div",{children:r("div",{className:"gradient-bg-welcome",children:[f(V,{}),f(l0,{})]})});J.render(f(o0,{children:f(E.StrictMode,{children:f(d0,{})})}),document.getElementById("root"));