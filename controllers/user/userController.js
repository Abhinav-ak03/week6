const User = require("../../models/userSchema")


// Load home page for user function 
const loadHomepage = async (req, res) => {
    try {
        // Render the 'home' view
        return res.render("home");
    } catch (error) {
        console.error("Error in loading home:", error.message);
        // Send error response and return
        return res.status(500).send("Server error");
    }
}

// 404-Error page for showing front end 

const pageNotFound = async (req, res) => {
    try {
        res.render('page-404')
    } catch (error) {
        console.error("Error in loading page-404:", error.message);
        res.redirect('/pageNotFound')
    }
}

// Load sign-in page for user function 
const loadSignIn = async (req, res) => {
    try {
        // Render the 'SignIn' view
        return res.render("signIn");
    } catch (error) {
        console.error("Error in loading SignIn page:", error.message);
        // Send error response and return
        return res.status(500).send("Server error");
    }
}


// Load sign-up page for user function 
const loadSignUP = async (req, res) => {
    try {
        // Render the 'Signup' view
        return res.render("signUp");
    } catch (error) {
        console.error("Error in loading signup page:", error.message);
        // Send error response and return
        return res.status(500).send("Server error");
    }
}

const signUp = async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        // Check for existing email
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({
                status: 'error',
                field: 'email',
                message: 'Email already exists'
            });
        }

        // Check for existing phone
        const existingPhone = await User.findOne({ phone });
        if (existingPhone) {
            return res.status(400).json({
                status: 'error',
                field: 'phone',
                message: 'Phone number already exists'
            });
        }

        // Check for existing username
        const existingName = await User.findOne({ name });
        if (existingName) {
            return res.status(400).json({
                status: 'error',
                field: 'name',
                message: 'Username already exists'
            });
        }

        // If no duplicates found, create new user
        const newUser = new User({ name, email, phone, password });
        await newUser.save();

        return res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            redirect: '/signin'
        });

    } catch (error) {
        console.error("Error in saving user in DB:", error.message);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server error'
        });
    }
};

// Export the function to be used in other files

module.exports = {
    loadHomepage,
    pageNotFound,
    loadSignIn,
    loadSignUP,
    signUp,
};