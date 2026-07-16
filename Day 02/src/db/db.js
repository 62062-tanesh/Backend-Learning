const mongoose = require ("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://Backend-Data:Database@cluster01.pp1pdlv.mongodb.net/halley")

    console.log("Connected to DB");
}

module.exports = connectDB