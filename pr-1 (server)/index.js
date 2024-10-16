const express = require ('express');

const port = 8888;

const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    return res.render('index',{
        title : "main page",
        pagename : "Main Page",
        users : [
            {
                id : 1,
                name : "jay"
            },
            {
                id : 2,
                name : "ajay"
            },
            {
                id : 3,
                name : "vjay"
            },
        ]
    })
})

app.get('/home',(req,res)=>{
    return res.render('home')
})
app.get('/about',(req,res)=>{
    return res.render('about')
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server start on port :- ${port}`);
    
})