const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;


db.once('open', () => {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
});

module.exports = mongoose