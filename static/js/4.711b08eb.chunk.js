(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{388:function(e,t,n){"use strict";n.r(t);var r=n(224),i=n.n(r),o=n(241),s=n.n(o),u=i.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"https://mtes-mct.github.io/rieau-ui",REACT_APP_NAME:"RIEAU",REACT_APP_DESCRIPTION:"R\xe9ception Informations et Echanges pour les Autorisations d\u2019Urbanisme",REACT_APP_BASENAME:"/rieau-ui"}).REACT_APP_API_URL,timeout:1e3}),c=s()({url:Object({NODE_ENV:"production",PUBLIC_URL:"https://mtes-mct.github.io/rieau-ui",REACT_APP_NAME:"RIEAU",REACT_APP_DESCRIPTION:"R\xe9ception Informations et Echanges pour les Autorisations d\u2019Urbanisme",REACT_APP_BASENAME:"/rieau-ui"}).REACT_APP_SSO_APP_URL,realm:Object({NODE_ENV:"production",PUBLIC_URL:"https://mtes-mct.github.io/rieau-ui",REACT_APP_NAME:"RIEAU",REACT_APP_DESCRIPTION:"R\xe9ception Informations et Echanges pour les Autorisations d\u2019Urbanisme",REACT_APP_BASENAME:"/rieau-ui"}).REACT_APP_SSO_APP_REALM,clientId:Object({NODE_ENV:"production",PUBLIC_URL:"https://mtes-mct.github.io/rieau-ui",REACT_APP_NAME:"RIEAU",REACT_APP_DESCRIPTION:"R\xe9ception Informations et Echanges pour les Autorisations d\u2019Urbanisme",REACT_APP_BASENAME:"/rieau-ui"}).REACT_APP_SSO_APP_CLIENT_ID});i.a.interceptors.request.use(function(e){var t=c.token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e},function(e){return Promise.reject(e)});var a={auth:{login:function(){return new Promise(function(e,t){return c.init({onLoad:"login-required"}).success(function(t){return e(t)}).error(function(e){return t({message:JSON.stringify(e)})})})},isAuthenticated:function(){return new Promise(function(e,t){return c.init({onLoad:"check-sso"}).success(function(t){return e(t)}).error(function(e){return t({message:JSON.stringify(e)})})})},logout:function(){return new Promise(function(e,t){return c.logout().success(function(t){return e(t)}).error(function(e){return t({message:JSON.stringify(e)})})})},getUser:function(){return new Promise(function(e,t){return c.loadUserInfo().success(function(t){return e({firstName:t.given_name,lastName:t.family_name,email:t.email})}).error(function(e){return t({message:JSON.stringify(e)})})})}},dossiers:{loadUserDossiers:function(e){return u.get("/deposants/".concat(e,"/dossiers"))}}};t.default=a}}]);
//# sourceMappingURL=4.711b08eb.chunk.js.map