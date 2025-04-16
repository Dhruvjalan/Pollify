const mongoose = require('mongoose')

const PollSchema = new mongoose.Schema({
    title: String,
    poll: Array,
    author: String,
    voted: Array,
    totalvotes: Number,


})

const PollModel = mongoose.model("Polls",PollSchema)
module.exports = PollModel