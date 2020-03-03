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
    type: String,
    required: true
  },
  site: {
    type: String,
    required: true,
    index: true
  },
  url: {
    type: String,
    required: true
  }
});
const Article = mongoose.model("article", ArticleSchema);
export default Article
