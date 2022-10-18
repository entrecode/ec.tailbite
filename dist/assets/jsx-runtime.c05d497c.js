import i from"react";var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=i,m=Symbol.for("react.element"),y=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function s(t,e,f){var r,o={},_=null,p=null;f!==void 0&&(_=""+f),e.key!==void 0&&(_=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)a.call(e,r)&&!d.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:m,type:t,key:_,ref:p,props:o,_owner:c.current}}n.Fragment=y;n.jsx=s;n.jsxs=s;(function(t){t.exports=n})(l);export{l as j};
