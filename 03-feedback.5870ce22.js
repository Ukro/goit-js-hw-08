function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){o[e]=r},r.parcelRequired7c6=n);var l=n("i5zXd"),i=n("9OeKo");const d=document.querySelector("#vimeo-player"),a=new(0,l.default)(d),u=localStorage.getItem("videoplayer-current-time");u&&a.setCurrentTime(u),a.on("timeupdate",e(i)((e=>localStorage.setItem("videoplayer-current-time",e.seconds)),1e3));
//# sourceMappingURL=03-feedback.5870ce22.js.map
