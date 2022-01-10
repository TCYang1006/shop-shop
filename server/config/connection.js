const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://tcknyaj:01Elletc!@cluster0.ylckf.mongodb.net/mernshopping?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;

