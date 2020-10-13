const mongoose = require("mongoose");
const { db_user, db_pass, db_name, db_host, db_uri } = process.env;

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(
  db_uri,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },

)


mongoose.connection.on('error', () => console.error('connection error:'))
mongoose.connection.once('open', () => console.log('database connected'))

module.exports = mongoose;