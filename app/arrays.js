exports = typeof window === 'undefined' ? global : window;
exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },
  sum: function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove: function(arr, item) {
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        ret.push(arr[i]);
      }
    }

    return ret;
  },
  removeWithoutCopy: function(arr, item) {
    var arrLength = arr.length,
      i;
    for (i = 0; i < arrLength; i += 1) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
  },
  append: function(arr, item) {
    arr.push(item);
    return arr;
  },
  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    var arrLength = arr.length,
      i;

    for (i = 0; i < arrLength; i += 1) {
      if (i === index) {
        arr.splice(i, 0, item);
        arrLength += arrLength;
      }
    }
    return arr;
  },

  count: function(arr, item) {
    var arrLength = arr.length,
      count = 0,
      i;

    for (i = 0; i < arrLength; i += 1) {
      if (arr[i] === item) {
        count += 1;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var i,
      counts = [],
      duplicates = [],
      arrLength = arr.length,
      countsLength;

    for (i = 0; i < arrLength; i += 1) {
      if (counts[arr[i]] === undefined) {
        counts[arr[i]] = 1;
      } else {
        counts[arr[i]] += 1;
      }
    }

    countsLength = counts.length;
    for (i = 0; i < countsLength; i += 1) {
      if (counts[i] > 1) {
        duplicates.push(i);
      }
    }
    return duplicates;
  },

  square: function(arr) {
    var i,
      arrLength = arr.length;

    for (i = 0; i < arrLength; i += 1) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var arrLength = arr.length,
      counts = [],
      countsLength,
      duplicates = [],
      i;

    for (i = 0; i < arrLength; i += 1) {
      if (arr[i] === target) {
        duplicates.push(i);
      }
    }

    return duplicates;
  }
};
