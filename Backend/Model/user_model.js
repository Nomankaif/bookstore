import mongoose from "mongoose";

const userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [
    {
      book: {
        // Store the full book details directly
        name: String,
        price: Number,
        category: String,
        image: String,
        title: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],

  publishes: [
   {
    mybook:{
      description: String,
      bookauthor: String,
      booktitle: String,
      coverImage: {
        type: String,
        default:
          "https://img.freepik.com/free-psd/books-stack-icon-isolated-3d-render-illustration_47987-15482.jpg?t=st=1730358975~exp=1730362575~hmac=b8bf8ce8b12806bbcb4e3f6817f3590fb304a6a41263d83dae730bc76daa91f9&w=996",
      },
      genre: String,
      price: Number,
    },
}
  ],
});

const User = mongoose.model("User", userschema);
export default User;
