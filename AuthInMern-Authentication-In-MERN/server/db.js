const mongoose = require("mongoose");

module.exports = () => {
    try {
        mongoose.connect("mongodb+srv://gtk_21:Vasanthi1981@cluster0.ramqt8o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};
