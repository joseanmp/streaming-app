const express = require('express');

const messageRoutes = function(Message){
  const messageRouter   = express.Router(),
        rateController  = require('../controllers/messageController')(Message);

  messageRouter.route('/')
    .get(rateController.get),
    .post(rateController.post);

  return messageRouter;
}

module.exports = messageRoutes;
