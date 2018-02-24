const messageController = function(Message){
  const get = function(req,res){
    Message.find(function(err,messages){
      if(err){
        res.status(500).send(err);
      }
      else res.json(messages);
    });
  }

  const post = function(req,res){
    let message = new Message(req.body);
    message.save();
    res.status(201).send(message);
  }

  return {
    get:get,
    post: post
  }
}

module.exports = messageController;
