const Mondoose = require('mongoose');
const dotenv = require('dotenv');
class dbConnect {
  connect() {
    dotenv.config();
    Mondoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(console.log('Succesfull connection to database'))
      .catch((err) =>
        console.log('To database is not connected: ', err.message)
      );
  }
}

module.exports = new dbConnect();
