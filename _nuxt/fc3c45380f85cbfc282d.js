(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{147:function(t,e,n){var content=n(151);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("1c76e851",content,!0,{sourceMap:!1})},148:function(t,e,n){var content=n(153);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("06aa0fea",content,!0,{sourceMap:!1})},149:function(t,e,n){var content=n(157);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("aaea2e7c",content,!0,{sourceMap:!1})},150:function(t,e,n){"use strict";var o=n(147);n.n(o).a},151:function(t,e,n){(t.exports=n(51)(!1)).push([t.i,'section[data-v-125618f3]{background:rgba(53,53,53,.85);padding:15px;display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start;box-sizing:border-box;margin:0 0 20px;color:#eee;border-radius:6px}section>div[data-v-125618f3]:first-of-type{flex-basis:150px;height:100px;margin-right:20px;min-width:150px}@media only screen and (max-width:34em){section>div[data-v-125618f3]:first-of-type{display:none}}section>div:first-of-type img[data-v-125618f3]{display:block;width:100%;height:100%}section p[data-v-125618f3]{display:block}@media only screen and (max-width:34em){section[data-v-125618f3]{border-radius:4px;line-height:20px}}ul[data-v-125618f3]{padding:0;margin:20px 0 0}ul li[data-v-125618f3]{list-style-type:none;margin:0 15px 0 0;display:inline-block;background:rgba(53,53,53,.5);color:#eee;padding:4px 20px 6px;border-radius:4px;font-size:.8em}@media only screen and (max-width:34em){ul li[data-v-125618f3]{padding:5px}}.retro[data-v-125618f3]{background:#111;background:#000;background-clip:padding-box;\n/* !importanté */border:5px solid transparent;color:#fff;position:relative;border-top-right-radius:30px;border-bottom-left-radius:30px;padding-left:15px}.retro[data-v-125618f3]:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;margin:-5px;\n/* !importanté */border-radius:inherit;\n/* !importanté */background:-webkit-gradient(linear,left top,right top,from(#b861c6),to(#ffc7c7));background:linear-gradient(90deg,#b861c6 0,#ffc7c7)}.retro a[data-v-125618f3]{color:orange;text-decoration:none;font-size:1.1em}',""])},152:function(t,e,n){"use strict";var o=n(148);n.n(o).a},153:function(t,e,n){(t.exports=n(51)(!1)).push([t.i,"#software-content[data-v-66fed1d2],section[data-v-66fed1d2]{color:#eee;margin:0 0 20px;display:-webkit-box;display:flex}#software-content>div[data-v-66fed1d2]:first-of-type,section>div[data-v-66fed1d2]:first-of-type{color:$accent;background:rgba(53,53,53,.85);font-weight:700;border-radius:50px;flex-shrink:1;width:50px;height:50px;text-align:center;line-height:50px;margin-top:17px}@media only screen and (max-width:34em){#software-content>div[data-v-66fed1d2]:first-of-type,section>div[data-v-66fed1d2]:first-of-type{display:none}}#software-content>div[data-v-66fed1d2]:nth-of-type(2),section>div[data-v-66fed1d2]:nth-of-type(2){-webkit-box-flex:1;flex-grow:1;background:rgba(53,53,53,.85);padding:20px;box-sizing:border-box;margin:0 20px}#software-content>div[data-v-66fed1d2]:nth-of-type(3),section>div[data-v-66fed1d2]:nth-of-type(3){flex-basis:74px;flex-shrink:1}#software-content>div:nth-of-type(3) a[data-v-66fed1d2],section>div:nth-of-type(3) a[data-v-66fed1d2]{display:block;width:100%;height:80px}#software-content>div:nth-of-type(3) a svg[data-v-66fed1d2],section>div:nth-of-type(3) a svg[data-v-66fed1d2]{width:70%;height:100%}@media only screen and (max-width:34em){#software-content>div[data-v-66fed1d2]:nth-of-type(3),section>div[data-v-66fed1d2]:nth-of-type(3){display:none}}.retro>div[data-v-66fed1d2]:first-of-type{border-bottom:3px solid pink;box-shadow:inset 0 3px 2px #1fbbbd}.retro>div[data-v-66fed1d2]:nth-of-type(2){border-bottom:3px solid #efc431}.retro>div:nth-of-type(2) a[data-v-66fed1d2]{color:pink;text-decoration:none}",""])},154:function(t,e,n){"use strict";var o={props:{theme:{required:!1,default:""}},data:function(){return{json:null}},beforeMount:function(){var t=this,e=new XMLHttpRequest;e.addEventListener("load",(function(e){t.json=JSON.parse(e.target.responseText),window.sessionStorage.setItem("websites",e.target.responseText)})),e.open("GET","/websites.json"),e.send()}},r=(n(150),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{attrs:{id:"websites"}},t._l(t.json,(function(s,i){return n("section",{key:i,class:t.theme},[n("div",[n("img",{attrs:{src:s.screenshots[0]}})]),t._v(" "),n("div",[n("a",{staticClass:"name",attrs:{href:s.url}},[t._v(t._s(s.name))]),t._v(" "),n("p",[t._v(t._s(s.description))]),t._v(" "),n("ul",t._l(s.tags,(function(e,i){return n("li",{key:i},[t._v(t._s(e))])})),0)])])})),0)}),[],!1,null,"125618f3",null);e.a=component.exports},155:function(t,e,n){"use strict";var o={props:{theme:{required:!1,default:""}},data:function(){return{json:null}},beforeMount:function(){var t=this,e=new XMLHttpRequest;e.addEventListener("load",(function(e){t.json=JSON.parse(e.target.responseText),window.sessionStorage.setItem("software",e.target.responseText)})),e.open("GET","/software.json"),e.send()}},r=(n(152),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{attrs:{id:"software"}},t._l(t.json,(function(s,i){return n("section",{key:i,class:t.theme},[n("div",[t._v(t._s(++i))]),t._v(" "),n("div",[n("a",{staticClass:"name",attrs:{href:s.url}},[t._v(t._s(s.name))]),t._v(" "),n("div",{staticClass:"description"},[t._v(t._s(s["short-description"]))])]),t._v(" "),n("div",[n("a",{attrs:{href:s.url}},[n("svg",{attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"256px",height:"256px",viewBox:"0 0 256 256","enable-background":"new 0 0 256 256"}},[n("path",{attrs:{fill:"#444444",d:"M96,112c0,8.837-7.164,16-16,16s-16-7.163-16-16s7.164-16,16-16S96,103.163,96,112z M176,96\n              c-8.836,0-16,7.163-16,16s7.164,16,16,16s16-7.163,16-16S184.836,96,176,96z M224,4v108c0,26.4-21.6,48-48,48h-14.084\n              c6.296,7.613,10.084,17.372,10.084,28v60c0,4.418-3.582,8-8,8s-8-3.582-8-8v-48c0-5.196-3.354-9.638-8-11.296V248\n              c0,4.418-3.582,8-8,8s-8-3.582-8-8v-60h-8v60c0,4.418-3.582,8-8,8s-8-3.582-8-8v-59.296c-4.646,1.658-8,6.1-8,11.296v48\n              c0,4.418-3.582,8-8,8s-8-3.582-8-8v-40.459c-0.001,0-0.002,0.001-0.002,0.001C78.936,210.281,72.412,212,64,212\n              c-14.163,0-32.084-8.771-45.657-22.343C16.781,188.096,16,186.048,16,184c0-2.047,0.781-4.094,2.343-5.657\n              C19.905,176.781,21.952,176,24,176c2.047,0,4.095,0.781,5.657,2.343C40.053,188.739,54.175,196,64,196\n              c11.743,0,17.796-4.169,20.238-13.94c0.081-0.322,0.186-0.632,0.303-0.935c0-0.001,0-0.002,0-0.002\n              c1.252-7.943,4.64-15.186,9.551-21.123H80c-26.4,0-48-21.6-48-48V4c0-1.538,0.881-2.939,2.267-3.605C34.818,0.13,35.411,0,36,0\n              c0.892,0,1.776,0.298,2.5,0.877L77.402,32h101.195l38.903-31.123C218.225,0.298,219.109,0,220,0c0.59,0,1.182,0.13,1.732,0.395\n              C223.119,1.061,224,2.462,224,4z M208,112c0-17.6-14.4-32-32-32H80c-17.6,0-32,14.4-32,32s14.4,32,32,32h96\n              C193.6,144,208,129.6,208,112z"}})])])])])})),0)}),[],!1,null,"66fed1d2",null);e.a=component.exports},156:function(t,e,n){"use strict";var o=n(149);n.n(o).a},157:function(t,e,n){(t.exports=n(51)(!1)).push([t.i,'.sunwrap{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;height:0;width:100%;overflow:hidden;top:51%;-webkit-animation:sun 10s;animation:sun 10s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-delay:1.5s;animation-delay:1.5s;z-index:-2;box-sizing:border-box}.sun,.sunwrap{position:absolute}.sun{width:500px;height:500px;background:-webkit-gradient(linear,left top,left bottom,from(#efc431),to(#ce24b1));background:linear-gradient(#efc431,#ce24b1);border-radius:400px;top:0;box-shadow:0 0 15px #efc431,0 0 5px 2px #ce24b1;box-shadow:0 0 15px #efc431;margin:1em 0}html{height:100%}body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;font-family:Varela Round;background:url(/img/bg/retro1.webp) #33294f;background-size:100% 100%;background-attachment:fixed}nav{position:absolute;right:20px;margin-top:15px}nav a{color:pink;text-decoration:none;margin-left:20px;border-bottom:1px solid transparent}nav a:hover{color:#00cbff;border-bottom:1px solid pink}header{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;height:100vh;-webkit-box-pack:center;justify-content:center;position:relative}.buttons,header{display:-webkit-box;display:flex}.buttons{margin:5em 0}.buttons button{background:#000;background-clip:padding-box;\n/* !importanté */border:5px solid transparent;color:#fff;position:relative;border-top-right-radius:30px;border-bottom-left-radius:30px;letter-spacing:1px;font-weight:700;padding:20px 55px}.buttons button:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;margin:-5px;\n/* !importanté */border-radius:inherit;\n/* !importanté */background:-webkit-gradient(linear,left top,right top,from(#b861c6),to(#ffc7c7));background:linear-gradient(90deg,#b861c6 0,#ffc7c7)}.buttons button:first-of-type{margin-right:2em}.buttons button:hover{z-index:5}h1{font-size:8em;letter-spacing:53px;font-weight:700;color:#444;text-align:center;background:-webkit-linear-gradient(#00cbff -10%,#ff00eb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 20px rgba(255,0,235,.6),0 0 20px rgba(0,203,255,.3)}h1 span{position:relative;font-size:210px;bottom:-45px}div h2{color:#efc431;text-align:center;font-size:2.5em;text-shadow:0 0 15px orange;margin-bottom:1em}article{margin-bottom:80vh}article:last-of-type{margin-bottom:20vh}@-webkit-keyframes sun{0%{height:0;top:51%}to{height:550px;top:21%;position:fixed}}@keyframes sun{0%{height:0;top:51%}to{height:550px;top:21%;position:fixed}}',""])},159:function(t,e,n){"use strict";n.r(e);var o=n(154),r=n(155),d={components:{Websites:o.a,Software:r.a},methods:{handleClick:function(t){console.log("scrolling to"),document.querySelector("#".concat(t)).scrollIntoView({behavior:"smooth"})}},mounted:function(){var i,s,t,e,a,n;i=window,s=document,t="script",e="ga",i.GoogleAnalyticsObject=e,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(t),n=s.getElementsByTagName(t)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",n.parentNode.insertBefore(a,n),ga("create","UA-76274804-2","auto"),ga("send","pageview")}},c=(n(156),n(17)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("nav",[n("a",{attrs:{href:"/"}},[t._v("normal")]),t._v(" "),n("a",{attrs:{href:"",title:"websites"},on:{click:function(e){return e.preventDefault(),t.handleClick("websites")}}},[t._v("websites")]),t._v(" "),n("a",{attrs:{href:"",title:"software"},on:{click:function(e){return e.preventDefault(),t.handleClick("software")}}},[t._v("software")])]),t._v(" "),n("header",[n("h1",{staticClass:"logo"},[t._v("\n      SQRAM\n    ")]),t._v(" "),n("div",{staticClass:"buttons"},[n("button",{on:{click:function(e){return e.preventDefault(),t.handleClick("websites")}}},[t._v("WEBAPPS")]),t._v(" "),n("button",{on:{click:function(e){return e.preventDefault(),t.handleClick("software")}}},[t._v("SOFTWARE")])]),t._v(" "),t._m(0)]),t._v(" "),n("div",[n("h2",[t._v("Software")]),t._v(" "),n("Software",{attrs:{theme:"retro"}})],1),t._v(" "),n("div",[n("h2",[t._v("Webapps")]),t._v(" "),n("Websites",{attrs:{theme:"retro"}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sunwrap"},[e("div",{staticClass:"sun"})])}],!1,null,null,null);e.default=component.exports},163:function(t,e,n){"use strict";n.r(e);var o=n(159).default,r=n(17),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);