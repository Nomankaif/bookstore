import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookroute from "./Routes/book-route.js";
import userroute from "./Routes/user-route.js";
import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4001;
const URL = process.env.MONGO_URL;

// Configure CORS with the frontend URL
const corsOptions = {
  origin: [
    'http://localhost:5173' , 
    'https://bookstore-frontend-final.onrender.com',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  // Allow credentials (if you're using cookies or sessions)
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));



app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Noman Kaif is best");
});

// MongoDB connection with error handling
mongoose.connect(URL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
// define routr
app.use("/book",bookroute)
app.use("/book/save",bookroute)
app.use("/user",userroute)
app.use("/user/check",userroute)
app.use("/user/cart",userroute)
app.use("/user/cartitems",userroute)
app.use("/user/deleteitems",userroute)
app.use("/user/publishing",userroute)
app.use("/user/book",userroute)
app.use('/user/publish',userroute)
app.use("/user/getall",userroute)
app.use("/user/paybook",userroute)


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
