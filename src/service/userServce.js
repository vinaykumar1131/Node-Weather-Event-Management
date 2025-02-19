const { userModel } = require('../model/index');
const jwt = require('jsonwebtoken');
const AppError = require("../../lib/common/error")

exports.signUpUser = async (userDetails) => {
    const { userName, password } = userDetails
    if (!userName || !password) { }
    // const dataValidation = userDto.validate(userDetails)
    // console.log("dataValidation", dataValidation)
    // if (dataValidation)
    //     throw new AppError(dataValidation.details.map((err) => err.message).join(', '), 400);
    const userExist = await userModel.findOne({ userName: { $regex: new RegExp(`^${userName}$`, 'i') } });
    if (userExist)
        throw new AppError('Username already exists! Please choose another one.', 400);
    return await userModel.create(userDetails)
};

exports.loginUser = async (userDetails) => {
    const { userName, password } = userDetails;
    if (!userName || !password)
        throw new AppError('Pease Fill all the required fields', 400);

    const user = await userModel.findOne({ userName: { $regex: new RegExp(`^${userName}$`, 'i') } }).select('+password');
    if (!user)
        throw new AppError('No User Found', 400);
    else if (!(await user.correctPassword(password, user.password))) {
        throw new AppError('incorrect password', 400);
    }
    return jwt.sign({ _id: user?._id }, process.env.JWT_SECRET, {
        expiresIn: '90d',
    });
};