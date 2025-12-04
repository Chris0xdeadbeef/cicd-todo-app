const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: false
    },
    completed: {
      type: Boolean,
      required: true
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },  
  {
    indexes: []
  }
);
//index text en MongoDB, équivalent FULLTEXT (MySQL)
TodoSchema.index({text: "text"})

module.exports = mongoose.model("Todo", TodoSchema)
