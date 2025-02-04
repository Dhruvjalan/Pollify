const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/user')
const PollModel = require('./models/poll')

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }));
  
const DBNAME = 'MainDB'
const PORT=4000
const MONGO_CONNST = 'mongodb://127.0.0.1:27017/'
const MONGO_CONNST2 = 'mongodb://localhost:27017/'
mongoose.connect(MONGO_CONNST + DBNAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));
  
  app.post('/login',(req,res)=>{
    const {name,password} = req.body;
    UserModel.findOne({name: name}).then(user=>{
      if(user){
        if(user.password == password){
          res.json("Success")
        }else{
          res.json("The Password is Incorrect")
        }
      }else{
        res.json("User Does Not Exists")
      }
    })
  })
  
  app.get('/getpolls', (req, res) => {
    PollModel.find({})
      .then(polls => res.json(polls))
      .catch(err => res.status(500).json({ error: err.message }));
  });
app.post('/register',(req,res)=>{
    UserModel.create(req.body).then(user=> res.json(user)).catch(err=>res.json(err))
    console.log("Entered 1 user")
})

app.post('/insertpoll',(req,res)=>{
  PollModel.create(req.body).then(poll=> res.json(poll)).catch(err=>res.json(err))
  console.log("Entered 1 poll")
})
app.listen(PORT,()=>console.log("Server Running on port ",PORT))