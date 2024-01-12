const { Schema, model } = require("mongoose");


const commentSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
  });

const blogSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  pet: { type: Schema.Types.ObjectId, ref: "Pet", required: true },
  date: { type: Date, required: true, default: Date.now },
  photo: { type: String, required: true },
  title: { type: String },
  paragraph: { type: String, required: true },
  comments: [commentSchema],
});



const Blog = model("Blog", blogSchema);

module.exports = Blog;
