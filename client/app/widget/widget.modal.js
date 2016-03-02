'use strict';

angular.module('html5editorApp')
  
  .factory('WidgetModal', function ($rootScope, $uibModal) {
    
    function openModal(scope){
      var modalScope = $rootScope.$new();
      scope = scope || {};

      angular.extend(modalScope, scope);

      return $uibModal.open({
        size:'lg',
        templateUrl: 'app/widget/modal.html',
        controller: WidgetModalCtrl
      });
    };

    function WidgetModalCtrl($scope, $uibModalInstance, Widget){
      
      $scope.totalItems = 1;

      $scope.list = query(1);

      $scope.remove = function(index){
        $scope.list[index].$remove(function(){
          $scope.list.splice(index, 1)
        });
      };

      $scope.select = function(file){
        $uibModalInstance.close(file);
      };

      $scope.onPageChange = function(){
        $scope.list = query($scope.currentPage);
      };

      function query(page, params){
        return Widget.page(page)
          .query(params,function(data,headersGetter){
            var headers = headersGetter();
            var range = Widget.parseRange(headers['content-range']);
            $scope.totalItems = range.length;
          });
      }
    };

    return function(options){
      return openModal(options);
    }
  });
