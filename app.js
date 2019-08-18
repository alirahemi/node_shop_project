const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const path = require('path');
const rootDir = require('./util/path');

//intial parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin',adminRoutes);
app.use(userRoutes);

app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(rootDir,'view','404.html'))
});


//create server and listen to requests
app.listen(2000);
