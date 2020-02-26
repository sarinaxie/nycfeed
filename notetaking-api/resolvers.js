import Note from "./models/note";
import Article from "./models/article";
export const resolvers = {
  Query: {
    async getNote(root, { _id }) {
      return await Note.findById(_id);
    },
    async allNotes() {
      return await Note.find();
    },
    async getSiteArticles(root, { site }) {
      return await Article.find({site: site})
    },
    async allArticles() {
      return await Article.find();
    }
  },
  Mutation: {
    async createNote(root, { input }) {
      return await Note.create(input);
    },
    async updateNote(root, { _id, input }) {
      return await Note.findOneAndUpdate({ _id }, input, { new: true });
    },
    async deleteNote(root, { _id }) {
      return await Note.findOneAndRemove({ _id });
    }
  }
};
