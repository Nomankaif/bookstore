import mongoose from "mongoose";

const Bookstrore = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
});

const Book = mongoose.model("Book", Bookstrore);
export default Book;
