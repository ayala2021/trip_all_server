const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema({
    firstName: String,
    lastName: String,
    email: {type: String, format: "email"},
    password: {type: String, length: 6}
})

module.exports = mongoose.model('users', userSchema);