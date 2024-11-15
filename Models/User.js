const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phoneNumber: String,
    password: String,
    role: { type: String, default: 'logistics_head' },
    companyName: String,
    profileImage: { type: String, required: false }
    
});

module.exports = mongoose.model('User', UserSchema);
