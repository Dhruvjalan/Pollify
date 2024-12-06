import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import bodyParser from 'body-parser';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express';

var app=express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.set('view engine','ejs');
app.use('/assets',express.static('stylestuff'));


app.get('/aboutus',(req,res)=>{
    res.send("This is the about us page");
})

app.get('/team',(req,res)=>{
    res.send("This is the team page");
})

app.get('/contact',(req,res)=>{
    console.log("Query Object="+req.query);
    console.log(req.query);
    res.render('contact',{qs: req.query});
});

app.post('/contact',urlencodedParser,function(req,res){
        console.log("post object= ");
        console.log(req.body)
        res.render('contact-succ', {data: req.body});
        //res.send('welcome, '+req.body.name);
    });

app.get('/profile/:id',(req,res)=>{
    var data={name: 'Ryu',age:29,job: 'Webdev', hobbies: ['eating','fighting','fishing']}
    res.render('profile',{id: req.params.id,data: data});
}) 

app.get('/',(req,res)=>{
    res.render('index.ejs');
    console.log("HOME");
})
app.get('/contacttheteam',(req,res)=>{
    res.sendFile(__dirname+'/contactindex.html');
})
app.get('/nav',(req,res)=>{
    res.render('partials/nav');
})
app.listen(3000);