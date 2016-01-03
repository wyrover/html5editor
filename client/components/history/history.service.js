'use strict';

angular.module('html5editorApp')
  .service('History', function () {

    function History(timeout, size){
      this.init(timeout, size);
    }

    History.prototype.init = function(timeout, size){
      this.cur = -1;
      this.stack = [];
      this.prev = -1;
      this.timeout = timeout||500;
      this.size = size||100;
      this.lastTime = new Date().getTime()+this.timeout;
    };

    History.prototype.add = function(val){
      if(!this.canAdd(val)) return;
      this.stack.push(angular.copy(val));
      this.lastTime = new Date().getTime();
      this.prev = this.stack.length-1;
      this.cur = this.stack.length-1;
      if(this.stack.length>this.size) this.stack.shift();
    };

    History.prototype.canAdd = function(val){
      if(this.cur>-1&&angular.equals(this.stack[this.cur], val)) return false;
      return this.lastTime + this.timeout < new Date().getTime();
    };

    History.prototype.get = function(){
      return angular.copy(this.stack[this.cur]);
    };

    History.prototype.back = function(){
      this.prev = this.cur;
      this.cur--;
      return this.get();
    };

    History.prototype.forward = function(){
      this.prev = this.cur;
      this.cur++;
      return this.get();
    };

    History.prototype.canBack = function(){
      return this.cur>0&&this.stack.length;
    };

    History.prototype.canForward = function(){
      return this.cur<this.stack.length-1;
    };

    History.prototype.clear = function(){
      this.init();
    };


    return History;
  });
