app.put('/edittodo', async (req, res) => {
  const { name, index, todoItem } = req.body;
  console.log(`name=%{name} and todo=%{todoItem}`)
  

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { name },
      { $set: { [`Todo.${index}`]: todoItem } },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});