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

      var range = '';

      function range(config){
        console.log(config)
        return range;
      }
      
     methods = angular.extend({}, defaults, methods );

     params = angular.extend({}, default_params, params);
 
     var resource = $resource( url, params, methods );

     resource.range = function(str){
       range = str;
       return this;
     };

     resource.prototype.$range = function(str){
       range = str;
       return this;
     };
 
     resource.prototype.$save = function() {
       if ( !this._id ) {
         return resource.prototype.$create.apply(this, arguments);
       }
       else {
         return resource.prototype.$update.apply(this, arguments);
       }
     };
 
     return resource;
   };
  });
