const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', 'view');

//intial parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(adminRoutes.routes);
app.use(userRoutes);

app.use((req, res, next)=>{
  res.status(404).render('404', {pageTitle: 'Page not found',
  path:''});
});


//create server and listen to requests
app.listen(2000);
