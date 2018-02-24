const express     = require('express'),
      app         = express(),
      http        = require('http').Server(app),
      io          = require('socket.io')(http),
      mongoose    = require('mongoose'),
      bodyParser  = require('body-parser');


const db            = mongoose.connect('mongodb://localhost/streaming-app-db'),
      port          = process.env.PORT || 3000,
      Message       = require('./models/messageModel');
      messageRouter = require('./routes/messageRoutes')(Message);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/messages', messageRouter);

app.use(express.static('client'));

app.get('/', function(req,res){
  res.sendFile("index.html", {"root": "client"});
});

app.get('/', function(req,res){
    res.send();
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
