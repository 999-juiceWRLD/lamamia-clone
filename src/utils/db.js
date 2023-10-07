const mongoose = require('mongoose');

const database = process.env.DB;
const connectDB = () => {
    return mongoose
            .connect(database)
            .then(() => {
                console.log("connected to db");
            })
            .catch(err => {
                console.log("ERR CATCHED: " + err);
            });
}

export default connectDB;
