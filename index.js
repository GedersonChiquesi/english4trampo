const express = require('express');
const http = require('http');
const english4Trampo = require('./lib/english4Trampo');
const app = express();


app.disable('x-powered-by');

app.use('/', function(req, res, next){
  res.render('./index.ejs', { word:
    english4Trampo.random()}
    ); 
});


  if (app.get('env') !== 'test') {
    let port = process.env.PORT || 3000;
    let server = http.createServer(app);
    app.set('port', port);
    server.listen(port);
    server.on('error', console.error); // eslint-disable-line no-console
  }