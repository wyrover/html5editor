'use strict';

angular.module('html5editorApp')
  .service('Header', function () {
    var headers = {};

    /**
     * Format the content-range header.
     *
     * @param {Object} options
     * @param {String} options.unit
     * @param {Number} options.start
     * @param {Number} options.limit
     * @param {Number} options.length
     */

    function format(options) {
      options.length = options.length == null ? '*' : options.length;

      var first = options.first;
      var last = options.last || (options.first + options.limit - 1);

      if (last - first < 0) return options.unit + ' */' + options.length;

      return options.unit + ' ' + first + '-' + last + '/' + options.length;
    }

    /**
     * Parse the content-range header.
     *
     * @param {String} str
     * @returns {Object}
     */

    function parse(str) {
      var matches;

      if (matches = str.match(/^(\w+) (\d+)-(\d+)\/(\d+|\*)/)) return {
          unit: matches[1],
          first: +matches[2],
          last: +matches[3],
          length: matches[4] === '*' ? null : +matches[4]
        };

      if (matches = str.match(/^(\w+) \*\/(\d+|\*)/)) return {
          unit: matches[1],
          first: null,
          last: null,
          length: matches[2] === '*' ? null : +matches[2]
        };

      return null;
    }

    return {

    }
  });
