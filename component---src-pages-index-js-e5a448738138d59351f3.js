(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1CE2":function(e,a,t){e.exports={logEntry:"logEntry-module--log-entry--2Nwzr",logEntryGrid:"logEntry-module--log-entry-grid--2W8El",entryDate:"logEntry-module--entry-date--PajPo",entryHours:"logEntry-module--entry-hours--2GlpS",entryCategories:"logEntry-module--entry-categories--2OyAl",entryMainCategory:"logEntry-module--entry-main-category--3XWiy",entrySubCategory:"logEntry-module--entry-sub-category--3os75",entryFocusCategory:"logEntry-module--entry-focus-category--7sawU",logEntrySubGrid1:"logEntry-module--logEntry-sub-grid-1--2bgXd",entryConfidence:"logEntry-module--entry-confidence--2f3oG",descriptionModal:"logEntry-module--description-modal--3oi1n",entryDescription:"logEntry-module--entry-description--3qjJz",descriptionText:"logEntry-module--description-text--9-lsS",modalToggle:"logEntry-module--modalToggle--jSS46"}},"8ypT":function(e,a,t){},"9ngL":function(e,a,t){e.exports={modalContainer:"modal-module--modal-container--2IBHO",modalOverlay:"modal-module--modal-overlay--3z52F",modalWrapper:"modal-module--modal-wrapper--2md4k",modal:"modal-module--modal--M8q8p",fadeindown:"modal-module--fadeindown--1mAwy",modalHeader:"modal-module--modal-header--1jQD-",modalCloseButton:"modal-module--modal-close-button--9G_96",buttonDefault:"modal-module--button-default--ibanz"}},Bl7J:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),o=(t("8ypT"),function(e){return l.a.createElement("li",{className:"site-nav-item"},l.a.createElement(r.a,{className:"site-nav-link",activeClassName:"active-nav-link",to:e.to},e.children))});function c(e){var a=e.children,t=Object(r.c)("3159585216");return l.a.createElement("div",{class:"site-container"},l.a.createElement("aside",{class:"left-bar left-bar-toggle"},l.a.createElement("input",{type:"checkbox",class:"hamburger-menu-button",id:"hamburger-menu-button"}),l.a.createElement("label",{class:"hamburger-menu-label",htmlFor:"hamburger-menu-button",id:"hamburger-menu-label"},l.a.createElement("span",{class:"hamburger-bar"}),l.a.createElement("span",{class:"hamburger-bar"}),l.a.createElement("span",{class:"hamburger-bar"})),l.a.createElement("div",{class:"left-bar-inner-container"},l.a.createElement("header",{className:"site-header"},l.a.createElement("div",{className:"site-title"},l.a.createElement(r.a,{to:"/",className:"site-title-link"},l.a.createElement("h1",null,t.site.siteMetadata.title))),l.a.createElement("nav",{className:"site-nav"},l.a.createElement("ul",{className:"site-nav-list"},l.a.createElement(o,{to:"/",id:"nav-about-link"},"Home"),l.a.createElement(o,{to:"/about",id:"nav-about-link"},"About")))))),l.a.createElement("div",{className:"main-content"},a),l.a.createElement("footer",{className:"site-footer"},l.a.createElement("div",{className:"external-link-container"},l.a.createElement("a",{className:"social-link",href:"https://andrewbraun.dev"},"My website"),l.a.createElement("a",{className:"social-link",href:"https://github.com/andrew-braun"},"GitHub"),l.a.createElement("a",{className:"social-link",href:"https://codepen.io/andrewbraun"},"CodePen"))))}},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var n=t("q1tI"),l=t.n(n),r=t("Bl7J"),o=t("Wbzz"),c=t("9ngL"),i=t.n(c),m=function(e){var a=e.show,t=e.hide,n=e.children;return a?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:i.a.modalWrapper,"aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},l.a.createElement("div",{className:i.a.modal},l.a.createElement("div",{className:i.a.modalHeader},l.a.createElement("button",{type:"button",className:i.a.modalCloseButton,"data-dismiss":"modal","aria-label":"Close",onClick:t},l.a.createElement("span",{"aria-hidden":"true"},"×"))),n))):null},s=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1];return{show:a,toggle:function(){t(!a)}}},d=t("1CE2"),u=t.n(d);function g(e){var a=s(),t=a.show,n=a.toggle;return l.a.createElement("div",{className:u.a.logEntry},l.a.createElement("article",{className:u.a.logEntryGrid},l.a.createElement("div",{className:u.a.entryDate},e.logData.date),l.a.createElement("div",{className:u.a.entryHours},e.logData.hours+" hours"),l.a.createElement("div",{className:u.a.entryCategories},l.a.createElement("div",{className:u.a.entryMainCategory},""+e.logData.mainCategory,l.a.createElement("div",{className:u.a.entrySubCategory},""+e.logData.subCategory,l.a.createElement("div",{className:u.a.entryFocusCategory},""+e.logData.focus)))),l.a.createElement("div",{className:u.a.logEntrySubGrid1},l.a.createElement("div",{className:u.a.entryConfidence},"Confidence: "+100*e.logData.confidence+"%"),l.a.createElement("button",{className:u.a.descriptionButton,onClick:n},"Notes"))),l.a.createElement(m,{show:t,hide:n},l.a.createElement("span",{className:u.a.descriptionText},e.logData.description)))}var E=t("wRXp"),y=t.n(E);function b(){var e=Object(o.c)("1620691824").allTrackerJson.edges;return l.a.createElement("div",{className:y.a.activityLog},e.map((function(e,a){var t=e.node;return l.a.createElement(g,{logData:t,index:a})})))}function v(){return l.a.createElement(r.a,null,l.a.createElement("main",{className:"main-container",id:"home-main"},l.a.createElement("h2",null,"What's Andrew learning?"),l.a.createElement("section",{className:"activity-log-container"},l.a.createElement(b,null))))}},wRXp:function(e,a,t){e.exports={activityLog:"activityLog-module--activity-log--2MLto"}}}]);
//# sourceMappingURL=component---src-pages-index-js-e5a448738138d59351f3.js.map