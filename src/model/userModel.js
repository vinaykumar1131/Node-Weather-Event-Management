const mongoose = require('mongoose');
const constants = require("../../lib/common/constants")
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})
UserSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}
module.exports = mongoose.model('User', UserSchema);
