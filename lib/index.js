"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
var dealer_1 = require("./dealer");
var router_1 = require("./router");
var sub_1 = require("./sub");
var xsub_1 = require("./xsub");
var pub_1 = require("./pub");
var xpub_1 = require("./xpub");
var pull_1 = require("./pull");
var push_1 = require("./push");
var pair_1 = require("./pair");
var req_1 = require("./req");
var rep_1 = require("./rep");
function socket(type) {
    switch (type) {
        case 'dealer':
            return new dealer_1.default();
        case 'router':
            return new router_1.default();
        case 'pub':
            return new pub_1.default();
        case 'sub':
            return new sub_1.default();
        case 'xsub':
            return new xsub_1.default();
        case 'xpub':
            return new xpub_1.default();
        case 'pull':
            return new pull_1.default();
        case 'push':
            return new push_1.default();
        case 'pair':
            return new pair_1.default();
        case 'req':
            return new req_1.default();
        case 'rep':
            return new rep_1.default();
        default:
            throw new Error('Unsupported socket type');
    }
}
exports.socket = socket;
var sub_2 = require("./sub");
Object.defineProperty(exports, "Sub", { enumerable: true, get: function () { return sub_2.default; } });
var xsub_2 = require("./xsub");
Object.defineProperty(exports, "XSub", { enumerable: true, get: function () { return xsub_2.default; } });
var router_2 = require("./router");
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return router_2.default; } });
var dealer_2 = require("./dealer");
Object.defineProperty(exports, "Dealer", { enumerable: true, get: function () { return dealer_2.default; } });
var xpub_2 = require("./xpub");
Object.defineProperty(exports, "XPub", { enumerable: true, get: function () { return xpub_2.default; } });
var pub_2 = require("./pub");
Object.defineProperty(exports, "Pub", { enumerable: true, get: function () { return pub_2.default; } });
var push_2 = require("./push");
Object.defineProperty(exports, "Push", { enumerable: true, get: function () { return push_2.default; } });
var pull_2 = require("./pull");
Object.defineProperty(exports, "Pull", { enumerable: true, get: function () { return pull_2.default; } });
var pair_2 = require("./pair");
Object.defineProperty(exports, "Pair", { enumerable: true, get: function () { return pair_2.default; } });
var req_2 = require("./req");
Object.defineProperty(exports, "Req", { enumerable: true, get: function () { return req_2.default; } });
var rep_2 = require("./rep");
Object.defineProperty(exports, "Rep", { enumerable: true, get: function () { return rep_2.default; } });
var buffer_1 = require("buffer");
Object.defineProperty(exports, "Buffer", { enumerable: true, get: function () { return buffer_1.Buffer; } });
//# sourceMappingURL=index.js.map