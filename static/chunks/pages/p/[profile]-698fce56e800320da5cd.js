_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"20a2":function(e,n,t){e.exports=t("nOHt")},"5Yp1":function(e,n,t){"use strict";var r=t("nKUr"),o=(t("q1tI"),t("YFqc")),c=t.n(o),a={marginRight:20},i=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{style:a,children:"Home"})})})},u={margin:20,padding:20,border:"1px solid #ccc"};n.a=function(e){return Object(r.jsxs)("div",{style:u,children:[Object(r.jsx)(i,{}),e.children]})}},BX3n:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/p/[profile]",function(){return t("mRJ7")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),i=t("nOHt"),u=t("vNVm"),s={};function l(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,m=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var g=c.Children.only(v),j=g&&"object"===typeof g&&g.ref,_=(0,u.useIntersection)({rootMargin:"200px"}),w=r(_,2),E=w[0],O=w[1],x=c.default.useCallback((function(e){E(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,E]);(0,c.useEffect)((function(){var e=O&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,O,m,n,t]);var L={ref:x,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:u,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,h,b,y,m)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var M="undefined"!==typeof m?m:t&&t.locale,R=(0,a.getDomainLocale)(p,M,t&&t.locales,t&&t.domainLocales);L.href=R||(0,a.addBasePath)((0,a.addLocale)(p,M,t&&t.defaultLocale))}return c.default.cloneElement(g,L)};n.default=f},mRJ7:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=(t("q1tI"),t("5Yp1")),c=t("20a2");n.default=function(){var e=Object(c.useRouter)();return Object(r.jsx)(o.a,{children:Object(r.jsxs)("p",{children:["Hello, my name is ",e.query.profile,". I use Next.js"]})})}},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,o=(0,c.useRef)(),s=(0,c.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){i||f||(0,a.default)((function(){return d(!0)}))}),[f]),[p,f]};var c=t("q1tI"),a=o(t("0G5g")),i="undefined"!==typeof IntersectionObserver;var u=new Map}},[["BX3n",0,2,1]]]);