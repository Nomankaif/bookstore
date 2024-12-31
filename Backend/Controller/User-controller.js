  import Book from "../Model/book_model.js";
  import User from "../Model/user_model.js";
  import PayBook from "../Model/paymentbook_model.js";
  import bcrypt from "bcryptjs";
import { json } from "express";

  export const getUser = async (req, res) => {
    // Include req and res here
    try {
      const { name, email, password, confirmpassword } = req.body; // Extracting data from req.body
      let finduser = await User.findOne({ email }); // Use findOne to check for existing user
      if (finduser) {
        return res.status(400).json({ message: "USER ALREADY EXISTS" }); // Response if user exists
      }
      if (password !== confirmpassword) {
        return res
          .status(400)
          .json({ message: "password and confirm password does not match" });
      }
      const hashpassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name: name,
        email: email,
        password: hashpassword,
      });
      const savedUser=await newUser.save(); // Save the new user
      res.status(200).json({
        message: "USER CREATED",
        user: {
          id: savedUser._id,
          name: savedUser.name,
        },
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "server error" });
    }
  };

  export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.status(200).json({
          message: "Welcome Back ",
          user: {
            id: user._id,
            name: user.name,
            email: user.password,
          },
        });
      } else {
        res.status(500).json({ message: "Wrong User Credentials" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  export const addCart = async (req, res) => {
    const { bookId } = req.params;
    const { userId, quantity } = req.body;

    try {
      // Fetch the book by ID
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      // Fetch the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Ensure the cart array exists
      if (!user.cart) {
        user.cart = [];
      }

      // Check if the book is already in the user's cart
      const existingCartItem = user.cart.find(
        (item) =>
          item.book &&
          item.book._id &&
          item.book._id.toString() === book._id.toString()
      );
      console.log(existingCartItem);
      if (existingCartItem?.quantity) {
        existingCartItem.quantity += quantity;

        console.log("running existed");
      } else {
        console.log("running");
        user.cart.push({
          book: {
            _id: book._id,
            name: book.name,
            price: book.price,
            category: book.category,
            image: book.image,
            title: book.title,
          },
          quantity: quantity || 1, // Default to 1 if quantity is not provided
        });
      }

      // Save the updated user document
      await user.save();

      // Respond with the updated cart
      res.status(200).json({ message: "Book added to cart", cart: user.cart });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  };

  export const getCartItens = async (req, res) => {
    try {
      const { id } = req.query;
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Ensure the cart exists and is not null
      const userCart = user.cart || [];
      res.status(200).json(userCart);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  };

  export const deleteCartItems = async (req, res) => {
    const { userid, bookid } = req.query;

    try {
      // Find the user by their ID
      const checkUser = await User.findById(userid);

      // Check if the user exists
      if (!checkUser) {
        return res.status(404).json({ message: "User not found" });
      }

      // Get the user's cart
      const userCart = checkUser.cart;

      // Find the index of the cart item to be removed
      const itemIndex = userCart.findIndex(
        (item) => item._id.toString() === bookid
      );

      // If item is not found, return a message
      if (itemIndex === -1) {
        return res.status(404).json({ message: "Book not found in the cart" });
      }

      userCart.splice(itemIndex, 1);

      // Save the updated user document
      await checkUser.save();

      // Respond with success
      return res.status(200).json({
        message: "Book removed from cart successfully",
        updatedCart: checkUser.cart,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  };

  export const publishBook = async (req, res) => {
    const { userId } = req.params;
    const { bookauthor, booktitle, description, genre, price } = req.body;
    const existUser = await User.findById(userId);
    if (!existUser) {
      return res.status(404).json({ message: "User does not exist" });
    }
    try {
      const newBook = new PayBook({
        bookauthor: bookauthor,
        booktitle: booktitle,
        description: description,
        genre: genre,
        price: price,
      });
      existUser.publishes.push({
        mybook: {
          bookauthor,
          booktitle,
          description,
          genre,
          price,
        },
      });
      await newBook.save();
      await existUser.save();
      res.json({ message: "Book Uploaded" });
    } catch (err) {
      console.log(err);
      res.json({ message: "Credential Error" });
    }
  };
  export const getpublishes = async (req, res) => {
    const { userId } = req.params;
    try {
      const existuser = await User.findById(userId);
      if (!existuser) {
        return res.json({ message: "Use Not Found" });
      } else {
        const userPublishes = existuser.publishes || [];
        return res.status(200).json(userPublishes);
      }
    } catch (err) {
      console.log(err);
    }
  };

  export const getAllPayBooks=async(req,res)=>{
    const {userId}=req.params
    try{
      const existUser=await User.findById(userId)
      if(!existUser){
         return res.json({message:"User Not Found"})
      }

      const books=await PayBook.find()
      res.status(200).json(books)

    }catch(err){
      console.log(err);
      res.status(500).json("Internal Server Error")
    }
  }


  export const getBookById = async (req, res) => {
    const { bookId } = req.params;
    try {
      const existBook = await PayBook.findById(bookId);
  
      if (!existBook) {
        return res.status(404).json({ message: "Book Not Found" });
      }
      
      // Return the found book
      res.status(200).json(existBook);
      
    } catch (err) {
      console.error("Error fetching book:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  