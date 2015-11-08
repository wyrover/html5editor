/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Widget = require('./widget.model');

exports.register = function(socket) {
  Widget.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Widget.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('widget:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('widget:remove', doc);
}