'use strict';

angular.module('html5editorApp')
  .factory('Resource', function ($resource) {
    return function( url, params, methods ) {
      var defaults = {
        update: { method: 'PUT', isArray: false },
        create: { method: 'POST', isArray: false }
      };
      
     methods = angular.extend( defaults, methods );
 
     var resource = $resource( url, params, methods );
 
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
