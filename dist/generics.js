var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    //added <T> to make this function generic datatype
    //but what if we want only generic object to be passed in
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var userJack = {
    name: 'jack',
    data: {
        meta: 'jill'
    }
};
var userN = {
    name: 'jack',
    data: ['foo', 'bar']
};
var result = addId(userJack);
console.log(result);
var addK = function (obj) {
    var k = 'coccon';
    return __assign(__assign({}, obj), { k: k });
};
var newresult = addK(userJack); // only objects will be allowed in addK
console.log(newresult);
