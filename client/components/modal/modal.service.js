'use strict';

angular.module('html5editorApp')
  .factory('Modal', function ($rootScope, $modal) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $modal.open() returns
     */
    function openModal(scope, modalClass) {
      var modalScope = $rootScope.$new();
      scope = scope || {};
      modalClass = modalClass || 'modal-default';

      angular.extend(modalScope, scope);

      return $modal.open({
        windowTemplateUrl: 'components/modal/modal.html',
        template:'aaa',
        windowClass: modalClass,
        scope: modalScope
      });
    }

    // Public API here
    return  function() {
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                normalModal;

            normalModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirm Delete',
                template: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-danger',
                  text: 'Delete',
                  click: function(e) {
                    normalModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancel',
                  click: function(e) {
                    normalModal.dismiss(e);
                  }
                }]
              }
            }, 'modal-danger');

            normalModal.result.then(function(event) {
              del.apply(event, args);
            });
          };
  });
