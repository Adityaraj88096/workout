const mongoose = require('mongoose');
require('dotenv').config();
const URI = process.env.MONGO_URI || 'mongodb+srv://aditya:aditya@cluster0.xeeoygw.mongodb.net/ExerciseDB?retryWrites=true&w=majority'

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Mongoose Connected');
    } catch(err) {
        console.log(err);
    }
};
module.exports = connectDB;