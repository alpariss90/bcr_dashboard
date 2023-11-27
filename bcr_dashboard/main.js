const express = require('express');
const path = require('path');
const port = process.env.PORT || 8084;

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(port);
console.log(`RUNNING ON PORT ${port}`);