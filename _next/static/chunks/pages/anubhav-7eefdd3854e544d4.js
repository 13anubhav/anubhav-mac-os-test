(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451,881],{731:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/anubhav",function(){return s(3482)}])},5881:function(e,i,s){"use strict";s.r(i);var t=s(5893),o=s(7294),n=s(9008),a=s.n(n);let l=e=>{let[i,s]=(0,o.useState)(!1),[n,l]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let t;let o=()=>{t=new window.google.maps.Map(document.getElementById("map"),{center:{lat:0,lng:0},zoom:8})},r=()=>{n&&e.prop.forEach(e=>{n.geocode({address:e},(s,o)=>{if("OK"===o){let o=new window.google.maps.Marker({position:s[0].geometry.location,map:t,title:e,label:{fontWeight:"bold",fontSize:"18px",color:"#012336",marginLeft:"10px",marginTop:"5px",marginBottom:"5px"}}),n=new window.google.maps.InfoWindow({content:'<div style="text-align: center;"><b>'.concat(e,'</b><br /><span style="display: inline-block; margin-top: 5px;">').concat(e,"</span></div>")});o.addListener("click",()=>{n.open(t,o)}),i&&(t.setCenter(s[0].geometry.location),t.setZoom(10))}})})};if(void 0!==window.google&&void 0!==window.google.maps)s(!0),l(new window.google.maps.Geocoder),o(),r();else{let e=document.createElement("script");a(),e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4TQVz0zicFzb_HOg4v_5TgAHRXJ-dLBU&libraries=places",e.async=!0,e.defer=!0,e.onload=()=>{s(!0),l(new window.google.maps.Geocoder),o(),r()},document.head.appendChild(e)}},[e]),(0,t.jsx)("div",{children:(0,t.jsx)("div",{id:"map",style:{height:"400px",width:"100%"}})})};i.default=l},3482:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return m}});var t=s(5893),o=s(7294),n=s(1664),a=s.n(n),l=s(9008),r=s.n(l),d=s(7938),c=s.n(d),C=s(1163),h=s(8562),p=s(6327),x=s(5881),f=s(5643),g=s(2525),u=s(1663),_=s(7421);function m(){let e;let[i,s]=(0,o.useState)(!1),n=(0,o.useRef)(null),[l,d]=(0,o.useState)(null),[m,j]=(0,o.useState)(0),[v,w]=(0,o.useState)(!0),[y,N]=(0,o.useState)(0),[b,H]=(0,o.useState)([]),B=(0,C.useRouter)(),{query:M}=B;(0,o.useEffect)(()=>{let e=e=>{try{e.preventDefault(),e.returnValue="",preventDefault(!0)&&history.go(-1),B.push("/Form");var i=window.performance.getEntriesByType("navigation")[0].type;"reload"==i&&window.location.replace("https://holidaysocho.com/form")}catch(e){console.error("Error handling beforeunload:",e)}};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[B]),(0,o.useEffect)(()=>{"reload"==window.performance.getEntriesByType("navigation")[0].type&&(window.onpopstate=()=>{history.go(-1)})},[B]),(0,o.useEffect)(()=>{"/?step=2"===B.asPath&&(window.onpopstate=()=>{history.go("/form")})},[B]),(0,o.useEffect)(()=>{"/?step=1"===B.asPath&&(window.onpopstate=()=>{history.go("/form")})},[B]);let V=async e=>{var i,s,t,o,n;let a=new Headers;a.append("Authorization","Bearer ".concat("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")),a.append("Content-Type","application/json");let l={method:"POST",headers:a,body:JSON.stringify({messages:[{role:"system",content:"You are a helpful assistant."},{role:"user",content:e}],model:"gpt-3.5-turbo",max_tokens:3750,presence_penalty:0,frequency_penalty:0})};try{let e=await fetch("https://api.openai.com/v1/chat/completions",l),i=await e.json();return i.choices&&(null===(t=i.choices[0])||void 0===t?void 0:null===(o=t.message)||void 0===o?void 0:o.content)||""}catch(e){B.push("/form")}return null!==(n=responseData.choices&&(null===(i=responseData.choices[0])||void 0===i?void 0:null===(s=i.message)||void 0===s?void 0:s.content))&&void 0!==n?n:""},Z=[],E=0;(0,o.useEffect)(()=>{++E<=1&&(n.current,(async()=>{try{let o=await V(M.state);var i=o.indexOf("{"),s=o.lastIndexOf("}")+1,t=o.substring(i,s);e=JSON.parse(t),d(e),w(!1),console.log(e,"gggg")}catch(i){console.error("Error fetching data:",i),B.push("/form"),console.log(e,"gggg")}})())},[]);let S=e=>{N(2),j(e);let i=[];for(let s of l.trip_details[e].schedule)i.push(s.location);H(i),console.log(i,"i am  arr")};console.log(y,"i am count");let k=l&&l.trip_details||[];if(k&&k.length>0&&0==y){for(let e of l.trip_details[0].schedule)Z.push(e.location);console.log("i am insides"),console.log(Z,"i am arr")}return v?(0,t.jsx)(h.default,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:"Holiday Socho"}),(0,t.jsx)("meta",{name:"description",content:"Plan your next plan using AI"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico?"})]}),(0,t.jsxs)("div",{className:c().wrapper,children:[(0,t.jsx)(u.Z,{open:i,onClose:()=>s(!1),children:(0,t.jsx)(_.Z,{})}),(0,t.jsxs)("div",{className:c().itinerary_container,children:[(0,t.jsxs)("div",{className:c().itinerary_subcontainer,children:[(0,t.jsx)("div",{className:c().holiday_socho_logo_itinerary,children:(0,t.jsx)(a(),{href:"/",children:(0,t.jsxs)("svg",{width:"300",height:"60",viewBox:"0 0 202 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M10.4983 11.4586C11.9115 11.4586 13.1677 11.7722 14.2669 12.3993C15.3661 13.0041 16.2185 13.9112 16.8242 15.1207C17.4523 16.3078 17.7663 17.7413 17.7663 19.4212V30.3403H13.0555V20.0595C13.0555 18.5812 12.6854 17.4501 11.9451 16.6662C11.2049 15.8599 10.1954 15.4567 8.9168 15.4567C7.61573 15.4567 6.58385 15.8599 5.82116 16.6662C5.08089 17.4501 4.71076 18.5812 4.71076 20.0595V30.3403H0V5.47827H4.71076V14.0456C5.31643 13.2393 6.12399 12.6121 7.13344 12.1641C8.14289 11.6938 9.2645 11.4586 10.4983 11.4586Z",fill:"#1B4790"}),(0,t.jsx)("path",{d:"M27.8316 30.6427C26.037 30.6427 24.4219 30.2507 22.9863 29.4668C21.5506 28.6605 20.4178 27.5293 19.5878 26.0735C18.7802 24.6176 18.3764 22.9377 18.3764 21.0339C18.3764 19.13 18.7914 17.4501 19.6214 15.9942C20.4739 14.5384 21.6291 13.4185 23.0872 12.6345C24.5453 11.8282 26.1716 11.425 27.9662 11.425C29.7608 11.425 31.3871 11.8282 32.8452 12.6345C34.3033 13.4185 35.4473 14.5384 36.2773 15.9942C37.1298 17.4501 37.556 19.13 37.556 21.0339C37.556 22.9377 37.1185 24.6176 36.2437 26.0735C35.3913 27.5293 34.2248 28.6605 32.7443 29.4668C31.2862 30.2507 29.6486 30.6427 27.8316 30.6427ZM27.8316 26.5438C28.684 26.5438 29.4804 26.3422 30.2206 25.9391C30.9833 25.5135 31.589 24.8864 32.0377 24.0576C32.4863 23.2289 32.7106 22.221 32.7106 21.0339C32.7106 19.2644 32.2395 17.9093 31.2974 16.9686C30.3777 16.0054 29.2448 15.5239 27.8989 15.5239C26.553 15.5239 25.4202 16.0054 24.5004 16.9686C23.6031 17.9093 23.1545 19.2644 23.1545 21.0339C23.1545 22.8033 23.5919 24.1696 24.4668 25.1327C25.3641 26.0735 26.4857 26.5438 27.8316 26.5438Z",fill:"#1B4790"}),(0,t.jsx)("path",{d:"M43.0304 5.47827V30.3403H38.3196V5.47827H43.0304Z",fill:"#1B4790"}),(0,t.jsx)("path",{d:"M49.7035 11.7274V30.3403H44.9928V11.7274H49.7035Z",fill:"#1B4790"}),(0,t.jsx)("path",{d:"M50.4546 20.9667C50.4546 19.0852 50.8247 17.4165 51.565 15.9607C52.3277 14.5048 53.3595 13.3849 54.6606 12.6009C55.9617 11.817 57.4086 11.425 59.0012 11.425C60.2126 11.425 61.3678 11.6938 62.467 12.2313C63.5662 12.7465 64.4411 13.4408 65.0916 14.3144V5.47827H69.8696V30.3403H65.0916V27.5853C64.5084 28.5037 63.6896 29.2428 62.6353 29.8028C61.5809 30.3627 60.3584 30.6427 58.9676 30.6427C57.3973 30.6427 55.9617 30.2395 54.6606 29.4332C53.3595 28.6269 52.3277 27.4958 51.565 26.0399C50.8247 24.5616 50.4546 22.8705 50.4546 20.9667ZM65.1252 21.0339C65.1252 19.8915 64.9009 18.9172 64.4523 18.1109C64.0036 17.2821 63.398 16.655 62.6353 16.2294C61.8726 15.7815 61.0538 15.5575 60.1789 15.5575C59.3041 15.5575 58.4965 15.7703 57.7563 16.1958C57.016 16.6214 56.4103 17.2486 55.9392 18.0773C55.4906 18.8836 55.2663 19.8467 55.2663 20.9667C55.2663 22.0866 55.4906 23.0721 55.9392 23.9232C56.4103 24.752 57.016 25.3903 57.7563 25.8383C58.519 26.2862 59.3265 26.5102 60.1789 26.5102C61.0538 26.5102 61.8726 26.2974 62.6353 25.8719C63.398 25.4239 64.0036 24.7968 64.4523 23.9904C64.9009 23.1617 65.1252 22.1762 65.1252 21.0339Z",fill:"#1B4790"}),(0,t.jsx)("path",{d:"M70.5673 20.9667C70.5673 19.0852 70.9374 17.4165 71.6777 15.9607C72.4404 14.5048 73.4611 13.3849 74.7397 12.6009C76.0408 11.817 77.4877 11.425 79.0803 11.425C80.4711 11.425 81.6825 11.705 82.7144 12.2649C83.7687 12.8249 84.6099 13.5304 85.238 14.3816V11.7274H89.9824V30.3403H85.238V27.6189C84.6323 28.4925 83.7911 29.2204 82.7144 29.8028C81.66 30.3627 80.4375 30.6427 79.0467 30.6427C77.4764 30.6427 76.0408 30.2395 74.7397 29.4332C73.4611 28.6269 72.4404 27.4958 71.6777 26.0399C70.9374 24.5616 70.5673 22.8705 70.5673 20.9667ZM85.238 21.0339C85.238 19.8915 85.0137 18.9172 84.565 18.1109C84.1164 17.2821 83.5107 16.655 82.748 16.2294C81.9853 15.7815 81.1665 15.5575 80.2917 15.5575C79.4168 15.5575 78.6093 15.7703 77.869 16.1958C77.1287 16.6214 76.5231 17.2486 76.052 18.0773C75.6034 18.8836 75.379 19.8467 75.379 20.9667C75.379 22.0866 75.6034 23.0721 76.052 23.9232C76.5231 24.752 77.1287 25.3903 77.869 25.8383C78.6317 26.2862 79.4393 26.5102 80.2917 26.5102C81.1665 26.5102 81.9853 26.2974 82.748 25.8719C83.5107 25.4239 84.1164 24.7968 84.565 23.9904C85.0137 23.1617 85.238 22.1762 85.238 21.0339Z",fill:"#1B4790"}),(0,t.jsx)("path",{d:"M109.725 11.7274L98.1836 39.1428H93.17L97.2078 29.87L89.7379 11.7274H95.0207L99.8324 24.7296L104.711 11.7274H109.725Z",fill:"#1B4790"}),(0,t.jsx)("g",{filter:"url(#filter0_d_316_1397)",children:(0,t.jsx)("path",{d:"M45.2958 8.73723C45.8566 9.25239 46.552 9.50997 47.382 9.50997C48.212 9.50997 48.8962 9.25239 49.4346 8.73723C49.9954 8.19967 50.2758 7.53892 50.2758 6.75499C50.2758 5.97105 49.9954 5.3215 49.4346 4.80634C48.8962 4.26878 48.212 4 47.382 4C46.552 4 45.8566 4.26878 45.2958 4.80634C44.7575 5.3215 44.4883 5.97105 44.4883 6.75499C44.4883 7.53892 44.7575 8.19967 45.2958 8.73723Z",fill:"#F7941E"})}),(0,t.jsxs)("g",{filter:"url(#filter1_d_316_1397)",children:[(0,t.jsx)("path",{d:"M117.127 30.6091C115.019 30.6091 113.291 30.1275 111.945 29.1644C110.622 28.1789 109.882 26.8462 109.725 25.1663H112.147C112.259 26.1967 112.742 27.0366 113.594 27.6861C114.469 28.3133 115.635 28.6269 117.094 28.6269C118.372 28.6269 119.37 28.3245 120.088 27.7197C120.829 27.115 121.199 26.3646 121.199 25.4687C121.199 24.8416 120.997 24.3264 120.593 23.9232C120.189 23.5201 119.673 23.2065 119.045 22.9825C118.44 22.7361 117.61 22.4785 116.555 22.2098C115.187 21.8514 114.076 21.493 113.224 21.1346C112.372 20.7763 111.643 20.2499 111.037 19.5556C110.454 18.8388 110.162 17.8869 110.162 16.6998C110.162 15.8039 110.431 14.9751 110.97 14.2136C111.508 13.452 112.271 12.8473 113.258 12.3993C114.245 11.9514 115.366 11.7274 116.623 11.7274C118.597 11.7274 120.189 12.2313 121.401 13.2393C122.612 14.2248 123.262 15.5911 123.352 17.3381H120.997C120.929 16.263 120.503 15.4007 119.718 14.7511C118.955 14.0792 117.901 13.7432 116.555 13.7432C115.366 13.7432 114.402 14.0232 113.661 14.5832C112.921 15.1431 112.551 15.8375 112.551 16.6662C112.551 17.3829 112.764 17.9765 113.19 18.4469C113.639 18.8948 114.189 19.2532 114.839 19.522C115.49 19.7684 116.365 20.0483 117.464 20.3619C118.787 20.7203 119.842 21.0675 120.627 21.4034C121.412 21.7394 122.085 22.2322 122.646 22.8817C123.206 23.5313 123.498 24.3936 123.52 25.4687C123.52 26.4542 123.251 27.339 122.713 28.1229C122.174 28.8844 121.423 29.4892 120.458 29.9372C119.494 30.3851 118.383 30.6091 117.127 30.6091Z",fill:"#F7941E"}),(0,t.jsx)("path",{d:"M133.304 30.6091C131.577 30.6091 130.018 30.2283 128.627 29.4668C127.259 28.6829 126.171 27.5853 125.363 26.1743C124.578 24.7408 124.185 23.0721 124.185 21.1682C124.185 19.2644 124.589 17.6069 125.397 16.1958C126.204 14.7623 127.304 13.6648 128.694 12.9033C130.085 12.1194 131.644 11.7274 133.371 11.7274C135.099 11.7274 136.658 12.1194 138.049 12.9033C139.462 13.6648 140.561 14.7623 141.346 16.1958C142.154 17.6069 142.557 19.2644 142.557 21.1682C142.557 23.0497 142.154 24.7072 141.346 26.1407C140.539 27.5741 139.428 28.6829 138.015 29.4668C136.602 30.2283 135.031 30.6091 133.304 30.6091ZM133.304 28.5597C134.516 28.5597 135.637 28.2909 136.669 27.7533C137.701 27.1934 138.531 26.3646 139.159 25.2671C139.81 24.1472 140.135 22.7809 140.135 21.1682C140.135 19.5556 139.821 18.2005 139.193 17.103C138.565 15.983 137.735 15.1543 136.703 14.6168C135.671 14.0568 134.549 13.7768 133.338 13.7768C132.126 13.7768 131.005 14.0568 129.973 14.6168C128.941 15.1543 128.111 15.983 127.483 17.103C126.877 18.2005 126.575 19.5556 126.575 21.1682C126.575 22.7809 126.877 24.1472 127.483 25.2671C128.111 26.3646 128.93 27.1934 129.939 27.7533C130.971 28.2909 132.093 28.5597 133.304 28.5597Z",fill:"#F7941E"}),(0,t.jsx)("path",{d:"M143.082 21.1682C143.082 19.2644 143.464 17.6069 144.226 16.1958C144.989 14.7623 146.043 13.6648 147.389 12.9033C148.735 12.1194 150.272 11.7274 151.999 11.7274C154.265 11.7274 156.127 12.2873 157.585 13.4073C159.065 14.5272 160.019 16.0502 160.445 17.9765H157.921C157.607 16.655 156.923 15.6247 155.869 14.8855C154.837 14.124 153.547 13.7432 151.999 13.7432C150.765 13.7432 149.655 14.0232 148.668 14.5832C147.681 15.1431 146.896 15.983 146.313 17.103C145.752 18.2005 145.471 19.5556 145.471 21.1682C145.471 22.7809 145.752 24.1472 146.313 25.2671C146.896 26.387 147.681 27.227 148.668 27.7869C149.655 28.3469 150.765 28.6269 151.999 28.6269C153.547 28.6269 154.837 28.2573 155.869 27.5181C156.923 26.7566 157.607 25.7039 157.921 24.36H160.445C160.019 26.2414 159.065 27.7533 157.585 28.8956C156.104 30.038 154.242 30.6091 151.999 30.6091C150.272 30.6091 148.735 30.2283 147.389 29.4668C146.043 28.6829 144.989 27.5853 144.226 26.1743C143.464 24.7408 143.082 23.0721 143.082 21.1682Z",fill:"#F7941E"}),(0,t.jsx)("path",{d:"M170.852 11.6602C172.243 11.6602 173.488 11.9514 174.587 12.5337C175.708 13.1161 176.583 14.012 177.211 15.2215C177.862 16.4086 178.187 17.8645 178.187 19.5892V30.3403H175.865V19.8579C175.865 17.8645 175.361 16.3414 174.351 15.2887C173.364 14.236 172.007 13.7096 170.28 13.7096C168.508 13.7096 167.094 14.2696 166.04 15.3895C164.986 16.5094 164.459 18.1557 164.459 20.3283V30.3403H162.103V5.47827H164.459V15.1207C165.042 14.0232 165.894 13.1721 167.016 12.5673C168.16 11.9626 169.439 11.6602 170.852 11.6602Z",fill:"#F7941E"}),(0,t.jsx)("path",{d:"M188.746 30.6091C187.019 30.6091 185.46 30.2283 184.069 29.4668C182.701 28.6829 181.613 27.5853 180.805 26.1743C180.02 24.7408 179.628 23.0721 179.628 21.1682C179.628 19.2644 180.031 17.6069 180.839 16.1958C181.647 14.7623 182.746 13.6648 184.137 12.9033C185.527 12.1194 187.086 11.7274 188.814 11.7274C190.541 11.7274 192.1 12.1194 193.491 12.9033C194.904 13.6648 196.003 14.7623 196.788 16.1958C197.596 17.6069 198 19.2644 198 21.1682C198 23.0497 197.596 24.7072 196.788 26.1407C195.981 27.5741 194.87 28.6829 193.457 29.4668C192.044 30.2283 190.474 30.6091 188.746 30.6091ZM188.746 28.5597C189.958 28.5597 191.079 28.2909 192.111 27.7533C193.143 27.1934 193.973 26.3646 194.601 25.2671C195.252 24.1472 195.577 22.7809 195.577 21.1682C195.577 19.5556 195.263 18.2005 194.635 17.103C194.007 15.983 193.177 15.1543 192.145 14.6168C191.113 14.0568 189.991 13.7768 188.78 13.7768C187.569 13.7768 186.447 14.0568 185.415 14.6168C184.383 15.1543 183.553 15.983 182.925 17.103C182.32 18.2005 182.017 19.5556 182.017 21.1682C182.017 22.7809 182.32 24.1472 182.925 25.2671C183.553 26.3646 184.372 27.1934 185.382 27.7533C186.413 28.2909 187.535 28.5597 188.746 28.5597Z",fill:"#F7941E"})]}),(0,t.jsxs)("defs",{children:[(0,t.jsxs)("filter",{id:"filter0_d_316_1397",x:"40.4883",y:"0",width:"13.7871",height:"13.5099",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,t.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,t.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,t.jsx)("feOffset",{}),(0,t.jsx)("feGaussianBlur",{stdDeviation:"2"}),(0,t.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,t.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),(0,t.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_316_1397"}),(0,t.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_316_1397",result:"shape"})]}),(0,t.jsxs)("filter",{id:"filter1_d_316_1397",x:"105.725",y:"1.47827",width:"96.2754",height:"33.1309",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,t.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,t.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,t.jsx)("feOffset",{}),(0,t.jsx)("feGaussianBlur",{stdDeviation:"2"}),(0,t.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,t.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"}),(0,t.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_316_1397"}),(0,t.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_316_1397",result:"shape"})]})]})]})})}),(0,t.jsxs)("div",{className:c().socho_itinerary,children:[(0,t.jsxs)("div",{className:c().socho_itinerary_container,children:[(0,t.jsxs)("div",{className:c().socho_gpt,children:[(0,t.jsxs)("div",{className:c().socho_gpt_container,children:[(0,t.jsx)("div",{className:c().socho_table_title,children:"Your Amazing Trip Itinerary"}),(0,t.jsxs)("div",{className:c().socho_gpt_table,children:[(0,t.jsx)("div",{className:c().socho_gpt_days,children:l&&k&&k.length>0&&k.map((e,i)=>(0,t.jsxs)("div",{className:i===m?c().socho_sel_day:c().socho_unsel_day,onClick:()=>S(i),children:["Day ",i+1]}))}),(0,t.jsx)("div",{className:c().socho_gpt_details,children:l&&(l.trip_details[m].schedule.length>0?l.trip_details[m].schedule.map((e,i)=>(0,t.jsxs)("div",{id:c().socho_gpt_dtl_row,children:[(0,t.jsx)("div",{id:c().gpt_time,children:l&&e.time}),(0,t.jsxs)("div",{id:c().gpt_content_box,children:[(0,t.jsx)("div",{id:c().gpt_location,children:l&&e.location}),(0,t.jsxs)("div",{id:c().gpt_content,children:[(0,t.jsx)("div",{id:c().gpt_index,children:"activity"}),(0,t.jsx)("div",{id:c().gpt_data,children:l&&e.activity})]}),(0,t.jsxs)("div",{id:c().gpt_content,children:[(0,t.jsx)("div",{id:c().gpt_index,children:"transport"}),(0,t.jsx)("div",{id:c().gpt_data,children:l&&e.transport})]}),(0,t.jsxs)("div",{id:c().gpt_content,children:[(0,t.jsx)("div",{id:c().gpt_index,children:"local Insights"}),(0,t.jsx)("div",{id:c().gpt_data,children:l&&e.local_insights})]})]})]})):(0,t.jsx)("div",{children:"No schedule available for selected day."}))})]})]}),(0,t.jsxs)("div",{className:c().socho_gpt_info,children:[(0,t.jsx)("div",{className:c().socho_gpt_info_data,children:"*Places can be closed or not allowed for tourists based on season and other factors. Please verify before visiting."}),(0,t.jsx)("div",{className:c().socho_gpt_info_util_container,children:(0,t.jsxs)("div",{id:c().socho_gpt_info_util_box,children:[(0,t.jsx)("svg",{width:17,height:18,viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M3 16H14V14.4706H3V16ZM14 7.58824H10.8572V3H6.14287V7.58824H3L8.50002 12.9412L14 7.58824Z",fill:"#1B4790"})}),(0,t.jsx)(f.Z,{jsonData:l})]})})]})]}),(0,t.jsxs)("div",{className:c().socho_google,children:[(0,t.jsxs)("div",{className:c().g_map_head,children:[(0,t.jsxs)("div",{className:c().g_map_title,children:["Pinned Location",(0,t.jsx)("small",{children:"("}),"s",(0,t.jsx)("small",{children:")"})]}),(0,t.jsx)(x.default,{prop:0==y?Z:b})]}),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{id:c().g_map_image_card,children:[(0,t.jsx)("div",{id:c().g_img_card_container,children:(0,t.jsx)("div",{id:c().g_img_header,children:(0,t.jsx)("div",{id:c().g_img_day,children:"Photos from Locals"})})}),(0,t.jsx)("div",{id:c().g_img_container_main,children:(0,t.jsx)(p.Z,{prop:0==y?Z:b})})]})})]})]}),(0,t.jsxs)("div",{className:c().gen_new_sec,children:[(0,t.jsx)(a(),{href:"/form",children:(0,t.jsx)("button",{className:c().btn_generate,children:(0,t.jsxs)("div",{children:["Generate new ",(0,t.jsx)("span",{})]})})}),(0,t.jsx)("div",{className:c().gen_info_data,children:"Before generating new don't forget to download this itinerary first!"})]})]}),(0,t.jsxs)("div",{className:c().itinerary_ad_bannar,onClick:()=>B.push("mailto:info@holidaychalo.com?subject=HS Itinerary Planner request&body=Your Details %0D%0AName: %0D%0APhone: %0D%0A %0D%0AYour Trip details %0D%0ALocation Name: %0D%0ATrip Budget: %0D%0ANumber of Days: %0D%0AAdditional Comment:"),children:[(0,t.jsxs)("div",{className:c().itinerary_ad_text,children:["Didn’t find what you’re looking for?",(0,t.jsx)("br",{})," Our experts would love to create a package just for you!"]}),(0,t.jsx)("div",{className:c().mail,children:"info@holidaychalo.com"}),(0,t.jsx)("div",{className:c().itinerary_ad_button,children:"Contact us"})]})]}),(0,t.jsxs)("div",{className:c().footer_container_itinerary,children:[(0,t.jsxs)("div",{className:c().footer_partner,children:["partnered with ",(0,t.jsx)("span",{children:"holidaychalo"})]}),(0,t.jsxs)("div",{className:c().footer_advertise,onClick:()=>s(!0),children:["advertise with us",(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M2.13702 12.035C1.46845 11.3893 0.935171 10.6169 0.568308 9.76285C0.201445 8.90882 0.00834101 7.99028 0.000264297 7.06083C-0.00781242 6.13137 0.169299 5.20961 0.521266 4.34934C0.873232 3.48906 1.393 2.7075 2.05025 2.05025C2.7075 1.393 3.48906 0.873232 4.34934 0.521266C5.20961 0.169299 6.13137 -0.00781242 7.06083 0.000264297C7.99028 0.00834101 8.90882 0.201445 9.76285 0.568308C10.6169 0.935171 11.3893 1.46845 12.035 2.13702C13.3101 3.45723 14.0157 5.22545 13.9997 7.06083C13.9838 8.8962 13.2476 10.6519 11.9497 11.9497C10.6519 13.2476 8.8962 13.9838 7.06083 13.9997C5.22545 14.0157 3.45723 13.3101 2.13702 12.035ZM6.38602 3.58602V7.78602H7.78602V3.58602H6.38602ZM6.38602 9.18602V10.586H7.78602V9.18602H6.38602Z",fill:"white"})})]})]})]})]}),(0,t.jsx)(g.Z,{})]})}}},function(e){e.O(0,[270,957,465,664,870,774,888,179],function(){return e(e.s=731)}),_N_E=e.O()}]);