const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
//const db = require('./config/connection');
const db = require('mongoose');


const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use('/images', express.static(path.join(__dirname, '../public/images')));
} else {
  app.use('/images', express.static(path.join(__dirname, '../client/public/images')));
}


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../public')));
}

app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  } else {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  }
});
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://tcknyaj:01Elletc!@cluster0.ylckf.mongodb.net/mernshopping?retryWrites=true&w=majority';
console.log("MONGODB_URI: ", MONGODB_URI);
db.connect(`${MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(()=> {
  app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      });
}).catch(err => {
  console.log(err);
});

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });
