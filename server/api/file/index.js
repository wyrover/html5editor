'use strict';

var express = require('express');
var config = require('../../config/environment');

var auth = require('../../auth/auth.service');

var controller = require('./file.controller');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.count, controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), auth.isAuthenticated(), controller.destroy);

module.exports = router;