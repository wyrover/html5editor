'use strict';

angular.module('html5editorApp')
  .service('EditorWidget', function ($rootScope, History, hotkeys) {
    var defaults = {
          position:'absolute',
          top:'0',
          left:'0',
          borderWidth: '1',
          borderStyle: 'none',
          borderColor: '#888888',
          padding: '0',
          animation: ''
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
      }
    };

    var s = $rootScope.$new(true);
    angular.extend(s, 
    {
      widget:{

      },
      getDefaults: function(type){
        var conf = angular.copy(defaults);
        angular.extend(conf, angular.copy(widgets[type]));

        return conf;
      }
    });

    s.$watch('widget.type',function(nv,ov){
      if(nv!=ov){
        History.forget('widget', s)
      }
    });

    History.watch('widget', s);
    
    hotkeys.bindTo(s)
        .add({
          combo:'ctrl+z',
          callback: function(){
            History.undo('widget',s);
          }
        })
        .add({
          combo:'ctrl+y',
          callback: function(){
            History.redo('widget',s);
          }
        });

    return s;
  });
