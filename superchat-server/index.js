var Hapi = require('hapi');

//Routes
var friendsRoute = require('./routes/friends/friends-route');

// Create a server with a host and port
var server = new Hapi.Server('localhost', 8000);

server.route(friendsRoute);

// Start the server
server.start();