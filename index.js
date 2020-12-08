const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

// counter variable
let count = 0;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {

  socket.on('join', function () {
    socket.emit('join', count);
  })

  // When increment event is called on client side
  socket.on('increment', () => {

    // Increment the counter
    count += 1;

    // Broadcast it to all connected clients including the one when emitted the event
    io.emit('increment', count);
  })
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});
