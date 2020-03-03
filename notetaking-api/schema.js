import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
 type Note {
  _id: ID!
  title: String!,
  date: Date,
  content: String!
 }

 type Article {
  _id: ID!
  title: String!,
  date: String!,
  content: String!,
  site: String!,
  url: String!
 }

 scalar Date

 type Query {
  getNote(_id: ID!): Note
  allNotes: [Note]
  
  allArticles: [Article]
  getSiteArticles(site: String!): [Article]
 }

 input NoteInput {
 	title: String!
 	content: String!
 }

 input NoteUpdateInput {
  title: String
  content: String
 }

 type Mutation {
  createNote(input: NoteInput) : Note
  updateNote(_id: ID!, input: NoteUpdateInput): Note
  deleteNote(_id: ID!) : Note
 }

`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
