exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
      // 'this' is null here.
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures: function(arr, fn) {
    var ret = [];
    var makeFn = function (val) {
      return function () {
          return fn(val);
        };
    };
    for (var i = 0; i < arr.length; i++) {
      ret.push(makeFn(arr[i]));
    }
    return ret;
  },

  partial: function(fn, str1, str2) {
    return function (str3) {
      return fn.call(null, str1, str2, str3);
    };
  },

  useArguments: function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn(...args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function () {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn(...moreArgs);
    };
  },

  curryIt: function(fn) {
      var allargs = [],
       funcLen = fn.length;
 
     var f = function (newarg) {
       if (newarg !== undefined && newarg != null) {
        allargs.push(newarg);
         if (allargs.length >= funcLen) {
           return fn(...allargs);
         }
       }
       return f;
     };
     return f(null);
function applyArguments(fn, arguments) {
     return fn.apply(null, arguments);
}
},
};
