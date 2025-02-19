const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { userModel } = require("../model/index"); // Import your User model


exports.protect = async (req, res, next) => {
    try {
        let token;

        // 1️⃣ Check if token exists in headers or cookies
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
            token = req.headers.authorization.split(' ')[1];

        if (!token)
            return res.status(401).json({ success: false, message: 'You are not logged in! Please log in to get access.' });


        // 2️⃣ Verify token

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded)
            return res.status(401).json({ success: false, message: 'You are not logged in! Please log in to get access.' });

        // 3️⃣ Check if user exists in the database
        const currentUser = await userModel.findById(decoded._id);
        if (!currentUser)
            return res.status(401).json({ success: false, message: 'The user belonging to this token no longer exists.' });


        // ✅ Grant access
        req.user = currentUser;
        next();
    } catch (err) {
        return res.status(401).json({ success: false, error: 'Invalid or expired token' });
    }
}
