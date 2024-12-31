import express from "express";
import {  getBook, getBookById} from "../Controller/Book-controller.js";

const router=express.Router();   

router.get("/",getBook)
router.post("/get/:id",getBookById)



export default router;