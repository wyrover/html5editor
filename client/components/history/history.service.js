'use strict';

angular.module('html5editorApp')
  .service('History', function () {

    function History(timeout, size){
      this.cur = 0;
      this.stack = [];
      this.timeout = timeout||500;
      this.size = size||100;
      this.lastTime = new Date().getTime()+timeout;
    }

    History.prototype.add = function(val){
      if(!this.canAdd(val)) return;
      this.stack.push(angular.copy(val));
      this.lastTime = new Date().getTime();
      this.cur = this.stack.length-1;
      if(this.stack.length>this.size) this.stack.shift();
    };

    History.prototype.canAdd = function(val){
      return this.cur>=this.stack.length-1&&this.lastTime + this.timeout < new Date().getTime();
    };

    History.prototype.get = function(){
      return angular.copy(this.stack[this.cur]);
    };

    History.prototype.back = function(){
      this.cur--;
      return this.get();
    };

    History.prototype.forward = function(){
      this.cur++;
      return this.get();
    };

    History.prototype.canBack = function(){
      return this.cur>0&&this.stack.length;
    };

    History.prototype.canForward = function(){
      return this.cur<this.stack.length-1;
    };


    return History;
  });
