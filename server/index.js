const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/user');

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type']
}));

const DBNAME = 'MainDB';
const PORT = 4000;
const MONGO_CONNST = 'mongodb://127.0.0.1:27017/';
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
                console.log("userid = ", user._id);
                res.json({ message: "Success", _id: user._id });
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

// ✅ Get full user data by _id
app.post('/getuserdata', (req, res) => {
  const { name } = req.body; // name here contains the _id string
  console.log('_id L52', name);

  UserModel.findOne({ _id: mongoose.Types.ObjectId.createFromHexString(name) }) 
      .then(data => {
          if (!data) return res.status(404).json({ message: "User not found" });
          console.log("data=",data.Todo);
          res.json(data);
      })
      .catch(err => res.status(500).json({ error: err.message }));
});

// ✅ Update user data
// app.put('/updateuserdata/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updatedData = req.body;

//         const updatedUser = await UserModel.findByIdAndUpdate(id, updatedData, { new: true });
//         if (!updatedUser) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         res.json(updatedUser);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// ✅ Add to Todo
app.put('/addtodo', async (req, res) => {
    const { name, todoItem } = req.body;
    console.log("in addtodo")
    if (!name || !todoItem) {
        return res.status(400).json({ error: "Missing <name> or <todoItem>" });
    }

    try {
        const updatedUser = await UserModel.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId.createFromHexString(name) },
            { $addToSet: { Todo: todoItem } },
            { new: true }
        );
        if (!updatedUser) return res.status(404).json({ message: "User not found" });
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Edit todo item at index
app.put('/edittodo', async (req, res) => {
  const { name, index, todoItem } = req.body;

  // Basic validations
  if (!name || index === undefined || !todoItem) {
      return res.status(400).json({ error: "Missing <name>, <index>, or <todoItem>" });
  }

  try {
      const user = await UserModel.findById(name);
      if (!user) return res.status(404).json({ message: "User not found" });

      if (!Array.isArray(user.Todo)) {
          return res.status(400).json({ error: "Todo is not an array" });
      }

      if (index < 0 || index >= user.Todo.length) {
          return res.status(400).json({ error: "Invalid todo index" });
      }

      user.Todo[index] = todoItem;
      await user.save();

      res.json(user);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});


// ✅ Delete todo item
app.delete('/deletetodo', async (req, res) => {
    const { _id, todoItem } = req.body;

    try {
        console.log("Trying to delete:", todoItem, "from user:", _id);
        const updatedUser = await UserModel.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId.createFromHexString(_id) },
            { $pull: { Todo: todoItem } },
            { new: true }
        );
        if (!updatedUser) return res.status(404).json({ message: "User not found" });
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log("Server Running on port", PORT));
