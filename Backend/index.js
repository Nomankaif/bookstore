import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookroute from "./Routes/book-route.js"
import userroute from "./Routes/user-route.js"
import cors from "cors"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4001;
const URL = process.env.MONGO_URL;




app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Noman kaif is best");
});

try {
  mongoose.connect(URL);
  console.log("connected to the database");
} catch (err) {
  console.log(err);
}
// define routr
app.use("/book",bookroute)
app.use("/book/save",bookroute)
app.use("/user",userroute)
app.use("/user/check",userroute)
app.use("/user/cart",userroute)
app.use("/user/cartitems",userroute)
app.use("/user/deleteitems",userroute)
app.use("/user/publish",userroute)
app.use("/user/book",userroute)
app.use('/user/publish',userroute)
app.use("/user/getall",userroute)
app.use("/user/paybook",userroute)


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
