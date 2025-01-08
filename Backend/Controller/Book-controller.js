import Book from "../Model/book_model.js";
import mongoose from "mongoose";
export const getBook = async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (err) {
      console.error("Error fetching books:", err.message); // Log detailed error message
      console.error(err.stack); // Log the stack trace
      res.status(500).json({ message: "Error fetching books", error: err.message });
    }
  };
  
export const getBookById = async (req, res) => {
    const { id } = req.params; // Extract the ID from request parameters

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid bookId format" });
    }
    try {
        // Fetch the book by ID using Mongoose's findById method
        const selectedBook = await Book.findById(id);
        
        // If the book is not found, return a 404 error
        if (!selectedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        
        // Return the found book as a JSON response
        res.status(200).json(selectedBook);
    } catch (err) {
        // Log the error for debugging and return a 500 error response
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};











