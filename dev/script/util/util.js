(function(factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        console.log('Util load with commonJS');
        module.exports = factory();
    } else {
        console.log('Util load with normal');
        factory();
    }
}(function() {

    var Util = function() {

    };

    Util.merge = function() {
        var obj = {},
            i = 0,
            il = arguments.length,
            key;

        for (; i < il; ++i) {
            for (key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    obj[key] = arguments[i][key];
                }
            }
        }

        return obj;
    };

    Util.parseDom = function(str) {
        var div = document.createElement('div');
        div.innerHTML = str;

        return div.children[0];
    };

    Util.closest = function(el, selector) {
        var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        while (el) {
            if (matchesSelector.call(el, selector)) {
                return el;
            } else {
                el = el.parentElement;
            }
        }
        return null;
    };

    Util.strToJson = function(str){
        return JSON.parse(str);
    };

    Util.indexOf = function(el, collection){
        return [].indexOf.call(collection, el);
    }




    window.Util = Util;

    return Util;
}));
