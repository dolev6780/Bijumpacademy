const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const emailValidator = require('validator');
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please enter a first name"],
            min: 2,
            max: 50,
            lowercase: true,
        },
        lastName: {
            type: String,
            required: [true, "Please enter a last name"],
            min: 2,
            max: 50,
            lowercase: true
        },
        email: {
            type: String,
            required: [true, "Please enter an email"],
            max: 50,
            unique: true,
            lowercase: true,
            
        },
        password: {
            type: String,
            required: [true, "Please enter an password"],
            min: [6, "Minimum password length is 6 characters"],
            max: [12, "Maximum password length is 12 characters"],
        },
        isPay:{
            type: Boolean
        }
    });


//statics methods
    //register method
UserSchema.statics.register = async function(firstName, lastName, email, password, isPay) {
    
    if(!email || !password){
        throw Error("All fields must be filled");
    }
    if(!emailValidator.isEmail(email)){
        throw Error("Email is not valid");
    }

    // if(!emailValidator.isStrongPassword(password)){
    //     throw Error("Password not strong enough");
    // }
    
    const exists = await this.findOne({email})
    if(exists){
        throw Error("Email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await this.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        isPay
    })
    return newUser;
}

    //login method
    UserSchema.statics.login = async function(email, password){
        
        if(!email || !password){
            throw Error("All fields must be filled");
        }
        const user = await this.findOne({email})
        console.log(user)

        if(!user){
            throw Error("Incorrect email");
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if(!matchPassword){
            throw Error("Incorrect password");
        }
       return user;
    }


const User = mongoose.model("User", UserSchema);
module.exports = User;
