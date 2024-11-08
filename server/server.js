const express = require('express');

const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const JWT_SECRET = "0123456789";

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/uniData")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Error connecting to MongoDB:", err));

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email: email, password: hashedPassword });
        await newUser.save();
        const payload = {
            id: newUser.id
        };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
        res.status(201).json({ message: "User signed up successfully", email: newUser.email, token: token });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Invalid password" });
        }
        const payload = {
            id: user.id
        };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful", email: user.email, token: token });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});