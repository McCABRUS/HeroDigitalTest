const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//Settings
app.set('port', 3000);
app.set('view engine','ejs');

//Statics
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use(require('./routes/'));
app.listen(app.get('port'), () => {
	console.log("Server on port", app.get('port'));
});

//BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
