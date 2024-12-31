import express from "express";

import { addCart, deleteCartItems, getAllPayBooks, getBookById, getCartItens, getpublishes, getUser, loginUser, publishBook } from "../Controller/User-controller.js";
const router=express.Router();   


router.post("/sign",getUser)
router.post("/login",loginUser);
router.post("/addcart/:bookId",addCart)
router.get("/getcart",getCartItens)
router.delete("/deletecart",deleteCartItems)
router.post("/upload/:userId",publishBook)
router.get("/getbook/:userId",getpublishes)
router.get("/publishbooks/:userId",getAllPayBooks)
router.get('/getpaybook/:bookId',getBookById)
export default router;