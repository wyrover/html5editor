'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();

router.get('/', passport.authenticate('qq'));

router.get('/callback',
  passport.authenticate('qq',{failureRedirect:'/login'}),
  function(req, res){
    res.redirect('/');
  });

module.exports = router;
