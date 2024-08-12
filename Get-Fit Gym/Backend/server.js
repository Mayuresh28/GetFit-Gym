const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Mayuresh27:Mayuresh2725@cluster0.mc6zb.mongodb.net/fitnessclub2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const registrationSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    age: Number,
    email: String,
    phone: String,
    service: String
});

const Registration = mongoose.model('Registration', registrationSchema);

app.post('/register', async (req, res) => {
    const newRegistration = new Registration(req.body);
    try {
        await newRegistration.save();
        res.status(201).send("Registration Successful");
    } catch (error) {
        res.status(400).send("Error: " + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
