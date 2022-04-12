const express = require('express');
const path = require('path');
const app = express()



app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.set("view engine", "ejs")

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    next();
});

app.post('/api/status', function (req, res, next) {

});
module.exports = app;

app.use(express.static(path.join(__dirname, "public")))


app.get("/",function(req, res){
    res.render("home")
})
app.get("/news",function(req, res){
    res.render("news")
})
app.get("/contact",function(req, res){
    res.render("contact")
})
const PORT = 3000;
app.listen(PORT || 5000);