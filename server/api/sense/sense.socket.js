/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Sense = require('./sense.model');

exports.register = function(socket) {
  Sense.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Sense.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('sense:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('sense:remove', doc);
}