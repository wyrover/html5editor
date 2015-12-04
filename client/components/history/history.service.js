'use strict';

angular.module('html5editorApp')
  .service('History', function () {

    function History(timeout){
      this.cur = 0;
      this.stack = [];
      this.timeout = timeout;
      this.lastTime = new Date().getTime()+timeout;
    }

    History.prototype.add = function(val){
      if(!this.canAdd()) return;
      this.stack.push(angular.copy(val));
      this.lastTime = new Date().getTime();
      this.cur++;
    };

    History.prototype.canAdd = function(){
      return this.cur>=this.stack.length-1&&this.lastTime + this.timeout < new Date().getTime();
    };

    History.prototype.get = function(){
      return angular.copy(this.stack[this.cur]);
    };

    History.prototype.back = function(){
      this.canBack()&&this.cur--;
      return this.get();
    };

    History.prototype.forward = function(){
      this.canForward()&&this.cur++;
      return this.get();
    };

    History.prototype.canBack = function(){
      return this.cur>0;
    };

    History.prototype.canForward = function(){
      return this.cur<this.stack.length-1;
    };


    return History;
  });
