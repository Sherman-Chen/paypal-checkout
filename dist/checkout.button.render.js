!function(e, a) {
    for (var i in a) e[i] = a[i];
}(exports, function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = !0;
        return module.exports;
    }
    var installedModules = {};
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "https://www.paypalobjects.com/api/";
    return __webpack_require__(__webpack_require__.s = "./src/button/template/componentTemplate.jsx");
}({
    "./node_modules/Base64/base64.js": function(module, exports, __webpack_require__) {
        !function() {
            function InvalidCharacterError(message) {
                this.message = message;
            }
            var object = exports, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            InvalidCharacterError.prototype = new Error();
            InvalidCharacterError.prototype.name = "InvalidCharacterError";
            object.btoa || (object.btoa = function(input) {
                for (var block, charCode, str = String(input), idx = 0, map = chars, output = ""; str.charAt(0 | idx) || (map = "=", 
                idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                    charCode = str.charCodeAt(idx += .75);
                    if (charCode > 255) throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                    block = block << 8 | charCode;
                }
                return output;
            });
            object.atob || (object.atob = function(input) {
                var str = String(input).replace(/[=]+$/, "");
                if (str.length % 4 == 1) throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
                for (var bs, buffer, bc = 0, idx = 0, output = ""; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? 64 * bs + buffer : buffer, 
                bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) buffer = chars.indexOf(buffer);
                return output;
            });
        }();
    },
    "./node_modules/cross-domain-utils/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function noop() {}
        function getParent(win) {
            if (win) try {
                if (win.parent && win.parent !== win) return win.parent;
            } catch (err) {
                return;
            }
        }
        function canReadFromWindow(win) {
            try {
                noop(win && win.location && win.location.href);
                return !0;
            } catch (err) {}
            return !1;
        }
        function getActualDomain(win) {
            var location = win.location;
            if (!location) throw new Error("Can not read window location");
            var protocol = location.protocol;
            if (!protocol) throw new Error("Can not read window protocol");
            if (protocol === CONSTANTS.FILE_PROTOCOL) return CONSTANTS.FILE_PROTOCOL + "//";
            if (protocol === CONSTANTS.ABOUT_PROTOCOL) {
                var parent = getParent(win);
                return parent && canReadFromWindow(win) ? getActualDomain(parent) : CONSTANTS.ABOUT_PROTOCOL + "//";
            }
            var host = location.host;
            if (!host) throw new Error("Can not read window host");
            return protocol + "//" + host;
        }
        function getDomain(win) {
            win = win || window;
            var domain = getActualDomain(win);
            return domain && win.mockDomain && 0 === win.mockDomain.indexOf(CONSTANTS.MOCK_PROTOCOL) ? win.mockDomain : domain;
        }
        __webpack_exports__.a = getDomain;
        var CONSTANTS = {
            MOCK_PROTOCOL: "mock:",
            FILE_PROTOCOL: "file:",
            ABOUT_PROTOCOL: "about:",
            WILDCARD: "*"
        };
    },
    "./node_modules/hi-base32/src/base32.js": function(module, exports, __webpack_require__) {
        (function(process, global, module) {
            var __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            /*
 * [hi-base32]{@link https://github.com/emn178/hi-base32}
 *
 * @version 0.3.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2017
 * @license MIT
 */
            !function() {
                "use strict";
                var root = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) ? window : {};
                !root.HI_BASE32_NO_NODE_JS && "object" === (void 0 === process ? "undefined" : _typeof(process)) && process.versions && process.versions.node && (root = global);
                var COMMON_JS = !root.HI_BASE32_NO_COMMON_JS && "object" === _typeof(module) && module.exports, AMD = __webpack_require__("./node_modules/webpack/buildin/amd-options.js"), BASE32_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split(""), BASE32_DECODE_CHAR = {
                    A: 0,
                    B: 1,
                    C: 2,
                    D: 3,
                    E: 4,
                    F: 5,
                    G: 6,
                    H: 7,
                    I: 8,
                    J: 9,
                    K: 10,
                    L: 11,
                    M: 12,
                    N: 13,
                    O: 14,
                    P: 15,
                    Q: 16,
                    R: 17,
                    S: 18,
                    T: 19,
                    U: 20,
                    V: 21,
                    W: 22,
                    X: 23,
                    Y: 24,
                    Z: 25,
                    "2": 26,
                    "3": 27,
                    "4": 28,
                    "5": 29,
                    "6": 30,
                    "7": 31
                }, blocks = [ 0, 0, 0, 0, 0, 0, 0, 0 ], toUtf8String = function(bytes) {
                    for (var b, c, str = "", length = bytes.length, i = 0, followingChars = 0; i < length; ) {
                        b = bytes[i++];
                        if (b <= 127) str += String.fromCharCode(b); else {
                            if (b > 191 && b <= 223) {
                                c = 31 & b;
                                followingChars = 1;
                            } else if (b <= 239) {
                                c = 15 & b;
                                followingChars = 2;
                            } else {
                                if (!(b <= 247)) throw "not a UTF-8 string";
                                c = 7 & b;
                                followingChars = 3;
                            }
                            for (var j = 0; j < followingChars; ++j) {
                                b = bytes[i++];
                                if (b < 128 || b > 191) throw "not a UTF-8 string";
                                c <<= 6;
                                c += 63 & b;
                            }
                            if (c >= 55296 && c <= 57343) throw "not a UTF-8 string";
                            if (c > 1114111) throw "not a UTF-8 string";
                            if (c <= 65535) str += String.fromCharCode(c); else {
                                c -= 65536;
                                str += String.fromCharCode(55296 + (c >> 10));
                                str += String.fromCharCode(56320 + (1023 & c));
                            }
                        }
                    }
                    return str;
                }, decodeAsBytes = function(base32Str) {
                    base32Str = base32Str.replace(/=/g, "");
                    for (var v1, v2, v3, v4, v5, v6, v7, v8, bytes = [], index = 0, length = base32Str.length, i = 0, count = length >> 3 << 3; i < count; ) {
                        v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                        bytes[index++] = 255 & (v2 << 6 | v3 << 1 | v4 >>> 4);
                        bytes[index++] = 255 & (v4 << 4 | v5 >>> 1);
                        bytes[index++] = 255 & (v5 << 7 | v6 << 2 | v7 >>> 3);
                        bytes[index++] = 255 & (v7 << 5 | v8);
                    }
                    var remain = length - count;
                    if (2 === remain) {
                        v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                    } else if (4 === remain) {
                        v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                        bytes[index++] = 255 & (v2 << 6 | v3 << 1 | v4 >>> 4);
                    } else if (5 === remain) {
                        v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                        bytes[index++] = 255 & (v2 << 6 | v3 << 1 | v4 >>> 4);
                        bytes[index++] = 255 & (v4 << 4 | v5 >>> 1);
                    } else if (7 === remain) {
                        v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                        bytes[index++] = 255 & (v2 << 6 | v3 << 1 | v4 >>> 4);
                        bytes[index++] = 255 & (v4 << 4 | v5 >>> 1);
                        bytes[index++] = 255 & (v5 << 7 | v6 << 2 | v7 >>> 3);
                    }
                    return bytes;
                }, encodeAscii = function(str) {
                    for (var v1, v2, v3, v4, v5, base32Str = "", length = str.length, i = 0, count = 5 * parseInt(length / 5); i < count; ) {
                        v1 = str.charCodeAt(i++);
                        v2 = str.charCodeAt(i++);
                        v3 = str.charCodeAt(i++);
                        v4 = str.charCodeAt(i++);
                        v5 = str.charCodeAt(i++);
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[31 & (v4 << 3 | v5 >>> 5)] + BASE32_ENCODE_CHAR[31 & v5];
                    }
                    var remain = length - count;
                    if (1 === remain) {
                        v1 = str.charCodeAt(i);
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
                    } else if (2 === remain) {
                        v1 = str.charCodeAt(i++);
                        v2 = str.charCodeAt(i);
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                    } else if (3 === remain) {
                        v1 = str.charCodeAt(i++);
                        v2 = str.charCodeAt(i++);
                        v3 = str.charCodeAt(i);
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                    } else if (4 === remain) {
                        v1 = str.charCodeAt(i++);
                        v2 = str.charCodeAt(i++);
                        v3 = str.charCodeAt(i++);
                        v4 = str.charCodeAt(i);
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                    }
                    return base32Str;
                }, encodeUtf8 = function(str) {
                    var v1, v2, v3, v4, v5, code, i, end = !1, base32Str = "", index = 0, start = 0, bytes = 0, length = str.length;
                    do {
                        blocks[0] = blocks[5];
                        blocks[1] = blocks[6];
                        blocks[2] = blocks[7];
                        for (i = start; index < length && i < 5; ++index) {
                            code = str.charCodeAt(index);
                            if (code < 128) blocks[i++] = code; else if (code < 2048) {
                                blocks[i++] = 192 | code >> 6;
                                blocks[i++] = 128 | 63 & code;
                            } else if (code < 55296 || code >= 57344) {
                                blocks[i++] = 224 | code >> 12;
                                blocks[i++] = 128 | code >> 6 & 63;
                                blocks[i++] = 128 | 63 & code;
                            } else {
                                code = 65536 + ((1023 & code) << 10 | 1023 & str.charCodeAt(++index));
                                blocks[i++] = 240 | code >> 18;
                                blocks[i++] = 128 | code >> 12 & 63;
                                blocks[i++] = 128 | code >> 6 & 63;
                                blocks[i++] = 128 | 63 & code;
                            }
                        }
                        bytes += i - start;
                        start = i - 5;
                        index === length && ++index;
                        index > length && i < 6 && (end = !0);
                        v1 = blocks[0];
                        if (i > 4) {
                            v2 = blocks[1];
                            v3 = blocks[2];
                            v4 = blocks[3];
                            v5 = blocks[4];
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[31 & (v4 << 3 | v5 >>> 5)] + BASE32_ENCODE_CHAR[31 & v5];
                        } else if (1 === i) base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======"; else if (2 === i) {
                            v2 = blocks[1];
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                        } else if (3 === i) {
                            v2 = blocks[1];
                            v3 = blocks[2];
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                        } else if (4 === i) {
                            v2 = blocks[1];
                            v3 = blocks[2];
                            v4 = blocks[3];
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                        }
                    } while (!end);
                    return base32Str;
                }, encodeBytes = function(bytes) {
                    for (var v1, v2, v3, v4, v5, base32Str = "", length = bytes.length, i = 0, count = 5 * parseInt(length / 5); i < count; ) {
                        v1 = bytes[i++];
                        v2 = bytes[i++];
                        v3 = bytes[i++];
                        v4 = bytes[i++];
                        v5 = bytes[i++];
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[31 & (v4 << 3 | v5 >>> 5)] + BASE32_ENCODE_CHAR[31 & v5];
                    }
                    var remain = length - count;
                    if (1 === remain) {
                        v1 = bytes[i];
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
                    } else if (2 === remain) {
                        v1 = bytes[i++];
                        v2 = bytes[i];
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                    } else if (3 === remain) {
                        v1 = bytes[i++];
                        v2 = bytes[i++];
                        v3 = bytes[i];
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                    } else if (4 === remain) {
                        v1 = bytes[i++];
                        v2 = bytes[i++];
                        v3 = bytes[i++];
                        v4 = bytes[i];
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                    }
                    return base32Str;
                }, encode = function(input, asciiOnly) {
                    var notString = "string" != typeof input;
                    notString && input.constructor === ArrayBuffer && (input = new Uint8Array(input));
                    return notString ? encodeBytes(input) : asciiOnly ? encodeAscii(input) : encodeUtf8(input);
                }, decode = function(base32Str, asciiOnly) {
                    if (!asciiOnly) return toUtf8String(decodeAsBytes(base32Str));
                    var v1, v2, v3, v4, v5, v6, v7, v8, str = "", length = base32Str.indexOf("=");
                    -1 === length && (length = base32Str.length);
                    for (var i = 0, count = length >> 3 << 3; i < count; ) {
                        v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2)) + String.fromCharCode(255 & (v2 << 6 | v3 << 1 | v4 >>> 4)) + String.fromCharCode(255 & (v4 << 4 | v5 >>> 1)) + String.fromCharCode(255 & (v5 << 7 | v6 << 2 | v7 >>> 3)) + String.fromCharCode(255 & (v7 << 5 | v8));
                    }
                    var remain = length - count;
                    if (2 === remain) {
                        v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2));
                    } else if (4 === remain) {
                        v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2)) + String.fromCharCode(255 & (v2 << 6 | v3 << 1 | v4 >>> 4));
                    } else if (5 === remain) {
                        v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2)) + String.fromCharCode(255 & (v2 << 6 | v3 << 1 | v4 >>> 4)) + String.fromCharCode(255 & (v4 << 4 | v5 >>> 1));
                    } else if (7 === remain) {
                        v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                        str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2)) + String.fromCharCode(255 & (v2 << 6 | v3 << 1 | v4 >>> 4)) + String.fromCharCode(255 & (v4 << 4 | v5 >>> 1)) + String.fromCharCode(255 & (v5 << 7 | v6 << 2 | v7 >>> 3));
                    }
                    return str;
                }, exports = {
                    encode: encode,
                    decode: decode
                };
                decode.asBytes = decodeAsBytes;
                if (COMMON_JS) module.exports = exports; else {
                    root.base32 = exports;
                    AMD && void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return exports;
                    }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
                }
            }();
        }).call(exports, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/webpack/buildin/module.js")(module));
    },
    "./node_modules/process/browser.js": function(module, exports) {
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
            }
            try {
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
            }
            try {
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    return cachedClearTimeout.call(this, marker);
                }
            }
        }
        function cleanUpNextTick() {
            if (draining && currentQueue) {
                draining = !1;
                currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1;
                queue.length && drainQueue();
            }
        }
        function drainQueue() {
            if (!draining) {
                var timeout = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var len = queue.length; len; ) {
                    currentQueue = queue;
                    queue = [];
                    for (;++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = !1;
                runClearTimeout(timeout);
            }
        }
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }
        function noop() {}
        var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
        !function() {
            try {
                cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }();
        var currentQueue, queue = [], draining = !1, queueIndex = -1;
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
            queue.push(new Item(fun, args));
            1 !== queue.length || draining || runTimeout(drainQueue);
        };
        Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        };
        process.title = "browser";
        process.browser = !0;
        process.env = {};
        process.argv = [];
        process.version = "";
        process.versions = {};
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;
        process.listeners = function(name) {
            return [];
        };
        process.binding = function(name) {
            throw new Error("process.binding is not supported");
        };
        process.cwd = function() {
            return "/";
        };
        process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        };
        process.umask = function() {
            return 0;
        };
    },
    "./node_modules/webpack/buildin/amd-options.js": function(module, exports) {
        (function(__webpack_amd_options__) {
            module.exports = __webpack_amd_options__;
        }).call(exports, {});
    },
    "./node_modules/webpack/buildin/global.js": function(module, exports) {
        var g, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        g = function() {
            return this;
        }();
        try {
            g = g || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && (g = window);
        }
        module.exports = g;
    },
    "./node_modules/webpack/buildin/module.js": function(module, exports) {
        module.exports = function(module) {
            if (!module.webpackPolyfill) {
                module.deprecate = function() {};
                module.paths = [];
                module.children || (module.children = []);
                Object.defineProperty(module, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return module.l;
                    }
                });
                Object.defineProperty(module, "id", {
                    enumerable: !0,
                    get: function() {
                        return module.i;
                    }
                });
                module.webpackPolyfill = 1;
            }
            return module;
        };
    },
    "./node_modules/zalgo-promise/src/global.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function(global) {
            function getGlobal() {
                var glob = void 0;
                if ("undefined" != typeof window) glob = window; else {
                    if (void 0 === global) throw new Error("Can not find global");
                    glob = global;
                }
                glob.__zalgopromise__ || (glob.__zalgopromise__ = {
                    flushPromises: [],
                    activeCount: 0,
                    possiblyUnhandledPromiseHandlers: [],
                    dispatchedErrors: []
                });
                return glob.__zalgopromise__;
            }
            __webpack_exports__.a = getGlobal;
        }).call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js"));
    },
    "./node_modules/zalgo-promise/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function utils_isPromise(item) {
            try {
                if (!item) return !1;
                if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                if ("undefined" != typeof window && window.Window && item instanceof window.Window) return !1;
                if ("undefined" != typeof window && window.constructor && item instanceof window.constructor) return !1;
                var _toString = {}.toString;
                if (_toString) {
                    var name = _toString.call(item);
                    if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                }
                if ("function" == typeof item.then) return !0;
            } catch (err) {
                return !1;
            }
            return !1;
        }
        function dispatchPossiblyUnhandledError(err) {
            if (-1 === Object(global.a)().dispatchedErrors.indexOf(err)) {
                Object(global.a)().dispatchedErrors.push(err);
                setTimeout(function() {
                    throw err;
                }, 1);
                for (var j = 0; j < Object(global.a)().possiblyUnhandledPromiseHandlers.length; j++) Object(global.a)().possiblyUnhandledPromiseHandlers[j](err);
            }
        }
        function exceptions_onPossiblyUnhandledException(handler) {
            Object(global.a)().possiblyUnhandledPromiseHandlers.push(handler);
            return {
                cancel: function() {
                    Object(global.a)().possiblyUnhandledPromiseHandlers.splice(Object(global.a)().possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                }
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        var global = __webpack_require__("./node_modules/zalgo-promise/src/global.js"), promise_ZalgoPromise = function() {
            function ZalgoPromise(handler) {
                var _this = this;
                _classCallCheck(this, ZalgoPromise);
                this.resolved = !1;
                this.rejected = !1;
                this.errorHandled = !1;
                this.handlers = [];
                if (handler) {
                    var _result = void 0, _error = void 0, resolved = !1, rejected = !1, isAsync = !1;
                    try {
                        handler(function(res) {
                            if (isAsync) _this.resolve(res); else {
                                resolved = !0;
                                _result = res;
                            }
                        }, function(err) {
                            if (isAsync) _this.reject(err); else {
                                rejected = !0;
                                _error = err;
                            }
                        });
                    } catch (err) {
                        this.reject(err);
                        return;
                    }
                    isAsync = !0;
                    resolved ? this.resolve(_result) : rejected && this.reject(_error);
                }
            }
            ZalgoPromise.prototype.resolve = function(result) {
                if (this.resolved || this.rejected) return this;
                if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
                this.resolved = !0;
                this.value = result;
                this.dispatch();
                return this;
            };
            ZalgoPromise.prototype.reject = function(error) {
                var _this2 = this;
                if (this.resolved || this.rejected) return this;
                if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
                if (!error) {
                    var _err = error && "function" == typeof error.toString ? error.toString() : Object.prototype.toString.call(error);
                    error = new Error("Expected reject to be called with Error, got " + _err);
                }
                this.rejected = !0;
                this.error = error;
                this.errorHandled || setTimeout(function() {
                    _this2.errorHandled || dispatchPossiblyUnhandledError(error);
                }, 1);
                this.dispatch();
                return this;
            };
            ZalgoPromise.prototype.asyncReject = function(error) {
                this.errorHandled = !0;
                this.reject(error);
            };
            ZalgoPromise.prototype.dispatch = function() {
                var _this3 = this, dispatching = this.dispatching, resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                if (!dispatching && (resolved || rejected)) {
                    this.dispatching = !0;
                    Object(global.a)().activeCount += 1;
                    for (var i = 0; i < handlers.length; i++) {
                        (function(i) {
                            var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise, result = void 0;
                            if (resolved) try {
                                result = onSuccess ? onSuccess(_this3.value) : _this3.value;
                            } catch (err) {
                                promise.reject(err);
                                return "continue";
                            } else if (rejected) {
                                if (!onError) {
                                    promise.reject(_this3.error);
                                    return "continue";
                                }
                                try {
                                    result = onError(_this3.error);
                                } catch (err) {
                                    promise.reject(err);
                                    return "continue";
                                }
                            }
                            if (result instanceof ZalgoPromise && (result.resolved || result.rejected)) {
                                result.resolved ? promise.resolve(result.value) : promise.reject(result.error);
                                result.errorHandled = !0;
                            } else utils_isPromise(result) ? result instanceof ZalgoPromise && (result.resolved || result.rejected) ? result.resolved ? promise.resolve(result.value) : promise.reject(result.error) : result.then(function(res) {
                                promise.resolve(res);
                            }, function(err) {
                                promise.reject(err);
                            }) : promise.resolve(result);
                        })(i);
                    }
                    handlers.length = 0;
                    this.dispatching = !1;
                    Object(global.a)().activeCount -= 1;
                    0 === Object(global.a)().activeCount && ZalgoPromise.flushQueue();
                }
            };
            ZalgoPromise.prototype.then = function(onSuccess, onError) {
                if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                var promise = new ZalgoPromise();
                this.handlers.push({
                    promise: promise,
                    onSuccess: onSuccess,
                    onError: onError
                });
                this.errorHandled = !0;
                this.dispatch();
                return promise;
            };
            ZalgoPromise.prototype.catch = function(onError) {
                return this.then(void 0, onError);
            };
            ZalgoPromise.prototype.finally = function(handler) {
                return this.then(function(result) {
                    return ZalgoPromise.try(handler).then(function() {
                        return result;
                    });
                }, function(err) {
                    return ZalgoPromise.try(handler).then(function() {
                        throw err;
                    });
                });
            };
            ZalgoPromise.prototype.timeout = function(time, err) {
                var _this4 = this;
                if (this.resolved || this.rejected) return this;
                var timeout = setTimeout(function() {
                    _this4.resolved || _this4.rejected || _this4.reject(err || new Error("Promise timed out after " + time + "ms"));
                }, time);
                return this.then(function(result) {
                    clearTimeout(timeout);
                    return result;
                });
            };
            ZalgoPromise.prototype.toPromise = function() {
                if ("undefined" == typeof Promise) throw new Error("Could not find Promise");
                return Promise.resolve(this);
            };
            ZalgoPromise.resolve = function(value) {
                return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise(function(resolve, reject) {
                    return value.then(resolve, reject);
                }) : new ZalgoPromise().resolve(value);
            };
            ZalgoPromise.reject = function(error) {
                return new ZalgoPromise().reject(error);
            };
            ZalgoPromise.all = function(promises) {
                var promise = new ZalgoPromise(), count = promises.length, results = [];
                if (!count) {
                    promise.resolve(results);
                    return promise;
                }
                for (var i = 0; i < promises.length; i++) {
                    (function(i) {
                        var prom = promises[i];
                        if (prom instanceof ZalgoPromise) {
                            if (prom.resolved) {
                                results[i] = prom.value;
                                count -= 1;
                                return "continue";
                            }
                        } else if (!utils_isPromise(prom)) {
                            results[i] = prom;
                            count -= 1;
                            return "continue";
                        }
                        ZalgoPromise.resolve(prom).then(function(result) {
                            results[i] = result;
                            count -= 1;
                            0 === count && promise.resolve(results);
                        }, function(err) {
                            promise.reject(err);
                        });
                    })(i);
                }
                0 === count && promise.resolve(results);
                return promise;
            };
            ZalgoPromise.hash = function(promises) {
                var result = {};
                return ZalgoPromise.all(Object.keys(promises).map(function(key) {
                    return ZalgoPromise.resolve(promises[key]).then(function(value) {
                        result[key] = value;
                    });
                })).then(function() {
                    return result;
                });
            };
            ZalgoPromise.map = function(items, method) {
                return ZalgoPromise.all(items.map(method));
            };
            ZalgoPromise.onPossiblyUnhandledException = function(handler) {
                return exceptions_onPossiblyUnhandledException(handler);
            };
            ZalgoPromise.try = function(method, context, args) {
                var result = void 0;
                try {
                    result = method.apply(context, args || []);
                } catch (err) {
                    return ZalgoPromise.reject(err);
                }
                return ZalgoPromise.resolve(result);
            };
            ZalgoPromise.delay = function(_delay) {
                return new ZalgoPromise(function(resolve) {
                    setTimeout(resolve, _delay);
                });
            };
            ZalgoPromise.isPromise = function(value) {
                return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
            };
            ZalgoPromise.flush = function() {
                var promise = new ZalgoPromise();
                Object(global.a)().flushPromises.push(promise);
                0 === Object(global.a)().activeCount && ZalgoPromise.flushQueue();
                return promise;
            };
            ZalgoPromise.flushQueue = function() {
                var promisesToFlush = Object(global.a)().flushPromises;
                Object(global.a)().flushPromises = [];
                for (var _iterator = promisesToFlush, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    _ref.resolve();
                }
            };
            return ZalgoPromise;
        }();
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return promise_ZalgoPromise;
        });
    },
    "./src/button/template/componentTemplate.jsx": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function labelToFunding(label) {
            return label ? LABEL_TO_FUNDING[label] : constants.r.PAYPAL;
        }
        function fundingToDefaultLabel(funding) {
            return FUNDING_TO_DEFAULT_LABEL[funding];
        }
        function getConfig(conf, category, key, def) {
            var categoryConfig = conf[category];
            if (categoryConfig && categoryConfig.hasOwnProperty(key)) return categoryConfig[key];
            if (conf[constants.p] && conf[constants.p].hasOwnProperty(key)) return conf[constants.p][key];
            if (arguments.length >= 4) return def;
            throw new Error("No value found for " + category + ":" + key);
        }
        function getButtonConfig(label, key, def) {
            return getConfig(BUTTON_CONFIG, label, key, def);
        }
        function config_getConfig(conf, category, key, def) {
            var categoryConfig = conf[category];
            if (categoryConfig && categoryConfig.hasOwnProperty(key)) return categoryConfig[key];
            if (conf[constants.p] && conf[constants.p].hasOwnProperty(key)) return conf[constants.p][key];
            if (arguments.length >= 4) return def;
            throw new Error("No value found for " + category + ":" + key);
        }
        function getFundingConfig(source, key, def) {
            return config_getConfig(FUNDING_CONFIG, source, key, def);
        }
        function getCardConfig(source, key, def) {
            return config_getConfig(CARD_CONFIG, source, key, def);
        }
        function isFundingIneligible(source, _ref) {
            var locale = _ref.locale, funding = _ref.funding;
            return getFundingConfig(source, _ref.layout === constants.e.VERTICAL ? "allowVertical" : "allowHorizontal") ? -1 !== funding.disallowed.indexOf(source) && getFundingConfig(source, "allowOptOut") ? constants.s.OPT_OUT : -1 !== funding.disallowed.indexOf(source) && source === constants.r.VENMO ? constants.s.OPT_OUT : -1 === getFundingConfig(source, "allowedCountries", [ locale.country ]).indexOf(locale.country) ? constants.s.DISALLOWED_COUNTRY : void 0 : constants.s.SECONDARY_DISALLOWED;
        }
        function isFundingAutoEligible(source, _ref2) {
            var locale = _ref2.locale, funding = _ref2.funding;
            return _ref2.layout === constants.e.VERTICAL && -1 !== getFundingConfig(source, "defaultVerticalCountries", []).indexOf(locale.country) ? constants.s.DEFAULT_COUNTRY : getFundingConfig(source, "default") ? constants.s.DEFAULT : -1 !== funding.allowed.indexOf(source) && getFundingConfig(source, "allowOptIn") ? constants.s.OPT_IN : -1 !== funding.remembered.indexOf(source) && getFundingConfig(source, "allowRemember") ? constants.s.REMEMBERED : void 0;
        }
        function isFundingEligible(source, _ref3) {
            var locale = _ref3.locale, funding = _ref3.funding, env = _ref3.env, layout = _ref3.layout, selected = _ref3.selected;
            if (selected && source === selected) return {
                eligible: !0,
                reason: constants.s.PRIMARY
            };
            if (!(getFundingConfig(source, "enabled") || env === constants.q.TEST && getFundingConfig(source, "test"))) return {
                eligible: !1,
                reason: constants.s.NOT_ENABLED
            };
            var ineligibleReason = isFundingIneligible(source, {
                locale: locale,
                funding: funding,
                env: env,
                layout: layout
            });
            if (ineligibleReason) return {
                eligible: !1,
                reason: ineligibleReason
            };
            var autoEligibleReason = isFundingAutoEligible(source, {
                locale: locale,
                funding: funding,
                env: env,
                layout: layout
            });
            return autoEligibleReason ? {
                eligible: !0,
                reason: autoEligibleReason
            } : {
                eligible: !1,
                reason: constants.s.NEED_OPT_IN
            };
        }
        function determineEligibleFunding(_ref4) {
            var funding = _ref4.funding, selected = _ref4.selected, locale = _ref4.locale, env = _ref4.env, layout = _ref4.layout, reasons = {}, eligibleFunding = FUNDING_PRIORITY.filter(function(source) {
                var _isFundingEligible = isFundingEligible(source, {
                    selected: selected,
                    locale: locale,
                    funding: funding,
                    env: env,
                    layout: layout
                }), eligible = _isFundingEligible.eligible, reason = _isFundingEligible.reason;
                reasons[source] = {
                    eligible: eligible,
                    reason: reason,
                    factors: {
                        env: env,
                        locale: locale,
                        layout: layout
                    }
                };
                return eligible;
            });
            fundingEligibilityReasons.push(reasons);
            eligibleFunding.splice(eligibleFunding.indexOf(selected), 1);
            eligibleFunding.unshift(selected);
            return eligibleFunding;
        }
        function determineEligibleCards(_ref5) {
            var funding = _ref5.funding;
            return getCardConfig(_ref5.locale.country, "priority").filter(function(card) {
                return -1 === funding.disallowed.indexOf(card);
            });
        }
        function parseLocale(locale) {
            var _locale$split = locale.split("_"), lang = _locale$split[0];
            return {
                country: _locale$split[1],
                lang: lang
            };
        }
        function determineMaxButtons(_ref) {
            var label = _ref.label, layout = _ref.layout, max = _ref.max;
            if (!(layout === constants.e.HORIZONTAL ? getButtonConfig(label, "allowPrimaryHorizontal") : getButtonConfig(label, "allowPrimaryVertical"))) return 1;
            var configMax = layout === constants.e.HORIZONTAL ? getButtonConfig(label, "maxHorizontalButtons") : getButtonConfig(label, "maxVerticalButtons");
            return max ? Math.min(configMax, max) : configMax;
        }
        function enableTagline(_ref2) {
            var tagline = _ref2.tagline, branding = _ref2.branding, fundingicons = _ref2.fundingicons, layout = _ref2.layout;
            return Boolean(tagline && branding && !fundingicons && layout === constants.e.HORIZONTAL);
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            });
            superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function htmlEncode() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;");
        }
        function jsxToHTML(name, props) {
            for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) children[_key - 2] = arguments[_key];
            return new JsxHTMLNode(name, props, children);
        }
        function jsxRender(template, renderers) {
            var nodes = Object(util.d)(template, /\{\s*([a-z]+)(?::\s*([^} ]+))?\s*\}|([^${}]+)/g, function(match, type, value, text) {
                if (type) {
                    if (!renderers[type]) throw new Error("Can not render type: " + type);
                    return renderers[type](value);
                }
                return text && text.trim() && renderers.text ? renderers.text(text) : text;
            });
            return new JsxHTMLNodeContainer(nodes);
        }
        function validateButtonLocale(locale) {
            if (!locale) throw new Error("Expected props.locale to be set");
            if (!locale.match(/^[a-z]{2}[_][A-Z][A-Z0-9]$/)) throw new Error("Expected props.locale to be valid, got " + locale);
            var _locale$split = locale.split("_"), lang = _locale$split[0], country = _locale$split[1];
            if (!config.a.locales[country] || -1 === config.a.locales[country].indexOf(lang)) throw new Error("Expected props.locale to be valid");
        }
        function validateButtonStyle() {
            var style = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!style) throw new Error("Expected props.style to be set");
            var label = style[constants.k.LABEL] || getButtonConfig("DEFAULT", style[constants.k.LAYOUT] === constants.e.VERTICAL ? "defaultVerticalLabel" : "defaultLabel");
            if (!BUTTON_CONFIG[label]) throw new Error("Invalid button label: " + label + ", expected: " + Object.keys(BUTTON_CONFIG[label]).join(", "));
            var color = style[constants.k.COLOR], shape = style[constants.k.SHAPE], size = style[constants.k.SIZE], branding = style[constants.k.BRANDING], fundingicons = style[constants.k.FUNDINGICONS], tagline = style[constants.k.TAGLINE], layout = style[constants.k.LAYOUT], maxbuttons = style[constants.k.MAXBUTTONS], height = style[constants.k.HEIGHT];
            if (color && -1 === getButtonConfig(label, "colors").indexOf(color)) throw new Error("Unexpected style." + constants.k.COLOR + " for " + label + " button: " + color + ", expected " + getButtonConfig(label, "colors").join(", "));
            if (shape && -1 === getButtonConfig(label, "shapes").indexOf(shape)) throw new Error("Unexpected style." + constants.k.SHAPE + " for " + label + " button: " + shape + ", expected " + getButtonConfig(label, "shapes").join(", "));
            if (size && -1 === getButtonConfig(label, "sizes").indexOf(size)) throw new Error("Unexpected style." + constants.k.SIZE + " for " + label + " button: " + size + ", expected " + getButtonConfig(label, "sizes").join(", "));
            if (!1 === branding) throw new Error("style." + constants.k.BRANDING + ":false is not allowed");
            if (fundingicons && !getButtonConfig(label, "allowFundingIcons")) throw new Error("style." + constants.k.FUNDINGICONS + ":true is not allowed for " + label + " button");
            if (layout && -1 === getButtonConfig(label, "layouts").indexOf(layout)) throw new Error("Unexpected style." + constants.k.LAYOUT + " for " + label + " button: " + layout + ", expected " + getButtonConfig(label, "layouts").join(", "));
            if (void 0 !== maxbuttons) {
                if ("number" != typeof maxbuttons) throw new TypeError("Expected style." + constants.k.MAXBUTTONS + " to be a number, got: " + maxbuttons);
                if (maxbuttons < 1) throw new Error("Expected style." + constants.k.MAXBUTTONS + " to be a at least 1, got: " + maxbuttons);
                var minButtons = layout === constants.e.VERTICAL ? getButtonConfig(label, "minVerticalButtons") : getButtonConfig(label, "minHorizontalButtons");
                if (maxbuttons < minButtons) throw new Error("Expected style." + constants.k.MAXBUTTONS + " to be no fewer than " + minButtons + ", got " + maxbuttons);
            }
            if (void 0 !== height) {
                if ("number" != typeof height) throw new TypeError("Expected style." + constants.k.HEIGHT + " to be a number, got: " + maxbuttons);
                var buttonSize = size || getButtonConfig(label, style.layout === constants.e.VERTICAL ? "defaultVerticalSize" : "defaultSize"), _ref = size === constants.j.RESPONSIVE ? {
                    minHeight: BUTTON_STYLE[constants.j.SMALL].minHeight,
                    maxHeight: BUTTON_STYLE[constants.j.HUGE].maxHeight
                } : BUTTON_STYLE[buttonSize], minHeight = _ref.minHeight, maxHeight = _ref.maxHeight;
                if (height < minHeight || height > maxHeight) throw new Error("Expected style." + constants.k.HEIGHT + " to be between " + minHeight + "px and " + maxHeight + "px - got " + height + "px");
            }
            if (!getButtonConfig(label, "allowPrimary")) throw new Error(label + " can not be used as primary button label");
            if (layout === constants.e.VERTICAL) {
                if (size && -1 === [ constants.j.MEDIUM, constants.j.LARGE, constants.j.RESPONSIVE ].indexOf(size)) throw new Error("Button must be at least " + constants.j.MEDIUM + " size for " + constants.e.VERTICAL + " layout");
                if (style[constants.k.LABEL]) throw new Error("style." + constants.k.LABEL + " option is not allowed for " + constants.e.VERTICAL + " layout - got " + label);
                if (fundingicons) throw new Error("style." + constants.k.FUNDINGICONS + " not allowed for " + constants.e.VERTICAL + " layout - got " + fundingicons);
                if (tagline) throw new Error("style." + constants.k.TAGLINE + " is not allowed for " + constants.e.VERTICAL + " layout - got " + tagline);
            }
        }
        function validateButtonProps(props) {
            if (!props) throw new Error("Expected props");
            var locale = props.locale, style = props.style;
            validateButtonLocale(locale);
            validateButtonStyle(style);
        }
        function buttonResponsiveStyle(_ref) {
            var height = _ref.height, _ref$cardNumber = _ref.cardNumber, cardNumber = void 0 === _ref$cardNumber ? 4 : _ref$cardNumber;
            return Object.keys(BUTTON_STYLE).map(function(size) {
                var style = BUTTON_STYLE[size], buttonHeight = height || style.defaultHeight, minDualWidth = Math.round(buttonHeight * DUAL_BUTTON_MIN_RATIO * 2);
                return "\n\n            @media only screen and (min-width: " + style.minWidth + "px) {\n\n                ." + CLASS.CONTAINER + " {\n                    min-width: " + style.minWidth + "px;\n                    max-width: " + style.maxWidth + "px;\n                    font-size: " + Object(util.a)(Object(util.c)(buttonHeight, 32), 10) + "px;\n                }\n\n                ." + CLASS.BUTTON + ":not(." + CLASS.CARD + ") {\n                    height: " + buttonHeight + "px;\n                    min-height: " + (height || style.minHeight) + "px;\n                    max-height: " + (height || style.maxHeight) + "px;\n                }\n\n                ." + CLASS.BUTTON + "." + CLASS.BRANDING + "-" + constants.b.UNBRANDED + " {\n                    font-size: " + Object(util.a)(Object(util.c)(buttonHeight, 45), 10) + "px;\n                }\n\n                ." + CLASS.LOGO + " {\n                    height: " + (Object(util.c)(buttonHeight, 35) + 5) + "px;\n                    max-height: " + Object(util.c)(buttonHeight, 60) + "px;\n                    min-height: " + Object(util.c)(buttonHeight, 40) + "px;\n                }\n\n                ." + CLASS.BUTTON + "." + CLASS.SHAPE + "-" + constants.i.PILL + " {\n                    border-radius: " + Math.ceil(buttonHeight / 2) + "px;\n                }\n\n                ." + CLASS.BUTTON + "." + CLASS.SHAPE + "-" + constants.i.RECT + " {\n                    border-radius: 4px;\n                }\n\n                ." + CLASS.BUTTON + "." + CLASS.LAYOUT + "-" + constants.e.VERTICAL + " {\n                    margin-bottom: " + Object(util.c)(buttonHeight, BUTTON_RELATIVE_STYLE.VERTICAL_MARGIN) + "px;\n                }\n\n                ." + CLASS.SEPARATOR + " {\n                    margin: 0 " + Object(util.c)(buttonHeight, 5) + "px;\n                }\n\n                ." + CLASS.TAGLINE + " {\n                    height: " + Object(util.c)(buttonHeight, BUTTON_RELATIVE_STYLE.TAGLINE) + "px;\n                    line-height: " + Object(util.c)(buttonHeight, BUTTON_RELATIVE_STYLE.TAGLINE) + "px;\n                }\n\n                ." + CLASS.FUNDINGICONS + " {\n                    height: " + Object(util.c)(buttonHeight, BUTTON_RELATIVE_STYLE.FUNDINGICONS) + "px;\n                }\n\n                ." + CLASS.CARD + " {\n                    display: inline-block;\n                }\n\n                ." + CLASS.BUTTON + " ." + CLASS.CARD + " {\n                    width: " + (90 / cardNumber).toFixed(2) + "%;\n                    max-width: " + Object(util.c)(buttonHeight, 160) + "px;\n                    margin-top: 0;\n                    margin-left: " + (5 / cardNumber).toFixed(2) + "%;\n                    margin-right: " + (5 / cardNumber).toFixed(2) + "%;\n                }\n\n                ." + CLASS.BUTTON + " ." + CLASS.CARD + " img {\n                    width: 100%;\n                }\n\n                ." + CLASS.FUNDINGICONS + " ." + CLASS.CARD + " {\n                    height: " + Object(util.c)(buttonHeight, 70) + "px;\n                    margin-top: " + Object(util.c)(buttonHeight, 15) + "px;\n                    margin-left: " + Object(util.c)(buttonHeight, 7) + "px;\n                    margin-right: " + Object(util.c)(buttonHeight, 7) + "px;\n                }\n\n                ." + CLASS.FUNDINGICONS + " ." + CLASS.CARD + " img {\n                    height: 100%;\n                }\n            }\n\n            @media only screen and (min-width: " + style.minWidth + "px) and (max-width: " + minDualWidth + "px) {\n\n                ." + CLASS.BUTTON + "." + CLASS.LAYOUT + "-" + constants.e.HORIZONTAL + "." + CLASS.NUMBER + "-" + constants.h.MULTIPLE + "." + CLASS.NUMBER + "-0 {\n                    width: 100%;\n                    margin-right: 0;\n                }\n\n                ." + CLASS.BUTTON + "." + CLASS.LAYOUT + "-" + constants.e.HORIZONTAL + "." + CLASS.NUMBER + "-" + constants.h.MULTIPLE + "." + CLASS.NUMBER + "-1 {\n                    display: none;\n                }\n\n                ." + CLASS.CONTAINER + "." + CLASS.LAYOUT + "-" + constants.e.HORIZONTAL + "." + CLASS.NUMBER + "-" + constants.h.MULTIPLE + " ." + CLASS.TAGLINE + " {\n                    display: none;\n                }\n            }\n\n            @media only screen and (min-width: " + Object(util.a)(style.minWidth, minDualWidth) + "px) {\n\n                ." + CLASS.BUTTON + "." + CLASS.LAYOUT + "-" + constants.e.HORIZONTAL + "." + CLASS.NUMBER + "-" + constants.h.MULTIPLE + "." + CLASS.NUMBER + "-0 {\n                    display: inline-block;\n                    width: calc(50% - 2px);\n                    margin-right: 4px;\n                }\n\n                ." + CLASS.BUTTON + "." + CLASS.LAYOUT + "-" + constants.e.HORIZONTAL + "." + CLASS.NUMBER + "-" + constants.h.MULTIPLE + "." + CLASS.NUMBER + "-1 {\n                    display: inline-block;\n                    width: calc(50% - 2px);\n                }\n\n                ." + CLASS.CONTAINER + "." + CLASS.LAYOUT + "-" + constants.e.HORIZONTAL + "." + CLASS.NUMBER + "-" + constants.h.MULTIPLE + " ." + CLASS.TAGLINE + " {\n                    display: block;\n                }\n            }\n        ";
            }).join("\n");
        }
        function componentStyle(_ref) {
            var height = _ref.height, cardNumber = _ref.cardNumber;
            return "\n        " + pageStyle + "\n        " + buttonStyle + "\n        " + buttonColorStyle + "\n        " + layoutStyle + "\n        " + brandingStyle + "\n        " + labelStyle + "\n        " + buttonResponsiveStyle({
                height: height,
                cardNumber: cardNumber
            }) + "\n    ";
        }
        function getComponentScript() {
            return function() {
                function loop(method, delay, instances) {
                    setTimeout(function() {
                        method();
                        instances -= 1;
                        instances && loop(method, delay, instances);
                    }, delay);
                }
                function getElements(selector, parent) {
                    parent = parent || document;
                    return Array.prototype.slice.call(parent.querySelectorAll(selector));
                }
                function showElement(el) {
                    var displayType = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : STYLE.INLINE_BLOCK;
                    el.style.display = displayType;
                }
                function hideElement(el) {
                    el.style.display = STYLE.NONE;
                }
                function makeElementVisible(el) {
                    el.style.visibility = STYLE.VISIBLE;
                }
                function makeElementInvisible(el) {
                    el.style.visibility = STYLE.HIDDEN;
                }
                function hasDimensions(el) {
                    var rect = el.getBoundingClientRect();
                    return Boolean(rect.height && rect.width);
                }
                function isHidden(el) {
                    var computedStyle = window.getComputedStyle(el);
                    return !computedStyle || computedStyle.display === STYLE.NONE;
                }
                function displayedElementsHaveDimensions(elements) {
                    return elements.every(function(el) {
                        return hasDimensions(el) || isHidden(el);
                    });
                }
                function isOverflowing(el) {
                    if (el.offsetWidth < el.scrollWidth || el.offsetHeight < el.scrollHeight) return !0;
                    var parent = el.parentNode;
                    if (!parent) return !1;
                    var e = el.getBoundingClientRect(), p = parent.getBoundingClientRect();
                    return e.top < p.top || e.left < p.left || e.right > p.right || e.bottom > p.bottom || (e.left < 0 || e.top < 0 || e.left + e.width > window.innerWidth || e.top + e.height > window.innerHeight);
                }
                function toggleOptionals() {
                    tagline.some(isOverflowing) ? tagline.forEach(makeElementInvisible) : tagline.forEach(makeElementVisible);
                    cards.forEach(function(el) {
                        return showElement(el);
                    });
                    cards.filter(isOverflowing).forEach(hideElement);
                    text.forEach(function(el) {
                        return showElement(el);
                    });
                    optionals.forEach(function(el) {
                        return showElement(el);
                    });
                    if (images.some(isOverflowing) || text.some(isOverflowing)) {
                        text.forEach(hideElement);
                        optionals.forEach(hideElement);
                    } else {
                        text.forEach(makeElementVisible);
                        optionals.forEach(function(el) {
                            return showElement(el);
                        });
                    }
                }
                var STYLE = {
                    BLOCK: "block",
                    INLINE_BLOCK: "inline-block",
                    NONE: "none",
                    VISIBLE: "visible",
                    HIDDEN: "hidden"
                }, images = getElements(".{ CLASS.BUTTON } .{ CLASS.LOGO }"), text = getElements(".{ CLASS.BUTTON } .{ CLASS.TEXT }"), tagline = getElements(".{ CLASS.TAGLINE }"), cards = getElements(".{ CLASS.FUNDINGICONS } .{ CLASS.CARD }"), optionals = getElements(".{ CLASS.BUTTON }-label-credit .{ CLASS.BUTTON }-logo-paypal");
                toggleOptionals();
                !function(elements, method) {
                    if (displayedElementsHaveDimensions(elements)) method(); else var interval = setInterval(function() {
                        if (displayedElementsHaveDimensions(elements)) {
                            clearInterval(interval);
                            method();
                        }
                    }, 5);
                }(images, function() {
                    images.forEach(makeElementVisible);
                    toggleOptionals();
                    document.addEventListener("DOMContentLoaded", toggleOptionals);
                    window.addEventListener("load", toggleOptionals);
                    window.addEventListener("resize", toggleOptionals);
                    loop(toggleOptionals, 10, 10);
                });
            };
        }
        function getCommonButtonClasses(_ref) {
            var layout = _ref.layout, shape = _ref.shape, branding = _ref.branding, multiple = _ref.multiple, env = _ref.env;
            return [ CLASS.LAYOUT + "-" + layout, CLASS.SHAPE + "-" + shape, CLASS.BRANDING + "-" + (branding ? constants.b.BRANDED : constants.b.UNBRANDED), CLASS.NUMBER + "-" + (multiple ? constants.h.MULTIPLE : constants.h.SINGLE), CLASS.ENV + "-" + env ].join(" ");
        }
        function getButtonClasses(_ref2) {
            var label = _ref2.label, color = _ref2.color, logoColor = _ref2.logoColor;
            return [ CLASS.LABEL + "-" + label, CLASS.COLOR + "-" + color, CLASS.LOGO_COLOR + "-" + logoColor ].join(" ");
        }
        function getLocaleContent(locale) {
            var country = locale.country, lang = locale.lang;
            return componentContent[country][lang];
        }
        function determineButtons(_ref3) {
            var label = _ref3.label, color = _ref3.color, sources = _ref3.sources, multiple = _ref3.multiple;
            return sources.map(function(source, i) {
                var buttonLabel = multiple ? fundingToDefaultLabel(source) : label;
                return {
                    source: source,
                    label: buttonLabel,
                    color: multiple && i > 0 ? getButtonConfig(buttonLabel, "secondaryColors")[color] : color
                };
            });
        }
        function renderCards(_ref4) {
            var cards = _ref4.cards, button = _ref4.button;
            return cards.map(function(name) {
                var _ref5, logo = cardLogos[name];
                return jsxToHTML("img", _extends({}, (_ref5 = {}, _ref5[constants.a.BUTTON] = button || !1, 
                _ref5[constants.a.FUNDING_SOURCE] = "" + constants.r.CARD, _ref5[constants.a.CARD] = "" + name, 
                _ref5), {
                    class: CLASS.CARD + " " + CLASS.CARD + "-" + name + " " + (button ? CLASS.BUTTON : ""),
                    src: "data:image/svg+xml;base64," + Object(base64.btoa)(logo),
                    alt: name
                }));
            });
        }
        function renderFundingIcons(_ref6) {
            var cards = _ref6.cards;
            if (_ref6.fundingicons) return jsxToHTML("div", {
                class: "" + CLASS.FUNDINGICONS
            }, renderCards({
                cards: cards,
                button: !0
            }));
        }
        function renderContent(text, _ref7) {
            var locale = _ref7.locale, color = _ref7.color, branding = _ref7.branding, logoColor = _ref7.logoColor, funding = _ref7.funding, env = _ref7.env, _cards = _ref7.cards, _content = getLocaleContent(locale);
            return jsxRender(text, {
                text: function(value) {
                    return jsxToHTML("span", {
                        class: CLASS.TEXT
                    }, value);
                },
                logo: function(name) {
                    if (branding) {
                        if (!logoColor) throw new Error("Can not determine logo without logo color");
                        var logo = fundingLogos[name][logoColor] || fundingLogos[name][constants.g.ANY];
                        return jsxToHTML("img", {
                            class: CLASS.LOGO + " " + CLASS.LOGO + "-" + name + " " + CLASS.LOGO + "-" + color,
                            src: "data:image/svg+xml;base64," + Object(base64.btoa)(logo),
                            alt: name
                        });
                    }
                },
                content: function(name) {
                    for (var contentString = void 0, _iterator = name.split("|"), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref8;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref8 = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref8 = _i.value;
                        }
                        var key = _ref8;
                        if (_content[key]) {
                            contentString = _content[key];
                            break;
                        }
                    }
                    if (!contentString && env === constants.q.TEST) throw new Error("Could not find content " + name + " for " + locale.lang + "_" + locale.country);
                    return renderContent(contentString || "", {
                        locale: locale,
                        color: color,
                        branding: branding,
                        logoColor: logoColor,
                        funding: funding,
                        env: env,
                        cards: _cards
                    });
                },
                cards: function() {
                    if (!funding) throw new Error("Can not determine card types without funding");
                    return renderCards({
                        cards: _cards,
                        button: !1
                    });
                },
                separator: function() {
                    return jsxToHTML("span", {
                        class: CLASS.SEPARATOR
                    });
                }
            });
        }
        function renderButton(_ref9) {
            var _ref10, label = _ref9.label, color = _ref9.color, locale = _ref9.locale, branding = _ref9.branding, multiple = _ref9.multiple, layout = _ref9.layout, shape = _ref9.shape, source = _ref9.source, funding = _ref9.funding, i = _ref9.i, env = _ref9.env, cards = _ref9.cards, logoColor = getButtonConfig(label, "logoColors")[color], contentText = multiple ? getButtonConfig(label, "logoLabel") : getButtonConfig(label, "label");
            contentText = renderContent(contentText, {
                locale: locale,
                color: color,
                branding: branding,
                logoColor: logoColor,
                funding: funding,
                env: env,
                cards: cards
            });
            return jsxToHTML("div", _extends({}, (_ref10 = {}, _ref10[constants.a.FUNDING_SOURCE] = source, 
            _ref10[constants.a.BUTTON] = !0, _ref10), {
                class: CLASS.BUTTON + " " + CLASS.NUMBER + "-" + i + " " + getCommonButtonClasses({
                    layout: layout,
                    shape: shape,
                    branding: branding,
                    multiple: multiple,
                    env: env
                }) + " " + getButtonClasses({
                    label: label,
                    color: color,
                    logoColor: logoColor
                }),
                role: "button",
                "aria-label": source,
                tabindex: "0"
            }), contentText);
        }
        function renderTagline(_ref11) {
            var label = _ref11.label, tagline = _ref11.tagline, color = _ref11.color, locale = _ref11.locale, multiple = _ref11.multiple, env = _ref11.env, cards = _ref11.cards;
            if (tagline) {
                var tag = multiple ? getButtonConfig(label, "dualTag") || getButtonConfig(label, "tag") : getButtonConfig(label, "tag"), text = renderContent(tag, {
                    locale: locale,
                    color: color,
                    env: env,
                    cards: cards
                });
                if (text) {
                    var tagColor = getButtonConfig(label, "tagLineColors")[color];
                    return jsxToHTML("div", {
                        class: CLASS.TAGLINE + " " + CLASS.TAGLINE_COLOR + "-" + tagColor
                    }, text);
                }
            }
        }
        function renderScript() {
            var script = getComponentScript().toString();
            script = script.replace(/\{\s*CLASS\.([A-Z0-9_]+)\s*\}/g, function(match, name) {
                return CLASS[name];
            });
            return jsxToHTML("script", {
                innerHTML: "(" + script + ")();"
            });
        }
        function renderStyle(_ref12) {
            return jsxToHTML("style", {
                innerHTML: componentStyle({
                    height: _ref12.height,
                    cardNumber: _ref12.cardNumber
                })
            });
        }
        function componentTemplate(_ref13) {
            var _ref14, props = _ref13.props;
            if (props && props.style) {
                var style = props.style;
                "generic" === style.label && (style.label = "paypal");
                "creditblue" === style.color && delete style.color;
                1 !== style.maxbuttons || !1 !== style.tagline || "responsive" !== style.size || "horizontal" !== style.layout || style.height || (style.height = 44);
            }
            validateButtonProps(props);
            var _normalizeProps = normalizeProps(props), label = _normalizeProps.label, locale = _normalizeProps.locale, color = _normalizeProps.color, shape = _normalizeProps.shape, branding = _normalizeProps.branding, tagline = _normalizeProps.tagline, funding = _normalizeProps.funding, layout = _normalizeProps.layout, sources = _normalizeProps.sources, multiple = _normalizeProps.multiple, fundingicons = _normalizeProps.fundingicons, env = _normalizeProps.env, height = _normalizeProps.height, cards = _normalizeProps.cards, buttonNodes = determineButtons({
                label: label,
                color: color,
                sources: sources,
                multiple: multiple
            }).map(function(button, i) {
                return renderButton({
                    label: button.label,
                    color: button.color,
                    source: button.source,
                    env: env,
                    i: i,
                    funding: funding,
                    multiple: multiple,
                    locale: locale,
                    branding: branding,
                    layout: layout,
                    shape: shape,
                    cards: cards
                });
            }), taglineNode = renderTagline({
                label: label,
                tagline: tagline,
                color: color,
                locale: locale,
                multiple: multiple,
                env: env,
                cards: cards
            }), fundingiconNode = renderFundingIcons({
                cards: cards,
                fundingicons: fundingicons
            }), styleNode = renderStyle({
                height: height,
                cardNumber: cards.length
            }), scriptNode = renderScript();
            return jsxToHTML("div", _extends({}, (_ref14 = {}, _ref14[constants.a.VERSION] = "4.0.180", 
            _ref14), {
                class: CLASS.CONTAINER + " " + getCommonButtonClasses({
                    layout: layout,
                    shape: shape,
                    branding: branding,
                    multiple: multiple,
                    env: env
                })
            }), styleNode, buttonNodes, taglineNode || fundingiconNode, scriptNode).toString();
        }
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var _logoColors, _tagLineColors, _secondaryColors, _logoColors2, _secondaryColors2, _logoColors3, _secondaryColors3, _logoColors4, _secondaryColors4, _logoColors5, _secondaryColors5, _logoColors6, _secondaryColors6, _BUTTON_CONFIG, _FUNDING_TO_DEFAULT_L, _LABEL_TO_FUNDING, _BUTTON_STYLE, _FUNDING_CONFIG, _CARD_CONFIG, _BUTTON_LOGO$PP, _BUTTON_LOGO$PAYPAL, _BUTTON_LOGO$CREDIT, _BUTTON_LOGO$VENMO, _BUTTON_LOGO$IDEAL, _BUTTON_LOGO$ELV, _fundingLogos, _cardLogos, base64 = __webpack_require__("./node_modules/Base64/base64.js"), constants = __webpack_require__("./src/constants/index.js"), BUTTON_CONFIG = (_BUTTON_CONFIG = {}, 
        _BUTTON_CONFIG[constants.p] = {
            colors: [ constants.c.GOLD, constants.c.BLUE, constants.c.SILVER, constants.c.BLACK ],
            sizes: [ constants.j.SMALL, constants.j.MEDIUM, constants.j.LARGE, constants.j.RESPONSIVE ],
            shapes: [ constants.i.PILL, constants.i.RECT ],
            layouts: [ constants.e.HORIZONTAL, constants.e.VERTICAL ],
            logoColors: (_logoColors = {}, _logoColors[constants.c.GOLD] = constants.g.BLUE, 
            _logoColors[constants.c.SILVER] = constants.g.BLUE, _logoColors[constants.c.BLUE] = constants.g.WHITE, 
            _logoColors[constants.c.BLACK] = constants.g.WHITE, _logoColors[constants.c.BLACK] = constants.g.WHITE, 
            _logoColors),
            tagLineColors: (_tagLineColors = {}, _tagLineColors[constants.c.GOLD] = constants.l.BLUE, 
            _tagLineColors[constants.c.SILVER] = constants.l.BLUE, _tagLineColors[constants.c.BLUE] = constants.l.BLUE, 
            _tagLineColors[constants.c.BLACK] = constants.l.BLACK, _tagLineColors[constants.c.DARKBLUE] = constants.l.BLUE, 
            _tagLineColors),
            secondaryColors: (_secondaryColors = {}, _secondaryColors[constants.c.GOLD] = constants.c.BLUE, 
            _secondaryColors[constants.c.SILVER] = constants.c.BLUE, _secondaryColors[constants.c.BLUE] = constants.c.SILVER, 
            _secondaryColors[constants.c.BLACK] = constants.c.BLACK, _secondaryColors[constants.c.DARKBLUE] = constants.c.SILVER, 
            _secondaryColors),
            tag: "{ content: safer_tag }",
            dualTag: "{ content: dual_tag|safer_tag }",
            defaultLocale: "en_US",
            defaultLabel: constants.d.CHECKOUT,
            defaultVerticalLabel: constants.d.PAYPAL,
            defaultColor: constants.c.GOLD,
            defaultSize: constants.j.SMALL,
            defaultVerticalSize: constants.j.MEDIUM,
            defaultShape: constants.i.PILL,
            defaultLayout: constants.e.HORIZONTAL,
            defaultBranding: !0,
            defaultVerticalBranding: !0,
            defaultFundingIcons: !1,
            defaultTagline: !0,
            defaultDual: "",
            minimumSize: constants.j.TINY,
            minimumVerticalSize: constants.j.MEDIUM,
            maximumSize: constants.j.HUGE,
            maximumVerticalSize: constants.j.HUGE,
            minHorizontalButtons: 1,
            minVerticalButtons: 1,
            maxHorizontalButtons: 2,
            maxVerticalButtons: 4,
            allowUnbranded: !1,
            allowFundingIcons: !0,
            allowPrimary: !1,
            allowPrimaryVertical: !1,
            allowPrimaryHorizontal: !1
        }, _BUTTON_CONFIG[constants.d.PAYPAL] = {
            label: "{ logo: " + constants.f.PP + " } { logo: " + constants.f.PAYPAL + " }",
            logoLabel: "{ logo: " + constants.f.PP + " } { logo: " + constants.f.PAYPAL + " }",
            allowPrimary: !0,
            allowPrimaryVertical: !0,
            allowPrimaryHorizontal: !0
        }, _BUTTON_CONFIG[constants.d.CHECKOUT] = {
            label: "{ content: checkout }",
            logoLabel: "{ logo: " + constants.f.PP + " } { logo: " + constants.f.PAYPAL + " }",
            allowPrimary: !0,
            allowPrimaryVertical: !1,
            allowPrimaryHorizontal: !0
        }, _BUTTON_CONFIG[constants.d.PAY] = {
            label: "{ content: pay }",
            logoLabel: "{ logo: " + constants.f.PP + " } { logo: " + constants.f.PAYPAL + " }",
            allowPrimary: !0,
            allowPrimaryVertical: !1,
            allowPrimaryHorizontal: !0
        }, _BUTTON_CONFIG[constants.d.BUYNOW] = {
            label: "{ content: buynow }",
            logoLabel: "{ logo: " + constants.f.PP + " } { logo: " + constants.f.PAYPAL + " }",
            defaultBranding: void 0,
            allowPrimary: !0,
            allowPrimaryVertical: !1,
            allowPrimaryHorizontal: !0,
            allowUnbranded: !0
        }, _BUTTON_CONFIG[constants.d.CREDIT] = {
            label: "{ logo: " + constants.f.PP + " } { logo: " + constants.f.PAYPAL + " } { logo: " + constants.f.CREDIT + " }",
            logoLabel: "{ logo: " + constants.f.PP + " } { logo: " + constants.f.PAYPAL + " } { logo: " + constants.f.CREDIT + " }",
            tag: "{ content: later_tag }",
            colors: [ constants.c.DARKBLUE, constants.c.BLACK ],
            logoColors: (_logoColors2 = {}, _logoColors2[constants.c.BLACK] = constants.g.WHITE, 
            _logoColors2[constants.c.DARKBLUE] = constants.g.WHITE, _logoColors2),
            secondaryColors: (_secondaryColors2 = {}, _secondaryColors2[constants.c.GOLD] = constants.c.DARKBLUE, 
            _secondaryColors2[constants.c.BLUE] = constants.c.DARKBLUE, _secondaryColors2[constants.c.SILVER] = constants.c.DARKBLUE, 
            _secondaryColors2[constants.c.BLACK] = constants.c.BLACK, _secondaryColors2),
            defaultColor: constants.c.DARKBLUE,
            allowPrimary: !0,
            allowPrimaryVertical: !1,
            allowPrimaryHorizontal: !1,
            allowFundingIcons: !1
        }, _BUTTON_CONFIG[constants.d.VENMO] = {
            label: "{ logo: " + constants.f.VENMO + " }",
            logoLabel: "{ logo: " + constants.f.VENMO + " }",
            defaultColor: constants.c.SILVER,
            colors: [ constants.c.BLUE, constants.c.SILVER, constants.c.BLACK ],
            logoColors: (_logoColors3 = {}, _logoColors3[constants.c.BLUE] = constants.g.WHITE, 
            _logoColors3[constants.c.SILVER] = constants.g.BLUE, _logoColors3[constants.c.BLACK] = constants.g.WHITE, 
            _logoColors3),
            secondaryColors: (_secondaryColors3 = {}, _secondaryColors3[constants.c.GOLD] = constants.c.BLUE, 
            _secondaryColors3[constants.c.BLUE] = constants.c.SILVER, _secondaryColors3[constants.c.SILVER] = constants.c.BLUE, 
            _secondaryColors3[constants.c.BLACK] = constants.c.BLACK, _secondaryColors3[constants.c.DARKBLUE] = constants.c.SILVER, 
            _secondaryColors3),
            allowPrimary: !0,
            allowPrimaryVertical: !1,
            allowPrimaryHorizontal: !0
        }, _BUTTON_CONFIG[constants.d.IDEAL] = {
            label: "{ logo: " + constants.f.IDEAL + " } Online betalen",
            logoLabel: "{ logo: " + constants.f.IDEAL + " } Online betalen",
            defaultColor: constants.c.SILVER,
            colors: [ constants.c.SILVER, constants.c.BLACK ],
            logoColors: (_logoColors4 = {}, _logoColors4[constants.c.SILVER] = constants.g.BLACK, 
            _logoColors4[constants.c.BLACK] = constants.g.WHITE, _logoColors4),
            secondaryColors: (_secondaryColors4 = {}, _secondaryColors4[constants.c.GOLD] = constants.c.SILVER, 
            _secondaryColors4[constants.c.BLUE] = constants.c.SILVER, _secondaryColors4[constants.c.SILVER] = constants.c.SILVER, 
            _secondaryColors4[constants.c.BLACK] = constants.c.BLACK, _secondaryColors4[constants.c.DARKBLUE] = constants.c.SILVER, 
            _secondaryColors4),
            allowPrimary: !1,
            allowPrimaryVertical: !1,
            allowPrimaryHorizontal: !1
        }, _BUTTON_CONFIG[constants.d.ELV] = {
            label: "{ logo: " + constants.f.ELV + " }",
            logoLabel: "{ logo: " + constants.f.ELV + " }",
            defaultColor: constants.c.SILVER,
            colors: [ constants.c.SILVER, constants.c.BLACK ],
            logoColors: (_logoColors5 = {}, _logoColors5[constants.c.SILVER] = constants.g.BLACK, 
            _logoColors5[constants.c.BLACK] = constants.g.WHITE, _logoColors5),
            secondaryColors: (_secondaryColors5 = {}, _secondaryColors5[constants.c.GOLD] = constants.c.SILVER, 
            _secondaryColors5[constants.c.BLUE] = constants.c.SILVER, _secondaryColors5[constants.c.SILVER] = constants.c.SILVER, 
            _secondaryColors5[constants.c.BLACK] = constants.c.BLACK, _secondaryColors5[constants.c.DARKBLUE] = constants.c.SILVER, 
            _secondaryColors5),
            allowPrimary: !1,
            allowPrimaryVertical: !1,
            allowPrimaryHorizontal: !1
        }, _BUTTON_CONFIG[constants.d.CARD] = {
            label: "{ cards }",
            logoLabel: "{ cards }",
            defaultColor: constants.c.SILVER,
            colors: [ constants.c.TRANSPARENT ],
            logoColors: (_logoColors6 = {}, _logoColors6[constants.c.TRANSPARENT] = constants.g.BLACK, 
            _logoColors6),
            secondaryColors: (_secondaryColors6 = {}, _secondaryColors6[constants.c.GOLD] = constants.c.TRANSPARENT, 
            _secondaryColors6[constants.c.BLUE] = constants.c.TRANSPARENT, _secondaryColors6[constants.c.SILVER] = constants.c.TRANSPARENT, 
            _secondaryColors6[constants.c.BLACK] = constants.c.TRANSPARENT, _secondaryColors6[constants.c.DARKBLUE] = constants.c.TRANSPARENT, 
            _secondaryColors6),
            allowPrimary: !1,
            allowPrimaryVertical: !1,
            allowPrimaryHorizontal: !1
        }, _BUTTON_CONFIG), FUNDING_TO_DEFAULT_LABEL = (_FUNDING_TO_DEFAULT_L = {}, _FUNDING_TO_DEFAULT_L[constants.r.PAYPAL] = constants.d.PAYPAL, 
        _FUNDING_TO_DEFAULT_L[constants.r.VENMO] = constants.d.VENMO, _FUNDING_TO_DEFAULT_L[constants.r.CARD] = constants.d.CARD, 
        _FUNDING_TO_DEFAULT_L[constants.r.CREDIT] = constants.d.CREDIT, _FUNDING_TO_DEFAULT_L[constants.r.IDEAL] = constants.d.IDEAL, 
        _FUNDING_TO_DEFAULT_L[constants.r.ELV] = constants.d.ELV, _FUNDING_TO_DEFAULT_L), LABEL_TO_FUNDING = (_LABEL_TO_FUNDING = {}, 
        _LABEL_TO_FUNDING[constants.d.PAYPAL] = constants.r.PAYPAL, _LABEL_TO_FUNDING[constants.d.CHECKOUT] = constants.r.PAYPAL, 
        _LABEL_TO_FUNDING[constants.d.PAY] = constants.r.PAYPAL, _LABEL_TO_FUNDING[constants.d.BUYNOW] = constants.r.PAYPAL, 
        _LABEL_TO_FUNDING[constants.d.CARD] = constants.r.CARD, _LABEL_TO_FUNDING[constants.d.CREDIT] = constants.r.CREDIT, 
        _LABEL_TO_FUNDING[constants.d.VENMO] = constants.r.VENMO, _LABEL_TO_FUNDING[constants.d.IDEAL] = constants.r.IDEAL, 
        _LABEL_TO_FUNDING), BUTTON_RELATIVE_STYLE = {
            FUNDINGICONS: 100,
            TAGLINE: 50,
            VERTICAL_MARGIN: 30
        }, BUTTON_STYLE = (_BUTTON_STYLE = {}, _BUTTON_STYLE[constants.j.TINY] = {
            defaultWidth: 75,
            defaultHeight: 25,
            minWidth: 75,
            maxWidth: 150,
            minHeight: 25,
            maxHeight: 30,
            allowFunding: !0,
            allowTagline: !1
        }, _BUTTON_STYLE[constants.j.SMALL] = {
            defaultWidth: 150,
            defaultHeight: 25,
            minWidth: 150,
            maxWidth: 200,
            minHeight: 25,
            maxHeight: 55,
            allowFunding: !0,
            allowTagline: !0
        }, _BUTTON_STYLE[constants.j.MEDIUM] = {
            defaultWidth: 250,
            defaultHeight: 35,
            minWidth: 200,
            maxWidth: 300,
            minHeight: 35,
            maxHeight: 55,
            allowFunding: !0,
            allowTagline: !0
        }, _BUTTON_STYLE[constants.j.LARGE] = {
            defaultWidth: 350,
            defaultHeight: 45,
            minWidth: 300,
            maxWidth: 500,
            minHeight: 30,
            maxHeight: 55,
            allowFunding: !0,
            allowTagline: !0
        }, _BUTTON_STYLE[constants.j.HUGE] = {
            defaultWidth: 500,
            defaultHeight: 55,
            minWidth: 500,
            maxWidth: 750,
            minHeight: 40,
            maxHeight: 55,
            allowFunding: !0,
            allowTagline: !0
        }, _BUTTON_STYLE), FUNDING_PRIORITY = [ constants.r.PAYPAL, constants.r.VENMO, constants.r.CREDIT, constants.r.IDEAL, constants.r.ELV, constants.r.CARD ], FUNDING_CONFIG = (_FUNDING_CONFIG = {}, 
        _FUNDING_CONFIG[constants.p] = {
            enabled: !0,
            allowOptIn: !0,
            allowOptOut: !0,
            allowRemember: !0,
            allowHorizontal: !0,
            allowVertical: !0
        }, _FUNDING_CONFIG[constants.r.PAYPAL] = {
            default: !0,
            allowOptIn: !1,
            allowOptOut: !1,
            allowHorizontal: !0,
            allowVertical: !0
        }, _FUNDING_CONFIG[constants.r.CARD] = {
            default: !0,
            allowHorizontal: !1,
            allowVertical: !0
        }, _FUNDING_CONFIG[constants.r.VENMO] = {
            allowOptOut: !1,
            allowedCountries: [ constants.o.US ],
            allowHorizontal: !0,
            allowVertical: !0
        }, _FUNDING_CONFIG[constants.r.CREDIT] = {
            allowedCountries: [ constants.o.US, constants.o.GB, constants.o.DE ],
            defaultVerticalCountries: [ constants.o.US ],
            platforms: [ constants.u.MOBILE ],
            allowHorizontal: !0,
            allowVertical: !0
        }, _FUNDING_CONFIG[constants.r.IDEAL] = {
            allowedCountries: [ constants.o.NL ],
            allowHorizontal: !0,
            allowVertical: !0
        }, _FUNDING_CONFIG[constants.r.ELV] = {
            allowedCountries: [ constants.o.DE, constants.o.AT ],
            defaultVerticalCountries: [ constants.o.DE, constants.o.AT ],
            allowHorizontal: !0,
            allowVertical: !0
        }, _FUNDING_CONFIG), CARD_CONFIG = (_CARD_CONFIG = {}, _CARD_CONFIG[constants.p] = {
            priority: [ constants.m.VISA, constants.m.MASTERCARD, constants.m.AMEX ]
        }, _CARD_CONFIG[constants.o.US] = {
            priority: [ constants.m.VISA, constants.m.MASTERCARD, constants.m.AMEX, constants.m.DISCOVER ]
        }, _CARD_CONFIG[constants.o.BR] = {
            priority: [ constants.m.VISA, constants.m.MASTERCARD, constants.m.AMEX, constants.m.HIPER, constants.m.ELO ]
        }, _CARD_CONFIG[constants.o.JP] = {
            priority: [ constants.m.VISA, constants.m.MASTERCARD, constants.m.AMEX, constants.m.JCB ]
        }, _CARD_CONFIG), fundingEligibilityReasons = [], util = __webpack_require__("./src/lib/util.js"), normalizeProps = Object(util.b)(function(props) {
            var env = props.env, _props$locale = props.locale, locale = void 0 === _props$locale ? getButtonConfig("DEFAULT", "defaultLocale") : _props$locale, _props$style = props.style, style = void 0 === _props$style ? {} : _props$style, funding = props.funding;
            locale = parseLocale(locale);
            funding = funding || {};
            funding.allowed = funding.allowed || [];
            funding.disallowed = funding.disallowed || [];
            funding.remembered = funding.remembered || [];
            var label = style[constants.k.LABEL] || getButtonConfig("DEFAULT", style.layout === constants.e.VERTICAL ? "defaultVerticalLabel" : "defaultLabel"), layout = style[constants.k.LAYOUT] || getButtonConfig(label, "defaultLayout"), _style$BUTTON_STYLE_O = style[constants.k.SIZE], size = void 0 === _style$BUTTON_STYLE_O ? getButtonConfig(label, layout === constants.e.VERTICAL ? "defaultVerticalSize" : "defaultSize") : _style$BUTTON_STYLE_O, _style$BUTTON_STYLE_O2 = style[constants.k.COLOR], color = void 0 === _style$BUTTON_STYLE_O2 ? getButtonConfig(label, "defaultColor") : _style$BUTTON_STYLE_O2, _style$BUTTON_STYLE_O3 = style[constants.k.SHAPE], shape = void 0 === _style$BUTTON_STYLE_O3 ? getButtonConfig(label, "defaultShape") : _style$BUTTON_STYLE_O3, _style$BUTTON_STYLE_O4 = style[constants.k.BRANDING], branding = void 0 === _style$BUTTON_STYLE_O4 ? getButtonConfig(label, layout === constants.e.VERTICAL ? "defaultVerticalBranding" : "defaultBranding") : _style$BUTTON_STYLE_O4, _style$BUTTON_STYLE_O5 = style[constants.k.FUNDINGICONS], fundingicons = void 0 === _style$BUTTON_STYLE_O5 ? getButtonConfig(label, "defaultFundingIcons") : _style$BUTTON_STYLE_O5, _style$BUTTON_STYLE_O6 = style[constants.k.TAGLINE], tagline = void 0 === _style$BUTTON_STYLE_O6 ? getButtonConfig(label, "defaultTagline") : _style$BUTTON_STYLE_O6, max = style[constants.k.MAXBUTTONS], height = style[constants.k.HEIGHT];
            max = determineMaxButtons({
                label: label,
                layout: layout,
                max: max
            });
            var selected = labelToFunding(label), sources = determineEligibleFunding({
                funding: funding,
                selected: selected,
                locale: locale,
                env: env,
                layout: layout
            }).slice(0, max), multiple = sources.length > 1;
            multiple && (branding = !0);
            tagline = enableTagline({
                tagline: tagline,
                branding: branding,
                fundingicons: fundingicons,
                layout: layout
            });
            return {
                size: size,
                label: label,
                locale: locale,
                color: color,
                shape: shape,
                branding: branding,
                fundingicons: fundingicons,
                tagline: tagline,
                funding: funding,
                layout: layout,
                sources: sources,
                max: max,
                multiple: multiple,
                env: env,
                height: height,
                cards: determineEligibleCards({
                    funding: funding,
                    locale: locale
                })
            };
        }), JsxHTMLNode = function() {
            function JsxHTMLNode(name, props, children) {
                _classCallCheck(this, JsxHTMLNode);
                this.name = name;
                this.props = props;
                this.children = children;
            }
            JsxHTMLNode.prototype.toString = function() {
                return "<" + this.name + (this.props ? " " : "") + (this.props ? this.propsToString() : "") + ">" + this.childrenToString() + "</" + this.name + ">";
            };
            JsxHTMLNode.prototype.propsToString = function() {
                var props = this.props;
                return props ? Object.keys(props).filter(function(key) {
                    return "innerHTML" !== key && props && !1 !== props[key];
                }).map(function(key) {
                    return props && !0 === props[key] ? "" + htmlEncode(key) : props ? htmlEncode(key) + '="' + htmlEncode(props[key]) + '"' : "";
                }).join(" ") : "";
            };
            JsxHTMLNode.prototype.childrenToString = function() {
                function iterate(children) {
                    for (var _iterator = children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }
                        var child = _ref;
                        null !== child && void 0 !== child && (Array.isArray(child) ? iterate(child) : result += child instanceof JsxHTMLNode ? child.toString() : htmlEncode(child));
                    }
                }
                if (this.props && this.props.innerHTML) return this.props.innerHTML;
                if (!this.children) return "";
                var result = "";
                iterate(this.children);
                return result;
            };
            return JsxHTMLNode;
        }(), JsxHTMLNodeContainer = function(_JsxHTMLNode) {
            function JsxHTMLNodeContainer(children) {
                _classCallCheck(this, JsxHTMLNodeContainer);
                return _possibleConstructorReturn(this, _JsxHTMLNode.call(this, "", {}, children));
            }
            _inherits(JsxHTMLNodeContainer, _JsxHTMLNode);
            JsxHTMLNodeContainer.prototype.toString = function() {
                return this.childrenToString();
            };
            return JsxHTMLNodeContainer;
        }(JsxHTMLNode), pp_white = __webpack_require__("./src/resources/fundingLogos/pp_white.svg"), pp_white_default = __webpack_require__.n(pp_white), pp_blue = __webpack_require__("./src/resources/fundingLogos/pp_blue.svg"), pp_blue_default = __webpack_require__.n(pp_blue), pp_black = __webpack_require__("./src/resources/fundingLogos/pp_black.svg"), pp_black_default = __webpack_require__.n(pp_black), paypal_white = __webpack_require__("./src/resources/fundingLogos/paypal_white.svg"), paypal_white_default = __webpack_require__.n(paypal_white), paypal_blue = __webpack_require__("./src/resources/fundingLogos/paypal_blue.svg"), paypal_blue_default = __webpack_require__.n(paypal_blue), paypal_black = __webpack_require__("./src/resources/fundingLogos/paypal_black.svg"), paypal_black_default = __webpack_require__.n(paypal_black), credit_white = __webpack_require__("./src/resources/fundingLogos/credit_white.svg"), credit_white_default = __webpack_require__.n(credit_white), venmo_white = __webpack_require__("./src/resources/fundingLogos/venmo_white.svg"), venmo_white_default = __webpack_require__.n(venmo_white), venmo_blue = __webpack_require__("./src/resources/fundingLogos/venmo_blue.svg"), venmo_blue_default = __webpack_require__.n(venmo_blue), ideal = __webpack_require__("./src/resources/fundingLogos/ideal.svg"), ideal_default = __webpack_require__.n(ideal), elv = __webpack_require__("./src/resources/fundingLogos/elv.svg"), elv_default = __webpack_require__.n(elv), elv_white = __webpack_require__("./src/resources/fundingLogos/elv_white.svg"), elv_white_default = __webpack_require__.n(elv_white), fundingLogos = (_fundingLogos = {}, 
        _fundingLogos[constants.f.PP] = (_BUTTON_LOGO$PP = {}, _BUTTON_LOGO$PP[constants.g.WHITE] = pp_white_default.a, 
        _BUTTON_LOGO$PP[constants.g.BLUE] = pp_blue_default.a, _BUTTON_LOGO$PP[constants.g.BLACK] = pp_black_default.a, 
        _BUTTON_LOGO$PP), _fundingLogos[constants.f.PAYPAL] = (_BUTTON_LOGO$PAYPAL = {}, 
        _BUTTON_LOGO$PAYPAL[constants.g.WHITE] = paypal_white_default.a, _BUTTON_LOGO$PAYPAL[constants.g.BLUE] = paypal_blue_default.a, 
        _BUTTON_LOGO$PAYPAL[constants.g.BLACK] = paypal_black_default.a, _BUTTON_LOGO$PAYPAL), 
        _fundingLogos[constants.f.CREDIT] = (_BUTTON_LOGO$CREDIT = {}, _BUTTON_LOGO$CREDIT[constants.g.WHITE] = credit_white_default.a, 
        _BUTTON_LOGO$CREDIT), _fundingLogos[constants.f.VENMO] = (_BUTTON_LOGO$VENMO = {}, 
        _BUTTON_LOGO$VENMO[constants.g.WHITE] = venmo_white_default.a, _BUTTON_LOGO$VENMO[constants.g.BLUE] = venmo_blue_default.a, 
        _BUTTON_LOGO$VENMO), _fundingLogos[constants.f.IDEAL] = (_BUTTON_LOGO$IDEAL = {}, 
        _BUTTON_LOGO$IDEAL[constants.g.ANY] = ideal_default.a, _BUTTON_LOGO$IDEAL), _fundingLogos[constants.f.ELV] = (_BUTTON_LOGO$ELV = {}, 
        _BUTTON_LOGO$ELV[constants.g.ANY] = elv_default.a, _BUTTON_LOGO$ELV[constants.g.WHITE] = elv_white_default.a, 
        _BUTTON_LOGO$ELV), _fundingLogos), visa = __webpack_require__("./src/resources/cardLogos/visa.svg"), visa_default = __webpack_require__.n(visa), amex = __webpack_require__("./src/resources/cardLogos/amex.svg"), amex_default = __webpack_require__.n(amex), mastercard = __webpack_require__("./src/resources/cardLogos/mastercard.svg"), mastercard_default = __webpack_require__.n(mastercard), discover = __webpack_require__("./src/resources/cardLogos/discover.svg"), discover_default = __webpack_require__.n(discover), hiper = __webpack_require__("./src/resources/cardLogos/hiper.svg"), hiper_default = __webpack_require__.n(hiper), elo = __webpack_require__("./src/resources/cardLogos/elo.svg"), elo_default = __webpack_require__.n(elo), jcb = __webpack_require__("./src/resources/cardLogos/jcb.svg"), jcb_default = __webpack_require__.n(jcb), cardLogos = (_cardLogos = {}, 
        _cardLogos[constants.m.VISA] = visa_default.a, _cardLogos[constants.m.AMEX] = amex_default.a, 
        _cardLogos[constants.m.MASTERCARD] = mastercard_default.a, _cardLogos[constants.m.DISCOVER] = discover_default.a, 
        _cardLogos[constants.m.HIPER] = hiper_default.a, _cardLogos[constants.m.ELO] = elo_default.a, 
        _cardLogos[constants.m.JCB] = jcb_default.a, _cardLogos), config = __webpack_require__("./src/config/index.js"), pageStyle = "\n    html, body {\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        overflow: hidden;\n        text-align: center;\n    }\n\n    * {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: default;\n    }\n", CLASS = {
            CONTAINER: "paypal-button-container",
            BUTTON: "paypal-button",
            LABEL: "paypal-button-label",
            COLOR: "paypal-button-color",
            LOGO_COLOR: "paypal-button-logo-color",
            SHAPE: "paypal-button-shape",
            BRANDING: "paypal-button-branding",
            LAYOUT: "paypal-button-layout",
            NUMBER: "paypal-button-number",
            ENV: "paypal-button-env",
            TAGLINE: "paypal-button-tagline",
            TAGLINE_COLOR: "paypal-button-tagline-color",
            FUNDINGICONS: "paypal-button-fundingicons",
            TEXT: "paypal-button-text",
            LOGO: "paypal-button-logo",
            CARD: "paypal-button-card",
            SEPARATOR: "paypal-separator"
        }, buttonStyle = "\n\n    ." + CLASS.CONTAINER + ' {\n        display: block;\n        white-space: nowrap;\n        margin: 0;\n        background: 0;\n        border: 0;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        text-transform: none;\n        font-weight: 500;R\n        -webkit-font-smoothing: antialiased;\n        font-smoothing: antialiased;\n        z-index: 0;\n        font-size: 0;\n        width: 100%;\n        box-sizing: border-box;\n    }\n\n    .' + CLASS.BUTTON + ":not(." + CLASS.CARD + ") {\n        border: 1px solid transparent;\n        border-radius: 0 3px 3px 0;\n        position: relative;\n        width: 100%;\n        box-sizing: border-box;\n        border: none;\n        vertical-align: top;\n        cursor: pointer;\n        outline: none;\n        overflow: hidden;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-" + constants.c.TRANSPARENT + " {\n        cursor: auto;\n    }\n\n    ." + CLASS.BUTTON + " * {\n        cursor: pointer;\n    }\n\n    ." + CLASS.CONTAINER + "." + CLASS.ENV + "-" + constants.q.TEST + " ." + CLASS.TEXT + " {\n        font-family: Arial !important;\n        background: rgba(0, 0, 0, 0.5) !important;\n        color: transparent  !important;\n        text-shadow: none  !important;\n    }\n\n    ." + CLASS.BUTTON + ":hover {\n        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-" + constants.c.GOLD + ":hover,\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-" + constants.c.SILVER + ":hover {\n        box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.05);\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-" + constants.c.TRANSPARENT + ":hover {\n        box-shadow: none;\n    }\n\n    ." + CLASS.CARD + ", ." + CLASS.CARD + " * {\n        cursor: pointer;\n    }\n\n    ." + CLASS.CARD + ":hover {\n        filter: brightness(1.2);\n    }\n\n    ." + CLASS.BUTTON + ":focus {\n        box-shadow: -1px -1px 18px 1px rgba(0, 0, 0, 0.25) inset;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-" + constants.c.TRANSPARENT + ":focus {\n        box-shadow: none;\n    }\n\n    ." + CLASS.LOGO + " {\n        padding: 0;\n        display: inline-block;\n        background: none;\n        border: none;\n        width: auto;\n    }\n\n    ." + CLASS.TEXT + " {\n        display: inline-block;\n        white-space: pre;\n    }\n\n    ." + CLASS.BUTTON + " ." + CLASS.LOGO + ",\n    ." + CLASS.BUTTON + " ." + CLASS.TEXT + " {\n        vertical-align: top;\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        -webkit-transform: translateY(-50%);\n        -moz-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n        -o-transform: translateY(-50%);\n        text-align: left;\n    }\n\n    ." + CLASS.BUTTON + " ." + CLASS.CARD + " {\n        border-radius: 4px;\n    }\n\n    ." + CLASS.BUTTON + " ." + CLASS.TEXT + " {\n        visibility: hidden;\n    }\n\n    ." + CLASS.TAGLINE + " {\n        max-width: 100%;\n        font-weight: normal;\n        display: block;\n        text-align: center;\n        width: auto;\n        visibility: hidden;\n    }\n\n    ." + CLASS.SEPARATOR + " {\n        height: 80%;\n        border-left: 1px solid rgba(0, 0, 0, 0.15);\n        margin: 0 8px;\n        display: inline-block;\n        position: relative;\n        top: 10%;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-" + constants.c.BLACK + " ." + CLASS.SEPARATOR + " {\n        border-color: rgba(255, 255, 255, 0.45);\n    }\n", layoutStyle = "\n\n    ." + CLASS.CONTAINER + "." + CLASS.LAYOUT + "-" + constants.e.VERTICAL + " ." + CLASS.TAGLINE + " {\n        display: none;\n    }\n", brandingStyle = "\n\n    ." + CLASS.BUTTON + "." + CLASS.BRANDING + "-" + constants.b.UNBRANDED + "  {\n        min-width: 60%;\n        width: auto;\n        font-weight: 900;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.BRANDING + "-" + constants.b.UNBRANDED + " ." + CLASS.LOGO + " {\n        display: none;\n    }\n", labelStyle = "\n\n    ." + CLASS.BUTTON + "." + CLASS.LABEL + "-" + constants.d.CARD + " {\n        border-radius: 0 !important;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.LABEL + "-" + constants.d.CREDIT + " ." + CLASS.TEXT + " {\n        display: none !important;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.LAYOUT + "-" + constants.e.HORIZONTAL + "." + CLASS.NUMBER + "-" + constants.h.MULTIPLE + "." + CLASS.LABEL + "-" + constants.d.CREDIT + " ." + CLASS.LOGO + "." + CLASS.LOGO + "-" + constants.f.PAYPAL + " {\n        display: none;\n    }\n\n    @media only screen and (max-width : " + BUTTON_STYLE[constants.j.SMALL].minWidth + "px) {\n\n        ." + CLASS.BUTTON + "." + CLASS.LABEL + "-" + constants.d.CREDIT + " ." + CLASS.LOGO + "." + CLASS.LOGO + "-" + constants.f.PAYPAL + " {\n            display: none;\n        }\n    }\n\n    @media only screen and (min-width : " + BUTTON_STYLE[constants.j.SMALL].minWidth + "px) {\n\n        ." + CLASS.BUTTON + "." + CLASS.LABEL + "-" + constants.d.CREDIT + " ." + CLASS.LOGO + "." + CLASS.LOGO + "-" + constants.f.PAYPAL + " {\n            display: inline-block;\n        }\n    }\n", DUAL_BUTTON_MIN_RATIO = 2.8, buttonColorStyle = "\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-" + constants.c.GOLD + " {\n        background: #ffc439;\n        color: #111;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-" + constants.c.BLUE + " {\n        background: #009cde;\n        color: #fff;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-" + constants.c.SILVER + " {\n        background: #eee;\n        color: #111;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-" + constants.c.BLACK + " {\n        background: #2C2E2F;\n        color: #fff;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-" + constants.c.DARKBLUE + " {\n        background: #003087;\n        color: #fff;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-" + constants.c.TRANSPARENT + " {\n        background: transparent;\n        color: #111;\n    }\n", template_content = __webpack_require__("./src/button/template/content.json"), content_default = __webpack_require__.n(template_content), componentContent = "string" == typeof content_default.a ? JSON.parse(content_default.a) : content_default.a;
        __webpack_exports__.componentTemplate = componentTemplate;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        };
    },
    "./src/button/template/content.json": function(module, exports) {
        module.exports = '{\n    "AD": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "AE": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        },\n        "ar": {\n            "checkout": "\\u0627\\u0644\\u0633\\u062f\\u0627\\u062f \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0627\\u0644\\u0637\\u0631\\u064a\\u0642\\u0629 \\u0627\\u0644\\u0623\\u0633\\u0647\\u0644 \\u0648\\u0627\\u0644\\u0623\\u0643\\u062b\\u0631 \\u0623\\u0645\\u0627\\u0646\\u0627\\u064b \\u0641\\u064a \\u0627\\u0644\\u062f\\u0641\\u0639",\n            "later_tag": "\\u0627\\u0634\\u062a\\u0631\\u0650 \\u0627\\u0644\\u0622\\u0646\\u060c \\u0648\\u0633\\u062f\\u0651\\u062f \\u0639\\u0644\\u0649 \\u062f\\u0641\\u0639\\u0627\\u062a",\n            "pay": "\\u062f\\u0641\\u0639 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0634\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0622\\u0646"\n        }\n    },\n    "AG": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "AI": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "AL": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "AM": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "AN": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "AO": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "AR": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "AT": {\n        "de": {\n            "checkout": "Direkt zu {logo:pp} {logo:paypal}",\n            "safer_tag": "Einfach schneller und sicherer bezahlen",\n            "later_tag": "Kaufen Sie jetzt und bezahlen Sie nach und nach.",\n            "pay": "Mit {logo:paypal} zahlen",\n            "buynow": "{logo:pp} {logo:paypal} Jetzt kaufen"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "AU": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "AW": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "AZ": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "BA": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "BB": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "BE": {\n        "en": {\n            "checkout": "Pay with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, faster way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "nl": {\n            "checkout": "Betalen met {logo:pp} {logo:paypal}",\n            "safer_tag": "De veiligere en snellere manier om te betalen.",\n\n            "later_tag": "Koop nu. Betaal later.",\n            "pay": "Betalen met {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Nu kopen"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Le r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        }\n    },\n    "BF": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "BG": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "BH": {\n        "ar": {\n            "checkout": "\\u0627\\u0644\\u0633\\u062f\\u0627\\u062f \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0627\\u0644\\u0637\\u0631\\u064a\\u0642\\u0629 \\u0627\\u0644\\u0623\\u0633\\u0647\\u0644 \\u0648\\u0627\\u0644\\u0623\\u0643\\u062b\\u0631 \\u0623\\u0645\\u0627\\u0646\\u0627\\u064b \\u0641\\u064a \\u0627\\u0644\\u062f\\u0641\\u0639",\n            "later_tag": "\\u0627\\u0634\\u062a\\u0631\\u0650 \\u0627\\u0644\\u0622\\u0646\\u060c \\u0648\\u0633\\u062f\\u0651\\u062f \\u0639\\u0644\\u0649 \\u062f\\u0641\\u0639\\u0627\\u062a",\n            "pay": "\\u062f\\u0641\\u0639 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0634\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0622\\u0646"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "BI": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "BJ": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "BM": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "BN": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "BO": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "BR": {\n        "pt": {\n            "checkout": "{logo:pp} {logo:paypal} Finalizar",\n            "safer_tag": "A maneira f\\u00e1cil e segura de enviar pagamentos.",\n            "later_tag": "Compre agora e pague depois.",\n            "pay": "Pague com {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar agora"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "BS": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "BT": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "BW": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "BY": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "BZ": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "C2": {\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f\\u3002",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay.",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "CA": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "{logo:pp} {logo:paypal} Payer",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer",\n            "later_tag": "Acheter. Payer plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        }\n    },\n    "CD": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "CG": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "CH": {\n        "de": {\n            "checkout": "Direkt zu {logo:pp} {logo:paypal}",\n            "safer_tag": "Einfach schneller und sicherer bezahlen",\n            "later_tag": "Kaufen Sie jetzt und bezahlen Sie nach und nach.",\n            "pay": "Mit {logo:paypal} zahlen",\n            "buynow": "{logo:pp} {logo:paypal} Jetzt kaufen"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Le r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "CI": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "CK": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "CL": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "CM": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "CN": {\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "CO": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "CR": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "CV": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "CY": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "CZ": {\n        "cs": {\n            "checkout": "Zaplatit p\\u0159es {logo:pp} {logo:paypal}",\n            "safer_tag": "Jednodu\\u0161\\u0161\\u00ed a\\u00a0bezpe\\u010dn\\u011bj\\u0161\\u00ed zp\\u016fsob placen\\u00ed",\n            "later_tag": "Nakupujte nyn\\u00ed, pla\\u0165te pozd\\u011bji.",\n            "pay": "Zaplatit p\\u0159es {logo: paypal}",\n            "buynow": "Koupit ihned p\\u0159es {logo:pp} {logo:paypal}"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "DE": {\n        "de": {\n            "checkout": "Direkt zu {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u00dcberall schnell und sicher bezahlen.",\n            "later_tag": "Kaufen Sie jetzt und bezahlen Sie nach und nach.",\n            "pay": "Mit {logo:paypal} zahlen",\n            "buynow": "{logo:pp} {logo:paypal} Jetzt kaufen"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "DJ": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "DK": {\n        "da": {\n            "checkout": "{logo:pp} {logo:paypal} Betal",\n            "safer_tag": "Betal nemt og sikkert",\n            "later_tag": "K\\u00f8b nu, betal senere.",\n            "pay": "Betal med {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} K\\u00f8b nu"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "DM": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "DO": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "DZ": {\n        "ar": {\n            "checkout": "\\u0627\\u0644\\u0633\\u062f\\u0627\\u062f \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0627\\u0644\\u0637\\u0631\\u064a\\u0642\\u0629 \\u0627\\u0644\\u0623\\u0633\\u0647\\u0644 \\u0648\\u0627\\u0644\\u0623\\u0643\\u062b\\u0631 \\u0623\\u0645\\u0627\\u0646\\u0627\\u064b \\u0641\\u064a \\u0627\\u0644\\u062f\\u0641\\u0639",\n            "later_tag": "\\u0627\\u0634\\u062a\\u0631\\u0650 \\u0627\\u0644\\u0622\\u0646\\u060c \\u0648\\u0633\\u062f\\u0651\\u062f \\u0639\\u0644\\u0649 \\u062f\\u0641\\u0639\\u0627\\u062a",\n            "pay": "\\u062f\\u0641\\u0639 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0634\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0622\\u0646"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "EC": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "EE": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "ru": {\n            "checkout": "\\u041e\\u0444\\u043e\\u0440\\u043c\\u0438\\u0442\\u044c \\u0437\\u0430\\u043a\\u0430\\u0437 \\u0447\\u0435\\u0440\\u0435\\u0437 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0411\\u043e\\u043b\\u0435\\u0435 \\u0431\\u0435\\u0437\\u043e\\u043f\\u0430\\u0441\\u043d\\u044b\\u0439 \\u0438 \\u043f\\u0440\\u043e\\u0441\\u0442\\u043e\\u0439 \\u0441\\u043f\\u043e\\u0441\\u043e\\u0431 \\u043e\\u043f\\u043b\\u0430\\u0442\\u044b.",\n            "later_tag": "\\u041f\\u043e\\u043a\\u0443\\u043f\\u0430\\u0439\\u0442\\u0435 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441, \\u043f\\u043b\\u0430\\u0442\\u0438\\u0442\\u0435 \\u043f\\u043e\\u0442\\u043e\\u043c.",\n            "pay": "\\u041e\\u043f\\u043b\\u0430\\u0442\\u0438\\u0442\\u044c \\u0447\\u0435\\u0440\\u0435\\u0437 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u041a\\u0443\\u043f\\u0438\\u0442\\u044c \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "EG": {\n        "ar": {\n            "checkout": "\\u0627\\u0644\\u0633\\u062f\\u0627\\u062f \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0627\\u0644\\u0637\\u0631\\u064a\\u0642\\u0629 \\u0627\\u0644\\u0623\\u0633\\u0647\\u0644 \\u0648\\u0627\\u0644\\u0623\\u0643\\u062b\\u0631 \\u0623\\u0645\\u0627\\u0646\\u0627\\u064b \\u0641\\u064a \\u0627\\u0644\\u062f\\u0641\\u0639",\n            "later_tag": "\\u0627\\u0634\\u062a\\u0631\\u0650 \\u0627\\u0644\\u0622\\u0646\\u060c \\u0648\\u0633\\u062f\\u0651\\u062f \\u0639\\u0644\\u0649 \\u062f\\u0641\\u0639\\u0627\\u062a",\n            "pay": "\\u062f\\u0641\\u0639 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0634\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0622\\u0646"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "ER": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "ES": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "ET": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "FI": {\n        "fi": {\n            "checkout": "{logo:pp} {logo:paypal}-maksu",\n            "safer_tag": "Turvallisempi ja helpompi maksutapa",\n\n            "later_tag": "Osta nyt. Maksa v\\u00e4hitellen.",\n            "pay": "{logo:paypal}-maksu",\n            "buynow": "{logo:pp} {logo:paypal} Osta nyt"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "FJ": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "FK": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "FM": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "FO": {\n        "da": {\n            "checkout": "Betal med {logo:pp} {logo:paypal}",\n            "safer_tag": "Betal nemt og sikkert",\n\n            "later_tag": "K\\u00f8b nu, betal senere.",\n            "pay": "Betal med {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} K\\u00f8b nu"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "FR": {\n        "fr": {\n            "checkout": "{logo:pp} {logo:paypal} Payer",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Pay",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "GA": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "GB": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "GD": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "GE": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "GF": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "GI": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "GL": {\n        "da": {\n            "checkout": "Betal med {logo:pp} {logo:paypal}",\n            "safer_tag": "Betal nemt og sikkert",\n\n            "later_tag": "K\\u00f8b nu, betal senere.",\n            "pay": "Betal med {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} K\\u00f8b nu"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "GM": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "GN": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "GP": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "GR": {\n        "el": {\n            "checkout": "\\u039f\\u03bb\\u03bf\\u03ba\\u03bb\\u03ae\\u03c1\\u03c9\\u03c3\\u03b7 \\u03b1\\u03b3\\u03bf\\u03c1\\u03ac\\u03c2 \\u03bc\\u03ad\\u03c3\\u03c9 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u039f \\u03b1\\u03c3\\u03c6\\u03b1\\u03bb\\u03ad\\u03c3\\u03c4\\u03b5\\u03c1\\u03bf\\u03c2 \\u03ba\\u03b1\\u03b9 \\u03b5\\u03c5\\u03ba\\u03bf\\u03bb\\u03cc\\u03c4\\u03b5\\u03c1\\u03bf\\u03c2 \\u03c4\\u03c1\\u03cc\\u03c0\\u03bf\\u03c2 \\u03c0\\u03bb\\u03b7\\u03c1\\u03c9\\u03bc\\u03ae\\u03c2",\n\n            "later_tag": "\\u0391\\u03b3\\u03bf\\u03c1\\u03ac\\u03c3\\u03c4\\u03b5 \\u03c4\\u03ce\\u03c1\\u03b1.  \\u03a0\\u03bb\\u03b7\\u03c1\\u03ce\\u03c3\\u03c4\\u03b5 \\u03c3\\u03b5 \\u03b4\\u03cc\\u03c3\\u03b5\\u03b9\\u03c2.",\n            "pay": "\\u03a0\\u03bb\\u03b7\\u03c1\\u03c9\\u03bc\\u03ae \\u03bc\\u03ad\\u03c3\\u03c9 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0391\\u03b3\\u03bf\\u03c1\\u03ac \\u03c4\\u03ce\\u03c1\\u03b1"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "GT": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "GW": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "GY": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "HK": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal} \\u7d50\\u5e33",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u65b9\\u4fbf\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u5148\\u8cfc\\u8cb7\\uff0c\\u5f8c\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u4f7f\\u7528 {logo:paypal} \\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8cb7"\n        }\n    },\n    "HN": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "HR": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "HU": {\n        "hu": {\n            "checkout": "{logo:pp} {logo:paypal}-fizet\\u00e9s",\n            "safer_tag": "Biztons\\u00e1gosabb, k\\u00f6nnyebb fizet\\u00e9si m\\u00f3d.",\n\n            "later_tag": "V\\u00e1s\\u00e1roljon most. Fizessen k\\u00e9s\\u0151bb.",\n            "pay": "{logo:paypal}-fizet\\u00e9s",\n            "buynow": "{logo:pp} {logo:paypal} V\\u00e1s\\u00e1rl\\u00e1s"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "ID": {\n        "id": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "Cara yang lebih mudah dan aman untuk membayar.",\n\n            "later_tag": "Beli Sekarang. Bayar dalam Jangka Waktu Tertentu.",\n            "pay": "Bayar dengan {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Beli Sekarang"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "IE": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "IL": {\n        "he": {\n            "checkout": "{logo:pp} {logo:paypal} \\u05e9\\u05dc\\u05dd",\n            "safer_tag": ".\\u05d4\\u05d3\\u05e8\\u05da \\u05d4\\u05e7\\u05dc\\u05d4 \\u05d5\\u05d4\\u05d1\\u05d8\\u05d5\\u05d7\\u05d4 \\u05d9\\u05d5\\u05ea\\u05e8 \\u05dc\\u05e9\\u05dc\\u05dd",\n\n            "later_tag": "\\u05e7\\u05e0\\u05d4 \\u05e2\\u05db\\u05e9\\u05d9\\u05d5. \\u05e9\\u05dc\\u05dd \\u05dc\\u05d0\\u05d5\\u05e8\\u05da \\u05d6\\u05de\\u05df.",\n            "pay": "\\u05e9\\u05dc\\u05dd \\u05d1\\u05d0\\u05de\\u05e6\\u05e2\\u05d5\\u05ea {logo:paypal}\\u200f",\n            "buynow": "{logo:pp} {logo:paypal} \\u05e7\\u05e0\\u05d4 \\u05e2\\u05db\\u05e9\\u05d9\\u05d5"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "IN": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay.",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "IS": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "IT": {\n        "it": {\n            "checkout": "{logo:pp} {logo:paypal} Paga adesso",\n            "safer_tag": "Il modo rapido e sicuro per pagare",\n\n            "later_tag": "Acquista ora. Paga pi\\u00f9 tardi.",\n            "pay": "Paga con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Paga adesso"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "JM": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "JO": {\n        "ar": {\n            "checkout": "\\u0627\\u0644\\u0633\\u062f\\u0627\\u062f \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0627\\u0644\\u0637\\u0631\\u064a\\u0642\\u0629 \\u0627\\u0644\\u0623\\u0633\\u0647\\u0644 \\u0648\\u0627\\u0644\\u0623\\u0643\\u062b\\u0631 \\u0623\\u0645\\u0627\\u0646\\u0627\\u064b \\u0641\\u064a \\u0627\\u0644\\u062f\\u0641\\u0639",\n\n            "later_tag": "\\u0627\\u0634\\u062a\\u0631\\u0650 \\u0627\\u0644\\u0622\\u0646\\u060c \\u0648\\u0633\\u062f\\u0651\\u062f \\u0639\\u0644\\u0649 \\u062f\\u0641\\u0639\\u0627\\u062a",\n            "pay": "\\u062f\\u0641\\u0639 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0634\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0622\\u0646"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "JP": {\n        "ja": {\n            "checkout": "{logo:pp} {logo:paypal}\\u3067\\u652f\\u6255\\u3046",\n            "safer_tag": "\\u3088\\u308a\\u5b89\\u5168\\u30fb\\u7c21\\u5358\\u306b\\u304a\\u652f\\u6255\\u3044",\n\n            "later_tag": "\\u4eca\\u3059\\u3050\\u8cfc\\u5165\\u3057\\u3066\\u3001\\u5206\\u5272\\u3057\\u3066\\u304a\\u652f\\u6255\\u3044\\u3002",\n            "pay": "{logo:paypal}\\u3067\\u652f\\u6255\\u3046",\n            "buynow": "{logo:pp} {logo:paypal} \\u8cfc\\u5165"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "KE": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "KG": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "KH": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "KI": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "KM": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "KN": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "KR": {\n        "ko": {\n            "checkout": "{logo:pp} {logo:paypal} \\uccb4\\ud06c \\uc544\\uc6c3",\n            "safer_tag": "\\ub354 \\uc548\\uc804\\ud558\\uace0 \\ube60\\ub978 \\uacb0\\uc81c \\ubc29\\ubc95",\n\n            "later_tag": "\\uc9c0\\uae08 \\uad6c\\ub9e4\\ud558\\uace0 \\ucc9c\\ucc9c\\ud788 \\uacb0\\uc81c\\ud558\\uc138\\uc694.",\n            "pay": "{logo:paypal}\\ub85c \\uc9c0\\ubd88\\ud558\\uae30",\n            "buynow": "{logo:pp} {logo:paypal} \\ubc14\\ub85c \\uad6c\\ub9e4"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay.",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "KW": {\n        "ar": {\n            "checkout": "\\u0627\\u0644\\u0633\\u062f\\u0627\\u062f \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0627\\u0644\\u0637\\u0631\\u064a\\u0642\\u0629 \\u0627\\u0644\\u0623\\u0633\\u0647\\u0644 \\u0648\\u0627\\u0644\\u0623\\u0643\\u062b\\u0631 \\u0623\\u0645\\u0627\\u0646\\u0627\\u064b \\u0641\\u064a \\u0627\\u0644\\u062f\\u0641\\u0639",\n\n            "later_tag": "\\u0627\\u0634\\u062a\\u0631\\u0650 \\u0627\\u0644\\u0622\\u0646\\u060c \\u0648\\u0633\\u062f\\u0651\\u062f \\u0639\\u0644\\u0649 \\u062f\\u0641\\u0639\\u0627\\u062a",\n            "pay": "\\u062f\\u0641\\u0639 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0634\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0622\\u0646"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "KY": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "KZ": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "LA": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "LC": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "LI": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "LK": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "LS": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "LT": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "ru": {\n            "checkout": "\\u041e\\u0444\\u043e\\u0440\\u043c\\u0438\\u0442\\u044c \\u0437\\u0430\\u043a\\u0430\\u0437 \\u0447\\u0435\\u0440\\u0435\\u0437 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0411\\u043e\\u043b\\u0435\\u0435 \\u0431\\u0435\\u0437\\u043e\\u043f\\u0430\\u0441\\u043d\\u044b\\u0439 \\u0438 \\u043f\\u0440\\u043e\\u0441\\u0442\\u043e\\u0439 \\u0441\\u043f\\u043e\\u0441\\u043e\\u0431 \\u043e\\u043f\\u043b\\u0430\\u0442\\u044b.",\n\n            "later_tag": "\\u041f\\u043e\\u043a\\u0443\\u043f\\u0430\\u0439\\u0442\\u0435 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441, \\u043f\\u043b\\u0430\\u0442\\u0438\\u0442\\u0435 \\u043f\\u043e\\u0442\\u043e\\u043c.",\n            "pay": "\\u041e\\u043f\\u043b\\u0430\\u0442\\u0438\\u0442\\u044c \\u0447\\u0435\\u0440\\u0435\\u0437 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u041a\\u0443\\u043f\\u0438\\u0442\\u044c \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "LU": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "de": {\n            "checkout": "Direkt zu {logo:pp} {logo:paypal}",\n            "safer_tag": "Einfach schneller und sicherer bezahlen",\n\n            "later_tag": "Kaufen Sie jetzt und bezahlen Sie nach und nach.",\n            "pay": "Mit {logo:paypal} zahlen",\n            "buynow": "{logo:pp} {logo:paypal} Jetzt kaufen"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "LV": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "ru": {\n            "checkout": "\\u041e\\u0444\\u043e\\u0440\\u043c\\u0438\\u0442\\u044c \\u0437\\u0430\\u043a\\u0430\\u0437 \\u0447\\u0435\\u0440\\u0435\\u0437 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0411\\u043e\\u043b\\u0435\\u0435 \\u0431\\u0435\\u0437\\u043e\\u043f\\u0430\\u0441\\u043d\\u044b\\u0439 \\u0438 \\u043f\\u0440\\u043e\\u0441\\u0442\\u043e\\u0439 \\u0441\\u043f\\u043e\\u0441\\u043e\\u0431 \\u043e\\u043f\\u043b\\u0430\\u0442\\u044b.",\n\n            "later_tag": "\\u041f\\u043e\\u043a\\u0443\\u043f\\u0430\\u0439\\u0442\\u0435 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441, \\u043f\\u043b\\u0430\\u0442\\u0438\\u0442\\u0435 \\u043f\\u043e\\u0442\\u043e\\u043c.",\n            "pay": "\\u041e\\u043f\\u043b\\u0430\\u0442\\u0438\\u0442\\u044c \\u0447\\u0435\\u0440\\u0435\\u0437 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u041a\\u0443\\u043f\\u0438\\u0442\\u044c \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "MA": {\n        "ar": {\n            "checkout": "\\u0627\\u0644\\u0633\\u062f\\u0627\\u062f \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0627\\u0644\\u0637\\u0631\\u064a\\u0642\\u0629 \\u0627\\u0644\\u0623\\u0633\\u0647\\u0644 \\u0648\\u0627\\u0644\\u0623\\u0643\\u062b\\u0631 \\u0623\\u0645\\u0627\\u0646\\u0627\\u064b \\u0641\\u064a \\u0627\\u0644\\u062f\\u0641\\u0639",\n\n            "later_tag": "\\u0627\\u0634\\u062a\\u0631\\u0650 \\u0627\\u0644\\u0622\\u0646\\u060c \\u0648\\u0633\\u062f\\u0651\\u062f \\u0639\\u0644\\u0649 \\u062f\\u0641\\u0639\\u0627\\u062a",\n            "pay": "\\u062f\\u0641\\u0639 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0634\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0622\\u0646"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "MC": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "MD": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "ME": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "MG": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "MH": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "MK": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "ML": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "MN": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "MQ": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "MR": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "MS": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "MT": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "MU": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "MV": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "MW": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "MX": {\n        "es": {\n            "checkout": "Pagar con {logo:pp} {logo:paypal}",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, faster way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "MY": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay.",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "MZ": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "NA": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "NC": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "NE": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "NF": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "NG": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "NI": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "NL": {\n        "nl": {\n            "checkout": "{logo:pp} {logo:paypal} Betalen",\n            "safer_tag": "Een veilige en makkelijke manier om te betalen.",\n\n            "later_tag": "Koop nu. Betaal later.",\n            "pay": "Betalen met {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Nu kopen"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "NO": {\n        "no": {\n            "checkout": "{logo:pp} {logo:paypal} Betal",\n            "safer_tag": "En trygg og enkel betalingsmetode",\n\n            "later_tag": "Kj\\u00f8p n\\u00e5, betal senere.",\n            "pay": "Betal med {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Kj\\u00f8p n\\u00e5"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "NP": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "NR": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "NU": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "NZ": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay.",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "{logo:pp} {logo:paypal} Payer",\n            "safer_tag": "Un r\\u00e9flexe s\\u00e9curit\\u00e9.",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar.",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f\\u3002",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "OM": {\n        "ar": {\n            "checkout": "\\u0627\\u0644\\u0633\\u062f\\u0627\\u062f \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0627\\u0644\\u0637\\u0631\\u064a\\u0642\\u0629 \\u0627\\u0644\\u0623\\u0633\\u0647\\u0644 \\u0648\\u0627\\u0644\\u0623\\u0643\\u062b\\u0631 \\u0623\\u0645\\u0627\\u0646\\u0627\\u064b \\u0641\\u064a \\u0627\\u0644\\u062f\\u0641\\u0639",\n\n            "later_tag": "\\u0627\\u0634\\u062a\\u0631\\u0650 \\u0627\\u0644\\u0622\\u0646\\u060c \\u0648\\u0633\\u062f\\u0651\\u062f \\u0639\\u0644\\u0649 \\u062f\\u0641\\u0639\\u0627\\u062a",\n            "pay": "\\u062f\\u0641\\u0639 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0634\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0622\\u0646"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "PA": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "PE": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "PF": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "PG": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "PH": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay.",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "PL": {\n        "pl": {\n            "checkout": "{logo:pp} {logo:paypal} Do kasy",\n            "safer_tag": "P\\u0142a\\u0107 wygodnie i bezpiecznie",\n\n            "later_tag": "Kup teraz. P\\u0142a\\u0107 w ratach",\n            "pay": "Zap\\u0142a\\u0107 z {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Kup teraz"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "PM": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "PN": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "PT": {\n        "pt": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A forma r\\u00e1pida e segura de pagar",\n\n            "later_tag": "Compre agora. V\\u00e1 pagando.",\n            "pay": "Pagar com {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar agora"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "PW": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "PY": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "QA": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        },\n        "ar": {\n            "checkout": "\\u0627\\u0644\\u0633\\u062f\\u0627\\u062f \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0627\\u0644\\u0637\\u0631\\u064a\\u0642\\u0629 \\u0627\\u0644\\u0623\\u0633\\u0647\\u0644 \\u0648\\u0627\\u0644\\u0623\\u0643\\u062b\\u0631 \\u0623\\u0645\\u0627\\u0646\\u0627\\u064b \\u0641\\u064a \\u0627\\u0644\\u062f\\u0641\\u0639",\n\n            "later_tag": "\\u0627\\u0634\\u062a\\u0631\\u0650 \\u0627\\u0644\\u0622\\u0646\\u060c \\u0648\\u0633\\u062f\\u0651\\u062f \\u0639\\u0644\\u0649 \\u062f\\u0641\\u0639\\u0627\\u062a",\n            "pay": "\\u062f\\u0641\\u0639 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0634\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0622\\u0646"\n        }\n    },\n    "RE": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "RO": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "RS": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "RU": {\n        "ru": {\n            "checkout": "{logo:pp} {logo:paypal}\\u041e\\u0444\\u043e\\u0440\\u043c\\u0438\\u0442\\u044c \\u043f\\u043e\\u043a\\u0443\\u043f\\u043a\\u0443",\n            "safer_tag": "\\u0411\\u043e\\u043b\\u0435\\u0435 \\u0431\\u0435\\u0437\\u043e\\u043f\\u0430\\u0441\\u043d\\u044b\\u0439 \\u0438 \\u043f\\u0440\\u043e\\u0441\\u0442\\u043e\\u0439 \\u0441\\u043f\\u043e\\u0441\\u043e\\u0431 \\u043e\\u043f\\u043b\\u0430\\u0442\\u044b.",\n\n            "later_tag": "\\u041f\\u043e\\u043a\\u0443\\u043f\\u0430\\u0439\\u0442\\u0435 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441, \\u043f\\u043b\\u0430\\u0442\\u0438\\u0442\\u0435 \\u043f\\u043e\\u0442\\u043e\\u043c.",\n            "pay": "\\u041e\\u043f\\u043b\\u0430\\u0442\\u0438\\u0442\\u044c \\u0447\\u0435\\u0440\\u0435\\u0437 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u041a\\u0443\\u043f\\u0438\\u0442\\u044c \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "RW": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SA": {\n        "ar": {\n            "checkout": "\\u0627\\u0644\\u0633\\u062f\\u0627\\u062f \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0627\\u0644\\u0637\\u0631\\u064a\\u0642\\u0629 \\u0627\\u0644\\u0623\\u0633\\u0647\\u0644 \\u0648\\u0627\\u0644\\u0623\\u0643\\u062b\\u0631 \\u0623\\u0645\\u0627\\u0646\\u0627\\u064b \\u0641\\u064a \\u0627\\u0644\\u062f\\u0641\\u0639",\n\n            "later_tag": "\\u0627\\u0634\\u062a\\u0631\\u0650 \\u0627\\u0644\\u0622\\u0646\\u060c \\u0648\\u0633\\u062f\\u0651\\u062f \\u0639\\u0644\\u0649 \\u062f\\u0641\\u0639\\u0627\\u062a",\n            "pay": "\\u062f\\u0641\\u0639 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0634\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0622\\u0646"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SB": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SC": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SE": {\n        "sv": {\n            "checkout": "{logo:pp} {logo:paypal} Betala",\n            "safer_tag": "Ett tryggt och smidigt s\\u00e4tt att betala",\n            "later_tag": "K\\u00f6p nu, betala senare",\n            "pay": "Betala med {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} K\\u00f6p nu"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "SG": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay.",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "SH": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SI": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SJ": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SK": {\n        "sk": {\n            "checkout": "Zaplati\\u0165 cez {logo:pp} {logo:paypal}",\n            "safer_tag": "Jednoduch\\u0161\\u00ed a\\u00a0bezpe\\u010dnej\\u0161\\u00ed sp\\u00f4sob platby",\n            "later_tag": "Nak\\u00fapte teraz, zapla\\u0165te postupne",\n            "pay": "Zaplati\\u0165 cez {logo: paypal}",\n            "buynow": "{logo:pp} {logo:paypal} K\\u00fapi\\u0165"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SL": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SM": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SN": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SO": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SR": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "ST": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SV": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "SZ": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "TC": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "TD": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "TG": {\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "TH": {\n        "th": {\n            "checkout": "{logo:pp} {logo:paypal} \\u0e0a\\u0e33\\u0e23\\u0e30\\u0e40\\u0e07\\u0e34\\u0e19",\n            "safer_tag": "\\u0e27\\u0e34\\u0e18\\u0e35\\u0e0a\\u0e33\\u0e23\\u0e30\\u0e40\\u0e07\\u0e34\\u0e19\\u0e17\\u0e35\\u0e48\\u0e1b\\u0e25\\u0e2d\\u0e14\\u0e20\\u0e31\\u0e22\\u0e41\\u0e25\\u0e30\\u0e07\\u0e48\\u0e32\\u0e22\\u0e01\\u0e27\\u0e48\\u0e32",\n\n            "later_tag": "\\u0e0b\\u0e37\\u0e49\\u0e2d\\u0e27\\u0e31\\u0e19\\u0e19\\u0e35\\u0e49 \\u0e41\\u0e25\\u0e49\\u0e27\\u0e04\\u0e48\\u0e2d\\u0e22\\u0e46 \\u0e08\\u0e48\\u0e32\\u0e22\\u0e17\\u0e35\\u0e2b\\u0e25\\u0e31\\u0e07",\n            "pay": "\\u0e0a\\u0e33\\u0e23\\u0e30\\u0e40\\u0e07\\u0e34\\u0e19\\u0e14\\u0e49\\u0e27\\u0e22 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0e0b\\u0e37\\u0e49\\u0e2d\\u0e17\\u0e31\\u0e19\\u0e17\\u0e35"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "TJ": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "TM": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "TN": {\n        "ar": {\n            "checkout": "\\u0627\\u0644\\u0633\\u062f\\u0627\\u062f \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0627\\u0644\\u0637\\u0631\\u064a\\u0642\\u0629 \\u0627\\u0644\\u0623\\u0633\\u0647\\u0644 \\u0648\\u0627\\u0644\\u0623\\u0643\\u062b\\u0631 \\u0623\\u0645\\u0627\\u0646\\u0627\\u064b \\u0641\\u064a \\u0627\\u0644\\u062f\\u0641\\u0639",\n\n            "later_tag": "\\u0627\\u0634\\u062a\\u0631\\u0650 \\u0627\\u0644\\u0622\\u0646\\u060c \\u0648\\u0633\\u062f\\u0651\\u062f \\u0639\\u0644\\u0649 \\u062f\\u0641\\u0639\\u0627\\u062a",\n            "pay": "\\u062f\\u0641\\u0639 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0634\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0622\\u0646"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "TO": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "TR": {\n        "tr": {\n            "checkout": "{logo:pp} {logo:paypal} ile Sat\\u0131n Al\\u0131n",\n            "safer_tag": "\\u00d6deme yapman\\u0131n daha g\\u00fcvenli ve kolay yolu",\n\n            "later_tag": "\\u015eimdi Al\\u0131n. Daha Sonra \\u00d6deyin.",\n            "pay": "{logo:paypal} ile \\u00d6de",\n            "buynow": "{logo:pp} {logo:paypal} Hemen Sat\\u0131n Al\\u0131n"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "TT": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "TV": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "TW": {\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal} \\u7d50\\u5e33",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u65b9\\u4fbf\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u5148\\u8cfc\\u8cb7\\uff0c\\u5f8c\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u4f7f\\u7528 {logo:paypal} \\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8cfc"\n        },\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "TZ": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "UA": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "ru": {\n            "checkout": "\\u041e\\u0444\\u043e\\u0440\\u043c\\u0438\\u0442\\u044c \\u0437\\u0430\\u043a\\u0430\\u0437 \\u0447\\u0435\\u0440\\u0435\\u0437 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0411\\u043e\\u043b\\u0435\\u0435 \\u0431\\u0435\\u0437\\u043e\\u043f\\u0430\\u0441\\u043d\\u044b\\u0439 \\u0438 \\u043f\\u0440\\u043e\\u0441\\u0442\\u043e\\u0439 \\u0441\\u043f\\u043e\\u0441\\u043e\\u0431 \\u043e\\u043f\\u043b\\u0430\\u0442\\u044b.",\n\n            "later_tag": "\\u041f\\u043e\\u043a\\u0443\\u043f\\u0430\\u0439\\u0442\\u0435 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441, \\u043f\\u043b\\u0430\\u0442\\u0438\\u0442\\u0435 \\u043f\\u043e\\u0442\\u043e\\u043c.",\n            "pay": "\\u041e\\u043f\\u043b\\u0430\\u0442\\u0438\\u0442\\u044c \\u0447\\u0435\\u0440\\u0435\\u0437 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u041a\\u0443\\u043f\\u0438\\u0442\\u044c \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "UG": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "US": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "dual_tag": "Two easy ways to pay",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "{logo:pp} {logo:paypal} Payer",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "Pagar con {logo:pp} {logo:paypal}",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "\\u4f7f\\u7528{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "UY": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "VA": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "VC": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "VE": {\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "VG": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "VN": {\n        "en": {\n            "checkout": "{logo:pp} {logo:paypal} Checkout",\n            "safer_tag": "A safer, faster way to pay.",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "VU": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "WF": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "WS": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    },\n    "YE": {\n        "ar": {\n            "checkout": "\\u0627\\u0644\\u0633\\u062f\\u0627\\u062f \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:pp} {logo:paypal}",\n            "safer_tag": "\\u0627\\u0644\\u0637\\u0631\\u064a\\u0642\\u0629 \\u0627\\u0644\\u0623\\u0633\\u0647\\u0644 \\u0648\\u0627\\u0644\\u0623\\u0643\\u062b\\u0631 \\u0623\\u0645\\u0627\\u0646\\u0627\\u064b \\u0641\\u064a \\u0627\\u0644\\u062f\\u0641\\u0639",\n            "later_tag": "\\u0627\\u0634\\u062a\\u0631\\u0650 \\u0627\\u0644\\u0622\\u0646\\u060c \\u0648\\u0633\\u062f\\u0651\\u062f \\u0639\\u0644\\u0649 \\u062f\\u0641\\u0639\\u0627\\u062a",\n            "pay": "\\u062f\\u0641\\u0639 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} \\u0634\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0622\\u0646"\n        },\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "YT": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "ZA": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "ZM": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        },\n        "fr": {\n            "checkout": "Payer avec {logo:pp} {logo:paypal}",\n            "safer_tag": "Votre r\\u00e9flexe s\\u00e9curit\\u00e9 pour payer en ligne",\n            "later_tag": "Achetez maintenant et payez plus tard.",\n            "pay": "Payer avec {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Acheter"\n        },\n        "es": {\n            "checkout": "{logo:pp} {logo:paypal} Pagar",\n            "safer_tag": "La forma r\\u00e1pida y segura de pagar",\n            "later_tag": "Compre ahora y pague m\\u00e1s adelante.",\n            "pay": "Pagar con {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Comprar ahora"\n        },\n        "zh": {\n            "checkout": "{logo:pp} {logo:paypal}\\u7ed3\\u8d26",\n            "safer_tag": "\\u66f4\\u5b89\\u5168\\u3001\\u66f4\\u4fbf\\u6377\\u7684\\u4ed8\\u6b3e\\u65b9\\u5f0f",\n            "later_tag": "\\u7acb\\u5373\\u8d2d\\u4e70\\uff0c\\u5206\\u671f\\u4ed8\\u6b3e\\u3002",\n            "pay": "\\u7528{logo:paypal}\\u4ed8\\u6b3e",\n            "buynow": "{logo:pp} {logo:paypal} \\u7acb\\u5373\\u8d2d\\u4e70"\n        }\n    },\n    "ZW": {\n        "en": {\n            "checkout": "Check out with {logo:pp} {logo:paypal}",\n            "safer_tag": "The safer, easier way to pay",\n            "later_tag": "Buy Now. Pay Over Time.",\n            "pay": "Pay with {logo:paypal}",\n            "buynow": "{logo:pp} {logo:paypal} Buy Now"\n        }\n    }\n}\n';
    },
    "./src/config/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _checkoutUris, _altpayUris, _guestUris, _billingUris, _buttonUris, _postBridgeUris, _legacyCheckoutUris, _buttonJSUrls, _locales, constants = __webpack_require__("./src/constants/index.js"), config = {
            scriptUrl: "//www.paypalobjects.com/api/checkout.button.render.js",
            paypal_domain_regex: /^(https?|mock):\/\/[a-zA-Z0-9_.-]+\.paypal\.com(:\d+)?$/,
            version: "4.0.180",
            cors: !0,
            env: constants.q.PRODUCTION,
            state: "checkoutjs",
            locale: {
                country: constants.o.US,
                lang: constants.t.EN
            },
            stage: "msmaster",
            merchantID: "",
            logLevel: "warn",
            throttles: {
                v4_mobile_device: 0
            },
            domain_settings: {
                "walmart.com": {
                    log_domain_prefix: !0,
                    ie_full_page: !1,
                    allow_full_page_fallback: !0,
                    memoize_payment: !0,
                    force_bridge: !0,
                    log_authorize: !0,
                    disable_payment_timeout: !0
                },
                "ulta.com": {
                    disable_venmo: !0
                },
                "barnesandnoble.com": {
                    disable_venmo: !0
                },
                "bn.com": {
                    disable_venmo: !0
                },
                "agoratix.com": {
                    disable_venmo: !0
                },
                "tractorsupply.com": {
                    disable_venmo: !0
                },
                "etsy.com": {
                    log_domain_prefix: !0,
                    ie_full_page: !1,
                    allow_full_page_fallback: !0,
                    memoize_payment: !0,
                    force_bridge: !0,
                    log_authorize: !0,
                    disable_payment_timeout: !0
                },
                "ticketmaster.com": {
                    disable_venmo: !0
                },
                "livenation.com": {
                    disable_venmo: !0
                },
                "frontgatetickets.com": {
                    disable_venmo: !0
                },
                "williams-sonoma.com": {
                    disable_venmo: !0
                },
                "westelm.com": {
                    disable_venmo: !0
                },
                "markandgraham.com": {
                    disable_venmo: !0
                },
                "potterybarn.com": {
                    disable_venmo: !0
                },
                "potterybarnkids.com": {
                    disable_venmo: !0
                },
                "pbteen.com": {
                    disable_venmo: !0
                }
            },
            creditTestDomains: [ "bluesuncorp.co.uk", "nationsphotolab.com", "plexusworldwide.com", "nshss.org", "bissell.com", "mobstub.com", "vuoriclothing.com", "tape4backup.com", "avivamiento.com", "rhododendron.org", "whiterabbitjapan.com", "atsracing.net", "thehilltopgallery.com", "weedtraqr.com", "worldpantry.com", "ciraconnect.com", "mymalls.com", "prowinch.com", "zodiacpoolsystems.com", "everlywell.com", "candlewarmers.com", "chop.edu", "incruises.com", "flikn.com", "didforsale.com", "mcc.org", "sygu.net", "merchbar.com", "eduinconline.com", "us.livebetterwith.com", "bakemeawish.com", "judolaunch.com", "eventcartel.com", "tapatalk.com", "telescope.com", "covenant.edu", "aquatruwater.com", "spingo.com", "usu.edu", "getcelerity.com", "brandless.com", "saberigniter.com", "euromodeltrains.com", "gofasttrader.com", "megamodzplanet.com", "draftanalyzer.com", "lovewithoutboundaries.com", "filterpop.com", "seekverify.com", "photoandgo.com", "sightseeingpass.com", "bigoanddukes.com", "thethirstyduck.com", "thebrushguys.com", "907delivery.com", "mauisails.com", "drive.net", "channelmax.net", "modernrebelco.com", "enchanteddiamonds.com", "ibabbleon.com", "fullgenomes.com", "conn-comp.com", "wingware.com", "paradigmgoods.com", "theneptunegroup.com", "kidzartworks.com", "unirealm.com", "ncfarmsinc.com", "oneofakindantiques.com", "servers4less.com", "stumpthespread.com", "marketwagon.com", "monsterhouseplans.com", "canterburychoral.org", "teacupnordic.org", "thethirstyduck.com", "medialoot.com", "theartistunion.com", "yourglamourzone.com", "breckstables.com", "mackephotography.com", "dsaj.org", "massluminosity.com", "tespa.org", "versatilearts.net", "yecup.org", "divinebusinessmanagement.com", "captivatebeautyservices.com", "class4me.com", "wcsonlineuniversity.com", "pvplive.com", "kyneteks.com", "rare-paper.com", "bpg.bpgsim.biz", "geodegallery.com", "way.com", "kringle.com", "talentedmrsalas.ph", "litcharts.com", "purpletreephotography.com", "apache.org", "neopackage.com", "globaldance.tv", "integral.studio", "airdoctorpro.com", "ivoryandiron.com", "yuengling.com", "averysbranchfarms.com", "amberreinink.com", "skinnymechocolate.com", "bmbl.net", "ncwatercolor.net", "astrograph.com", "localadventures.mx", "ripcurl.com", "worldfootbrakechallenge.com", "shespeakssales.com", "obrienguitars.com", "jadenikkolephoto.com", "americavoice.com", "cassiexie.com", "aamastateconvention.org", "rellesflorist.com", "passionnobby.com", "bodybyheidi.com", "roqos.com", "prijector.com", "maryswanson.net", "tsghobbies.com", "erinlaytonphotography.com", "darter.org", "fountainpenhospital.com", "myzestfullife.com", "pcog.org", "alisabethdesigns.com", "katiemathisphoto.com", "strictlybellaphotography.com", "maptools.com", "sites.google.com", "gallerr.com", "southfloridatrikke.com", "caviar.tv", "mintingmasters.com", "prospectorsguild.com", "inktale.com", "prettygirlgoods.com", "laceycahill.com", "daniellenowak.com", "t212.org", "scmsinc.com", "babypaloozanc.com", "tetrisonline.com", "grdd.net", "cdspg.info", "airshipapparel.com", "waft.com", "extendpets.com", "supplyhub.com", "hlbsusa.com", "jaderollerbeauty.com", "theparentingjunkie.com", "schagringas.com", "yourscribemate.com", "sportscollectibles.com", "thedivinenoise.com", "hometeamsonline.com", "trademarkpress.com", "destinationenglish.us", "jacquesflowers.com", "aliszhatchphotography.com", "rusticfoundry.com", "ahhhmassage.net", "frezzor.com", "mandelininc.com", "kayleejackson.com", "monkinstitute.org", "eddiebsbbq.com", "morningstarmediaservices.com", "kinevative.com", "orivet.com", "digitalprinthouse.net", "dynamicgenius.com", "allpartsusa.com", "flowersbydavid.net", "nwvoices.org", "leaptrade.com", "tulsaschoolpics.com", "alioth.io", "windowflair.com", "vitcom.net", "simplybeautifulfashions.com", "christinabenton.com", "fromthedaughter.com", "hometowngraphics.net", "fibanalysis.com", "creativejobscentral.com", "sandbox.gg", "jt-digitalmedia.com", "kodable.com", "birthingstone.com", "taranicholephoto.com", "hillyfieldsflorist.com", "charitynoelphoto.com", "auxdelicesfoods.com", "terilynnphotography.com", "folieadeuxevents.com", "karensfloral.com", "montgomerydiveclub.com", "rainbowplastics.com", "confettionthedancefloor.com", "vomozmedia.com", "neatmod.com", "getnaturafled.com", "callingpost.com", "iamfamily.org", "pedigreeonline.com", "typeboost.io", "in-n-outpetdoor.com", "nerdstockgc.com", "keiadmin.com", "createdbykaui.com", "aikophoto.com", "lonestar.ink", "stlfurs.com", "treasurelistings.com", "thecubicle.us", "redclaypaper.com", "blushhousemedia.com", "documentsanddesigns.com", "whitneyleighphotography.shootproof.com", "amaryllisday.com", "hermanproav.com", "felicemedia.com", "withloveplacenta.com", "store.brgadgets.co", "klowephoto.com", "spenceraustinconsulting.com", "sno-eagles.org", "dsatallahassee.org", "bakupages.com", "neswc.com", "josiebrooksphotography.com", "brisksale.com", "legalwhoosh.com", "jasmineeaster.com", "swatstudios.com", "facebook.com", "shakershell.com", "alexiswinslow.com", "mixeddimensions.com", "sweetpproductions.com", "lbeaphotography.com", "otlseatfillers.com", "jdtickets.com", "catholicar.com", "masque.com", "smalltownstudio.net", "goherbalife.com", "itzyourz.com", "magazinespeedloader.com", "dreammachines.io", "dallasdieteticalliance.org", "http:", "medair.org", "unbridledambition.com", "sarasprints.com", "wiperecord.com", "showmyrabbit.com", "cctrendsshop.com", "rachelalessandra.com", "otherworld-apothecary.com", "melissaannphoto.com", "girlceo.co", "seasidemexico.com", "telosid.com", "instin.com", "marinecorpsmustang.org", "lancityconnect.com", "hps1.org", "karenware.com", "livecurriculum.com", "spellingstars.com", "vektorfootball.com", "zaltv.com", "nebraskamayflower.org", "ethiopianspices.com", "immitranslate.com", "rafaelmagic.com.com", "bahc1.org", "newenamel.com", "bhchp.org", "buybulkamerica.com", "sourcepoint.com", "squarestripsports.com", "wix.com", "wilderootsphotography.com", "goodsalt.com", "systemongrid.com", "designmil.org", "freshtrendhq.com", "valisimofashions.com", "buyneatly.com", "getbeauty.us", "intellimidia.com" ],
            customCountry: !1,
            SUPPORTED_BROWSERS: {
                msie: "9",
                firefox: "30",
                chrome: "27",
                safari: "5.1",
                opera: "16",
                msedge: "12",
                samsungBrowser: "2.1",
                silk: "59.3",
                ucbrowser: "10.0.0.488",
                vivaldi: "1.91"
            },
            session_uid_lifetime: 3e5,
            _apiStage: "",
            get apiStage() {
                return config._apiStage || config.stage;
            },
            set apiStage(value) {
                config._apiStage = value;
            },
            ports: {
                default: 8e3,
                button: 8e3,
                checkout: 8e3,
                guest: 8001,
                altpay: 3e3
            },
            get paypalUrls() {
                var _ref;
                return _ref = {}, _ref[constants.q.LOCAL] = "http://localhost.paypal.com:" + config.ports.default, 
                _ref[constants.q.STAGE] = "https://www." + config.stage + ".qa.paypal.com", _ref[constants.q.SANDBOX] = "https://www.sandbox.paypal.com", 
                _ref[constants.q.PRODUCTION] = "https://www.paypal.com", _ref[constants.q.TEST] = window.location.protocol + "//" + window.location.host, 
                _ref[constants.q.DEMO] = window.location.protocol + "//localhost.paypal.com:" + window.location.port, 
                _ref;
            },
            get paypalDomains() {
                var _ref2;
                return _ref2 = {}, _ref2[constants.q.LOCAL] = "http://localhost.paypal.com:" + config.ports.default, 
                _ref2[constants.q.STAGE] = "https://www." + config.stage + ".qa.paypal.com", _ref2[constants.q.SANDBOX] = "https://www.sandbox.paypal.com", 
                _ref2[constants.q.PRODUCTION] = "https://www.paypal.com", _ref2[constants.q.TEST] = "mock://www.paypal.com", 
                _ref2[constants.q.DEMO] = window.location.protocol + "//localhost.paypal.com:" + window.location.port, 
                _ref2;
            },
            get wwwApiUrls() {
                var _ref3;
                return _ref3 = {}, _ref3[constants.q.LOCAL] = "https://www." + config.stage + ".qa.paypal.com", 
                _ref3[constants.q.STAGE] = "https://www." + config.stage + ".qa.paypal.com", _ref3[constants.q.SANDBOX] = "https://www.sandbox.paypal.com", 
                _ref3[constants.q.PRODUCTION] = "https://www.paypal.com", _ref3[constants.q.TEST] = window.location.protocol + "//" + window.location.host, 
                _ref3;
            },
            get corsApiUrls() {
                var _ref4;
                return _ref4 = {}, _ref4[constants.q.LOCAL] = "https://" + config.apiStage + ".qa.paypal.com:11888", 
                _ref4[constants.q.STAGE] = "https://" + config.apiStage + ".qa.paypal.com:11888", 
                _ref4[constants.q.SANDBOX] = "https://cors.api.sandbox.paypal.com", _ref4[constants.q.PRODUCTION] = "https://cors.api.paypal.com", 
                _ref4[constants.q.TEST] = window.location.protocol + "//" + window.location.host, 
                _ref4;
            },
            get apiUrls() {
                var _ref5, domain = window.location.protocol + "//" + window.location.host, corsApiUrls = config.corsApiUrls, wwwApiUrls = config.wwwApiUrls;
                return _ref5 = {}, _ref5[constants.q.LOCAL] = domain === wwwApiUrls.local ? wwwApiUrls.local : corsApiUrls.local, 
                _ref5[constants.q.STAGE] = domain === wwwApiUrls.stage ? wwwApiUrls.stage : corsApiUrls.stage, 
                _ref5[constants.q.SANDBOX] = domain === wwwApiUrls.sandbox ? wwwApiUrls.sandbox : corsApiUrls.sandbox, 
                _ref5[constants.q.PRODUCTION] = domain === wwwApiUrls.production ? wwwApiUrls.production : corsApiUrls.production, 
                _ref5[constants.q.TEST] = domain === wwwApiUrls.test ? wwwApiUrls.test : corsApiUrls.test, 
                _ref5;
            },
            checkoutUris: (_checkoutUris = {}, _checkoutUris[constants.q.LOCAL] = "/webapps/hermes?ul=0", 
            _checkoutUris[constants.q.STAGE] = "/webapps/hermes", _checkoutUris[constants.q.SANDBOX] = "/checkoutnow", 
            _checkoutUris[constants.q.PRODUCTION] = "/checkoutnow", _checkoutUris[constants.q.TEST] = "/base/test/windows/checkout/index.htm?checkouturl=true", 
            _checkoutUris[constants.q.DEMO] = "/demo/dev/checkout.htm", _checkoutUris),
            altpayUris: (_altpayUris = {}, _altpayUris[constants.q.LOCAL] = "/latinumcheckout", 
            _altpayUris[constants.q.STAGE] = "/latinumcheckout", _altpayUris[constants.q.SANDBOX] = "/latinumcheckout", 
            _altpayUris[constants.q.PRODUCTION] = "/latinumcheckout", _altpayUris[constants.q.TEST] = "/base/test/windows/checkout/index.htm?checkouturl=true", 
            _altpayUris[constants.q.DEMO] = "/demo/dev/checkout.htm", _altpayUris),
            guestUris: (_guestUris = {}, _guestUris[constants.q.LOCAL] = "/webapps/xoonboarding", 
            _guestUris[constants.q.STAGE] = "/webapps/xoonboarding", _guestUris[constants.q.SANDBOX] = "/webapps/xoonboarding", 
            _guestUris[constants.q.PRODUCTION] = "/webapps/xoonboarding", _guestUris[constants.q.TEST] = "/base/test/windows/checkout/index.htm?guesturl=true", 
            _guestUris[constants.q.DEMO] = "/demo/dev/guest.htm", _guestUris),
            billingUris: (_billingUris = {}, _billingUris[constants.q.LOCAL] = "/webapps/hermes/agreements?ul=0", 
            _billingUris[constants.q.STAGE] = "/webapps/hermes/agreements", _billingUris[constants.q.SANDBOX] = "/agreements/approve", 
            _billingUris[constants.q.PRODUCTION] = "/agreements/approve", _billingUris[constants.q.TEST] = "/base/test/windows/checkout/index.htm?billingurl=true", 
            _billingUris[constants.q.DEMO] = "/demo/dev/checkout.htm", _billingUris),
            buttonUris: (_buttonUris = {}, _buttonUris[constants.q.LOCAL] = "/webapps/hermes/button", 
            _buttonUris[constants.q.STAGE] = "/webapps/hermes/button", _buttonUris[constants.q.SANDBOX] = "/webapps/hermes/button", 
            _buttonUris[constants.q.PRODUCTION] = "/webapps/hermes/button", _buttonUris[constants.q.TEST] = "/base/test/windows/button/index.htm", 
            _buttonUris[constants.q.DEMO] = "/demo/dev/button.htm", _buttonUris),
            postBridgeUris: (_postBridgeUris = {}, _postBridgeUris[constants.q.LOCAL] = "/webapps/hermes/component-meta", 
            _postBridgeUris[constants.q.STAGE] = "/webapps/hermes/component-meta", _postBridgeUris[constants.q.SANDBOX] = "/webapps/hermes/component-meta", 
            _postBridgeUris[constants.q.PRODUCTION] = "/webapps/hermes/component-meta", _postBridgeUris[constants.q.TEST] = "/base/test/windows/component-meta/index.htm", 
            _postBridgeUris[constants.q.DEMO] = "/demo/dev/bridge.htm", _postBridgeUris),
            legacyCheckoutUris: (_legacyCheckoutUris = {}, _legacyCheckoutUris[constants.q.LOCAL] = "/cgi-bin/webscr?cmd=_express-checkout&xo_node_fallback=true", 
            _legacyCheckoutUris[constants.q.STAGE] = "/cgi-bin/webscr?cmd=_express-checkout&xo_node_fallback=true", 
            _legacyCheckoutUris[constants.q.SANDBOX] = "/cgi-bin/webscr?cmd=_express-checkout&xo_node_fallback=true", 
            _legacyCheckoutUris[constants.q.PRODUCTION] = "/cgi-bin/webscr?cmd=_express-checkout&xo_node_fallback=true", 
            _legacyCheckoutUris[constants.q.TEST] = "#fallback", _legacyCheckoutUris),
            buttonJSUrls: (_buttonJSUrls = {}, _buttonJSUrls[constants.q.LOCAL] = "https://www.paypalobjects.com/api/button.js", 
            _buttonJSUrls[constants.q.STAGE] = "https://www.paypalobjects.com/api/button.js", 
            _buttonJSUrls[constants.q.SANDBOX] = "https://www.paypalobjects.com/api/button.js", 
            _buttonJSUrls[constants.q.PRODUCTION] = "https://www.paypalobjects.com/api/button.js", 
            _buttonJSUrls[constants.q.TEST] = "/base/test/lib/button.js", _buttonJSUrls[constants.q.DEMO] = "https://www.paypalobjects.com/api/button.js", 
            _buttonJSUrls),
            get buttonJSUrl() {
                return config.buttonJSUrls[config.env];
            },
            loginUri: "/signin/",
            loggerUri: "/webapps/hermes/api/logger",
            pptmUri: "/tagmanager/pptm.js",
            get postBridgeUri() {
                return config.postBridgeUris[config.env] + "?xcomponent=1";
            },
            paymentStandardUri: "/webapps/xorouter?cmd=_s-xclick",
            authApiUri: "/v1/oauth2/token",
            paymentApiUri: "/v1/payments/payment",
            orderApiUri: "/v1/checkout/orders",
            billingApiUri: "/v1/billing-agreements/agreement-tokens",
            experienceApiUri: "/v1/payment-experience/web-profiles",
            trackingApiUri: "/v1/risk/transaction-contexts",
            get checkoutUrls() {
                var _ref6, paypalUrls = config.paypalUrls;
                return _ref6 = {}, _ref6[constants.q.LOCAL] = "" + paypalUrls.local + config.checkoutUris.local.replace(":" + config.ports.default, ":" + config.ports.checkout), 
                _ref6[constants.q.STAGE] = "" + paypalUrls.stage + config.checkoutUris.stage, _ref6[constants.q.SANDBOX] = "" + paypalUrls.sandbox + config.checkoutUris.sandbox, 
                _ref6[constants.q.PRODUCTION] = "" + paypalUrls.production + config.checkoutUris.production, 
                _ref6[constants.q.TEST] = "" + paypalUrls.test + config.checkoutUris.test, _ref6[constants.q.DEMO] = "" + paypalUrls.test + config.checkoutUris.demo, 
                _ref6;
            },
            get guestUrls() {
                var _ref7, paypalUrls = config.paypalUrls;
                return _ref7 = {}, _ref7[constants.q.LOCAL] = "" + paypalUrls.local.replace(":" + config.ports.default, ":" + config.ports.guest) + config.guestUris.local, 
                _ref7[constants.q.STAGE] = "" + paypalUrls.stage + config.guestUris.stage, _ref7[constants.q.SANDBOX] = "" + paypalUrls.sandbox + config.guestUris.sandbox, 
                _ref7[constants.q.PRODUCTION] = "" + paypalUrls.production + config.guestUris.production, 
                _ref7[constants.q.TEST] = "" + paypalUrls.test + config.guestUris.test, _ref7[constants.q.DEMO] = "" + paypalUrls.test + config.guestUris.demo, 
                _ref7;
            },
            get altpayUrls() {
                var _ref8, paypalUrls = config.paypalUrls;
                return _ref8 = {}, _ref8[constants.q.LOCAL] = "" + paypalUrls.local.replace(":" + config.ports.default, ":" + config.ports.altpay) + config.altpayUris.local, 
                _ref8[constants.q.STAGE] = "" + paypalUrls.stage + config.altpayUris.stage, _ref8[constants.q.SANDBOX] = "" + paypalUrls.sandbox + config.altpayUris.sandbox, 
                _ref8[constants.q.PRODUCTION] = "" + paypalUrls.production + config.altpayUris.production, 
                _ref8[constants.q.TEST] = "" + paypalUrls.test + config.altpayUris.test, _ref8[constants.q.DEMO] = "" + paypalUrls.test + config.altpayUris.demo, 
                _ref8;
            },
            get billingUrls() {
                var _ref9, paypalUrls = config.paypalUrls;
                return _ref9 = {}, _ref9[constants.q.LOCAL] = "" + paypalUrls.local.replace(":" + config.ports.default, ":" + config.ports.checkout) + config.billingUris.local, 
                _ref9[constants.q.STAGE] = "" + paypalUrls.stage + config.billingUris.stage, _ref9[constants.q.SANDBOX] = "" + paypalUrls.sandbox + config.billingUris.sandbox, 
                _ref9[constants.q.PRODUCTION] = "" + paypalUrls.production + config.billingUris.production, 
                _ref9[constants.q.TEST] = "" + paypalUrls.test + config.billingUris.test, _ref9[constants.q.DEMO] = "" + paypalUrls.test + config.billingUris.demo, 
                _ref9;
            },
            get buttonUrls() {
                var _ref10, paypalUrls = config.paypalUrls;
                return _ref10 = {}, _ref10[constants.q.LOCAL] = "" + paypalUrls.local.replace(":" + config.ports.default, ":" + config.ports.button) + config.buttonUris.local, 
                _ref10[constants.q.STAGE] = "" + paypalUrls.stage + config.buttonUris.stage, _ref10[constants.q.SANDBOX] = "" + paypalUrls.sandbox + config.buttonUris.sandbox, 
                _ref10[constants.q.PRODUCTION] = "" + paypalUrls.production + config.buttonUris.production, 
                _ref10[constants.q.TEST] = "" + paypalUrls.test + config.buttonUris.test, _ref10[constants.q.DEMO] = "" + paypalUrls.demo + config.buttonUris.demo, 
                _ref10;
            },
            get loginUrls() {
                var _ref11, paypalUrls = config.paypalUrls;
                return _ref11 = {}, _ref11[constants.q.LOCAL] = "" + paypalUrls.stage + config.loginUri, 
                _ref11[constants.q.STAGE] = "" + paypalUrls.stage + config.loginUri, _ref11[constants.q.SANDBOX] = "" + paypalUrls.sandbox + config.loginUri, 
                _ref11[constants.q.PRODUCTION] = "" + paypalUrls.production + config.loginUri, _ref11[constants.q.TEST] = "" + paypalUrls.test + config.loginUri, 
                _ref11;
            },
            get paymentsStandardUrls() {
                var _ref12, paypalUrls = config.paypalUrls;
                return _ref12 = {}, _ref12[constants.q.LOCAL] = "" + paypalUrls.local + config.paymentStandardUri, 
                _ref12[constants.q.STAGE] = "" + paypalUrls.stage + config.paymentStandardUri, _ref12[constants.q.SANDBOX] = "" + paypalUrls.sandbox + config.paymentStandardUri, 
                _ref12[constants.q.PRODUCTION] = "" + paypalUrls.production + config.paymentStandardUri, 
                _ref12[constants.q.TEST] = "" + paypalUrls.test + config.paymentStandardUri, _ref12;
            },
            get metaFrameUrls() {
                var _ref13, paypalUrls = config.paypalUrls;
                return _ref13 = {}, _ref13[constants.q.LOCAL] = "" + paypalUrls.local + config.postBridgeUri + "&env=local", 
                _ref13[constants.q.STAGE] = "" + paypalUrls.stage + config.postBridgeUri + "&env=stage&stage=" + config.stage, 
                _ref13[constants.q.SANDBOX] = "" + paypalUrls.sandbox + config.postBridgeUri + "&env=sandbox", 
                _ref13[constants.q.PRODUCTION] = "" + paypalUrls.production + config.postBridgeUri + "&env=production", 
                _ref13[constants.q.TEST] = "" + paypalUrls.test + config.postBridgeUri + "&env=test", 
                _ref13[constants.q.DEMO] = "" + paypalUrls.demo + config.postBridgeUri + "&env=demo", 
                _ref13;
            },
            get legacyCheckoutUrls() {
                var _ref14, paypalUrls = config.paypalUrls;
                return _ref14 = {}, _ref14[constants.q.LOCAL] = "" + paypalUrls.stage + config.legacyCheckoutUris.local, 
                _ref14[constants.q.STAGE] = "" + paypalUrls.stage + config.legacyCheckoutUris.stage, 
                _ref14[constants.q.SANDBOX] = "" + paypalUrls.sandbox + config.legacyCheckoutUris.sandbox, 
                _ref14[constants.q.PRODUCTION] = "" + paypalUrls.production + config.legacyCheckoutUris.production, 
                _ref14[constants.q.TEST] = "" + paypalUrls.test + config.legacyCheckoutUris.test, 
                _ref14;
            },
            get authApiUrls() {
                var _ref15, apiUrls = config.apiUrls, authApiUri = config.authApiUri;
                return _ref15 = {}, _ref15[constants.q.LOCAL] = "" + apiUrls.local + authApiUri, 
                _ref15[constants.q.STAGE] = "" + apiUrls.stage + authApiUri, _ref15[constants.q.SANDBOX] = "" + apiUrls.sandbox + authApiUri, 
                _ref15[constants.q.PRODUCTION] = "" + apiUrls.production + authApiUri, _ref15[constants.q.TEST] = "" + apiUrls.test + authApiUri, 
                _ref15;
            },
            get paymentApiUrls() {
                var _ref16, apiUrls = config.apiUrls, paymentApiUri = config.paymentApiUri;
                return _ref16 = {}, _ref16[constants.q.LOCAL] = "" + apiUrls.local + paymentApiUri, 
                _ref16[constants.q.STAGE] = "" + apiUrls.stage + paymentApiUri, _ref16[constants.q.SANDBOX] = "" + apiUrls.sandbox + paymentApiUri, 
                _ref16[constants.q.PRODUCTION] = "" + apiUrls.production + paymentApiUri, _ref16[constants.q.TEST] = "" + apiUrls.test + paymentApiUri, 
                _ref16;
            },
            get orderApiUrls() {
                var _ref17, apiUrls = config.apiUrls, orderApiUri = config.orderApiUri;
                return _ref17 = {}, _ref17[constants.q.LOCAL] = "" + apiUrls.local + orderApiUri, 
                _ref17[constants.q.STAGE] = "" + apiUrls.stage + orderApiUri, _ref17[constants.q.SANDBOX] = "" + apiUrls.sandbox + orderApiUri, 
                _ref17[constants.q.PRODUCTION] = "" + apiUrls.production + orderApiUri, _ref17[constants.q.TEST] = "" + apiUrls.test + orderApiUri, 
                _ref17;
            },
            get billingApiUrls() {
                var _ref18, apiUrls = config.apiUrls, billingApiUri = config.billingApiUri;
                return _ref18 = {}, _ref18[constants.q.LOCAL] = "" + apiUrls.local + billingApiUri, 
                _ref18[constants.q.STAGE] = "" + apiUrls.stage + billingApiUri, _ref18[constants.q.SANDBOX] = "" + apiUrls.sandbox + billingApiUri, 
                _ref18[constants.q.PRODUCTION] = "" + apiUrls.production + billingApiUri, _ref18[constants.q.TEST] = "" + apiUrls.test + billingApiUri, 
                _ref18;
            },
            get experienceApiUrls() {
                var _ref19, apiUrls = config.apiUrls, experienceApiUri = config.experienceApiUri;
                return _ref19 = {}, _ref19[constants.q.LOCAL] = "" + apiUrls.local + experienceApiUri, 
                _ref19[constants.q.STAGE] = "" + apiUrls.stage + experienceApiUri, _ref19[constants.q.SANDBOX] = "" + apiUrls.sandbox + experienceApiUri, 
                _ref19[constants.q.PRODUCTION] = "" + apiUrls.production + experienceApiUri, _ref19[constants.q.TEST] = "" + apiUrls.test + experienceApiUri, 
                _ref19;
            },
            get trackingApiUrls() {
                var _ref20, apiUrls = config.apiUrls, trackingApiUri = config.trackingApiUri;
                return _ref20 = {}, _ref20[constants.q.LOCAL] = "" + apiUrls.local + trackingApiUri, 
                _ref20[constants.q.STAGE] = "" + apiUrls.stage + trackingApiUri, _ref20[constants.q.SANDBOX] = "" + apiUrls.sandbox + trackingApiUri, 
                _ref20[constants.q.PRODUCTION] = "" + apiUrls.production + trackingApiUri, _ref20[constants.q.TEST] = "" + apiUrls.test + trackingApiUri, 
                _ref20;
            },
            _paypalUrl: "",
            get paypalUrl() {
                return this._paypalUrl || config.paypalUrls[config.env];
            },
            set paypalUrl(value) {
                this._paypalUrl = value;
            },
            get paypalDomain() {
                return config.paypalDomains[config.env];
            },
            get corsApiUrl() {
                return config.corsApiUrls[config.env];
            },
            get wwwApiUrl() {
                return config.wwwApiUrls[config.env];
            },
            get apiUrl() {
                var domain = window.location.protocol + "//" + window.location.host, corsApiUrl = config.corsApiUrl, wwwApiUrl = config.wwwApiUrl;
                return domain === wwwApiUrl ? wwwApiUrl : corsApiUrl;
            },
            get checkoutUrl() {
                return "" + config.paypalUrl + config.checkoutUris[config.env];
            },
            get billingUrl() {
                return "" + config.paypalUrl + config.billingUris[config.env];
            },
            get buttonUrl() {
                return "" + config.paypalUrl + config.buttonUris[config.env];
            },
            get legacyCheckoutUrl() {
                return config.legacyCheckoutUrls[config.env];
            },
            get postBridgeUrl() {
                return "" + config.paypalUrl + config.postBridgeUri;
            },
            get postBridgeDomain() {
                return "" + config.paypalDomain;
            },
            get loggerUrl() {
                return "" + config.paypalUrl + config.loggerUri;
            },
            get pptmUrl() {
                return "" + (config.env === constants.q.LOCAL ? config.paypalUrls[constants.q.STAGE] : config.paypalUrl) + config.pptmUri;
            },
            get authApiUrl() {
                return "" + config.apiUrl + config.authApiUri;
            },
            get paymentApiUrl() {
                return "" + config.apiUrl + config.paymentApiUri;
            },
            get orderApiUrl() {
                return "" + config.apiUrl + config.orderApiUri;
            },
            get billingApiUrl() {
                return "" + config.apiUrl + config.billingApiUri;
            },
            get experienceApiUrl() {
                return "" + config.apiUrl + config.experienceApiUri;
            },
            defaultLocale: {
                country: constants.o.US,
                lang: constants.t.EN
            },
            locales: (_locales = {}, _locales[constants.o.AD] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.AE] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH, constants.t.AR ], 
            _locales[constants.o.AG] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.AI] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.AL] = [ constants.t.EN ], _locales[constants.o.AM] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.AN] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.AO] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.AR] = [ constants.t.ES, constants.t.EN ], _locales[constants.o.AT] = [ constants.t.DE, constants.t.EN ], 
            _locales[constants.o.AU] = [ constants.t.EN ], _locales[constants.o.AW] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.AZ] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.BA] = [ constants.t.EN ], _locales[constants.o.BB] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.BE] = [ constants.t.EN, constants.t.NL, constants.t.FR ], _locales[constants.o.BF] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.BG] = [ constants.t.EN ], _locales[constants.o.BH] = [ constants.t.AR, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.BI] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.BJ] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.BM] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.BN] = [ constants.t.EN ], _locales[constants.o.BO] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.BR] = [ constants.t.PT, constants.t.EN ], _locales[constants.o.BS] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.BT] = [ constants.t.EN ], _locales[constants.o.BW] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.BY] = [ constants.t.EN ], _locales[constants.o.BZ] = [ constants.t.EN, constants.t.ES, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.C2] = [ constants.t.ZH, constants.t.EN ], _locales[constants.o.CA] = [ constants.t.EN, constants.t.FR ], 
            _locales[constants.o.CD] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.CG] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.CH] = [ constants.t.DE, constants.t.FR, constants.t.EN ], _locales[constants.o.CI] = [ constants.t.FR, constants.t.EN ], 
            _locales[constants.o.CK] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.CL] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.CM] = [ constants.t.FR, constants.t.EN ], _locales[constants.o.CN] = [ constants.t.ZH ], 
            _locales[constants.o.CO] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.CR] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.CV] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.CY] = [ constants.t.EN ], _locales[constants.o.CZ] = [ constants.t.CS, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.DE] = [ constants.t.DE, constants.t.EN ], _locales[constants.o.DJ] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.DK] = [ constants.t.DA, constants.t.EN ], _locales[constants.o.DM] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.DO] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.DZ] = [ constants.t.AR, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.EC] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.EE] = [ constants.t.EN, constants.t.RU, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.EG] = [ constants.t.AR, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.ER] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.ES] = [ constants.t.ES, constants.t.EN ], _locales[constants.o.ET] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.FI] = [ constants.t.FI, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.FJ] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.FK] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.FM] = [ constants.t.EN ], _locales[constants.o.FO] = [ constants.t.DA, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.FR] = [ constants.t.FR, constants.t.EN ], _locales[constants.o.GA] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.GB] = [ constants.t.EN ], _locales[constants.o.GD] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.GE] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.GF] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.GI] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.GL] = [ constants.t.DA, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.GM] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.GN] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.GP] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.GR] = [ constants.t.EL, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.GT] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.GW] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.GY] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.HK] = [ constants.t.EN, constants.t.ZH ], _locales[constants.o.HN] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.HR] = [ constants.t.EN ], _locales[constants.o.HU] = [ constants.t.HU, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.ID] = [ constants.t.ID, constants.t.EN ], _locales[constants.o.IE] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.IL] = [ constants.t.HE, constants.t.EN ], _locales[constants.o.IN] = [ constants.t.EN ], 
            _locales[constants.o.IS] = [ constants.t.EN ], _locales[constants.o.IT] = [ constants.t.IT, constants.t.EN ], 
            _locales[constants.o.JM] = [ constants.t.EN, constants.t.ES, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.JO] = [ constants.t.AR, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.JP] = [ constants.t.JA, constants.t.EN ], _locales[constants.o.KE] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.KG] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.KH] = [ constants.t.EN ], _locales[constants.o.KI] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.KM] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.KN] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.KR] = [ constants.t.KO, constants.t.EN ], _locales[constants.o.KW] = [ constants.t.AR, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.KY] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.KZ] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.LA] = [ constants.t.EN ], _locales[constants.o.LC] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.LI] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.LK] = [ constants.t.EN ], _locales[constants.o.LS] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.LT] = [ constants.t.EN, constants.t.RU, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.LU] = [ constants.t.EN, constants.t.DE, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.LV] = [ constants.t.EN, constants.t.RU, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.MA] = [ constants.t.AR, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.MC] = [ constants.t.FR, constants.t.EN ], _locales[constants.o.MD] = [ constants.t.EN ], 
            _locales[constants.o.ME] = [ constants.t.EN ], _locales[constants.o.MG] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.MH] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.MK] = [ constants.t.EN ], _locales[constants.o.ML] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.MN] = [ constants.t.EN ], _locales[constants.o.MQ] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.MR] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.MS] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.MT] = [ constants.t.EN ], _locales[constants.o.MU] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.MV] = [ constants.t.EN ], _locales[constants.o.MW] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.MX] = [ constants.t.ES, constants.t.EN ], _locales[constants.o.MY] = [ constants.t.EN ], 
            _locales[constants.o.MZ] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.NA] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.NC] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.NE] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.NF] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.NG] = [ constants.t.EN ], _locales[constants.o.NI] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.NL] = [ constants.t.NL, constants.t.EN ], _locales[constants.o.NO] = [ constants.t.NO, constants.t.EN ], 
            _locales[constants.o.NP] = [ constants.t.EN ], _locales[constants.o.NR] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.NU] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.NZ] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.OM] = [ constants.t.AR, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.PA] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.PE] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.PF] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.PG] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.PH] = [ constants.t.EN ], _locales[constants.o.PL] = [ constants.t.PL, constants.t.EN ], 
            _locales[constants.o.PM] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.PN] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.PT] = [ constants.t.PT, constants.t.EN ], _locales[constants.o.PW] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.PY] = [ constants.t.ES, constants.t.EN ], _locales[constants.o.QA] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH, constants.t.AR ], 
            _locales[constants.o.RE] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.RO] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.RS] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.RU] = [ constants.t.RU, constants.t.EN ], _locales[constants.o.RW] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SA] = [ constants.t.AR, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SB] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SC] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SE] = [ constants.t.SV, constants.t.EN ], _locales[constants.o.SG] = [ constants.t.EN ], 
            _locales[constants.o.SH] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SI] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SJ] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SK] = [ constants.t.SK, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SL] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SM] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SN] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SO] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SR] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.ST] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.SV] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.SZ] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.TC] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.TD] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.TG] = [ constants.t.FR, constants.t.EN, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.TH] = [ constants.t.TH, constants.t.EN ], _locales[constants.o.TJ] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.TM] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.TN] = [ constants.t.AR, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.TO] = [ constants.t.EN ], _locales[constants.o.TR] = [ constants.t.TR, constants.t.EN ], 
            _locales[constants.o.TT] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.TV] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.TW] = [ constants.t.ZH, constants.t.EN ], _locales[constants.o.TZ] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.UA] = [ constants.t.EN, constants.t.RU, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.UG] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.US] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.UY] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.VA] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.VC] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.VE] = [ constants.t.ES, constants.t.EN, constants.t.FR, constants.t.ZH ], 
            _locales[constants.o.VG] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.VN] = [ constants.t.EN ], _locales[constants.o.VU] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.WF] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.WS] = [ constants.t.EN ], _locales[constants.o.YE] = [ constants.t.AR, constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.YT] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.ZA] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.ZM] = [ constants.t.EN, constants.t.FR, constants.t.ES, constants.t.ZH ], 
            _locales[constants.o.ZW] = [ constants.t.EN ], _locales)
        };
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return config;
        });
    },
    "./src/constants/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _CONTEXT_TYPE, _LANG_TO_DEFAULT_COUN, BUTTON_STYLE_OPTIONS = {
            LABEL: "label",
            SIZE: "size",
            SHAPE: "shape",
            COLOR: "color",
            LAYOUT: "layout",
            MAXBUTTONS: "maxbuttons",
            FUNDINGICONS: "fundingicons",
            BRANDING: "branding",
            TAGLINE: "tagline",
            HEIGHT: "height"
        }, BUTTON_LABEL = {
            PAYPAL: "paypal",
            CHECKOUT: "checkout",
            PAY: "pay",
            CREDIT: "credit",
            CARD: "card",
            BUYNOW: "buynow",
            VENMO: "venmo",
            IDEAL: "ideal",
            ELV: "elv"
        }, BUTTON_COLOR = {
            GOLD: "gold",
            BLUE: "blue",
            SILVER: "silver",
            BLACK: "black",
            DARKBLUE: "darkblue",
            TRANSPARENT: "transparent"
        }, BUTTON_LOGO_COLOR = {
            BLUE: "blue",
            WHITE: "white",
            BLACK: "black",
            ANY: "any"
        }, BUTTON_SIZE = {
            TINY: "tiny",
            SMALL: "small",
            MEDIUM: "medium",
            LARGE: "large",
            HUGE: "huge",
            RESPONSIVE: "responsive"
        }, BUTTON_TAGLINE_COLOR = {
            BLACK: "black",
            BLUE: "blue"
        }, BUTTON_SHAPE = {
            PILL: "pill",
            RECT: "rect"
        }, BUTTON_BRANDING = {
            BRANDED: "branded",
            UNBRANDED: "unbranded"
        }, BUTTON_LAYOUT = {
            HORIZONTAL: "horizontal",
            VERTICAL: "vertical"
        }, BUTTON_NUMBER = {
            SINGLE: "single",
            MULTIPLE: "multiple"
        }, BUTTON_LOGO = {
            PP: "pp",
            PAYPAL: "paypal",
            VENMO: "venmo",
            CREDIT: "credit",
            IDEAL: "ideal",
            ELV: "elv"
        }, CHECKOUT_OVERLAY_COLOR = {
            BLACK: "black",
            WHITE: "white"
        }, FUNDING = {
            PAYPAL: "paypal",
            VENMO: "venmo",
            CREDIT: "credit",
            CARD: "card",
            IDEAL: "ideal",
            ELV: "elv"
        }, CARD = {
            VISA: "visa",
            MASTERCARD: "mastercard",
            AMEX: "amex",
            DISCOVER: "discover",
            SWITCH: "switch",
            MAESTRO: "maestro",
            HIPER: "hiper",
            ELO: "elo",
            JCB: "jcb",
            CUP: "cup",
            COFINOGA: "cofinoga",
            COFIDIS: "cofidis",
            CETELEM: "cetelem",
            CBNATIONALE: "cbnationale"
        }, FUNDING_ELIGIBILITY_REASON = {
            PRIMARY: "The funding source is the primary source",
            NOT_ENABLED: "The funding source is not currently enabled for use",
            SECONDARY_DISALLOWED: "The funding source is disallowed as a secondary button",
            OPT_OUT: "The funding source was disallowed in funding.disallowed",
            OPT_IN: "The funding source was allowed in funding.allowed",
            DISALLOWED_COUNTRY: "The funding source is not enabled for the current locale",
            DEFAULT_COUNTRY: "The funding source is enabled by default for the current locale",
            DEFAULT: "The funding source is enabled by default for all users",
            REMEMBERED: "The funding source was remembered for the current user",
            NEED_OPT_IN: "The funding source needs to be allowed in funding.allowed"
        }, CARD_PRIORITY = [ CARD.VISA, CARD.MASTERCARD, CARD.AMEX, CARD.DISCOVER, CARD.SWITCH, CARD.MAESTRO, CARD.HIPER, CARD.ELO, CARD.JCB, CARD.CUP, CARD.COFINOGA, CARD.COFIDIS, CARD.CETELEM, CARD.CBNATIONALE ], ENV = {
            LOCAL: "local",
            STAGE: "stage",
            SANDBOX: "sandbox",
            PRODUCTION: "production",
            TEST: "test",
            DEMO: "demo"
        }, USERS = {
            ALL: "all",
            REMEMBERED: "remembered"
        }, SOURCE = {
            MANUAL: "manual",
            BUTTON_FACTORY: "button_factory"
        }, LOG_LEVEL = {
            DEBUG: "debug",
            INFO: "info",
            WARN: "warn",
            ERROR: "error"
        }, PAYMENT_TYPE = {
            EC_TOKEN: "ec_token",
            BA_TOKEN: "ba_token",
            PAY_ID: "pay_id"
        }, ATTRIBUTE = {
            BUTTON: "data-button",
            FUNDING_SOURCE: "data-funding-source",
            CARD: "data-card",
            VERSION: "data-version"
        }, PLATFORM = {
            DESKTOP: "desktop",
            MOBILE: "mobile"
        }, FPTI = {
            KEY: {
                FEED: "feed_name",
                STATE: "state_name",
                TRANSITION: "transition_name",
                BUTTON_TYPE: "button_type",
                SESSION_UID: "page_session_id",
                BUTTON_SESSION_UID: "button_session_id",
                TOKEN: "token",
                CONTEXT_ID: "context_id",
                CONTEXT_TYPE: "context_type",
                REFERER: "referer_url",
                PAY_ID: "pay_id",
                SELLER_ID: "seller_id",
                DATA_SOURCE: "serverside_data_source",
                BUTTON_SOURCE: "button_source",
                ERROR_CODE: "ext_error_code",
                ERROR_DESC: "ext_error_desc",
                PAGE_LOAD_TIME: "page_load_time",
                EXPERIMENT_NAME: "pxp_exp_id",
                TREATMENT_NAME: "pxp_trtmnt_id",
                TRANSITION_TIME: "transition_time",
                FUNDING_LIST: "eligible_payment_methods",
                FUNDING_COUNT: "eligible_payment_count",
                CHOSEN_FUNDING: "selected_payment_method",
                BUTTON_LAYOUT: "button_layout",
                VERSION: "checkoutjs_version"
            },
            BUTTON_TYPE: {
                IFRAME: "iframe",
                HTML: "html",
                CUSTOM: "custom"
            },
            DATA_SOURCE: {
                CHECKOUT: "checkout"
            },
            CONTEXT_TYPE: (_CONTEXT_TYPE = {
                BUTTON_SESSION_ID: "button_session_id"
            }, _CONTEXT_TYPE[PAYMENT_TYPE.PAY_ID] = "Pay-ID", _CONTEXT_TYPE[PAYMENT_TYPE.EC_TOKEN] = "EC-Token", 
            _CONTEXT_TYPE[PAYMENT_TYPE.BA_TOKEN] = "EC-Token", _CONTEXT_TYPE),
            FEED: {
                CHECKOUTJS: "checkoutjs"
            },
            STATE: {
                LOAD: "checkoutjs_load",
                BUTTON: "checkoutjs_button",
                CHECKOUT: "checkoutjs_checkout",
                PPTM: "checkoutjs_pptm",
                PXP: "PXP_CHECK"
            },
            TRANSITION: {
                SCRIPT_LOAD: "process_script_load",
                BUTTON_RENDER: "process_button_render",
                BUTTON_LOAD: "process_button_load",
                BUTTON_CLICK: "process_button_click",
                CREATE_PAYMENT: "process_create_payment",
                RECIEVE_PAYMENT: "process_recieve_payment",
                CHECKOUT_INIT: "process_checkout_init",
                CHECKOUT_AUTHORIZE: "process_checkout_authorize",
                CHECKOUT_CANCEL: "process_checkout_cancel",
                CHECKOUT_ERROR: "process_checkout_error",
                EXTERNAL_EXPERIMENT: "process_external_experiment",
                EXTERNAL_EXPERIMENT_COMPLETE: "process_external_experiment_complete",
                PPTM_LOAD: "process_pptm_load",
                PPTM_LOADED: "process_pptm_loaded",
                PXP: "process_pxp_check"
            }
        }, COUNTRY = {
            AD: "AD",
            AE: "AE",
            AG: "AG",
            AI: "AI",
            AL: "AL",
            AM: "AM",
            AN: "AN",
            AO: "AO",
            AR: "AR",
            AT: "AT",
            AU: "AU",
            AW: "AW",
            AZ: "AZ",
            BA: "BA",
            BB: "BB",
            BE: "BE",
            BF: "BF",
            BG: "BG",
            BH: "BH",
            BI: "BI",
            BJ: "BJ",
            BM: "BM",
            BN: "BN",
            BO: "BO",
            BR: "BR",
            BS: "BS",
            BT: "BT",
            BW: "BW",
            BY: "BY",
            BZ: "BZ",
            C2: "C2",
            CA: "CA",
            CD: "CD",
            CG: "CG",
            CH: "CH",
            CI: "CI",
            CK: "CK",
            CL: "CL",
            CM: "CM",
            CN: "CN",
            CO: "CO",
            CR: "CR",
            CV: "CV",
            CY: "CY",
            CZ: "CZ",
            DE: "DE",
            DJ: "DJ",
            DK: "DK",
            DM: "DM",
            DO: "DO",
            DZ: "DZ",
            EC: "EC",
            EE: "EE",
            EG: "EG",
            ER: "ER",
            ES: "ES",
            ET: "ET",
            FI: "FI",
            FJ: "FJ",
            FK: "FK",
            FM: "FM",
            FO: "FO",
            FR: "FR",
            GA: "GA",
            GB: "GB",
            GD: "GD",
            GE: "GE",
            GF: "GF",
            GI: "GI",
            GL: "GL",
            GM: "GM",
            GN: "GN",
            GP: "GP",
            GR: "GR",
            GT: "GT",
            GW: "GW",
            GY: "GY",
            HK: "HK",
            HN: "HN",
            HR: "HR",
            HU: "HU",
            ID: "ID",
            IE: "IE",
            IL: "IL",
            IN: "IN",
            IS: "IS",
            IT: "IT",
            JM: "JM",
            JO: "JO",
            JP: "JP",
            KE: "KE",
            KG: "KG",
            KH: "KH",
            KI: "KI",
            KM: "KM",
            KN: "KN",
            KR: "KR",
            KW: "KW",
            KY: "KY",
            KZ: "KZ",
            LA: "LA",
            LC: "LC",
            LI: "LI",
            LK: "LK",
            LS: "LS",
            LT: "LT",
            LU: "LU",
            LV: "LV",
            MA: "MA",
            MC: "MC",
            MD: "MD",
            ME: "ME",
            MG: "MG",
            MH: "MH",
            MK: "MK",
            ML: "ML",
            MN: "MN",
            MQ: "MQ",
            MR: "MR",
            MS: "MS",
            MT: "MT",
            MU: "MU",
            MV: "MV",
            MW: "MW",
            MX: "MX",
            MY: "MY",
            MZ: "MZ",
            NA: "NA",
            NC: "NC",
            NE: "NE",
            NF: "NF",
            NG: "NG",
            NI: "NI",
            NL: "NL",
            NO: "NO",
            NP: "NP",
            NR: "NR",
            NU: "NU",
            NZ: "NZ",
            OM: "OM",
            PA: "PA",
            PE: "PE",
            PF: "PF",
            PG: "PG",
            PH: "PH",
            PL: "PL",
            PM: "PM",
            PN: "PN",
            PT: "PT",
            PW: "PW",
            PY: "PY",
            QA: "QA",
            RE: "RE",
            RO: "RO",
            RS: "RS",
            RU: "RU",
            RW: "RW",
            SA: "SA",
            SB: "SB",
            SC: "SC",
            SE: "SE",
            SG: "SG",
            SH: "SH",
            SI: "SI",
            SJ: "SJ",
            SK: "SK",
            SL: "SL",
            SM: "SM",
            SN: "SN",
            SO: "SO",
            SR: "SR",
            ST: "ST",
            SV: "SV",
            SZ: "SZ",
            TC: "TC",
            TD: "TD",
            TG: "TG",
            TH: "TH",
            TJ: "TJ",
            TM: "TM",
            TN: "TN",
            TO: "TO",
            TR: "TR",
            TT: "TT",
            TV: "TV",
            TW: "TW",
            TZ: "TZ",
            UA: "UA",
            UG: "UG",
            US: "US",
            UY: "UY",
            VA: "VA",
            VC: "VC",
            VE: "VE",
            VG: "VG",
            VN: "VN",
            VU: "VU",
            WF: "WF",
            WS: "WS",
            YE: "YE",
            YT: "YT",
            ZA: "ZA",
            ZM: "ZM",
            ZW: "ZW"
        }, LANG = {
            AR: "ar",
            CS: "cs",
            DA: "da",
            DE: "de",
            EL: "el",
            EN: "en",
            ES: "es",
            FI: "fi",
            FR: "fr",
            HE: "he",
            HU: "hu",
            ID: "id",
            IT: "it",
            JA: "ja",
            KO: "ko",
            NL: "nl",
            NO: "no",
            PL: "pl",
            PT: "pt",
            RU: "ru",
            SK: "sk",
            SV: "sv",
            TH: "th",
            TR: "tr",
            ZH: "zh"
        }, LANG_TO_DEFAULT_COUNTRY = (_LANG_TO_DEFAULT_COUN = {}, _LANG_TO_DEFAULT_COUN[LANG.AR] = COUNTRY.SA, 
        _LANG_TO_DEFAULT_COUN[LANG.CS] = COUNTRY.CZ, _LANG_TO_DEFAULT_COUN[LANG.DA] = COUNTRY.DK, 
        _LANG_TO_DEFAULT_COUN[LANG.DE] = COUNTRY.DE, _LANG_TO_DEFAULT_COUN[LANG.EL] = COUNTRY.GR, 
        _LANG_TO_DEFAULT_COUN[LANG.EN] = COUNTRY.US, _LANG_TO_DEFAULT_COUN[LANG.ES] = COUNTRY.ES, 
        _LANG_TO_DEFAULT_COUN[LANG.FI] = COUNTRY.FI, _LANG_TO_DEFAULT_COUN[LANG.FR] = COUNTRY.FR, 
        _LANG_TO_DEFAULT_COUN[LANG.HE] = COUNTRY.IL, _LANG_TO_DEFAULT_COUN[LANG.HU] = COUNTRY.HU, 
        _LANG_TO_DEFAULT_COUN[LANG.ID] = COUNTRY.ID, _LANG_TO_DEFAULT_COUN[LANG.IT] = COUNTRY.IT, 
        _LANG_TO_DEFAULT_COUN[LANG.JA] = COUNTRY.JP, _LANG_TO_DEFAULT_COUN[LANG.KO] = COUNTRY.KR, 
        _LANG_TO_DEFAULT_COUN[LANG.NL] = COUNTRY.NL, _LANG_TO_DEFAULT_COUN[LANG.NO] = COUNTRY.NO, 
        _LANG_TO_DEFAULT_COUN[LANG.PL] = COUNTRY.PL, _LANG_TO_DEFAULT_COUN[LANG.PT] = COUNTRY.PT, 
        _LANG_TO_DEFAULT_COUN[LANG.RU] = COUNTRY.RU, _LANG_TO_DEFAULT_COUN[LANG.SK] = COUNTRY.SK, 
        _LANG_TO_DEFAULT_COUN[LANG.SV] = COUNTRY.SE, _LANG_TO_DEFAULT_COUN[LANG.TH] = COUNTRY.TH, 
        _LANG_TO_DEFAULT_COUN[LANG.TR] = COUNTRY.TR, _LANG_TO_DEFAULT_COUN[LANG.ZH] = COUNTRY.CN, 
        _LANG_TO_DEFAULT_COUN);
        __webpack_require__.d(__webpack_exports__, "k", function() {
            return BUTTON_STYLE_OPTIONS;
        });
        __webpack_require__.d(__webpack_exports__, "d", function() {
            return BUTTON_LABEL;
        });
        __webpack_require__.d(__webpack_exports__, "c", function() {
            return BUTTON_COLOR;
        });
        __webpack_require__.d(__webpack_exports__, "g", function() {
            return BUTTON_LOGO_COLOR;
        });
        __webpack_require__.d(__webpack_exports__, "j", function() {
            return BUTTON_SIZE;
        });
        __webpack_require__.d(__webpack_exports__, "l", function() {
            return BUTTON_TAGLINE_COLOR;
        });
        __webpack_require__.d(__webpack_exports__, "i", function() {
            return BUTTON_SHAPE;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
            return BUTTON_BRANDING;
        });
        __webpack_require__.d(__webpack_exports__, "e", function() {
            return BUTTON_LAYOUT;
        });
        __webpack_require__.d(__webpack_exports__, "h", function() {
            return BUTTON_NUMBER;
        });
        __webpack_require__.d(__webpack_exports__, "f", function() {
            return BUTTON_LOGO;
        });
        __webpack_require__.d(__webpack_exports__, !1, function() {
            return CHECKOUT_OVERLAY_COLOR;
        });
        __webpack_require__.d(__webpack_exports__, "r", function() {
            return FUNDING;
        });
        __webpack_require__.d(__webpack_exports__, "m", function() {
            return CARD;
        });
        __webpack_require__.d(__webpack_exports__, "s", function() {
            return FUNDING_ELIGIBILITY_REASON;
        });
        __webpack_require__.d(__webpack_exports__, "n", function() {
            return CARD_PRIORITY;
        });
        __webpack_require__.d(__webpack_exports__, !1, function() {
            return FPTI;
        });
        __webpack_require__.d(__webpack_exports__, "o", function() {
            return COUNTRY;
        });
        __webpack_require__.d(__webpack_exports__, "t", function() {
            return LANG;
        });
        __webpack_require__.d(__webpack_exports__, !1, function() {
            return LANG_TO_DEFAULT_COUNTRY;
        });
        __webpack_require__.d(__webpack_exports__, "q", function() {
            return ENV;
        });
        __webpack_require__.d(__webpack_exports__, !1, function() {
            return USERS;
        });
        __webpack_require__.d(__webpack_exports__, !1, function() {
            return SOURCE;
        });
        __webpack_require__.d(__webpack_exports__, !1, function() {
            return LOG_LEVEL;
        });
        __webpack_require__.d(__webpack_exports__, !1, function() {
            return PAYMENT_TYPE;
        });
        __webpack_require__.d(__webpack_exports__, !1, function() {
            return "xo-pptm";
        });
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return ATTRIBUTE;
        });
        __webpack_require__.d(__webpack_exports__, "u", function() {
            return PLATFORM;
        });
        __webpack_require__.d(__webpack_exports__, "p", function() {
            return "default";
        });
    },
    "./src/lib/util.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function(global) {
            function getGlobal() {
                if ("undefined" != typeof window) return window;
                if (void 0 !== global) return global;
                throw new Error("No global found");
            }
            function memoize(method) {
                var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, cache = {};
                return function() {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    var key = void 0;
                    try {
                        key = JSON.stringify(Array.prototype.slice.call(arguments));
                    } catch (err) {
                        throw new Error("Arguments not serializable -- can not be used to memoize");
                    }
                    var time = options.time;
                    cache[key] && time && Date.now() - cache[key].time < time && delete cache[key];
                    var glob = getGlobal();
                    glob.__CACHE_START_TIME__ && cache[key] && cache[key].time < glob.__CACHE_START_TIME__ && delete cache[key];
                    if (cache[key]) return cache[key].value;
                    cache[key] = {
                        time: Date.now(),
                        value: method.apply(this, arguments)
                    };
                    return cache[key].value;
                };
            }
            function perc(pixels, percentage) {
                return Math.round(pixels * percentage / 100);
            }
            function max() {
                return Math.max.apply(Math, arguments);
            }
            function regexMap(str, regex, handler) {
                var results = [];
                str.replace(regex, function() {
                    results.push(handler.apply(null, arguments));
                });
                return results;
            }
            __webpack_exports__.b = memoize;
            __webpack_exports__.c = perc;
            __webpack_exports__.a = max;
            __webpack_exports__.d = regexMap;
            var __WEBPACK_IMPORTED_MODULE_0_hi_base32__ = __webpack_require__("./node_modules/hi-base32/src/base32.js");
            __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hi_base32__), __webpack_require__("./node_modules/zalgo-promise/src/index.js"), 
            __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), __webpack_require__("./src/config/index.js"), 
            "function" == typeof Symbol && Symbol.iterator, memoize(function() {
                try {
                    if ("undefined" == typeof window) return !1;
                    if (window.localStorage) {
                        var _value = Math.random().toString();
                        window.localStorage.setItem("__test__localStorage__", _value);
                        var result = window.localStorage.getItem("__test__localStorage__");
                        window.localStorage.removeItem("__test__localStorage__");
                        if (_value === result) return !0;
                    }
                } catch (err) {}
                return !1;
            });
        }).call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js"));
    },
    "./src/resources/cardLogos/amex.svg": function(module, exports) {
        module.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg width="40" height="24" viewBox="0 0 40 24" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" style="fill: rgb(20, 119, 190);"/>\n  <path d="M6.26 12.32h2.313L7.415 9.66M27.353 9.977h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575V15.1zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328H29.53l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z" style="fill: rgb(255, 255, 255);"/>\n</svg>';
    },
    "./src/resources/cardLogos/discover.svg": function(module, exports) {
        module.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg width="40" height="24" viewBox="0 0 40 24" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" style="fill: rgb(17, 49, 82);"/>\n  <path d="M 5.498 13.349 C 5.16 13.654 4.722 13.787 4.028 13.787 L 3.738 13.787 L 3.738 10.141 L 4.028 10.141 C 4.722 10.141 5.143 10.265 5.498 10.587 C 5.868 10.917 6.093 11.431 6.093 11.959 C 6.093 12.489 5.869 13.019 5.498 13.349 Z M 4.243 9.206 L 2.666 9.206 L 2.666 14.721 L 4.236 14.721 C 5.069 14.721 5.671 14.524 6.199 14.084 C 6.829 13.564 7.199 12.779 7.199 11.968 C 7.199 10.34 5.985 9.206 4.243 9.206 Z M 7.696 14.721 L 8.77 14.721 L 8.77 9.207 L 7.696 9.207 M 11.393 11.323 C 10.748 11.083 10.559 10.926 10.559 10.628 C 10.559 10.281 10.897 10.018 11.359 10.018 C 11.681 10.018 11.946 10.15 12.226 10.464 L 12.788 9.727 C 12.326 9.322 11.773 9.115 11.17 9.115 C 10.195 9.115 9.452 9.793 9.452 10.695 C 9.452 11.455 9.798 11.845 10.807 12.208 C 11.227 12.356 11.442 12.455 11.55 12.522 C 11.765 12.662 11.872 12.862 11.872 13.092 C 11.872 13.54 11.518 13.872 11.038 13.872 C 10.528 13.872 10.114 13.614 9.868 13.136 L 9.173 13.806 C 9.668 14.532 10.263 14.856 11.08 14.856 C 12.196 14.856 12.98 14.111 12.98 13.044 C 12.98 12.168 12.617 11.771 11.395 11.324 Z M 13.316 11.968 C 13.316 13.588 14.586 14.845 16.223 14.845 C 16.685 14.845 17.081 14.755 17.57 14.525 L 17.57 13.258 C 17.14 13.688 16.76 13.862 16.273 13.862 C 15.191 13.862 14.423 13.077 14.423 11.962 C 14.423 10.902 15.215 10.067 16.223 10.067 C 16.735 10.067 17.123 10.25 17.57 10.687 L 17.57 9.421 C 17.098 9.181 16.71 9.081 16.248 9.081 C 14.621 9.081 13.316 10.364 13.316 11.968 Z M 26.088 12.911 L 24.62 9.206 L 23.446 9.206 L 25.783 14.862 L 26.361 14.862 L 28.741 9.207 L 27.576 9.207 M 29.226 14.721 L 32.272 14.721 L 32.272 13.787 L 30.299 13.787 L 30.299 12.299 L 32.199 12.299 L 32.199 11.365 L 30.299 11.365 L 30.299 10.141 L 32.272 10.141 L 32.272 9.206 L 29.226 9.206 M 34.373 11.745 L 34.059 11.745 L 34.059 10.075 L 34.389 10.075 C 35.059 10.075 35.423 10.355 35.423 10.893 C 35.423 11.447 35.059 11.745 34.373 11.745 Z M 36.528 10.835 C 36.528 9.802 35.818 9.207 34.578 9.207 L 32.986 9.207 L 32.986 14.721 L 34.059 14.721 L 34.059 12.506 L 34.199 12.506 L 35.686 14.721 L 37.006 14.721 L 35.273 12.398 C 36.083 12.233 36.528 11.678 36.528 10.835 Z" style="fill: rgb(255, 255, 255);"/>\n  <g id="MarkingBase_1_" transform="matrix(0.089776, 0, 0, 0.089776, 2.192296, 5.72498)">\n    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="224.3917" y1="44.1731" x2="201.33" y2="80.2807" gradientTransform="matrix(1 0 0 -1 0 141.7323)">\n      <stop offset="0" style="stop-color:#F89F21"/>\n      <stop offset="0.2502" style="stop-color:#F79A23"/>\n      <stop offset="0.5331" style="stop-color:#F78E22"/>\n      <stop offset="0.6196" style="stop-color:#F68721"/>\n      <stop offset="0.7232" style="stop-color:#F48220"/>\n      <stop offset="1" style="stop-color:#F27623"/>\n    </linearGradient>\n    <circle fill="url(#SVGID_1_)" cx="207.343" cy="70.866" r="33.307"/>\n    <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="220.7487" y1="44.664" x2="187.0436" y2="110.5426" gradientTransform="matrix(1 0 0 -1 0 141.7323)">\n      <stop offset="0" style="stop-color:#F68721;stop-opacity:0"/>\n      <stop offset="0.3587" style="stop-color:#E27027;stop-opacity:0.2704"/>\n      <stop offset="0.703" style="stop-color:#D4612C;stop-opacity:0.5299"/>\n      <stop offset="0.9816" style="stop-color:#D15D2D;stop-opacity:0.74"/>\n    </linearGradient>\n    <circle opacity="0.65" fill="url(#SVGID_2_)" cx="207.343" cy="70.866" r="33.307"/>\n  </g>\n  <g id="Orange_1_" enable-background="new    " transform="matrix(0.469224, 0, 0, 0.469224, 13.785085, 6.199149)">\n    <g id="Orange">\n      <g>\n        <path d="M13,38c20.1,0,40,0,40,0c1.7,0,3-1.3,3-3V18C56,18,51.2,31.8,13,38z" style="fill: rgb(255, 129, 38);"/>\n      </g>\n    </g>\n  </g>\n</svg>';
    },
    "./src/resources/cardLogos/elo.svg": function(module, exports) {
        module.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg width="40" height="24" viewBox="0 0 40 24" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" style="fill: rgb(21, 21, 21);"/>\n  <path class="st0" d="M 9.229 8.55 C 9.592 8.431 9.977 8.365 10.382 8.365 C 12.14 8.365 13.602 9.613 13.939 11.268 L 16.427 10.762 C 15.855 7.946 13.365 5.824 10.379 5.824 C 9.693 5.824 9.037 5.935 8.42 6.142 L 9.229 8.55 Z" style="fill: rgb(255, 205, 5);"/>\n  <path class="st1" d="M 6.292 16.616 L 7.973 14.716 C 7.221 14.052 6.749 13.08 6.749 11.999 C 6.749 10.917 7.221 9.945 7.973 9.279 L 6.292 7.38 C 5.015 8.51 4.209 10.16 4.209 11.999 C 4.209 13.836 5.019 15.488 6.292 16.616" style="fill: rgb(0, 164, 224);"/>\n  <path class="st2" d="M 13.939 12.723 C 13.602 14.379 12.136 15.626 10.382 15.626 C 9.977 15.626 9.592 15.562 9.229 15.442 L 8.422 17.849 C 9.039 18.055 9.698 18.167 10.382 18.167 C 13.365 18.167 15.855 16.05 16.427 13.235 L 13.939 12.723 Z" style="fill: rgb(239, 66, 35);"/>\n  <path d="M 18.603 14.794 C 18.521 14.663 18.412 14.453 18.343 14.296 C 17.948 13.381 17.932 12.434 18.264 11.526 C 18.631 10.527 19.33 9.765 20.233 9.378 C 21.366 8.889 22.626 8.986 23.713 9.632 C 24.406 10.028 24.897 10.641 25.269 11.506 C 25.319 11.615 25.358 11.737 25.398 11.835 L 18.603 14.794 Z M 20.87 10.845 C 20.066 11.194 19.65 11.949 19.734 12.834 L 23.151 11.363 C 22.565 10.675 21.802 10.444 20.87 10.845 Z M 23.578 14.044 C 23.578 14.044 23.578 14.044 23.578 14.044 L 23.508 13.998 C 23.302 14.331 22.985 14.595 22.584 14.768 C 21.82 15.1 21.113 15.014 20.602 14.569 L 20.559 14.643 C 20.559 14.643 20.559 14.643 20.559 14.643 L 19.688 15.936 C 19.905 16.088 20.134 16.213 20.376 16.315 C 21.333 16.712 22.311 16.693 23.279 16.273 C 23.978 15.971 24.527 15.509 24.9 14.924 L 23.578 14.044 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 27.77 7.466 L 27.77 14.673 L 28.891 15.13 L 28.254 16.614 L 27.018 16.1 C 26.742 15.979 26.552 15.797 26.409 15.588 C 26.272 15.377 26.171 15.085 26.171 14.698 L 26.171 7.466 L 27.77 7.466 Z" style="fill: rgb(255, 255, 255);"/>\n  <g transform="matrix(0.037801, 0, 0, 0.037801, 1.0913, 0.089785)">\n    <path d="M782.7,337.2c0-16.2,7.2-30.8,18.5-40.7l-30.4-33.9c-20.6,18.2-33.6,44.9-33.6,74.6c0,29.7,12.9,56.4,33.6,74.7l30.4-34&#10;&#9;&#9;C789.8,367.9,782.6,353.4,782.7,337.2z" style="fill: rgb(255, 255, 255);"/>\n    <path d="M836.7,391.4c-6,0-11.8-1-17.1-2.8L805,431.7c9.9,3.3,20.6,5.1,31.6,5.2c48.2,0,88.4-34.1,97.7-79.6l-44.7-9.1&#10;&#9;&#9;C884.6,372.9,862.8,391.4,836.7,391.4z" style="fill: rgb(255, 255, 255);"/>\n    <path d="M836.8,237.6c-11,0-21.7,1.8-31.6,5.1l14.4,43.2c5.4-1.8,11.2-2.8,17.1-2.8c26.2,0,48,18.6,53,43.3l44.7-9.1&#10;&#9;&#9;C925.2,272,885,237.7,836.8,237.6z" style="fill: rgb(255, 255, 255);"/>\n  </g>\n</svg>';
    },
    "./src/resources/cardLogos/hiper.svg": function(module, exports) {
        module.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg width="40" height="24" viewBox="0 0 40 24" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <path d="M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z" style="fill: rgb(243, 97, 24);"/>\n  <path id="path16" style="fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none;" d="M 3.206 6.45 L 3.206 16.929 L 5.586 16.929 L 5.586 12.545 L 9.489 12.545 L 9.489 16.929 L 11.853 16.929 L 11.853 6.45 L 9.489 6.45 L 9.489 10.477 L 5.586 10.477 L 5.586 6.45 L 3.206 6.45"/>\n  <path id="path18" style="fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none;" d="M 32.319 13.882 C 32.351 13.71 32.397 13.353 32.397 12.949 C 32.397 11.068 31.464 9.155 29.008 9.155 C 26.364 9.155 25.167 11.285 25.167 13.213 C 25.167 15.592 26.644 17.085 29.225 17.085 C 30.251 17.085 31.2 16.929 31.977 16.618 L 31.666 15.017 C 31.029 15.219 30.376 15.328 29.567 15.328 C 28.463 15.328 27.499 14.861 27.422 13.882 Z M 27.406 12.265 C 27.468 11.628 27.873 10.725 28.868 10.725 C 29.956 10.725 30.205 11.689 30.205 12.265 L 27.406 12.265"/>\n  <path id="path20" style="fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none;" d="M 33.155 16.929 L 35.519 16.929 L 35.519 13.073 C 35.519 12.887 35.533 12.7 35.565 12.545 C 35.72 11.814 36.31 11.348 37.182 11.348 C 37.446 11.348 37.648 11.378 37.819 11.41 L 37.819 9.186 C 37.648 9.155 37.539 9.155 37.321 9.155 C 36.591 9.155 35.658 9.621 35.269 10.725 L 35.207 10.725 L 35.129 9.326 L 33.092 9.326 C 33.123 9.979 33.155 10.709 33.155 11.829 L 33.155 16.929"/>\n  <path id="path22" style="fill: rgb(254, 234, 1); fill-opacity: 1; fill-rule: evenodd; stroke: none;" d="M 14.256 6.028 C 14.927 6.028 15.472 6.572 15.472 7.243 C 15.472 7.914 14.927 8.458 14.256 8.458 C 13.585 8.458 13.041 7.914 13.041 7.243 C 13.041 6.572 13.585 6.028 14.256 6.028"/>\n  <path id="path24" style="fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: evenodd; stroke: none;" d="M 19.247 15.159 L 20.433 15.159 C 21.624 15.159 22.163 14.395 22.163 13.6 C 22.163 12.805 22.106 11.006 20.633 11.006 C 18.943 11.006 19.218 13.238 19.224 14.408 C 19.226 14.658 19.24 14.908 19.247 15.159 Z M 13.041 9.315 L 15.472 9.315 L 15.472 13.6 C 15.472 14.395 15.912 15.157 16.887 15.159 C 16.894 13.229 16.886 11.243 16.822 9.315 L 18.852 9.315 C 18.896 9.687 18.936 10.059 18.973 10.432 C 19.932 8.514 22.954 8.937 23.971 10.555 C 25.022 12.228 25.379 17.017 20.433 17.017 L 19.282 17.017 C 19.293 17.988 19.295 18.963 19.295 19.936 L 16.865 19.936 C 16.865 19.001 16.871 18.022 16.878 17.016 C 14.252 17.007 13.041 15.339 13.041 13.6 L 13.041 9.315"/>\n</svg>';
    },
    "./src/resources/cardLogos/jcb.svg": function(module, exports) {
        module.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg width="40" height="24" viewBox="0 0 40 24" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <pattern id="pattern-0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" viewBox="0 0 100 100">\n      <path d="M 0 0 L 50 0 L 50 100 L 0 100 Z" style="fill: black;"/>\n    </pattern>\n  </defs>\n  <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" style="fill: rgb(255, 255, 255); stroke: rgb(233, 234, 231);"/>\n  <g transform="matrix(0.100306, 0, 0, 0.100306, 4.733743, 10.105099)" id="g6321">\n    <g transform="matrix(1.8215159,0,0,1.8215159,-8.5437653,-109.83667)" id="g6323">\n      <path style="fill:#ffffff" id="path6325" d="m 174,108.3 c 0,14 -11.4,25.4 -25.4,25.4 l -138.2,0 0,-100.6 c 0,-14 11.4,-25.4 25.4,-25.4 l 138.2,0 0,100.6 z" class="st0"/>\n      <g id="g6327">\n        <linearGradient gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)" y2="81.398598" x2="157.3299" y1="81.398598" x1="117.3856" gradientUnits="userSpaceOnUse" id="SVGID_1_">\n          <stop id="stop6330" style="stop-color:#007940" offset="0"/>\n          <stop id="stop6332" style="stop-color:#00873F" offset="0.2285"/>\n          <stop id="stop6334" style="stop-color:#40A737" offset="0.7433"/>\n          <stop id="stop6336" style="stop-color:#5CB531" offset="1"/>\n        </linearGradient>\n        <path style="fill:url(#SVGID_1_)" id="path6338" d="m 129,82.5 10.5,0 c 0.3,0 1,-0.1 1.3,-0.1 2,-0.4 3.7,-2.2 3.7,-4.7 0,-2.4 -1.7,-4.2 -3.7,-4.7 -0.3,-0.1 -0.9,-0.1 -1.3,-0.1 l -10.5,0 0,9.6 z" class="st1"/>\n        <linearGradient gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)" y2="75.171402" x2="157.3318" y1="75.171402" x1="117.3844" gradientUnits="userSpaceOnUse" id="SVGID_2_">\n          <stop id="stop6341" style="stop-color:#007940" offset="0"/>\n          <stop id="stop6343" style="stop-color:#00873F" offset="0.2285"/>\n          <stop id="stop6345" style="stop-color:#40A737" offset="0.7433"/>\n          <stop id="stop6347" style="stop-color:#5CB531" offset="1"/>\n        </linearGradient>\n        <path style="fill:url(#SVGID_2_)" id="path6349" d="m 138.3,16.2 c -10,0 -18.2,8.1 -18.2,18.2 l 0,18.9 25.7,0 c 0.6,0 1.3,0 1.8,0.1 5.8,0.3 10.1,3.3 10.1,8.5 0,4.1 -2.9,7.6 -8.3,8.3 l 0,0.2 c 5.9,0.4 10.4,3.7 10.4,8.8 0,5.5 -5,9.1 -11.6,9.1 l -28.2,0 0,37 26.7,0 c 10,0 18.2,-8.1 18.2,-18.2 l 0,-90.9 -26.6,0 z" class="st2"/>\n        <linearGradient gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)" y2="68.399101" x2="157.33051" y1="68.399101" x1="117.3846" gradientUnits="userSpaceOnUse" id="SVGID_3_">\n          <stop id="stop6352" style="stop-color:#007940" offset="0"/>\n          <stop id="stop6354" style="stop-color:#00873F" offset="0.2285"/>\n          <stop id="stop6356" style="stop-color:#40A737" offset="0.7433"/>\n          <stop id="stop6358" style="stop-color:#5CB531" offset="1"/>\n        </linearGradient>\n        <path style="fill:url(#SVGID_3_)" id="path6360" d="m 143.2,63.1 c 0,-2.4 -1.7,-4 -3.7,-4.3 -0.2,0 -0.7,-0.1 -1,-0.1 l -9.5,0 0,8.8 9.5,0 c 0.3,0 0.9,0 1,-0.1 2,-0.3 3.7,-1.9 3.7,-4.3 z" class="st3"/>\n      </g>\n      <linearGradient gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)" y2="75.171402" x2="68.522102" y1="75.171402" x1="27.9594" gradientUnits="userSpaceOnUse" id="SVGID_4_">\n        <stop id="stop6363" style="stop-color:#1F286F" offset="0"/>\n        <stop id="stop6365" style="stop-color:#004E94" offset="0.4751"/>\n        <stop id="stop6367" style="stop-color:#0066B1" offset="0.8261"/>\n        <stop id="stop6369" style="stop-color:#006FBC" offset="1"/>\n      </linearGradient>\n      <path style="fill:url(#SVGID_4_)" id="path6371" d="m 37.7,16.2 c -10,0 -18.2,8.1 -18.2,18.2 l 0,44.9 c 5.1,2.5 10.4,4.1 15.7,4.1 6.3,0 9.7,-3.8 9.7,-9 l 0,-21.2 15.6,0 0,21.1 c 0,8.2 -5.1,14.9 -22.4,14.9 -10.5,0 -18.7,-2.3 -18.7,-2.3 l 0,38.3 26.7,0 c 10,0 18.2,-8.1 18.2,-18.2 l 0,-90.8 -26.6,0 z" class="st4"/>\n      <linearGradient gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)" y2="75.171402" x2="111.8553" y1="75.171402" x1="72.459503" gradientUnits="userSpaceOnUse" id="SVGID_5_">\n        <stop id="stop6374" style="stop-color:#6C2C2F" offset="0"/>\n        <stop id="stop6376" style="stop-color:#882730" offset="0.1735"/>\n        <stop id="stop6378" style="stop-color:#BE1833" offset="0.5731"/>\n        <stop id="stop6380" style="stop-color:#DC0436" offset="0.8585"/>\n        <stop id="stop6382" style="stop-color:#E60039" offset="1"/>\n      </linearGradient>\n      <path style="fill:url(#SVGID_5_)" id="path6384" d="m 88,16.2 c -10,0 -18.2,8.1 -18.2,18.2 l 0,23.8 c 4.6,-3.9 12.6,-6.4 25.5,-5.8 6.9,0.3 14.3,2.2 14.3,2.2 l 0,7.7 c -3.7,-1.9 -8.1,-3.6 -13.8,-4 -9.8,-0.7 -15.7,4.1 -15.7,12.5 0,8.5 5.9,13.3 15.7,12.5 5.7,-0.4 10.1,-2.2 13.8,-4 l 0,7.7 c 0,0 -7.3,1.9 -14.3,2.2 -12.9,0.6 -20.9,-1.9 -25.5,-5.8 l 0,42 26.7,0 c 10,0 18.2,-8.1 18.2,-18.2 l 0,-91 -26.7,0 z" class="st5"/>\n    </g>\n    <g id="g6386"/>\n  </g>\n</svg>';
    },
    "./src/resources/cardLogos/mastercard.svg": function(module, exports) {
        module.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg width="40" height="24" viewBox="0 0 40 24" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <path d="M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z" style="fill: rgb(62, 57, 57);"/>\n  <path style="fill: rgb(255, 95, 0);" d="M 22.205 3.901 L 15.688 3.901 L 15.688 15.589 L 22.205 15.589"/>\n  <path d="M 16.1 9.747 C 16.1 7.371 17.218 5.265 18.935 3.901 C 17.67 2.912 16.078 2.312 14.342 2.312 C 10.223 2.312 6.892 5.636 6.892 9.746 C 6.892 13.853 10.223 17.178 14.342 17.178 C 16.078 17.178 17.67 16.58 18.935 15.588 C 17.216 14.246 16.099 12.119 16.099 9.745 Z" style="fill: rgb(235, 0, 27);"/>\n  <path d="M 30.996 9.747 C 30.996 13.854 27.663 17.179 23.547 17.179 C 21.81 17.179 20.216 16.581 18.954 15.589 C 20.691 14.227 21.788 12.12 21.788 9.746 C 21.788 7.37 20.671 5.264 18.954 3.9 C 20.216 2.911 21.81 2.311 23.547 2.311 C 27.663 2.311 30.996 5.657 30.996 9.745 Z" style="fill: rgb(247, 158, 27);"/>\n  <path d="M 7.167 22.481 L 7.167 20.43 C 7.167 19.641 6.685 19.127 5.857 19.127 C 5.443 19.127 4.993 19.262 4.683 19.71 C 4.44 19.332 4.096 19.127 3.579 19.127 C 3.233 19.127 2.888 19.23 2.612 19.607 L 2.612 19.197 L 1.886 19.197 L 1.886 22.481 L 2.612 22.481 L 2.612 20.668 C 2.612 20.086 2.921 19.812 3.406 19.812 C 3.888 19.812 4.131 20.121 4.131 20.669 L 4.131 22.481 L 4.856 22.481 L 4.856 20.668 C 4.856 20.086 5.204 19.812 5.651 19.812 C 6.137 19.812 6.377 20.121 6.377 20.669 L 6.377 22.481 L 7.171 22.481 Z M 17.909 19.197 L 16.734 19.197 L 16.734 18.204 L 16.007 18.204 L 16.007 19.197 L 15.352 19.197 L 15.352 19.845 L 16.007 19.845 L 16.007 21.351 C 16.007 22.106 16.319 22.551 17.146 22.551 C 17.459 22.551 17.804 22.449 18.044 22.309 L 17.839 21.695 C 17.632 21.831 17.389 21.867 17.216 21.867 C 16.872 21.867 16.734 21.66 16.734 21.319 L 16.734 19.847 L 17.909 19.847 L 17.909 19.198 Z M 24.053 19.127 C 23.639 19.127 23.364 19.332 23.191 19.607 L 23.191 19.197 L 22.465 19.197 L 22.465 22.481 L 23.191 22.481 L 23.191 20.633 C 23.191 20.086 23.434 19.777 23.882 19.777 C 24.018 19.777 24.192 19.812 24.33 19.847 L 24.538 19.162 C 24.401 19.127 24.192 19.127 24.052 19.127 Z M 14.765 19.469 C 14.42 19.229 13.937 19.127 13.418 19.127 C 12.588 19.127 12.036 19.538 12.036 20.188 C 12.036 20.736 12.453 21.044 13.175 21.146 L 13.524 21.181 C 13.903 21.249 14.108 21.351 14.108 21.523 C 14.108 21.765 13.832 21.934 13.35 21.934 C 12.864 21.934 12.484 21.764 12.244 21.592 L 11.898 22.139 C 12.278 22.411 12.794 22.549 13.313 22.549 C 14.28 22.549 14.831 22.105 14.831 21.488 C 14.831 20.908 14.383 20.599 13.692 20.496 L 13.348 20.462 C 13.037 20.428 12.795 20.36 12.795 20.155 C 12.795 19.914 13.038 19.777 13.418 19.777 C 13.83 19.777 14.245 19.949 14.453 20.052 L 14.764 19.469 Z M 34.033 19.127 C 33.618 19.127 33.342 19.332 33.171 19.607 L 33.171 19.197 L 32.445 19.197 L 32.445 22.481 L 33.171 22.481 L 33.171 20.633 C 33.171 20.086 33.414 19.777 33.862 19.777 C 33.998 19.777 34.17 19.812 34.307 19.847 L 34.515 19.162 C 34.38 19.127 34.172 19.127 34.033 19.127 Z M 24.779 20.838 C 24.779 21.834 25.47 22.551 26.54 22.551 C 27.025 22.551 27.369 22.449 27.715 22.173 L 27.369 21.593 C 27.092 21.798 26.816 21.901 26.504 21.901 C 25.919 21.901 25.505 21.49 25.505 20.84 C 25.505 20.226 25.919 19.813 26.507 19.78 C 26.816 19.78 27.092 19.883 27.369 20.089 L 27.715 19.507 C 27.369 19.233 27.024 19.13 26.54 19.13 C 25.47 19.13 24.779 19.85 24.779 20.841 Z M 31.478 20.838 L 31.478 19.198 L 30.75 19.198 L 30.75 19.608 C 30.51 19.3 30.165 19.128 29.717 19.128 C 28.784 19.128 28.058 19.848 28.058 20.84 C 28.058 21.835 28.784 22.552 29.716 22.552 C 30.197 22.552 30.543 22.382 30.748 22.074 L 30.748 22.484 L 31.477 22.484 L 31.477 20.84 Z M 28.818 20.838 C 28.818 20.259 29.196 19.779 29.819 19.779 C 30.406 19.779 30.821 20.224 30.821 20.84 C 30.821 21.424 30.406 21.902 29.819 21.902 C 29.196 21.869 28.818 21.424 28.818 20.841 Z M 20.148 19.128 C 19.183 19.128 18.494 19.813 18.494 20.84 C 18.494 21.869 19.183 22.552 20.185 22.552 C 20.671 22.552 21.154 22.417 21.533 22.108 L 21.188 21.595 C 20.914 21.799 20.565 21.937 20.222 21.937 C 19.772 21.937 19.323 21.732 19.219 21.149 L 21.671 21.149 L 21.671 20.878 C 21.705 19.815 21.083 19.13 20.15 19.13 Z M 20.148 19.748 C 20.6 19.748 20.911 20.019 20.98 20.532 L 19.253 20.532 C 19.321 20.087 19.633 19.748 20.148 19.748 Z M 38.141 20.84 L 38.141 17.898 L 37.412 17.898 L 37.412 19.61 C 37.173 19.302 36.828 19.13 36.38 19.13 C 35.446 19.13 34.721 19.85 34.721 20.841 C 34.721 21.837 35.446 22.554 36.379 22.554 C 36.861 22.554 37.206 22.383 37.41 22.076 L 37.41 22.486 L 38.14 22.486 L 38.14 20.841 Z M 35.481 20.84 C 35.481 20.261 35.861 19.78 36.484 19.78 C 37.069 19.78 37.486 20.226 37.486 20.841 C 37.486 21.426 37.069 21.904 36.484 21.904 C 35.861 21.87 35.481 21.426 35.481 20.843 Z M 11.237 20.84 L 11.237 19.2 L 10.515 19.2 L 10.515 19.61 C 10.272 19.302 9.928 19.13 9.478 19.13 C 8.545 19.13 7.82 19.85 7.82 20.841 C 7.82 21.837 8.545 22.554 9.477 22.554 C 9.96 22.554 10.304 22.383 10.512 22.076 L 10.512 22.486 L 11.236 22.486 L 11.236 20.841 Z M 8.546 20.84 C 8.546 20.261 8.926 19.78 9.548 19.78 C 10.134 19.78 10.55 20.226 10.55 20.841 C 10.55 21.426 10.134 21.904 9.548 21.904 C 8.926 21.87 8.546 21.426 8.546 20.843 Z" style="fill: rgb(255, 255, 255);"/>\n</svg>';
    },
    "./src/resources/cardLogos/visa.svg": function(module, exports) {
        module.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg width="40" height="24" viewBox="0 0 40 24" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <path d="M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z" style="fill: rgb(33, 86, 154);"/>\n  <path d="M19.596 7.885l-2.11 9.478H14.93l2.11-9.478h2.554zm10.743 6.12l1.343-3.56.773 3.56H30.34zm2.85 3.358h2.36l-2.063-9.478H31.31c-.492 0-.905.274-1.088.695l-3.832 8.783h2.682l.532-1.415h3.276l.31 1.415zm-6.667-3.094c.01-2.502-3.6-2.64-3.577-3.76.008-.338.345-.7 1.083-.793.365-.045 1.373-.08 2.517.425l.448-2.01c-.615-.214-1.405-.42-2.39-.42-2.523 0-4.3 1.288-4.313 3.133-.016 1.364 1.268 2.125 2.234 2.58.996.464 1.33.762 1.325 1.177-.006.636-.793.918-1.526.928-1.285.02-2.03-.333-2.623-.6l-.462 2.08c.598.262 1.7.49 2.84.502 2.682 0 4.437-1.273 4.445-3.243zM15.948 7.884l-4.138 9.478h-2.7L7.076 9.8c-.123-.466-.23-.637-.606-.834-.615-.32-1.63-.62-2.52-.806l.06-.275h4.345c.554 0 1.052.354 1.178.966l1.076 5.486 2.655-6.45h2.683z" style="fill: rgb(255, 255, 255);"/>\n</svg>';
    },
    "./src/resources/fundingLogos/credit_white.svg": function(module, exports) {
        module.exports = '<svg width="100" height="32" viewBox="0 0 95 32" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <path fill="#ffffff" d="M 52.732 6.347 C 52.83 5.963 53.122 5.675 53.512 5.675 L 60.626 5.675 C 66.571 5.675 70.664 10.187 69.69 15.851 C 68.813 21.515 63.16 25.931 57.313 25.931 L 50.004 25.931 C 49.711 25.931 49.516 25.739 49.614 25.451 L 52.732 6.347 Z M 55.753 21.515 L 57.02 21.515 C 60.236 21.515 63.355 19.787 64.037 15.851 C 64.622 12.203 62.478 10.187 58.97 10.187 L 57.995 10.187 C 57.8 10.187 57.605 10.283 57.605 10.475 L 55.753 21.515 Z"/>\n  <path fill="#ffffff" d="M 43.571 10.763 L 43.084 13.547 L 48.737 13.547 C 49.029 13.547 49.224 13.739 49.224 14.027 L 48.639 17.387 C 48.542 17.771 48.249 17.963 47.859 17.963 L 42.987 17.963 C 42.597 17.963 42.304 18.251 42.207 18.635 L 41.72 21.515 L 47.762 21.515 C 48.054 21.515 48.249 21.707 48.152 21.995 L 47.665 25.355 C 47.567 25.643 47.275 25.931 46.885 25.931 L 36.067 25.931 C 35.775 25.931 35.58 25.643 35.58 25.451 L 38.699 6.347 C 38.796 5.963 39.186 5.675 39.478 5.675 L 50.393 5.675 C 50.588 5.675 50.881 5.963 50.783 6.155 L 50.296 9.515 C 50.198 9.899 49.906 10.091 49.516 10.091 L 44.254 10.091 C 43.864 10.187 43.571 10.379 43.571 10.763 Z"/>\n  <path fill="#ffffff" d="M 74.563 25.931 L 70.274 25.931 C 69.982 25.931 69.787 25.739 69.787 25.451 L 73.003 6.347 C 73.003 5.963 73.393 5.675 73.685 5.675 L 78.071 5.675 C 78.266 5.675 78.558 5.963 78.461 6.251 L 75.342 25.355 C 75.245 25.643 74.952 25.931 74.563 25.931 Z"/>\n  <path fill="#ffffff" d="M 34.118 25.931 L 28.466 25.931 C 28.173 25.931 27.978 25.835 27.881 25.643 L 24.178 18.155 L 24.08 18.155 L 22.911 25.451 C 22.813 25.739 22.618 25.931 22.326 25.931 L 17.843 25.931 C 17.551 25.931 17.356 25.739 17.453 25.451 L 20.572 6.251 C 20.669 5.963 20.864 5.675 21.156 5.675 L 28.855 5.675 C 33.046 5.675 35.97 7.595 35.288 11.915 C 34.8 14.699 32.754 17.195 29.635 17.675 L 34.508 25.355 C 34.703 25.547 34.411 25.931 34.118 25.931 Z M 24.665 14.795 L 25.152 14.795 C 27.004 14.795 29.05 14.411 29.44 12.203 C 29.83 10.091 28.661 9.707 26.711 9.707 L 25.932 9.707 C 25.639 9.707 25.445 9.899 25.445 10.091 L 24.665 14.795 Z"/>\n  <path fill="#ffffff" d="M 86.16 25.931 L 81.872 25.931 C 81.579 25.931 81.384 25.739 81.482 25.451 L 83.918 10.187 L 79.923 10.187 C 79.63 10.187 79.435 9.899 79.533 9.611 L 80.02 6.347 C 80.118 5.963 80.41 5.675 80.8 5.675 L 94.249 5.675 C 94.444 5.675 94.736 5.963 94.639 6.251 L 94.054 9.515 C 94.054 9.899 93.761 10.187 93.372 10.187 L 89.473 10.187 L 86.939 25.355 C 86.939 25.643 86.647 25.931 86.16 25.931 Z"/>\n  <path fill="#ffffff" d="M 17.648 11.435 C 17.648 11.819 17.161 12.011 16.868 11.723 C 15.894 10.763 14.529 10.283 13.068 10.283 C 9.657 10.283 7.025 12.779 6.441 15.851 C 5.953 19.019 7.902 21.323 11.313 21.323 C 12.678 21.323 14.237 20.843 15.407 19.979 C 15.796 19.787 16.284 20.075 16.186 20.459 L 15.407 25.067 C 15.309 25.355 15.114 25.547 14.822 25.643 C 13.165 26.123 11.898 26.507 10.339 26.507 C 1.178 26.507 -0.284 19.019 0.203 15.851 C 1.47 6.923 9.072 4.907 13.652 5.195 C 15.114 5.195 16.479 5.387 17.745 5.867 C 18.233 6.059 18.428 6.443 18.33 6.923 L 17.648 11.435 Z"/>\n</svg>\n';
    },
    "./src/resources/fundingLogos/elv.svg": function(module, exports) {
        module.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg width="100" height="32" viewBox="0 0 100 32" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <path fill="#005DA0" d="M 39.871 18.772 C 37.78 18.772 35.843 18.278 34.272 17.425 L 34.81 13.935 C 36.409 14.769 38.051 15.263 39.826 15.263 C 41.809 15.263 42.661 14.544 42.661 13.284 C 42.661 10.45 34.34 11.641 34.34 5.59 C 34.34 2.53 36.319 0.055 40.885 0.055 C 42.639 0.055 44.549 0.416 45.946 0.999 L 45.474 4.395 C 43.989 3.926 42.481 3.633 41.108 3.633 C 38.86 3.633 38.275 4.395 38.275 5.364 C 38.275 8.175 46.598 6.895 46.598 13.013 C 46.576 16.569 44.101 18.772 39.871 18.772 Z"/>\n  <path fill="#005DA0" d="M 62.233 14.881 L 62.233 18.413 L 49.951 18.413 L 49.951 0.345 L 62.233 0.345 L 62.233 3.946 L 54.022 3.946 L 54.022 7.549 L 60.705 7.549 L 60.705 10.787 L 54.022 10.787 L 54.022 14.905 L 62.233 14.905 Z"/>\n  <path fill="#005DA0" d="M 72.313 12.565 L 69.905 12.565 L 69.905 18.437 L 65.834 18.437 L 65.834 0.345 L 72.313 0.345 C 77.328 0.345 79.376 2.328 79.376 6.534 C 79.376 10.361 77.355 12.565 72.313 12.565 Z M 72.313 3.766 L 69.905 3.766 L 69.905 9.302 L 72.313 9.302 C 74.314 9.302 75.194 8.808 75.194 6.534 C 75.194 4.352 74.428 3.766 72.313 3.766 Z"/>\n  <path fill="#005DA0" d="M 91.797 14.924 L 85.246 14.924 L 84.234 18.437 L 79.939 18.437 L 86.193 0.345 L 91.031 0.345 L 97.352 18.437 L 92.808 18.437 L 91.797 14.924 Z M 88.04 5.318 L 86.238 11.506 L 90.85 11.506 L 89.118 5.318 L 88.645 3.408 L 88.578 3.408 L 88.04 5.318 Z"/>\n  <path fill="#005DA0" d="M 39.736 30.157 L 39.692 31.867 L 34.382 31.867 L 34.382 23.475 L 36.299 23.475 L 36.299 30.157 L 39.736 30.157 Z"/>\n  <path fill="#005DA0" d="M 44.798 31.215 L 44.778 31.215 C 44.371 31.71 43.722 31.977 42.931 31.977 C 41.648 31.977 40.818 31.257 40.818 29.727 C 40.818 28.468 41.695 27.613 43.222 27.613 C 43.722 27.613 44.168 27.68 44.527 27.796 L 44.527 27.411 C 44.527 26.736 44.168 26.421 43.244 26.421 C 42.505 26.421 42.007 26.534 41.382 26.782 L 41.245 25.387 C 41.919 25.095 42.707 24.936 43.563 24.936 C 45.563 24.936 46.263 25.792 46.263 27.658 L 46.263 31.867 L 44.933 31.867 L 44.798 31.215 Z M 44.549 28.966 C 44.393 28.896 44.056 28.828 43.583 28.828 C 42.819 28.828 42.46 29.12 42.46 29.727 C 42.46 30.38 42.842 30.63 43.427 30.63 C 44.012 30.63 44.549 30.271 44.549 29.842 L 44.549 28.966 Z"/>\n  <path fill="#005DA0" d="M 50.02 32.002 C 49.21 32.002 48.466 31.842 47.883 31.529 L 48.062 30.088 C 48.625 30.405 49.41 30.561 49.996 30.561 C 50.693 30.561 50.986 30.29 50.986 29.887 C 50.986 28.807 47.84 29.436 47.84 27.051 C 47.84 25.838 48.667 24.959 50.403 24.959 C 51.075 24.959 51.752 25.095 52.336 25.32 L 52.201 26.736 C 51.64 26.512 50.897 26.396 50.381 26.396 C 49.816 26.396 49.503 26.625 49.503 26.961 C 49.503 27.995 52.603 27.366 52.603 29.707 C 52.603 31.101 51.862 32.002 50.02 32.002 Z"/>\n  <path fill="#005DA0" d="M 56.026 26.375 L 56.026 29.842 C 56.026 30.36 56.295 30.582 56.836 30.582 C 57.014 30.582 57.239 30.561 57.374 30.514 L 57.464 31.776 C 57.239 31.888 56.789 31.956 56.295 31.956 C 54.946 31.956 54.27 31.169 54.27 29.887 L 54.27 26.352 L 53.506 26.352 L 53.506 25.095 L 54.337 25.095 L 54.631 23.562 L 56.002 23.451 L 56.002 25.116 L 57.51 25.116 L 57.51 26.421 L 56.026 26.421 Z"/>\n  <path fill="#005DA0" d="M 60.885 32.002 C 60.073 32.002 59.331 31.842 58.748 31.529 L 58.929 30.088 C 59.49 30.405 60.275 30.561 60.862 30.561 C 61.561 30.561 61.851 30.29 61.851 29.887 C 61.851 28.807 58.702 29.436 58.702 27.051 C 58.702 25.838 59.534 24.959 61.269 24.959 C 61.943 24.959 62.615 25.095 63.203 25.32 L 63.069 26.736 C 62.505 26.512 61.764 26.396 61.246 26.396 C 60.681 26.396 60.367 26.625 60.367 26.961 C 60.367 27.995 63.47 27.366 63.47 29.707 C 63.47 31.101 62.729 32.002 60.885 32.002 Z"/>\n  <path fill="#005DA0" d="M 69.365 26.736 C 69.028 26.625 68.603 26.534 68.22 26.534 C 66.958 26.534 66.53 27.051 66.53 28.49 C 66.53 29.954 67.116 30.514 68.174 30.514 C 68.623 30.514 69.05 30.425 69.41 30.271 L 69.525 31.616 C 69.119 31.867 68.511 32.002 67.792 32.002 C 65.787 32.002 64.732 30.854 64.732 28.49 C 64.732 26.242 65.653 24.981 67.835 24.981 C 68.397 24.981 69.05 25.095 69.479 25.276 L 69.365 26.736 Z"/>\n  <path fill="#005DA0" d="M 75.078 31.867 L 75.078 27.546 C 75.078 26.849 74.743 26.491 74.001 26.491 C 73.508 26.491 73.055 26.714 72.855 27.008 L 72.855 31.867 L 71.122 31.867 L 71.122 23.16 L 72.855 23.069 L 72.855 24.622 L 72.83 25.52 L 72.855 25.545 C 73.348 25.116 73.979 24.959 74.541 24.959 C 75.98 24.959 76.812 25.926 76.812 27.546 L 76.812 31.867 L 75.078 31.867 Z"/>\n  <path fill="#005DA0" d="M 78.658 31.867 L 78.658 25.139 L 80.052 25.072 L 80.21 26.199 L 80.231 26.199 C 80.66 25.387 81.313 24.981 82.098 24.981 C 82.39 24.981 82.663 25.028 82.84 25.072 L 82.731 26.782 C 82.528 26.714 82.257 26.667 81.985 26.667 C 81.088 26.667 80.413 27.321 80.413 28.468 L 80.413 31.867 L 78.658 31.867 Z"/>\n  <path fill="#005DA0" d="M 85.382 24.35 C 84.708 24.35 84.395 24.172 84.395 23.609 C 84.395 23.136 84.708 22.867 85.382 22.867 C 86.058 22.867 86.375 23.113 86.375 23.609 C 86.354 24.105 86.058 24.35 85.382 24.35 Z M 84.484 31.867 L 84.484 25.139 L 86.259 25.072 L 86.259 31.888 L 84.484 31.888 Z"/>\n  <path fill="#005DA0" d="M 88.757 31.867 L 88.757 26.375 L 87.902 26.375 L 87.902 25.095 L 88.757 25.095 L 88.757 24.798 C 88.757 23.79 89.454 22.935 91.076 22.935 C 91.459 22.935 91.885 22.979 92.178 23.069 L 92.063 24.195 C 91.863 24.147 91.636 24.126 91.411 24.126 C 90.738 24.126 90.466 24.399 90.466 24.825 L 90.466 25.072 L 91.907 25.072 L 91.907 26.352 L 90.466 26.352 L 90.466 31.842 L 88.757 31.842 Z"/>\n  <path fill="#005DA0" d="M 95.486 26.375 L 95.486 29.842 C 95.486 30.36 95.754 30.582 96.296 30.582 C 96.473 30.582 96.698 30.561 96.834 30.514 L 96.924 31.776 C 96.698 31.888 96.249 31.956 95.754 31.956 C 94.406 31.956 93.729 31.169 93.729 29.887 L 93.729 26.352 L 92.965 26.352 L 92.965 25.095 L 93.798 25.095 L 94.09 23.562 L 95.461 23.451 L 95.461 25.116 L 96.969 25.116 L 96.969 26.421 L 95.486 26.421 Z"/>\n  <path fill="#AEB1BC" d="M 20.357 8.826 L 15.368 5.081 L 10.379 1.334 C 10.033 1.074 9.54 1.146 9.281 1.493 L 4.883 7.322 C 4.811 7.409 4.768 7.51 4.754 7.624 C 4.68 7.93 4.782 8.248 5.043 8.45 L 8.022 10.677 L 12.042 13.698 L 15.021 15.926 C 15.281 16.13 15.629 16.13 15.888 15.97 C 15.991 15.912 16.062 15.854 16.136 15.752 L 20.531 9.91 C 20.763 9.578 20.706 9.087 20.357 8.826 Z M 10.047 1.769 L 13.012 3.995 L 13.012 3.995 L 15.021 5.5 L 17.046 7.017 L 17.046 7.017 L 20.025 9.245 C 20.142 9.332 20.156 9.491 20.082 9.607 L 19.374 10.591 L 16.005 8.058 L 12.36 5.326 L 8.976 2.809 L 9.684 1.826 C 9.772 1.709 9.931 1.682 10.047 1.769 Z M 15.673 15.463 C 15.629 15.507 15.585 15.536 15.528 15.55 C 15.469 15.564 15.398 15.55 15.339 15.507 L 12.345 13.265 L 8.34 10.257 L 5.361 8.001 C 5.302 7.958 5.275 7.9 5.259 7.842 C 5.259 7.785 5.259 7.726 5.302 7.669 L 6.113 6.585 C 6.113 6.585 7.009 5.427 7.791 4.386 L 11.16 6.917 L 14.804 9.65 L 18.173 12.181 C 17.393 13.222 16.496 14.379 16.496 14.379 L 15.673 15.463 Z"/>\n  <g transform="matrix(0.144619, 0, 0, 0.144619, -7.250457, -3.988513)">\n    <path fill="#005DA0" d="M197.1,150.4l52-69.6l5.3-7c0,0,0.1-0.2,0.2-0.2c0.4-0.5,0.3-1.2-0.2-1.6l-14.7-10.7&#10;&#9;&#9;&#9;c-0.5-0.4-1.2-0.2-1.6,0.3c-0.1,0.1-0.2,0.2-0.2,0.2l-2,2.5l-64.3,86l-70.8,0l-26.5,87.4h177.1l-25-87.4L197.1,150.4z M79.1,234.3&#10;&#9;&#9;&#9;l24.2-80.5l65.7,0l-5.7,7.6l-8.1,11.3l-0.9,1.7l-0.9,1.9l-0.9,2.2l-0.9,2.3l-0.9,2.5l-0.9,2.5l-0.8,2.5l-0.8,2.4l-0.7,2.3&#10;&#9;&#9;&#9;l-0.7,2.1l-0.6,1.9l-0.4,1.6l-0.3,1.2l-0.3,0.7c0,0-0.1,0.2-0.2,0.4c-0.2,0.2-1.2,1.1-2,0.5c-0.8-0.6-0.7-2.6-0.6-3.6&#10;&#9;&#9;&#9;c0.2-3,0.5-6,0.7-8.9c0.1-1-1.2-1.6-2-1.2c-3.6,2.1-5.8,4.6-7.8,7.5c0.2-0.7,0.4-1.4,0.6-2c0.8-3.1,2-6.2,2.5-9.4&#10;&#9;&#9;&#9;c0.3-1.8-0.2-3.9-2.3-4.3c-2.4-0.4-3.9,2.1-5.1,3.7c-3.5,5-5.6,11.2-9.9,15.5c-1.6,1.6-3.5,2.8-5.8,2.1c-2.7-0.8-3.8,2.4,1,2.9&#10;&#9;&#9;&#9;c4.7,0.4,8.3-4.6,10.4-8.1c1.6-2.5,2.9-5.2,4.5-7.8c0.7-1.2,1.5-2.4,2.3-3.6c0.4-0.5,1-1.8,1.7-2c0.8-0.2,0.6,0.3,0.6,0.9&#10;&#9;&#9;&#9;c-0.1,1.5-0.7,3-1.1,4.5c-0.4,1.6-0.9,3.2-1.3,4.7c-0.9,3.4-1.8,6.8-2.8,10.1c-0.4,1.5,1.6,2.2,2.5,1c3.4-4.8,5.1-8.9,9.2-12.1&#10;&#9;&#9;&#9;c-0.1,1.1-0.2,2.1-0.3,3.2c-0.1,1.7-0.5,3.6-0.4,5.3c0.2,2.9,2.4,4.8,5.1,3.6c1.4-0.7,2.4-1.7,2.4-1.7l0.2-0.1l0.6-0.4l1-0.7&#10;&#9;&#9;&#9;l1.4-1l1.6-1.2l1.7-1.2l2.1-1.4l2.1-1.5l2.1-1.5l2.1-1.5l2-1.5l1.9-1.4l1.8-1.4l1.5-1.2l1.2-1.1l1-0.9l0-0.1l0,0l6.5-7.6&#10;&#9;&#9;&#9;l16.6-22.1l29.4,0l22.9,80.5H79.1z"/>\n    <path fill="#005DA0" d="M261.1,77.1l-1.9-1.5c-0.4-0.3-0.9-0.2-1.2,0.2l-24.7,32.9c-0.3,0.4-0.2,0.9,0.2,1.2l1.9,1.5&#10;&#9;&#9;&#9;c0.4,0.3,0.9,0.2,1.2-0.2l24.7-32.9C261.5,77.9,261.5,77.4,261.1,77.1z"/>\n    <polygon fill="#005DA0" points="161.7,217.2 210.9,217.2 209.9,213.3 161.7,213.3 113.6,213.3 112.5,217.2 &#9;&#9;"/>\n  </g>\n</svg>';
    },
    "./src/resources/fundingLogos/elv_white.svg": function(module, exports) {
        module.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg width="100" height="32" viewBox="0 0 100 32" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <path d="M 39.871 18.772 C 37.78 18.772 35.843 18.278 34.272 17.425 L 34.81 13.935 C 36.409 14.769 38.051 15.263 39.826 15.263 C 41.809 15.263 42.661 14.544 42.661 13.284 C 42.661 10.45 34.34 11.641 34.34 5.59 C 34.34 2.53 36.319 0.055 40.885 0.055 C 42.639 0.055 44.549 0.416 45.946 0.999 L 45.474 4.395 C 43.989 3.926 42.481 3.633 41.108 3.633 C 38.86 3.633 38.275 4.395 38.275 5.364 C 38.275 8.175 46.598 6.895 46.598 13.013 C 46.576 16.569 44.101 18.772 39.871 18.772 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 62.233 14.881 L 62.233 18.413 L 49.951 18.413 L 49.951 0.345 L 62.233 0.345 L 62.233 3.946 L 54.022 3.946 L 54.022 7.549 L 60.705 7.549 L 60.705 10.787 L 54.022 10.787 L 54.022 14.905 L 62.233 14.905 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 72.313 12.565 L 69.905 12.565 L 69.905 18.437 L 65.834 18.437 L 65.834 0.345 L 72.313 0.345 C 77.328 0.345 79.376 2.328 79.376 6.534 C 79.376 10.361 77.355 12.565 72.313 12.565 Z M 72.313 3.766 L 69.905 3.766 L 69.905 9.302 L 72.313 9.302 C 74.314 9.302 75.194 8.808 75.194 6.534 C 75.194 4.352 74.428 3.766 72.313 3.766 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 91.797 14.924 L 85.246 14.924 L 84.234 18.437 L 79.939 18.437 L 86.193 0.345 L 91.031 0.345 L 97.352 18.437 L 92.808 18.437 L 91.797 14.924 Z M 88.04 5.318 L 86.238 11.506 L 90.85 11.506 L 89.118 5.318 L 88.645 3.408 L 88.578 3.408 L 88.04 5.318 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 39.736 30.157 L 39.692 31.867 L 34.382 31.867 L 34.382 23.475 L 36.299 23.475 L 36.299 30.157 L 39.736 30.157 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 44.798 31.215 L 44.778 31.215 C 44.371 31.71 43.722 31.977 42.931 31.977 C 41.648 31.977 40.818 31.257 40.818 29.727 C 40.818 28.468 41.695 27.613 43.222 27.613 C 43.722 27.613 44.168 27.68 44.527 27.796 L 44.527 27.411 C 44.527 26.736 44.168 26.421 43.244 26.421 C 42.505 26.421 42.007 26.534 41.382 26.782 L 41.245 25.387 C 41.919 25.095 42.707 24.936 43.563 24.936 C 45.563 24.936 46.263 25.792 46.263 27.658 L 46.263 31.867 L 44.933 31.867 L 44.798 31.215 Z M 44.549 28.966 C 44.393 28.896 44.056 28.828 43.583 28.828 C 42.819 28.828 42.46 29.12 42.46 29.727 C 42.46 30.38 42.842 30.63 43.427 30.63 C 44.012 30.63 44.549 30.271 44.549 29.842 L 44.549 28.966 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 50.02 32.002 C 49.21 32.002 48.466 31.842 47.883 31.529 L 48.062 30.088 C 48.625 30.405 49.41 30.561 49.996 30.561 C 50.693 30.561 50.986 30.29 50.986 29.887 C 50.986 28.807 47.84 29.436 47.84 27.051 C 47.84 25.838 48.667 24.959 50.403 24.959 C 51.075 24.959 51.752 25.095 52.336 25.32 L 52.201 26.736 C 51.64 26.512 50.897 26.396 50.381 26.396 C 49.816 26.396 49.503 26.625 49.503 26.961 C 49.503 27.995 52.603 27.366 52.603 29.707 C 52.603 31.101 51.862 32.002 50.02 32.002 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 56.026 26.375 L 56.026 29.842 C 56.026 30.36 56.295 30.582 56.836 30.582 C 57.014 30.582 57.239 30.561 57.374 30.514 L 57.464 31.776 C 57.239 31.888 56.789 31.956 56.295 31.956 C 54.946 31.956 54.27 31.169 54.27 29.887 L 54.27 26.352 L 53.506 26.352 L 53.506 25.095 L 54.337 25.095 L 54.631 23.562 L 56.002 23.451 L 56.002 25.116 L 57.51 25.116 L 57.51 26.421 L 56.026 26.421 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 60.885 32.002 C 60.073 32.002 59.331 31.842 58.748 31.529 L 58.929 30.088 C 59.49 30.405 60.275 30.561 60.862 30.561 C 61.561 30.561 61.851 30.29 61.851 29.887 C 61.851 28.807 58.702 29.436 58.702 27.051 C 58.702 25.838 59.534 24.959 61.269 24.959 C 61.943 24.959 62.615 25.095 63.203 25.32 L 63.069 26.736 C 62.505 26.512 61.764 26.396 61.246 26.396 C 60.681 26.396 60.367 26.625 60.367 26.961 C 60.367 27.995 63.47 27.366 63.47 29.707 C 63.47 31.101 62.729 32.002 60.885 32.002 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 69.365 26.736 C 69.028 26.625 68.603 26.534 68.22 26.534 C 66.958 26.534 66.53 27.051 66.53 28.49 C 66.53 29.954 67.116 30.514 68.174 30.514 C 68.623 30.514 69.05 30.425 69.41 30.271 L 69.525 31.616 C 69.119 31.867 68.511 32.002 67.792 32.002 C 65.787 32.002 64.732 30.854 64.732 28.49 C 64.732 26.242 65.653 24.981 67.835 24.981 C 68.397 24.981 69.05 25.095 69.479 25.276 L 69.365 26.736 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 75.078 31.867 L 75.078 27.546 C 75.078 26.849 74.743 26.491 74.001 26.491 C 73.508 26.491 73.055 26.714 72.855 27.008 L 72.855 31.867 L 71.122 31.867 L 71.122 23.16 L 72.855 23.069 L 72.855 24.622 L 72.83 25.52 L 72.855 25.545 C 73.348 25.116 73.979 24.959 74.541 24.959 C 75.98 24.959 76.812 25.926 76.812 27.546 L 76.812 31.867 L 75.078 31.867 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 78.658 31.867 L 78.658 25.139 L 80.052 25.072 L 80.21 26.199 L 80.231 26.199 C 80.66 25.387 81.313 24.981 82.098 24.981 C 82.39 24.981 82.663 25.028 82.84 25.072 L 82.731 26.782 C 82.528 26.714 82.257 26.667 81.985 26.667 C 81.088 26.667 80.413 27.321 80.413 28.468 L 80.413 31.867 L 78.658 31.867 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 85.382 24.35 C 84.708 24.35 84.395 24.172 84.395 23.609 C 84.395 23.136 84.708 22.867 85.382 22.867 C 86.058 22.867 86.375 23.113 86.375 23.609 C 86.354 24.105 86.058 24.35 85.382 24.35 Z M 84.484 31.867 L 84.484 25.139 L 86.259 25.072 L 86.259 31.888 L 84.484 31.888 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 88.757 31.867 L 88.757 26.375 L 87.902 26.375 L 87.902 25.095 L 88.757 25.095 L 88.757 24.798 C 88.757 23.79 89.454 22.935 91.076 22.935 C 91.459 22.935 91.885 22.979 92.178 23.069 L 92.063 24.195 C 91.863 24.147 91.636 24.126 91.411 24.126 C 90.738 24.126 90.466 24.399 90.466 24.825 L 90.466 25.072 L 91.907 25.072 L 91.907 26.352 L 90.466 26.352 L 90.466 31.842 L 88.757 31.842 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 95.486 26.375 L 95.486 29.842 C 95.486 30.36 95.754 30.582 96.296 30.582 C 96.473 30.582 96.698 30.561 96.834 30.514 L 96.924 31.776 C 96.698 31.888 96.249 31.956 95.754 31.956 C 94.406 31.956 93.729 31.169 93.729 29.887 L 93.729 26.352 L 92.965 26.352 L 92.965 25.095 L 93.798 25.095 L 94.09 23.562 L 95.461 23.451 L 95.461 25.116 L 96.969 25.116 L 96.969 26.421 L 95.486 26.421 Z" style="fill: rgb(255, 255, 255);"/>\n  <path d="M 20.357 8.826 L 15.368 5.081 L 10.379 1.334 C 10.033 1.074 9.54 1.146 9.281 1.493 L 4.883 7.322 C 4.811 7.409 4.768 7.51 4.754 7.624 C 4.68 7.93 4.782 8.248 5.043 8.45 L 8.022 10.677 L 12.042 13.698 L 15.021 15.926 C 15.281 16.13 15.629 16.13 15.888 15.97 C 15.991 15.912 16.062 15.854 16.136 15.752 L 20.531 9.91 C 20.763 9.578 20.706 9.087 20.357 8.826 Z M 10.047 1.769 L 13.012 3.995 L 13.012 3.995 L 15.021 5.5 L 17.046 7.017 L 17.046 7.017 L 20.025 9.245 C 20.142 9.332 20.156 9.491 20.082 9.607 L 19.374 10.591 L 16.005 8.058 L 12.36 5.326 L 8.976 2.809 L 9.684 1.826 C 9.772 1.709 9.931 1.682 10.047 1.769 Z M 15.673 15.463 C 15.629 15.507 15.585 15.536 15.528 15.55 C 15.469 15.564 15.398 15.55 15.339 15.507 L 12.345 13.265 L 8.34 10.257 L 5.361 8.001 C 5.302 7.958 5.275 7.9 5.259 7.842 C 5.259 7.785 5.259 7.726 5.302 7.669 L 6.113 6.585 C 6.113 6.585 7.009 5.427 7.791 4.386 L 11.16 6.917 L 14.804 9.65 L 18.173 12.181 C 17.393 13.222 16.496 14.379 16.496 14.379 L 15.673 15.463 Z" style="fill: rgb(255, 255, 255);"/>\n  <g transform="matrix(0.144619, 0, 0, 0.144619, -7.250457, -3.988513)">\n    <path d="M197.1,150.4l52-69.6l5.3-7c0,0,0.1-0.2,0.2-0.2c0.4-0.5,0.3-1.2-0.2-1.6l-14.7-10.7&#10;&#9;&#9;&#9;c-0.5-0.4-1.2-0.2-1.6,0.3c-0.1,0.1-0.2,0.2-0.2,0.2l-2,2.5l-64.3,86l-70.8,0l-26.5,87.4h177.1l-25-87.4L197.1,150.4z M79.1,234.3&#10;&#9;&#9;&#9;l24.2-80.5l65.7,0l-5.7,7.6l-8.1,11.3l-0.9,1.7l-0.9,1.9l-0.9,2.2l-0.9,2.3l-0.9,2.5l-0.9,2.5l-0.8,2.5l-0.8,2.4l-0.7,2.3&#10;&#9;&#9;&#9;l-0.7,2.1l-0.6,1.9l-0.4,1.6l-0.3,1.2l-0.3,0.7c0,0-0.1,0.2-0.2,0.4c-0.2,0.2-1.2,1.1-2,0.5c-0.8-0.6-0.7-2.6-0.6-3.6&#10;&#9;&#9;&#9;c0.2-3,0.5-6,0.7-8.9c0.1-1-1.2-1.6-2-1.2c-3.6,2.1-5.8,4.6-7.8,7.5c0.2-0.7,0.4-1.4,0.6-2c0.8-3.1,2-6.2,2.5-9.4&#10;&#9;&#9;&#9;c0.3-1.8-0.2-3.9-2.3-4.3c-2.4-0.4-3.9,2.1-5.1,3.7c-3.5,5-5.6,11.2-9.9,15.5c-1.6,1.6-3.5,2.8-5.8,2.1c-2.7-0.8-3.8,2.4,1,2.9&#10;&#9;&#9;&#9;c4.7,0.4,8.3-4.6,10.4-8.1c1.6-2.5,2.9-5.2,4.5-7.8c0.7-1.2,1.5-2.4,2.3-3.6c0.4-0.5,1-1.8,1.7-2c0.8-0.2,0.6,0.3,0.6,0.9&#10;&#9;&#9;&#9;c-0.1,1.5-0.7,3-1.1,4.5c-0.4,1.6-0.9,3.2-1.3,4.7c-0.9,3.4-1.8,6.8-2.8,10.1c-0.4,1.5,1.6,2.2,2.5,1c3.4-4.8,5.1-8.9,9.2-12.1&#10;&#9;&#9;&#9;c-0.1,1.1-0.2,2.1-0.3,3.2c-0.1,1.7-0.5,3.6-0.4,5.3c0.2,2.9,2.4,4.8,5.1,3.6c1.4-0.7,2.4-1.7,2.4-1.7l0.2-0.1l0.6-0.4l1-0.7&#10;&#9;&#9;&#9;l1.4-1l1.6-1.2l1.7-1.2l2.1-1.4l2.1-1.5l2.1-1.5l2.1-1.5l2-1.5l1.9-1.4l1.8-1.4l1.5-1.2l1.2-1.1l1-0.9l0-0.1l0,0l6.5-7.6&#10;&#9;&#9;&#9;l16.6-22.1l29.4,0l22.9,80.5H79.1z" style="fill: rgb(255, 255, 255);"/>\n    <path d="M261.1,77.1l-1.9-1.5c-0.4-0.3-0.9-0.2-1.2,0.2l-24.7,32.9c-0.3,0.4-0.2,0.9,0.2,1.2l1.9,1.5&#10;&#9;&#9;&#9;c0.4,0.3,0.9,0.2,1.2-0.2l24.7-32.9C261.5,77.9,261.5,77.4,261.1,77.1z" style="fill: rgb(255, 255, 255);"/>\n    <polygon points="161.7,217.2 210.9,217.2 209.9,213.3 161.7,213.3 113.6,213.3 112.5,217.2 &#9;&#9;" style="fill: rgb(255, 255, 255);"/>\n  </g>\n</svg>';
    },
    "./src/resources/fundingLogos/ideal.svg": function(module, exports) {
        module.exports = '<svg width="38" height="32" viewBox="0 0 38 32" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <polygon id="Fill-1" fill="#000000" points="4.47 27.632 10.452 27.632 10.452 17.982 4.47 17.982"/>\n  <g id="Group-9" transform="matrix(0.952642, 0, 0, 0.930979, 0.31993, 0.181113)">\n    <path d="M11.1102604,13.937999 C11.1102604,15.8893766 9.51859887,17.4723289 7.55546104,17.4723289 C5.59238806,17.4723289 4.00066169,15.8893766 4.00066169,13.937999 C4.00066169,11.9865569 5.59238806,10.4043136 7.55546104,10.4043136 C9.51859887,10.4043136 11.1102604,11.9865569 11.1102604,13.937999" id="Fill-2" fill="#000000"/>\n    <g id="Group-6">\n      <mask id="mask-2" fill="white">\n        <polygon id="" points="39.1898554 33.9678282 0 33.9678282 0 0.001572704 39.1898554 0.001572704" transform="matrix(1, 0, 0, 1, 0, 0)"/>\n      </mask>\n      <g id="Clip-5"/>\n      <path d="M22.1049929,2.25750057 C26.4717361,2.25750057 30.1110886,3.433548 32.6296578,5.65853743 C35.476843,8.17370364 36.9204068,11.9843525 36.9204068,16.9847134 C36.9204068,26.8945533 32.0742264,31.7119261 22.1049929,31.7119261 L2.26942909,31.7119261 L2.26942909,2.25750057 L22.1049929,2.25750057 Z M22.531325,0.001572704 L-1.9452416e-05,0.001572704 L-1.9452416e-05,33.967854 L22.531325,33.967854 L22.531325,33.9614085 C27.4529808,33.8947619 31.3518934,32.6793969 34.1187402,30.3394196 C37.4837488,27.4935988 39.1898554,23.0003706 39.1898554,16.9847134 C39.1898554,14.1090499 38.7410881,11.5297509 37.8560681,9.31836144 C37.0093692,7.2028812 35.758125,5.40419768 34.13722,3.97219912 C31.2823834,1.45020067 27.2749912,0.0865245021 22.531325,0.00904949351 L22.531325,0.001572704 Z" id="Fill-4" fill="#000000" mask="url(#mask-2)"/>\n    </g>\n    <path d="M21.4851352,29.4975138 L13.5194356,29.4975138 L13.5194356,5.00387361 L21.4851352,5.00387361 L21.1636516,5.00387361 C27.8067813,5.00387361 34.8779291,7.60998594 34.8779291,17.282889 C34.8779291,27.5088167 27.8067813,29.4975138 21.1636516,29.4975138 L21.4851352,29.4975138 Z" id="Fill-7" fill="#CD0067"/>\n  </g>\n  <g id="Group-30" transform="matrix(0.952642, 0, 0, 0.930979, 11.685725, 10.562208)" fill="#FFFFFF">\n    <path d="M1.41115607,1.17495169 L1.41115607,5.07048794 L2.30681015,5.07048794 C2.64178075,5.07048794 2.88357428,5.05173151 3.03219074,5.0142831 C3.2267149,4.96613516 3.38810511,4.88459948 3.51649106,4.76961161 C3.64474732,4.65455929 3.749531,4.46538363 3.83058274,4.20189125 C3.91163447,3.93846333 3.95216034,3.57944852 3.95216034,3.12471792 C3.95216034,2.67005177 3.91163447,2.3210275 3.83058274,2.07764511 C3.749531,1.83426272 3.63605858,1.64437805 3.49016546,1.5079911 C3.34420749,1.37160414 3.15915018,1.27930447 2.93492866,1.23109207 C2.76737852,1.19370812 2.43915142,1.17495169 1.95018252,1.17495169 L1.41115607,1.17495169 Z M0.215675421,0.175897919 L2.40271056,0.175897919 C2.89589415,0.175897919 3.27190935,0.213410777 3.53069132,0.288436492 C3.878306,0.390275522 4.17612249,0.571265392 4.42407595,0.831212737 C4.67202941,1.09116008 4.86065301,1.40950373 4.99001157,1.78598587 C5.11937014,2.16253246 5.18408185,2.62686687 5.18408185,3.1789891 C5.18408185,3.66407805 5.12345515,4.08213371 5.00220176,4.433285 C4.85397434,4.86210466 4.6423969,5.20919527 4.36753426,5.47449239 C4.15997698,5.67552779 3.87966767,5.832347 3.52660632,5.94488558 C3.26244251,6.02796818 2.90938115,6.06954171 2.46742226,6.06954171 L0.215675421,6.06954171 L0.215675421,0.175897919 Z" id="Fill-10"/>\n    <path d="M2.40271056,0.337035624 C2.87825729,0.337035624 3.24247136,0.372743739 3.48523751,0.443128689 C3.80302515,0.536201827 4.07944398,0.704171771 4.30645367,0.942075479 C4.53702965,1.18384649 4.7154083,1.48530291 4.83666169,1.83813003 C4.95966581,2.19611355 5.02197838,2.64723467 5.02197838,3.1789891 C5.02197838,3.64390361 4.96375081,4.04829479 4.84885188,4.38094747 C4.70970226,4.78359837 4.50973142,5.11264156 4.25458057,5.35892443 C4.06589213,5.54165459 3.80438682,5.68712971 3.47713234,5.79148248 C3.23060538,5.86895749 2.89070683,5.908404 2.46742226,5.908404 L0.377778888,5.908404 L0.377778888,0.337035624 L2.40271056,0.337035624 Z M0.0535719538,0.0147602138 L0.0535719538,6.23067941 L2.46742226,6.23067941 C2.92390562,6.23067941 3.2967436,6.18614095 3.57549672,6.09848204 C3.95157676,5.97866004 4.25594223,5.80759625 4.48061764,5.58993144 C4.77246872,5.30819828 4.9996081,4.93661473 5.15548679,4.48562252 C5.28205718,4.11919538 5.34618531,3.67954727 5.34618531,3.1789891 C5.34618531,2.61178438 5.27797217,2.12559969 5.1434263,1.73390616 C5.00706486,1.33699177 4.80456521,0.995959927 4.54169823,0.720349996 C4.27494076,0.440679396 3.9502151,0.243317935 3.57646934,0.133873205 C3.29992083,0.0536910833 2.91612466,0.0147602138 2.40271056,0.0147602138 L0.0535719538,0.0147602138 Z" id="Fill-12"/>\n    <path d="M1.9501501,1.33608939 C2.54124418,1.33608939 2.79263424,1.36451409 2.899428,1.38836247 C3.09466542,1.43032272 3.25566658,1.50998921 3.37905974,1.6253638 C3.50439814,1.74254314 3.60457808,1.91180219 3.6766817,2.12824235 C3.75189771,2.35415741 3.79002445,2.68945275 3.79002445,3.12471792 C3.79002445,3.56127219 3.75150867,3.90784717 3.67551456,4.15477459 C3.60360546,4.38861762 3.51354078,4.55523401 3.40791416,4.64991853 C3.30014777,4.74647224 3.16054427,4.81647046 2.99299412,4.85797953 C2.85754047,4.89207627 2.62683481,4.90935023 2.30677773,4.90935023 L1.57329196,4.90935023 L1.57329196,1.33608939 L1.9501501,1.33608939 Z M1.24902018,1.01381398 L1.24902018,5.23162564 L2.30677773,5.23162564 C2.65860709,5.23162564 2.90889484,5.21158011 3.07203577,5.17052222 C3.29100514,5.1163155 3.47729444,5.02163098 3.62500312,4.88924025 C3.77699133,4.7529822 3.89493781,4.54356764 3.98558607,4.24900792 C4.07214932,3.96766148 4.11423138,3.59988078 4.11423138,3.12471792 C4.11423138,2.64833041 4.07176027,2.2893156 3.98441893,2.02698342 C3.89519718,1.75904364 3.76622766,1.54492386 3.60120633,1.39061839 C3.43423976,1.23450819 3.22162485,1.12789948 2.96919733,1.0736283 C2.78932733,1.03347278 2.45558871,1.01381398 1.9501501,1.01381398 L1.24902018,1.01381398 Z" id="Fill-14"/>\n    <polygon id="Fill-16" points="6.53678989 6.06950948 6.53678989 0.175865691 10.9257088 0.175865691 10.9257088 1.17491946 7.73227054 1.17491946 7.73227054 2.48013487 10.702849 2.48013487 10.702849 3.47918864 7.73227054 3.47918864 7.73227054 5.07045571 11.0391813 5.07045571 11.0391813 6.06950948"/>\n    <path d="M10.7636378,0.337035624 L10.7636378,1.01381398 L7.57019949,1.01381398 L7.57019949,2.64130481 L10.5407779,2.64130481 L10.5407779,3.31808317 L7.57019949,3.31808317 L7.57019949,5.23162564 L10.8771102,5.23162564 L10.8771102,5.908404 L6.69892578,5.908404 L6.69892578,0.337035624 L10.7636378,0.337035624 Z M6.37471884,0.0147602138 L6.37471884,6.23067941 L11.2013172,6.23067941 L11.2013172,4.90935023 L7.89440643,4.90935023 L7.89440643,3.64035858 L10.8649849,3.64035858 L10.8649849,2.3190294 L7.89440643,2.3190294 L7.89440643,1.33608939 L11.0878447,1.33608939 L11.0878447,0.0147602138 L6.37471884,0.0147602138 Z" id="Fill-18"/>\n    <path d="M15.5303032,3.73301276 L14.7130424,1.54959685 L13.9121864,3.73301276 L15.5303032,3.73301276 Z M17.7341971,6.06950948 L16.431793,6.06950948 L15.9144884,4.73206653 L13.5458326,4.73206653 L13.055113,6.06950948 L11.7849999,6.06950948 L14.0890089,0.175865691 L15.363207,0.175865691 L17.7341971,6.06950948 Z" id="Fill-20"/>\n    <path d="M15.2534629,0.337035624 C15.3291976,0.525244463 17.332991,5.50626875 17.4947703,5.908404 L16.5431581,5.908404 C16.4751395,5.73244163 16.0257887,4.57096105 16.0257887,4.57096105 L13.4323926,4.57096105 C13.4323926,4.57096105 13.0075518,5.72876769 12.9417378,5.908404 L12.0218979,5.908404 C12.1781008,5.50884695 14.1252876,0.527951577 14.1999201,0.337035624 L15.2534629,0.337035624 Z M13.9780328,0.0147602138 L11.5481019,6.23067941 L13.168553,6.23067941 C13.168553,6.23067941 13.5933289,5.07280832 13.6592077,4.89323646 L15.8031882,4.89323646 C15.871142,5.06913438 16.3204928,6.23067941 16.3204928,6.23067941 L17.9736239,6.23067941 L15.472951,0.0147602138 L13.9780328,0.0147602138 Z" id="Fill-22"/>\n    <path d="M14.7145337,2.01579402 C14.8921991,2.49044124 15.1926093,3.29290701 15.2970039,3.57186861 L14.1437998,3.57186861 C14.2457305,3.2940672 14.5401752,2.49134361 14.7145337,2.01579402 L14.7145337,2.01579402 Z M13.680573,3.89414402 L15.7636025,3.89414402 L14.7114862,1.0833868 L13.680573,3.89414402 Z" id="Fill-24"/>\n    <polygon id="Fill-26" points="18.7343171 6.06950948 18.7343171 0.224207003 19.9297978 0.224207003 19.9297978 5.07045571 22.9084814 5.07045571 22.9084814 6.06950948"/>\n    <path d="M19.7677267,0.385376935 L19.7677267,5.23162564 L22.7464104,5.23162564 L22.7464104,5.908404 L18.8963882,5.908404 L18.8963882,0.385376935 L19.7677267,0.385376935 Z M18.5722461,0.0631015253 L18.5722461,6.23067941 L23.0706173,6.23067941 L23.0706173,4.90935023 L20.0919337,4.90935023 L20.0919337,0.0631015253 L18.5722461,0.0631015253 Z" id="Fill-28"/>\n  </g>\n</svg>\n';
    },
    "./src/resources/fundingLogos/paypal_black.svg": function(module, exports) {
        module.exports = '<svg width="100" height="32" viewBox="0 0 100 32" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <path d="M 12 5.315 L 4.2 5.315 C 3.7 5.315 3.2 5.715 3.1 6.215 L 0 26.215 C -0.1 26.615 0.2 26.915 0.6 26.915 L 4.3 26.915 C 4.8 26.915 5.3 26.515 5.4 26.015 L 6.2 20.615 C 6.3 20.115 6.7 19.715 7.3 19.715 L 9.8 19.715 C 14.9 19.715 17.9 17.215 18.7 12.315 C 19 10.215 18.7 8.515 17.7 7.315 C 16.6 6.015 14.6 5.315 12 5.315 Z M 12.9 12.615 C 12.5 15.415 10.3 15.415 8.3 15.415 L 7.1 15.415 L 7.9 10.215 C 7.9 9.915 8.2 9.715 8.5 9.715 L 9 9.715 C 10.4 9.715 11.7 9.715 12.4 10.515 C 12.9 10.915 13.1 11.615 12.9 12.615 Z" fill="#333030"/>\n  <path d="M 35.2 12.515 L 31.5 12.515 C 31.2 12.515 30.9 12.715 30.9 13.015 L 30.7 14.015 L 30.4 13.615 C 29.6 12.415 27.8 12.015 26 12.015 C 21.9 12.015 18.4 15.115 17.7 19.515 C 17.3 21.715 17.8 23.815 19.1 25.215 C 20.2 26.515 21.9 27.115 23.8 27.115 C 27.1 27.115 29 25.015 29 25.015 L 28.8 26.015 C 28.7 26.415 29 26.815 29.4 26.815 L 32.8 26.815 C 33.3 26.815 33.8 26.415 33.9 25.915 L 35.9 13.115 C 36 12.915 35.6 12.515 35.2 12.515 Z M 30.1 19.815 C 29.7 21.915 28.1 23.415 25.9 23.415 C 24.8 23.415 24 23.115 23.4 22.415 C 22.8 21.715 22.6 20.815 22.8 19.815 C 23.1 17.715 24.9 16.215 27 16.215 C 28.1 16.215 28.9 16.615 29.5 17.215 C 30 17.815 30.2 18.715 30.1 19.815 Z" fill="#333030"/>\n  <path d="M 55.1 12.515 L 51.4 12.515 C 51 12.515 50.7 12.715 50.5 13.015 L 45.3 20.615 L 43.1 13.315 C 43 12.815 42.5 12.515 42.1 12.515 L 38.4 12.515 C 38 12.515 37.6 12.915 37.8 13.415 L 41.9 25.515 L 38 30.915 C 37.7 31.315 38 31.915 38.5 31.915 L 42.2 31.915 C 42.6 31.915 42.9 31.715 43.1 31.415 L 55.6 13.415 C 55.9 13.115 55.6 12.515 55.1 12.515 Z" fill="#333030"/>\n  <path d="M 67.5 5.315 L 59.7 5.315 C 59.2 5.315 58.7 5.715 58.6 6.215 L 55.5 26.115 C 55.4 26.515 55.7 26.815 56.1 26.815 L 60.1 26.815 C 60.5 26.815 60.8 26.515 60.8 26.215 L 61.7 20.515 C 61.8 20.015 62.2 19.615 62.8 19.615 L 65.3 19.615 C 70.4 19.615 73.4 17.115 74.2 12.215 C 74.5 10.115 74.2 8.415 73.2 7.215 C 72 6.015 70.1 5.315 67.5 5.315 Z M 68.4 12.615 C 68 15.415 65.8 15.415 63.8 15.415 L 62.6 15.415 L 63.4 10.215 C 63.4 9.915 63.7 9.715 64 9.715 L 64.5 9.715 C 65.9 9.715 67.2 9.715 67.9 10.515 C 68.4 10.915 68.5 11.615 68.4 12.615 Z" fill="#636363"/>\n  <path d="M 90.7 12.515 L 87 12.515 C 86.7 12.515 86.4 12.715 86.4 13.015 L 86.2 14.015 L 85.9 13.615 C 85.1 12.415 83.3 12.015 81.5 12.015 C 77.4 12.015 73.9 15.115 73.2 19.515 C 72.8 21.715 73.3 23.815 74.6 25.215 C 75.7 26.515 77.4 27.115 79.3 27.115 C 82.6 27.115 84.5 25.015 84.5 25.015 L 84.3 26.015 C 84.2 26.415 84.5 26.815 84.9 26.815 L 88.3 26.815 C 88.8 26.815 89.3 26.415 89.4 25.915 L 91.4 13.115 C 91.4 12.915 91.1 12.515 90.7 12.515 Z M 85.5 19.815 C 85.1 21.915 83.5 23.415 81.3 23.415 C 80.2 23.415 79.4 23.115 78.8 22.415 C 78.2 21.715 78 20.815 78.2 19.815 C 78.5 17.715 80.3 16.215 82.4 16.215 C 83.5 16.215 84.3 16.615 84.9 17.215 C 85.5 17.815 85.7 18.715 85.5 19.815 Z" fill="#636363"/>\n  <path d="M 95.1 5.915 L 91.9 26.215 C 91.8 26.615 92.1 26.915 92.5 26.915 L 95.7 26.915 C 96.2 26.915 96.7 26.515 96.8 26.015 L 100 6.115 C 100.1 5.715 99.8 5.415 99.4 5.415 L 95.8 5.415 C 95.4 5.315 95.2 5.515 95.1 5.915 Z" fill="#636363"/>\n</svg>\n';
    },
    "./src/resources/fundingLogos/paypal_blue.svg": function(module, exports) {
        module.exports = '<svg width="100" height="32" viewBox="0 0 100 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">\n    <path fill="#003087" d="M 12 4.917 L 4.2 4.917 C 3.7 4.917 3.2 5.317 3.1 5.817 L 0 25.817 C -0.1 26.217 0.2 26.517 0.6 26.517 L 4.3 26.517 C 4.8 26.517 5.3 26.117 5.4 25.617 L 6.2 20.217 C 6.3 19.717 6.7 19.317 7.3 19.317 L 9.8 19.317 C 14.9 19.317 17.9 16.817 18.7 11.917 C 19 9.817 18.7 8.117 17.7 6.917 C 16.6 5.617 14.6 4.917 12 4.917 Z M 12.9 12.217 C 12.5 15.017 10.3 15.017 8.3 15.017 L 7.1 15.017 L 7.9 9.817 C 7.9 9.517 8.2 9.317 8.5 9.317 L 9 9.317 C 10.4 9.317 11.7 9.317 12.4 10.117 C 12.9 10.517 13.1 11.217 12.9 12.217 Z"></path>\n    <path fill="#003087" d="M 35.2 12.117 L 31.5 12.117 C 31.2 12.117 30.9 12.317 30.9 12.617 L 30.7 13.617 L 30.4 13.217 C 29.6 12.017 27.8 11.617 26 11.617 C 21.9 11.617 18.4 14.717 17.7 19.117 C 17.3 21.317 17.8 23.417 19.1 24.817 C 20.2 26.117 21.9 26.717 23.8 26.717 C 27.1 26.717 29 24.617 29 24.617 L 28.8 25.617 C 28.7 26.017 29 26.417 29.4 26.417 L 32.8 26.417 C 33.3 26.417 33.8 26.017 33.9 25.517 L 35.9 12.717 C 36 12.517 35.6 12.117 35.2 12.117 Z M 30.1 19.317 C 29.7 21.417 28.1 22.917 25.9 22.917 C 24.8 22.917 24 22.617 23.4 21.917 C 22.8 21.217 22.6 20.317 22.8 19.317 C 23.1 17.217 24.9 15.717 27 15.717 C 28.1 15.717 28.9 16.117 29.5 16.717 C 30 17.417 30.2 18.317 30.1 19.317 Z"></path>\n    <path fill="#003087" d="M 55.1 12.117 L 51.4 12.117 C 51 12.117 50.7 12.317 50.5 12.617 L 45.3 20.217 L 43.1 12.917 C 43 12.417 42.5 12.117 42.1 12.117 L 38.4 12.117 C 38 12.117 37.6 12.517 37.8 13.017 L 41.9 25.117 L 38 30.517 C 37.7 30.917 38 31.517 38.5 31.517 L 42.2 31.517 C 42.6 31.517 42.9 31.317 43.1 31.017 L 55.6 13.017 C 55.9 12.717 55.6 12.117 55.1 12.117 Z"></path>\n    <path fill="#009cde" d="M 67.5 4.917 L 59.7 4.917 C 59.2 4.917 58.7 5.317 58.6 5.817 L 55.5 25.717 C 55.4 26.117 55.7 26.417 56.1 26.417 L 60.1 26.417 C 60.5 26.417 60.8 26.117 60.8 25.817 L 61.7 20.117 C 61.8 19.617 62.2 19.217 62.8 19.217 L 65.3 19.217 C 70.4 19.217 73.4 16.717 74.2 11.817 C 74.5 9.717 74.2 8.017 73.2 6.817 C 72 5.617 70.1 4.917 67.5 4.917 Z M 68.4 12.217 C 68 15.017 65.8 15.017 63.8 15.017 L 62.6 15.017 L 63.4 9.817 C 63.4 9.517 63.7 9.317 64 9.317 L 64.5 9.317 C 65.9 9.317 67.2 9.317 67.9 10.117 C 68.4 10.517 68.5 11.217 68.4 12.217 Z"></path>\n    <path fill="#009cde" d="M 90.7 12.117 L 87 12.117 C 86.7 12.117 86.4 12.317 86.4 12.617 L 86.2 13.617 L 85.9 13.217 C 85.1 12.017 83.3 11.617 81.5 11.617 C 77.4 11.617 73.9 14.717 73.2 19.117 C 72.8 21.317 73.3 23.417 74.6 24.817 C 75.7 26.117 77.4 26.717 79.3 26.717 C 82.6 26.717 84.5 24.617 84.5 24.617 L 84.3 25.617 C 84.2 26.017 84.5 26.417 84.9 26.417 L 88.3 26.417 C 88.8 26.417 89.3 26.017 89.4 25.517 L 91.4 12.717 C 91.4 12.517 91.1 12.117 90.7 12.117 Z M 85.5 19.317 C 85.1 21.417 83.5 22.917 81.3 22.917 C 80.2 22.917 79.4 22.617 78.8 21.917 C 78.2 21.217 78 20.317 78.2 19.317 C 78.5 17.217 80.3 15.717 82.4 15.717 C 83.5 15.717 84.3 16.117 84.9 16.717 C 85.5 17.417 85.7 18.317 85.5 19.317 Z"></path>\n    <path fill="#009cde" d="M 95.1 5.417 L 91.9 25.717 C 91.8 26.117 92.1 26.417 92.5 26.417 L 95.7 26.417 C 96.2 26.417 96.7 26.017 96.8 25.517 L 100 5.617 C 100.1 5.217 99.8 4.917 99.4 4.917 L 95.8 4.917 C 95.4 4.917 95.2 5.117 95.1 5.417 Z"></path>\n</svg>\n';
    },
    "./src/resources/fundingLogos/paypal_white.svg": function(module, exports) {
        module.exports = '<svg width="100" height="32" viewBox="0 0 100 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">\n    <path fill="#ffffff" d="M 12 5.315 L 4.2 5.315 C 3.7 5.315 3.2 5.715 3.1 6.215 L 0 26.215 C -0.1 26.615 0.2 26.915 0.6 26.915 L 4.3 26.915 C 4.8 26.915 5.3 26.515 5.4 26.015 L 6.2 20.615 C 6.3 20.115 6.7 19.715 7.3 19.715 L 9.8 19.715 C 14.9 19.715 17.9 17.215 18.7 12.315 C 19 10.215 18.7 8.515 17.7 7.315 C 16.6 6.015 14.6 5.315 12 5.315 Z M 12.9 12.615 C 12.5 15.415 10.3 15.415 8.3 15.415 L 7.1 15.415 L 7.9 10.215 C 7.9 9.915 8.2 9.715 8.5 9.715 L 9 9.715 C 10.4 9.715 11.7 9.715 12.4 10.515 C 12.9 10.915 13.1 11.615 12.9 12.615 Z"></path>\n    <path fill="#ffffff" d="M 35.2 12.515 L 31.5 12.515 C 31.2 12.515 30.9 12.715 30.9 13.015 L 30.7 14.015 L 30.4 13.615 C 29.6 12.415 27.8 12.015 26 12.015 C 21.9 12.015 18.4 15.115 17.7 19.515 C 17.3 21.715 17.8 23.815 19.1 25.215 C 20.2 26.515 21.9 27.115 23.8 27.115 C 27.1 27.115 29 25.015 29 25.015 L 28.8 26.015 C 28.7 26.415 29 26.815 29.4 26.815 L 32.8 26.815 C 33.3 26.815 33.8 26.415 33.9 25.915 L 35.9 13.115 C 36 12.915 35.6 12.515 35.2 12.515 Z M 30.1 19.815 C 29.7 21.915 28.1 23.415 25.9 23.415 C 24.8 23.415 24 23.115 23.4 22.415 C 22.8 21.715 22.6 20.815 22.8 19.815 C 23.1 17.715 24.9 16.215 27 16.215 C 28.1 16.215 28.9 16.615 29.5 17.215 C 30 17.815 30.2 18.715 30.1 19.815 Z"></path>\n    <path fill="#ffffff" d="M 55.1 12.515 L 51.4 12.515 C 51 12.515 50.7 12.715 50.5 13.015 L 45.3 20.615 L 43.1 13.315 C 43 12.815 42.5 12.515 42.1 12.515 L 38.4 12.515 C 38 12.515 37.6 12.915 37.8 13.415 L 41.9 25.515 L 38 30.915 C 37.7 31.315 38 31.915 38.5 31.915 L 42.2 31.915 C 42.6 31.915 42.9 31.715 43.1 31.415 L 55.6 13.415 C 55.9 13.115 55.6 12.515 55.1 12.515 Z"></path>\n    <path fill="#ffffff" d="M 67.5 5.315 L 59.7 5.315 C 59.2 5.315 58.7 5.715 58.6 6.215 L 55.5 26.115 C 55.4 26.515 55.7 26.815 56.1 26.815 L 60.1 26.815 C 60.5 26.815 60.8 26.515 60.8 26.215 L 61.7 20.515 C 61.8 20.015 62.2 19.615 62.8 19.615 L 65.3 19.615 C 70.4 19.615 73.4 17.115 74.2 12.215 C 74.5 10.115 74.2 8.415 73.2 7.215 C 72 6.015 70.1 5.315 67.5 5.315 Z M 68.4 12.615 C 68 15.415 65.8 15.415 63.8 15.415 L 62.6 15.415 L 63.4 10.215 C 63.4 9.915 63.7 9.715 64 9.715 L 64.5 9.715 C 65.9 9.715 67.2 9.715 67.9 10.515 C 68.4 10.915 68.5 11.615 68.4 12.615 Z"></path>\n    <path fill="#ffffff" d="M 90.7 12.515 L 87 12.515 C 86.7 12.515 86.4 12.715 86.4 13.015 L 86.2 14.015 L 85.9 13.615 C 85.1 12.415 83.3 12.015 81.5 12.015 C 77.4 12.015 73.9 15.115 73.2 19.515 C 72.8 21.715 73.3 23.815 74.6 25.215 C 75.7 26.515 77.4 27.115 79.3 27.115 C 82.6 27.115 84.5 25.015 84.5 25.015 L 84.3 26.015 C 84.2 26.415 84.5 26.815 84.9 26.815 L 88.3 26.815 C 88.8 26.815 89.3 26.415 89.4 25.915 L 91.4 13.115 C 91.4 12.915 91.1 12.515 90.7 12.515 Z M 85.5 19.815 C 85.1 21.915 83.5 23.415 81.3 23.415 C 80.2 23.415 79.4 23.115 78.8 22.415 C 78.2 21.715 78 20.815 78.2 19.815 C 78.5 17.715 80.3 16.215 82.4 16.215 C 83.5 16.215 84.3 16.615 84.9 17.215 C 85.5 17.815 85.7 18.715 85.5 19.815 Z"></path>\n    <path fill="#ffffff" d="M 95.1 5.915 L 91.9 26.215 C 91.8 26.615 92.1 26.915 92.5 26.915 L 95.7 26.915 C 96.2 26.915 96.7 26.515 96.8 26.015 L 100 6.115 C 100.1 5.715 99.8 5.415 99.4 5.415 L 95.8 5.415 C 95.4 5.315 95.2 5.515 95.1 5.915 Z"></path>\n</svg>\n';
    },
    "./src/resources/fundingLogos/pp_black.svg": function(module, exports) {
        module.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg width="24" height="32" viewBox="0 0 24 32" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">\n  <path opacity="0.7" d="M 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.548 C 18.361 3.148 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 2.948 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 6.378 28.938 C 6.285 29.238 6.659 29.638 6.94 29.638 L 11.153 29.638 C 11.621 29.638 11.995 29.238 12.089 28.739 L 12.182 28.539 L 12.931 23.341 L 13.025 23.041 C 13.119 22.441 13.493 22.141 13.961 22.141 L 14.616 22.141 C 18.642 22.141 21.731 20.342 22.668 15.443 C 23.042 13.344 22.855 11.545 21.825 10.345 C 21.451 10.046 21.076 9.646 20.702 9.446 L 20.702 9.446" style="fill: rgb(99, 99, 99);"/>\n  <path opacity="0.7" d="M 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.548 C 18.361 3.148 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 2.948 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 7.97 18.342 L 7.876 18.642 C 8.063 18.043 8.438 17.643 9.093 17.643 L 11.433 17.643 C 16.021 17.643 19.578 15.643 20.608 9.946 C 20.608 9.746 20.608 9.546 20.702 9.446"/>\n  <path d="M 9.28 9.446 C 9.28 9.146 9.468 8.846 9.842 8.646 C 9.936 8.646 10.123 8.546 10.216 8.546 L 16.489 8.546 C 17.238 8.546 17.893 8.646 18.548 8.746 C 18.736 8.746 18.829 8.746 19.11 8.846 C 19.204 8.946 19.391 8.946 19.578 9.046 C 19.672 9.046 19.672 9.046 19.859 9.146 C 20.14 9.246 20.421 9.346 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.648 C 18.361 3.248 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 3.048 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 7.97 18.342 L 9.28 9.446 Z" style="fill: rgb(51, 48, 48);"/>\n  <g transform="matrix(0.497737, 0, 0, 0.52612, 1.10144, 0.638654)" opacity="0.2">\n    <path fill="#231f20" d="M39.3 16.7c0.9 0.5 1.7 1.1 2.3 1.8 1 1.1 1.6 2.5 1.9 4.1 0.3-3.2-0.2-5.8-1.9-7.8-0.6-0.7-1.3-1.2-2.1-1.7C39.5 14.2 39.5 15.4 39.3 16.7z"/>\n    <path fill="#231f20" d="M0.4 45.2L6.7 5.6C6.8 4.5 7.8 3.7 8.9 3.7h16c5.5 0 9.8 1.2 12.2 3.9 1.2 1.4 1.9 3 2.2 4.8 0.4-3.6-0.2-6.1-2.2-8.4C34.7 1.2 30.4 0 24.9 0H8.9c-1.1 0-2.1 0.8-2.3 1.9L0 44.1C0 44.5 0.1 44.9 0.4 45.2z"/>\n    <path fill="#231f20" d="M10.7 49.4l-0.1 0.6c-0.1 0.4 0.1 0.8 0.4 1.1l0.3-1.7H10.7z"/>\n  </g>\n</svg>';
    },
    "./src/resources/fundingLogos/pp_blue.svg": function(module, exports) {
        module.exports = '<svg width="24" height="32" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">\n    <path fill="#009cde" d="M 20.905 9.5 C 21.185 7.4 20.905 6 19.782 4.7 C 18.564 3.3 16.411 2.6 13.697 2.6 L 5.739 2.6 C 5.271 2.6 4.71 3.1 4.615 3.6 L 1.339 25.8 C 1.339 26.2 1.62 26.7 2.088 26.7 L 6.956 26.7 L 6.675 28.9 C 6.581 29.3 6.862 29.6 7.236 29.6 L 11.356 29.6 C 11.825 29.6 12.292 29.3 12.386 28.8 L 12.386 28.5 L 13.228 23.3 L 13.228 23.1 C 13.322 22.6 13.79 22.2 14.258 22.2 L 14.821 22.2 C 18.845 22.2 21.935 20.5 22.871 15.5 C 23.339 13.4 23.153 11.7 22.029 10.5 C 21.748 10.1 21.279 9.8 20.905 9.5 L 20.905 9.5"></path>\n    <path fill="#012169" d="M 20.905 9.5 C 21.185 7.4 20.905 6 19.782 4.7 C 18.564 3.3 16.411 2.6 13.697 2.6 L 5.739 2.6 C 5.271 2.6 4.71 3.1 4.615 3.6 L 1.339 25.8 C 1.339 26.2 1.62 26.7 2.088 26.7 L 6.956 26.7 L 8.267 18.4 L 8.173 18.7 C 8.267 18.1 8.735 17.7 9.296 17.7 L 11.636 17.7 C 16.224 17.7 19.782 15.7 20.905 10.1 C 20.812 9.8 20.905 9.7 20.905 9.5"></path>\n    <path fill="#003087" d="M 9.485 9.5 C 9.577 9.2 9.765 8.9 10.046 8.7 C 10.232 8.7 10.326 8.6 10.513 8.6 L 16.692 8.6 C 17.442 8.6 18.189 8.7 18.753 8.8 C 18.939 8.8 19.127 8.8 19.314 8.9 C 19.501 9 19.688 9 19.782 9.1 C 19.875 9.1 19.968 9.1 20.063 9.1 C 20.343 9.2 20.624 9.4 20.905 9.5 C 21.185 7.4 20.905 6 19.782 4.6 C 18.658 3.2 16.506 2.6 13.79 2.6 L 5.739 2.6 C 5.271 2.6 4.71 3 4.615 3.6 L 1.339 25.8 C 1.339 26.2 1.62 26.7 2.088 26.7 L 6.956 26.7 L 8.267 18.4 L 9.485 9.5 Z"></path>\n</svg>\n';
    },
    "./src/resources/fundingLogos/pp_white.svg": function(module, exports) {
        module.exports = '<svg width="24" height="32" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">\n    <path fill="#ffffff" opacity="0.7" d="M 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.548 C 18.361 3.148 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 2.948 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 6.378 28.938 C 6.285 29.238 6.659 29.638 6.94 29.638 L 11.153 29.638 C 11.621 29.638 11.995 29.238 12.089 28.739 L 12.182 28.539 L 12.931 23.341 L 13.025 23.041 C 13.119 22.441 13.493 22.141 13.961 22.141 L 14.616 22.141 C 18.642 22.141 21.731 20.342 22.668 15.443 C 23.042 13.344 22.855 11.545 21.825 10.345 C 21.451 10.046 21.076 9.646 20.702 9.446 L 20.702 9.446"></path>\n    <path fill="#ffffff" opacity="0.7" d="M 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.548 C 18.361 3.148 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 2.948 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 7.97 18.342 L 7.876 18.642 C 8.063 18.043 8.438 17.643 9.093 17.643 L 11.433 17.643 C 16.021 17.643 19.578 15.643 20.608 9.946 C 20.608 9.746 20.608 9.546 20.702 9.446"></path>\n    <path fill="#ffffff" d="M 9.28 9.446 C 9.28 9.146 9.468 8.846 9.842 8.646 C 9.936 8.646 10.123 8.546 10.216 8.546 L 16.489 8.546 C 17.238 8.546 17.893 8.646 18.548 8.746 C 18.736 8.746 18.829 8.746 19.11 8.846 C 19.204 8.946 19.391 8.946 19.578 9.046 C 19.672 9.046 19.672 9.046 19.859 9.146 C 20.14 9.246 20.421 9.346 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.648 C 18.361 3.248 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 3.048 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 7.97 18.342 L 9.28 9.446 Z"></path>\n    <g transform="matrix(0.497737, 0, 0, 0.52612, 1.10144, 0.638654)" opacity="0.2">\n        <path fill="#231f20" d="M39.3 16.7c0.9 0.5 1.7 1.1 2.3 1.8 1 1.1 1.6 2.5 1.9 4.1 0.3-3.2-0.2-5.8-1.9-7.8-0.6-0.7-1.3-1.2-2.1-1.7C39.5 14.2 39.5 15.4 39.3 16.7z"></path>\n        <path fill="#231f20" d="M0.4 45.2L6.7 5.6C6.8 4.5 7.8 3.7 8.9 3.7h16c5.5 0 9.8 1.2 12.2 3.9 1.2 1.4 1.9 3 2.2 4.8 0.4-3.6-0.2-6.1-2.2-8.4C34.7 1.2 30.4 0 24.9 0H8.9c-1.1 0-2.1 0.8-2.3 1.9L0 44.1C0 44.5 0.1 44.9 0.4 45.2z"></path>\n        <path fill="#231f20" d="M10.7 49.4l-0.1 0.6c-0.1 0.4 0.1 0.8 0.4 1.1l0.3-1.7H10.7z"></path>\n    </g>\n</svg>\n';
    },
    "./src/resources/fundingLogos/venmo_blue.svg": function(module, exports) {
        module.exports = '<svg width="101" height="32" viewBox="0 0 101 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Blue" fill="#3D93CE">\n            <g id="Logo" transform="translate(0.000000, 6.000000)">\n                <path d="M16.6660484,0.18 C17.3466626,1.3390991 17.6535069,2.53297297 17.6535069,4.04108108 C17.6535069,8.85117117 13.671346,15.0998198 10.439346,19.4875676 L3.05725952,19.4875676 L0.0966314879,1.23315315 L6.56045675,0.60036036 L8.12578201,13.5895495 C9.58835986,11.1326126 11.3932543,7.27153153 11.3932543,4.6390991 C11.3932543,3.1981982 11.1538599,2.21675676 10.7797405,1.40864865 L16.6660484,0.18 Z M24.9071592,11.6938739 C24.9071592,13.8367568 26.062718,14.6774775 27.5946678,14.6774775 C29.2629152,14.6774775 30.860218,14.2571171 32.9363097,13.1691892 L32.154346,18.6445045 C30.6915934,19.3814414 28.4119291,19.8731532 26.1991903,19.8731532 C20.5863512,19.8731532 18.5775346,16.3632432 18.5775346,11.9753153 C18.5775346,6.28810811 21.8451817,0.249369369 28.5819516,0.249369369 C32.2909931,0.249369369 34.3649879,2.39207207 34.3649879,5.37567568 C34.3653374,10.1855856 28.3783789,11.6590991 24.9071592,11.6938739 Z M25.0434567,8.2181982 C26.2329152,8.2181982 29.2274429,7.65711712 29.2274429,5.90216216 C29.2274429,5.05945946 28.6495761,4.6390991 27.9686125,4.6390991 C26.7772318,4.6390991 25.2138287,6.11225225 25.0434567,8.2181982 Z M53.0187093,4.4636036 C53.0187093,5.16558559 52.9154377,6.18378378 52.8126903,6.84918919 L50.8730709,19.4873874 L44.5790934,19.4873874 L46.3483408,7.90216216 C46.381891,7.58792793 46.4849879,6.95531532 46.4849879,6.60432432 C46.4849879,5.76162162 45.9743962,5.55135135 45.3605329,5.55135135 C44.5451938,5.55135135 43.7279325,5.93711712 43.1836159,6.21873874 L41.1768962,19.4875676 L34.8474464,19.4875676 L37.7390519,0.565945946 L43.2171661,0.565945946 L43.2865381,2.07621622 C44.5789187,1.19873874 46.2807163,0.24972973 48.6952803,0.24972973 C51.8942543,0.249369369 53.0187093,1.93495495 53.0187093,4.4636036 Z M71.7037093,2.32072072 C73.5063322,0.988108108 75.2084792,0.249369369 77.5554187,0.249369369 C80.7872439,0.249369369 81.9113495,1.93495495 81.9113495,4.4636036 C81.9113495,5.16558559 81.8084273,6.18378378 81.7056799,6.84918919 L79.7683322,19.4873874 L73.4726073,19.4873874 L75.2755796,7.6572973 C75.3087803,7.34108108 75.3785017,6.95531532 75.3785017,6.71063063 C75.3785017,5.7618018 74.8677353,5.55135135 74.2540467,5.55135135 C73.4722578,5.55135135 72.6908183,5.90234234 72.1106799,6.21873874 L70.1043097,19.4875676 L63.8101574,19.4875676 L65.6131298,7.65747748 C65.6463304,7.34126126 65.713955,6.9554955 65.713955,6.71081081 C65.713955,5.76198198 65.2030138,5.55153153 64.5914221,5.55153153 C63.7743356,5.55153153 62.9588218,5.9372973 62.4145052,6.21891892 L60.4062128,19.4877477 L54.0788599,19.4877477 L56.9701159,0.566126126 L62.3813045,0.566126126 L62.551327,2.14576577 C63.8101574,1.1990991 65.5105571,0.25009009 67.7900467,0.25009009 C69.7637405,0.249369369 71.0559464,1.12702703 71.7037093,2.32072072 Z M83.55059,11.7998198 C83.55059,5.83279279 86.6120433,0.249369369 93.6558322,0.249369369 C98.9633997,0.249369369 100.903543,3.47981982 100.903543,7.93873874 C100.903543,13.8365766 97.8751159,19.9443243 90.6614792,19.9443243 C85.3196626,19.9443243 83.55059,16.3281081 83.55059,11.7998198 Z M94.4374464,7.83279279 C94.4374464,6.28810811 94.0628028,5.23495495 92.9409689,5.23495495 C90.4570329,5.23495495 89.9469654,9.76306306 89.9469654,12.0794595 C89.9469654,13.8367568 90.4238322,14.9243243 91.5453166,14.9243243 C93.8931298,14.9243243 94.4374464,10.149009 94.4374464,7.83279279 Z"></path>\n            </g>\n        </g>\n    </g>\n</svg>\n';
    },
    "./src/resources/fundingLogos/venmo_white.svg": function(module, exports) {
        module.exports = '<svg width="101" height="32" viewBox="0 0 101 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="White" fill="#FFFFFF">\n            <g id="Logo" transform="translate(0.000000, 6.000000)">\n                <path d="M16.6660484,0.18 C17.3466626,1.3390991 17.6535069,2.53297297 17.6535069,4.04108108 C17.6535069,8.85117117 13.671346,15.0998198 10.439346,19.4875676 L3.05725952,19.4875676 L0.0966314879,1.23315315 L6.56045675,0.60036036 L8.12578201,13.5895495 C9.58835986,11.1326126 11.3932543,7.27153153 11.3932543,4.6390991 C11.3932543,3.1981982 11.1538599,2.21675676 10.7797405,1.40864865 L16.6660484,0.18 Z M24.9071592,11.6938739 C24.9071592,13.8367568 26.062718,14.6774775 27.5946678,14.6774775 C29.2629152,14.6774775 30.860218,14.2571171 32.9363097,13.1691892 L32.154346,18.6445045 C30.6915934,19.3814414 28.4119291,19.8731532 26.1991903,19.8731532 C20.5863512,19.8731532 18.5775346,16.3632432 18.5775346,11.9753153 C18.5775346,6.28810811 21.8451817,0.249369369 28.5819516,0.249369369 C32.2909931,0.249369369 34.3649879,2.39207207 34.3649879,5.37567568 C34.3653374,10.1855856 28.3783789,11.6590991 24.9071592,11.6938739 Z M25.0434567,8.2181982 C26.2329152,8.2181982 29.2274429,7.65711712 29.2274429,5.90216216 C29.2274429,5.05945946 28.6495761,4.6390991 27.9686125,4.6390991 C26.7772318,4.6390991 25.2138287,6.11225225 25.0434567,8.2181982 Z M53.0187093,4.4636036 C53.0187093,5.16558559 52.9154377,6.18378378 52.8126903,6.84918919 L50.8730709,19.4873874 L44.5790934,19.4873874 L46.3483408,7.90216216 C46.381891,7.58792793 46.4849879,6.95531532 46.4849879,6.60432432 C46.4849879,5.76162162 45.9743962,5.55135135 45.3605329,5.55135135 C44.5451938,5.55135135 43.7279325,5.93711712 43.1836159,6.21873874 L41.1768962,19.4875676 L34.8474464,19.4875676 L37.7390519,0.565945946 L43.2171661,0.565945946 L43.2865381,2.07621622 C44.5789187,1.19873874 46.2807163,0.24972973 48.6952803,0.24972973 C51.8942543,0.249369369 53.0187093,1.93495495 53.0187093,4.4636036 Z M71.7037093,2.32072072 C73.5063322,0.988108108 75.2084792,0.249369369 77.5554187,0.249369369 C80.7872439,0.249369369 81.9113495,1.93495495 81.9113495,4.4636036 C81.9113495,5.16558559 81.8084273,6.18378378 81.7056799,6.84918919 L79.7683322,19.4873874 L73.4726073,19.4873874 L75.2755796,7.6572973 C75.3087803,7.34108108 75.3785017,6.95531532 75.3785017,6.71063063 C75.3785017,5.7618018 74.8677353,5.55135135 74.2540467,5.55135135 C73.4722578,5.55135135 72.6908183,5.90234234 72.1106799,6.21873874 L70.1043097,19.4875676 L63.8101574,19.4875676 L65.6131298,7.65747748 C65.6463304,7.34126126 65.713955,6.9554955 65.713955,6.71081081 C65.713955,5.76198198 65.2030138,5.55153153 64.5914221,5.55153153 C63.7743356,5.55153153 62.9588218,5.9372973 62.4145052,6.21891892 L60.4062128,19.4877477 L54.0788599,19.4877477 L56.9701159,0.566126126 L62.3813045,0.566126126 L62.551327,2.14576577 C63.8101574,1.1990991 65.5105571,0.25009009 67.7900467,0.25009009 C69.7637405,0.249369369 71.0559464,1.12702703 71.7037093,2.32072072 Z M83.55059,11.7998198 C83.55059,5.83279279 86.6120433,0.249369369 93.6558322,0.249369369 C98.9633997,0.249369369 100.903543,3.47981982 100.903543,7.93873874 C100.903543,13.8365766 97.8751159,19.9443243 90.6614792,19.9443243 C85.3196626,19.9443243 83.55059,16.3281081 83.55059,11.7998198 Z M94.4374464,7.83279279 C94.4374464,6.28810811 94.0628028,5.23495495 92.9409689,5.23495495 C90.4570329,5.23495495 89.9469654,9.76306306 89.9469654,12.0794595 C89.9469654,13.8367568 90.4238322,14.9243243 91.5453166,14.9243243 C93.8931298,14.9243243 94.4374464,10.149009 94.4374464,7.83279279 Z"></path>\n            </g>\n        </g>\n    </g>\n</svg>\n';
    }
}));
//# sourceMappingURL=checkout.button.render.js.map