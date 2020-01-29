const express = require('express');
const messageRoute = express.Router();
const messageController = require('../controllers/messageController');
const { sendMessage, deleteMessage, readMessage } = messageController;

messageRoute.post('/message', sendMessage);
messageRoute.delete('/message/:message_id', deleteMessage);
messageRoute.put('/message/:message_id', readMessage);

module.exports = messageRoute;
