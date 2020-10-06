const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

// Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var stup = "Other stuff";

// Set handlebars routes
app.get('/', function (req, res) {
    res.render('home', {
    	stuff: stup
    });
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT));

