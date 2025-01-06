const express = require("express")
const app = express()
const env = require("dotenv")
env.config()

const path = require("path")
const userRouter = require("./routes/userRouter")

const connectDB = require('./config/db');
connectDB().catch((err) => {
    console.error("Failed to connect to database:", err.message);
});

//View Engine Setup
app.set('view engine', 'ejs');

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Middleware to parse URL-encoded payloads (e.g., form submissions)
// `extended: true` allows parsing of nested objects using the `qs` library
app.use(express.urlencoded({ extended: true }));

// Setting multiple directories for view templates
// This is useful when you have separate views for users and admin
app.set("views", [
    path.join(__dirname, 'views', 'user'), // Directory for user-related views
    path.join(__dirname, 'views', 'admin') // Directory for admin-related views
]);

// Serving static files from the "public" directory
// Static files include assets like CSS, JavaScript, and images
app.use(express.static(path.join(__dirname, "public")));


app.use('/', userRouter)



// Starting the server on the specified port (from environment variables)
// Logs a message to indicate the server is running
app.listen(process.env.PORT, () => {
    console.log("Server running...");
});

// Exporting the `app` instance for use in other files (e.g., for testing or modularization)
module.exports = app;
