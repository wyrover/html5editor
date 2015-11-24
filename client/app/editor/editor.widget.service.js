'use strict';

angular.module('html5editorApp')
  .service('EditorWidget', function ($rootScope) {
    var defaults = {
          position:'absolute',
          top:'0',
          left:'0'
        };
    
    var widgets = {
      text: {
        type: 'text',
        text: '点击可编辑',
        width: '100'
      },
      image: {
        type: 'image',
        src: 'assets/images/default.png',
        width: '100',
        height: '100'
      },
      shape: {
        type: 'shape',
        shape: 'rect',
        width: '50',
        height: '50'
      }
    };

    return {
      widget:{

      },
      getDefaults: function(type){
        var conf = angular.copy(defaults);
        angular.extend(conf, angular.copy(widgets[type]));
console.log(conf)
        return conf;
      }
    };
  });
