const express     = require('express'),
      app         = express(),
      http        = require('http').Server(app),
      io          = require('socket.io')(http),
      mongoose    = require('mongoose');


const db          = mongoose.connect(),
      port        = process.env.PORT || 3000;

app.use(express.static('client'));

app.get('/', function(req,res){
  res.sendFile("index.html", {"root": "client"});
});

io.on('connection', function(socket){
  console.log('user connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
})

http.listen(port, function(){
    console.log('Running on port ' + port);
});
