const { mongoose, autoIncrement } = require('../mongo')

const commentSchema = new mongoose.Schema({
  messageId:{
    type: Number,
    unique: true
  },
  content:String,
  username: String
})

module.exports = mongoose.model('Comment',commentSchema)