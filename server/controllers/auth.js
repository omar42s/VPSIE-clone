const bcrypt = require('bcrypt');
const UserRegister = require('../models/userRegisterModel');
const { StatusCodes } = require('http-status-codes');

const userRegisterController = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const emailAlreadyRegistered = await UserRegister.findOne({ email });
    
    if (emailAlreadyRegistered) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await UserRegister.create({
        firstName,
        lastName,
        email,
        password: hashedPassword 
    });

    return res.status(StatusCodes.CREATED).json({ message: 'User registered successfully' });
};

const userLoginController = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await UserRegister.findOne({ email });
    if (!user) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid password' });
    }

    
    return res.status(StatusCodes.OK).json({ message: 'Login successful', user });
};

module.exports = {
    userRegisterController,
    userLoginController
};
