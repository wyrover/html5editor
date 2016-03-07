'use strict';

angular.module('html5editorApp')
  .service('Editor', function ($rootScope) {
    var defaults = {
          position:'absolute',
          top:'0',
          left:'0',
          borderWidth: '1',
          borderStyle: 'none',
          borderColor: '#888888',
          padding: '0',
          animation: '',
          scale: 1,
          transform: 0
        };
    
    var widgets = {
      text: {
        type: 'text',
        text: '点击可编辑',
        width: '100',
        textAlign: 'left',
        lineHeight: '1.5em'
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
        height: '50',
        fill: '#f00'
      },
      form: {
        type:'form',
        inputType:'text',
        fieldType:'input',
        placeholder:'提示信息'
      },
      custom: {
        type: 'custom',
        code: '',
        height: '100',
        width: '320'
      }
    };

    return {
      page:{},
      widget:{},
      getDefaults: function(type){
        var conf = angular.copy(defaults);
        angular.extend(conf, angular.copy(widgets[type]));

        return conf;
      }
    };
  });