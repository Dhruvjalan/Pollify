const express = require('express')
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors')
const UserModel = require('./models/user')

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type']
}));

const DBNAME = 'MainDB'
const PORT = 4000
const MONGO_CONNST = 'mongodb://127.0.0.1:27017/'
mongoose.connect(MONGO_CONNST + DBNAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// ✅ Login route
app.post('/login', (req, res) => {
    const { name, password } = req.body;
    UserModel.findOne({ name }).then(user => {
        if (user) {
            if (user.password == password) {
                res.json("Success");
            } else {
                res.json("The Password is Incorrect");
            }
        } else {
            res.json("User Does Not Exist");
        }
    });
});

// ✅ Register route
app.post('/register', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

// ✅ Get full user data by name
app.post('/getuserdata', (req, res) => {
    const { name } = req.body;

    UserModel.findOne({ name }, { password: 0 }) // exclude password from response
        .then(user =>  {
            if (!user) return res.status(404).json({ message: "User not found" });
            res.json(user);
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

// ✅ Update user data
app.put('/updateuserdata/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedUser = await UserModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/addtodo', async (req, res) => {
  const { name, todoItem } = req.body;
  console.log(`name=%{name} and todo=%{todoItem}`)
  if (!name || !todoItem) {
    return res.status(400).json({ error: "Missing <name> or <todoItem>" });
  }

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { name },
      { $addToSet: { Todo: todoItem } },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//updatetodo
app.put('/edittodo', async (req, res) => {
  const { name, index, todoItem } = req.body;
  console.log(`name=${name} and todo=${todoItem}`);

  try {
    // Find the user and update the Todo array at the specified index
    const updatedUser = await UserModel.findOneAndUpdate(
      { name },
      { $set: { [`Todo.${index}`]: todoItem } },  // Use this to access the item by its index
      { new: true }
    );
    
    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.delete('/deletetodo', async (req, res) => {
  const { name, todoItem } = req.body;
  

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { name },
      { $pull: { Todo: todoItem } },
      {new: true}
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.listen(PORT, () => console.log("Server Running on port", PORT));
