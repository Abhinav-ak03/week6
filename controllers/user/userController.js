
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

const pageNotFound= async (req,res)=>{
    try {
        res.render('page-404')
    } catch (error) {
        console.error("Error in loading page-404:", error.message);
        res.redirect('/pageNotFound')
    }
}




// Export the function to be used in other files

module.exports = { 
    loadHomepage,
    pageNotFound 
 };