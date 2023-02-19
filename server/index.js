require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)


const userRoutes = require('./routes/user');
const contactusRoute = require('./routes/contactus');
const zoomappointRoute = require('./routes/zoom');
const app = express();
const PORT = 5000;


///////////middleware/////////////////
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// //////////routes///////////////////
app.use('/api/user', userRoutes);
app.use('/api', contactusRoute);
app.use('/api/zoom', zoomappointRoute);


///////////////mongoDB connection///////////////////////////
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, ()=>{console.log("server port", PORT)});
}).catch((err)=>{console.log(err,"err something gone wrong")});