'use strict';

var express = require('express');
var config = require('../../config/environment');
var multer = require('multer');
var storage = require('gridfs-storage-engine')({
    url:config.mongo.uri
});
var upload = multer({storage:storage});

var controller = require('./file.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', upload.single('file'), controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;