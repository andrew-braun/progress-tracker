(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/e88":function(e,a){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"1CE2":function(e,a,t){e.exports={logEntry:"logEntry-module--log-entry--2Nwzr",logEntryGrid:"logEntry-module--log-entry-grid--2W8El",entryDate:"logEntry-module--entry-date--PajPo",entryHours:"logEntry-module--entry-hours--2GlpS",entryCategories:"logEntry-module--entry-categories--2OyAl",entryDescription:"logEntry-module--entry-description--3qjJz",entryConfidence:"logEntry-module--entry-confidence--2f3oG"}},"8ypT":function(e,a,t){},Bl7J:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("I/Z2"),r=t("q1tI"),i=t.n(r),s=(t("xfY5"),t("+ZDr")),o=t.n(s);t("lw3w"),t("emEt").default.enqueue;t("8ypT");var c=function(e){return i.a.createElement("li",{className:"site-nav-item"},i.a.createElement(o.a,{className:"site-nav-link",activeClassName:"active-nav-link",to:e.to},e.children))};function l(e){var a=e.children,t=n.data;return i.a.createElement("div",{class:"site-container"},i.a.createElement("aside",{class:"left-bar left-bar-toggle"},i.a.createElement("input",{type:"checkbox",class:"hamburger-menu-button",id:"hamburger-menu-button"}),i.a.createElement("label",{class:"hamburger-menu-label",htmlFor:"hamburger-menu-button",id:"hamburger-menu-label"},i.a.createElement("span",{class:"hamburger-bar"}),i.a.createElement("span",{class:"hamburger-bar"}),i.a.createElement("span",{class:"hamburger-bar"})),i.a.createElement("div",{class:"left-bar-inner-container"},i.a.createElement("header",{className:"site-header"},i.a.createElement("div",{className:"site-title"},i.a.createElement(o.a,{to:"/",className:"site-title-link"},i.a.createElement("h1",null,t.site.siteMetadata.title))),i.a.createElement("nav",{className:"site-nav"},i.a.createElement("ul",{className:"site-nav-list"},i.a.createElement(c,{to:"/",id:"nav-about-link"},"Home"),i.a.createElement(c,{to:"/about",id:"nav-about-link"},"About")))))),i.a.createElement("div",{className:"main-content"},a),i.a.createElement("footer",{className:"site-footer"},i.a.createElement("div",{className:"external-link-container"},i.a.createElement("a",{className:"social-link",href:"https://andrewbraun.dev"},"My website"),i.a.createElement("a",{className:"social-link",href:"https://github.com/andrew-braun"},"GitHub"),i.a.createElement("a",{className:"social-link",href:"https://codepen.io/andrewbraun"},"CodePen"))))}},"I/Z2":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"A/B Progress Tracker"}}}}')},"L/tn":function(e){e.exports=JSON.parse('{"data":{"allTrackerJson":{"edges":[{"node":{"date":"25-07-2020","mainCategory":"Code","subCategory":"JavaScript","focus":"Gatsby","description":"Worked on creating a website to track my learning activity using Gatsby.","hours":5,"confidence":0.5,"keywords":"JS, JavaScript, Gatsby, GraphQL, React, static site","id":"b2bd8112-c315-56ea-9221-d8ae7bc4765c"}},{"node":{"date":"25-07-2020","mainCategory":"Language","subCategory":"Spanish","focus":"Reading","description":"Finished three Duolingo lessons.","hours":0.4,"confidence":0.7,"keywords":"","id":"e89a513f-2a70-533e-94cd-6e99dc3d8c67"}},{"node":{"date":"25-07-2020","mainCategory":"Code","subCategory":"JavaScript","focus":"Gatsby","description":"Worked on creating a website to track my learning activity using Gatsby.","hours":5,"confidence":0.5,"keywords":"JS, JavaScript, Gatsby, GraphQL, React, static site","id":"f048bde5-9b86-53ef-b51a-3363bd00c947"}},{"node":{"date":"25-07-2020","mainCategory":"Language","subCategory":"Spanish","focus":"Reading","description":"Finished three Duolingo lessons.","hours":0.4,"confidence":0.7,"keywords":"","id":"37489b37-3be3-5e9f-b41e-069738f90738"}},{"node":{"date":"25-07-2020","mainCategory":"Code","subCategory":"JavaScript","focus":"Gatsby","description":"Worked on creating a website to track my learning activity using Gatsby.","hours":5,"confidence":0.5,"keywords":"JS, JavaScript, Gatsby, GraphQL, React, static site","id":"b160c4eb-be38-51f6-9be6-cdf1d8657035"}},{"node":{"date":"25-07-2020","mainCategory":"Language","subCategory":"Spanish","focus":"Reading","description":"Finished three Duolingo lessons.","hours":0.4,"confidence":0.7,"keywords":"","id":"c6dc4c24-3808-5fed-bf7a-6fb8b5d9073d"}}]}}}')},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var n=t("q1tI"),r=t.n(n),i=t("Bl7J"),s=t("L/tn"),o=t("1CE2"),c=t.n(o);function l(e){return r.a.createElement("div",{className:c.a.logEntry},r.a.createElement("article",{className:c.a.logEntryGrid},r.a.createElement("div",{className:c.a.entryDate},e.logData.date),r.a.createElement("div",{className:c.a.entryCategories},r.a.createElement("span",{className:c.a.entryMainCategory},e.logData.mainCategory+" - "),r.a.createElement("span",{className:c.a.entryMainCategory},e.logData.subCategory+" - "),r.a.createElement("span",{className:c.a.entryMainCategory},""+e.logData.focus)),r.a.createElement("div",{className:c.a.entryDescription},e.logData.description),r.a.createElement("div",{className:c.a.entryHours},e.logData.hours+" hours"),r.a.createElement("div",{className:c.a.entryConfidence},"I felt "+100*e.logData.confidence+"% confident")))}var u=t("wRXp"),d=t.n(u);function m(){var e=s.data.allTrackerJson.edges;return r.a.createElement("div",{className:d.a.activityLog},e.map((function(e,a){var t=e.node;return r.a.createElement(l,{logData:t,index:a})})))}function g(){return r.a.createElement(i.a,null,r.a.createElement("main",{className:"main-container",id:"home-main"},r.a.createElement("h2",null,"What's Andrew learning?"),r.a.createElement("section",{className:"activity-log-container"},r.a.createElement(m,null))))}},lw3w:function(e,a,t){var n;e.exports=(n=t("rzlk"))&&n.default||n},qncB:function(e,a,t){var n=t("XKFU"),r=t("vhPU"),i=t("eeVq"),s=t("/e88"),o="["+s+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),u=function(e,a,t){var r={},o=i((function(){return!!s[e]()||"​"!="​"[e]()})),c=r[e]=o?a(d):s[e];t&&(r[t]=c),n(n.P+n.F*o,"String",r)},d=u.trim=function(e,a){return e=String(r(e)),1&a&&(e=e.replace(c,"")),2&a&&(e=e.replace(l,"")),e};e.exports=u},rzlk:function(e,a,t){"use strict";t.r(a);t("91GP");var n=t("q1tI"),r=t.n(n),i=t("IOVJ");a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null}},wRXp:function(e,a,t){e.exports={activityLog:"activityLog-module--activity-log--2MLto"}},xfY5:function(e,a,t){"use strict";var n=t("dyZX"),r=t("aagx"),i=t("LZWt"),s=t("Xbzi"),o=t("apmT"),c=t("eeVq"),l=t("kJMx").f,u=t("EemH").f,d=t("hswa").f,m=t("qncB").trim,g=n.Number,f=g,y=g.prototype,b="Number"==i(t("Kuth")(y)),p="trim"in String.prototype,E=function(e){var a=o(e,!1);if("string"==typeof a&&a.length>2){var t,n,r,i=(a=p?a.trim():m(a,3)).charCodeAt(0);if(43===i||45===i){if(88===(t=a.charCodeAt(2))||120===t)return NaN}else if(48===i){switch(a.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+a}for(var s,c=a.slice(2),l=0,u=c.length;l<u;l++)if((s=c.charCodeAt(l))<48||s>r)return NaN;return parseInt(c,n)}}return+a};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(e){var a=arguments.length<1?0:e,t=this;return t instanceof g&&(b?c((function(){y.valueOf.call(t)})):"Number"!=i(t))?s(new f(E(a)),t,g):E(a)};for(var h,v=t("nh4g")?l(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;v.length>N;N++)r(f,h=v[N])&&!r(g,h)&&d(g,h,u(f,h));g.prototype=y,y.constructor=g,t("KroJ")(n,"Number",g)}}}]);
//# sourceMappingURL=component---src-pages-index-js-a7fbf83593febd7985ef.js.map