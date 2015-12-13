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

    function TemplateModalCtrl($scope, $modalInstance, Template, Header){
      
      $scope.totalItems = 1;

      $scope.list = Template.query({type:'widget'}, function(data,headersGetter){
        var headers = headersGetter();
        var range = Header.rangeParse(headers['content-range']);console.log(range)
        $scope.totalItems = range.length;
      });

      $scope.remove = function(index){
        $scope.list[index].$remove(function(){
          $scope.list.splice(index, 1)
        });
      };

      $scope.select = function(file){
        $modalInstance.close(file);
      };

      $scope.onPageChange = function(){
        var range = {
          unit:'items',
          first:$scope.currentPage*4,
          last:($scope.currentPage+1)*4-1,
          //length:$scope.totalItems
        };
        $scope.list=Template.range(Header.rangeFormat(range)).query();
      };
    };

    return function(options){
      return openModal(options);
    }
  });
