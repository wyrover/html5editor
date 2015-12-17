'use strict';

angular.module('html5editorApp')
  
  .factory('TemplateModal', function ($rootScope, $modal) {
    
    function openModal(scope){
      var modalScope = $rootScope.$new();
      scope = scope || {};

      angular.extend(modalScope, scope);

      return $modal.open({
        size:'lg',
        templateUrl: 'app/template/modal.html',
        controller: TemplateModalCtrl
      });
    };

    function TemplateModalCtrl($scope, $modalInstance, Template){
      
      $scope.totalItems = 1;

      $scope.list = query(1);

      $scope.remove = function(index){
        $scope.list[index].$remove(function(){
          $scope.list.splice(index, 1)
        });
      };

      $scope.select = function(file){
        $modalInstance.close(file);
      };

      $scope.onPageChange = function(){
        $scope.list = query($scope.currentPage,{type:'widget'});
      };

      function query(page, params){
        return Template.page(page)
          .query(params,function(data,headersGetter){
            var headers = headersGetter();
            var range = Template.parseRange(headers['content-range']);
            $scope.totalItems = range.length;
          });
      }
    };

    return function(options){
      return openModal(options);
    }
  });
