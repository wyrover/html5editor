'use strict';

angular.module('html5editorApp')
  .service('History', function () {

    function History(timout){
      this.cur = 0;
      this.stack = [];
      this.timeout = timout;
      this.lastTime = new Date().getTime();
    }

    History.prototype.add = function(val){
      this.stack.push(val);
    };

    History.prototype.canAdd = function(){
      return this.lastTime + this.timout < new Date().getTime();
    };

    History.prototype.get = function(){
      return this.stack[this.cur];
    };

    History.prototype.back = function(){
      this.canBack()&&this.cur--;
    };

    History.prototype.forward = function(){
      this.canForward()&&this.cur++;
    };

    History.prototype.canBack = function(){
      return this.cur>0;
    };

    History.prototype.canForward = function(){
      return this.cur<this.stack.length-1;
    };


    return History;
  });
