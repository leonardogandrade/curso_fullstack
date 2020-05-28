const express = require('express');
const server = express();

server.use('/api',require('./src/routes'));

server.listen(3002);
console.log('servidor ouvindo na porta 3002');