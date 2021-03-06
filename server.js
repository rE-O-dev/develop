const
    express = require("express"),
    path    = require("path"),
    route   = require('./route'),
    app     = express();
    
    
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'html'));

app.use("/script", express.static(__dirname + "/dist") );

app.use('/', route);

app.listen(8080, () => {
    console.log("Express App on port 8080!");
})