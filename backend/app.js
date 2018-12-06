const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const app = express();

const server = http.createServer(app)
const port = 5000

console.log('Connecting to Local Database.');
mongoose.connect('mongodb://localhost/your-local-db-name', { useNewUrlParser: true })

server.listen(port)
console.log(`NodeJS Server running on port ${port}.`);
