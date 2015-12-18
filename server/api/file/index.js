'use strict';

var express = require('express');
var config = require('../../config/environment');
var multer = require('multer');
var storage = require('gridfs-storage-engine')({
    url:config.mongo.uri
});
var upload = multer({storage:storage});
var auth = require('../../auth/auth.service');

var controller = require('./file.controller');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.count, controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.user, upload.single('file'), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), auth.isAuthenticated(), controller.destroy);

module.exports = router;