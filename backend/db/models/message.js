const {mongoose, autoIncrement} = require('../mongo')

const messageSchema = new mongoose.Schema({
  messageId: {
    type: Number,
    unique: true
  },
  userId: Number,
  content: String,
  picture: String,
  msgDate: Date,
  likes: Number,
  sport: String
})

messageSchema.plugin(autoIncrement, {
  model: 'Message',
  field: 'messageId',
  startAt: 1
})

module.exports = mongoose.model('Message', messageSchema)