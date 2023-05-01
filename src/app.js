const express = require('express');
const path = require('path');
const User = require("./models/usermsg")
const hbs = require('hbs');
const app = express();
const port = process.env.PORT ||  3000;



require('./db/conn');
// routing 
//app.get(path, callback);

//setting the path.

const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");
app.use(express.urlencoded({extended:false}))


//midleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jquery', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticpath));



app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath)


app.get("/", (req, res)=>{
    res.render("index")
});

// app.get("/contact", (req, res)=>{
//     res.render("contact")
// });

app.post("/contact", async(req,res) => {

    try{
    // res.send(req.body);

    const userData = new User(req.body);
   await userData.save();
   res.status(201).render("index");

    
    }catch (error){
          res.status(500).send(error);
    }
})



app.get("/service", (req, res)=>{
    res.render("service")
});

app.get("/about", (req, res)=>{
    res.render("about")
});


// server create.

app.listen(port, () => {
    console.log(`port is running on ${port}`)
})