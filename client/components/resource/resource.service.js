'use strict';

angular.module('html5editorApp')
  .factory('Resource', function ($resource) {
    return function( url, params, methods ) {
      var defaults = {
        update: { method: 'PUT', isArray: false },
        create: { method: 'POST', isArray: false },
        query: { method: 'GET', isArray: true, headers:{'Range':range}}
      };

      var default_params = {
        'id':'@_id'
      };

      var range = 'items=0-10';

      function range(config){
        return range;
      }
      
     methods = angular.extend({}, defaults, methods );

     params = angular.extend({}, default_params, params);
 
     var resource = $resource( url, params, methods );

     resource.page = function(n){
       var obj = {
          unit:'items',
          first:(n-1)*4,
          last:n*4-1
        };
       range = format(obj);
       return this;
     };

     resource.parseRange = parse;
     resource.formatRange = format;
 
     resource.prototype.$save = function() {
       if ( !this._id ) {
         return resource.prototype.$create.apply(this, arguments);
       }
       else {
         return resource.prototype.$update.apply(this, arguments);
       }
     };

     function format(options) {
      options.length = options.length == null ? '*' : options.length;

      var first = options.first;
      var last = options.last || (options.first + options.limit - 1);

      if (last - first < 0) return options.unit + ' */' + options.length;

      return options.unit + '=' + first + '-' + last ;
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
 
     return resource;
   };
  });
