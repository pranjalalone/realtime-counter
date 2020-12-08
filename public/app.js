// Initialize client side socket
const socket = io();

// Increment Button
const btn = document.querySelector('button');



// counter
const counter = document.querySelector('p');


// When the client first joins
// Ask for value of count
socket.emit('join');

socket.on('join', function (count) {
  counter.textContent = count;
});


// On click event button
// Run a function when user click
btn.addEventListener('click', function () {

  // Emit increment event
  socket.emit('increment');

})

socket.on('increment', function (count) {

  // Set the current value of count
  counter.textContent = count;
})
