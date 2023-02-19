const User = require('../models/User');
const jwt = require('jsonwebtoken');


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET,
         {expiresIn:'3d'});
}

//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
   
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        
        res.status(200).json({email, token, user});

    } catch (error) {
       res.status(400).json({error:error.message}); 
    }
};

//register user
const registerUser = async (req, res) => {
    const {firstName, lastName, email, password, isPay} = req.body;
   
    try {
        const newUser = await User.register(firstName, lastName, email, password, isPay);
        console.log(newUser)
        const token = createToken(newUser._id);
        
        res.status(200).json({firstName, isPay, email, token, user});
    } catch (error) {
       res.status(400).json({error:error.message}); 
    }
};


module.exports = {loginUser, registerUser};