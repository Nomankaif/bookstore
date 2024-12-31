import mongoose from "mongoose";


const paymentBook=mongoose.Schema({
    description:String,
    bookauthor:String,
    booktitle:String,
    coverImage: {
        type: String,
        default:"https://ew.com/thmb/W-tJTEPg1bib_coJZjrN3d_75rg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855713-c5b0594eaaa2497aac2e003b7fd2fbd4.jpg"
    },
    genre:String,
    price:Number
})

const PayBook=mongoose.model("PayBook",paymentBook)
export default PayBook