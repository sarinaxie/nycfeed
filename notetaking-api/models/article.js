import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  site: {
    type: String,
    required: true,
    index: true
  }
});
const Article = mongoose.model("article", ArticleSchema);
export default Article
