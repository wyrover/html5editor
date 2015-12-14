/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Sense = require('../api/sense/sense.model');


User.find({}).remove(function() {
  User.create( {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  },
  {
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function(err, user) {
      console.log('finished populating users');
      init_resource(user);
    }
  );
});

function init_resource(user){
  Sense.remove({}, function(){
    var sense = {"name":"新场景","user":user._id,"__v":0,"contents":[{"background":{"type":"background","src":"files/7476b6dc42ab0cb7a2eb7a065a97bd9e","active":false},"contents":[{"position":"absolute","top":176,"left":52,"borderWidth":"1","borderStyle":"none","borderColor":"#888888","padding":"0","animation":"","type":"form","inputType":"text","fieldType":"checkbox","placeholder":"提示信息","active":false,"scale":1,"transform":0},{"position":"absolute","top":5,"left":5,"borderWidth":"1","borderStyle":"none","borderColor":"#888888","padding":"0","animation":"","type":"image","src":"assets/images/default.png","width":313,"height":"100","active":false,"scale":1,"transform":0},{"position":"absolute","top":82,"left":147,"borderWidth":"1","borderStyle":"none","borderColor":"#888888","padding":"0","animation":"","type":"shape","shape":"circle","width":"50","height":"50","fill":"#f00","active":false,"scale":1,"transform":0},{"position":"absolute","top":117,"left":29,"borderWidth":"1","borderStyle":"none","borderColor":"#888888","padding":"0","animation":"","type":"text","text":"点击可编辑","width":"100","textAlign":"left","lineHeight":"1.5em","active":false,"scale":1,"transform":0},{"position":"absolute","top":113,"left":206,"borderWidth":"1","borderStyle":"none","borderColor":"#888888","padding":"0","animation":"","type":"text","text":"点击可编辑","width":"100","textAlign":"left","lineHeight":"1.5em","active":true,"scale":1,"transform":0,"group":-1}],"active":false},{"background":{"type":"background"},"contents":[],"active":true}]};
    Sense.create(sense, function(err, sense){
      console.log('finished populating sense')
    })
  })
  
}