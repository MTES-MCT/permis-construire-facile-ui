(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{10:function(e,t,n){"use strict";t.a=n.e(9).then(n.bind(null,67))},16:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var r=n(0),a=n.n(r),u=n(17),i=a.a.createContext();function o(e){var t=Object(u.b)().data,n=t.user,r=t.isAuthenticated;return a.a.createElement(i.Provider,Object.assign({value:{user:n,isAuthenticated:r}},e))}function c(){var e=a.a.useContext(i);if(void 0===e)throw new Error("useUser must be used within a UserProvider");return e}},17:function(e,t,n){"use strict";var r=n(26),a=n(0),u=n.n(a),i=n(10);function o(){return i.a.then(function(e){return e.default.auth})}var c={login:function(){return i.a.then(o).then(function(e){return e.login()})},logout:function(){return i.a.then(o).then(function(e){return e.logout()})},isAuthenticated:function(){return i.a.then(o).then(function(e){return e.isAuthenticated()})},getUser:function(){return i.a.then(o).then(function(e){return e.getUser()})}},s=n(44),l=n(20),f=n.n(l),d=n(39);function h(){return v.apply(this,arguments)}function v(){return(v=Object(d.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.isAuthenticated();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",{user:null,isAuthenticated:!1,dossiers:[]});case 5:return e.next=7,c.getUser();case 7:return n=e.sent,e.abrupt("return",{user:n,isAuthenticated:t});case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}var m=n(74);n.d(t,"a",function(){return p}),n.d(t,"b",function(){return g});var b=u.a.createContext();function p(e){var t=u.a.useState(!1),n=Object(r.a)(t,2),a=n[0],i=n[1],o=Object(s.a)({promiseFn:h}),l=o.data,f=void 0===l?{user:null,isAuthenticated:!1,dossiers:[]}:l,d=o.error,v=o.isRejected,p=o.isPending,g=o.isSettled,w=o.reload;if(u.a.useLayoutEffect(function(){g&&i(!0)},[g]),!a){if(p)return u.a.createElement(m.a,null);if(v)return u.a.createElement("div",{css:{color:"red"}},u.a.createElement("p",null,"Oops un probl\xe8me est survenu au d\xe9marrage. Tentez de rafra\xeechir la page."),u.a.createElement("pre",null,d.message))}return u.a.createElement(b.Provider,Object.assign({value:{data:f,login:function(){return c.login().then(w)},logout:function(){return c.logout().then(w)}}},e))}function g(){var e=u.a.useContext(b);if(void 0===e)throw new Error("useAuth must be used within a AuthProvider");return e}},53:function(e,t,n){e.exports=n(64)},62:function(e,t,n){"use strict";(function(e){var t=n(21),r=n(45),a=n(46);n.n(a)()(Object(r.config)({path:Object(t.resolve)(e,"../../.env")}))}).call(this,"/")},64:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(24),i=n.n(u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(17),c=n(16);var s=function(e){var t=e.children;return a.a.createElement(o.a,null,a.a.createElement(c.a,null,t))},l=n(74),f=function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,438))},d=a.a.lazy(f),h=a.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,477))});var v=function(){var e=Object(c.b)().isAuthenticated;return a.a.useEffect(function(){f()},[e]),a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(l.a,null)},e?a.a.createElement(h,null):a.a.createElement(d,null))};n(62);i.a.render(a.a.createElement(s,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,3,4]]]);
//# sourceMappingURL=main.401804d0.chunk.js.map