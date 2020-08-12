const express = require('express');

const exphbs = require('express-handlebars');

let app = express();

let PORT = process.env.PORT || 8080;

// Connecting Public folder for Access to Styling and Imgs.
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/',(req, res) =>{

    console.log('Testing out if the page is live');

    res.render('index')
})



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});