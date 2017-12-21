exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(Constructor, greeting) {
    Constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var ret = [];
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      ret.push(keys[i] + ': ' + obj[keys[i]]);
    }
    return ret;
  },
};
