const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');

const schema = require('./src/schema.js');
let PORT = 3000;

// let schema = buildSchema(`
//   type Query {
//     postTitle: String,
//     blogTitle: String
//   }`
// );

let root = {
  postTitle: () => {
    return 'Build a Simple GraphQL Server With Express and NodeJS';
  },
  blogTitle: () => {
    return 'phemmz';
  }
};

const app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(PORT);
console.log('GraphQL API server running at localhost: ' + PORT);
