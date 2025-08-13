const User = require('../models/User');

// GET all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET user by ID (age > 21)
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ 
            _id: req.params.id, 
            age: { $gt: 21 }
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found or age is 21 or below' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create new user
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
