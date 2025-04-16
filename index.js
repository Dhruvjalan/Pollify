const express = require('express')
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId;

const cors = require('cors')
const UserModel = require('./models/user')
const PollModel = require('./models/poll')

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST','PUT','DELETE'],
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
})

app.post('/insertpoll',(req,res)=>{
  PollModel.create(req.body).then(poll=> res.json(poll)).catch(err=>res.json(err))
})

app.post('/getpoll',(req,res)=>{
  const {id} = req.body;
  PollModel.findOne({_id: new ObjectId(id)}).then(poll=>{
    res.json(poll)
  })
})

app.put('/updatepoll/:id', async (req, res) => { 
  try {
    const { id } = req.params;
    const blog = req.body;

    // Convert id to Mongoose ObjectId
    const objectId = new mongoose.Types.ObjectId(id);
    blog._id = objectId; // Ensure the replacement has the correct _id type

    // Replace the document and return the updated one
    const updatedPoll = await PollModel.findOneAndReplace(
      { _id: objectId }, 
      blog, 
      { new: true } // This option returns the updated document
    );

    if (!updatedPoll) {
      return res.status(404).json({ message: "Poll not found" });
    }
    res.json(updatedPoll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/delpoll', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ success: false, message: "Bad Request: 'id' is required" });
  }

  try {
    // Convert id to Mongoose ObjectId
    const objectId = new mongoose.Types.ObjectId(id);

    PollModel.findOneAndDelete({ _id: objectId })
      .then(deletedPoll => {
        if (!deletedPoll) {
          return res.status(404).json({ success: false, message: "Poll not found" });
        }
        res.json(deletedPoll);
      })
      .catch(error => {
        res.status(500).json({ success: false, message: "Error deleting poll", error: error.message });
        console.log("error: ",error)

      });
  } catch (error) {
    res.status(400).json({ success: false, message: "Bad Request: Invalid 'id' format", error: error.message });
  }
});


app.listen(PORT,()=>console.log("Server Running on port ",PORT))