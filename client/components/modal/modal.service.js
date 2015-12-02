'use strict';

angular.module('html5editorApp')
  .factory('Modal', function ($rootScope, $modal) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $modal.open() returns
     */
    function openModal(scope) {
      var modalScope = $rootScope.$new();
      scope = scope || {};

      angular.extend(modalScope, scope);

      return $modal.open({
        scope: modalScope
      });
    }

    // Public API here
    return  function(options, cb) {
            var normalModal;

            normalModal = openModal(options);

            normalModal.result.then(function(event) {
              cb.apply(null, arguments);
            });
          };
  });
