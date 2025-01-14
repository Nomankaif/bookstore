import express from "express";
import dotenv from "dotenv";
import razorpayInstance from "../service/razorpay-service.js"; // Correct path to service file

dotenv.config();
const router = express.Router();

router.post("/create-order", async (req, res) => {
    try {
        const { amount, currency } = req.body;

        const options = {
            amount: amount * 100, // Convert amount to paisa
            currency,
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpayInstance.orders.create(options);
        res.status(200).json(order);
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});
router.post('/verify', async (req, res) => {
    try {
        const { orderId, paymentId, signature } = req.body;

        // Step 1: Fetch the order from Razorpay
        const order = await razorpayInstance.orders.fetch(orderId);

        // Step 2: Verify the signature
        const generatedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(orderId + '|' + paymentId)
            .digest('hex');

        if (generatedSignature === signature) {
            // Step 3: Return success if signature matches
            res.status(200).json({ success: true });
        } else {
            // Step 4: If signature does not match
            res.status(400).json({ success: false });
        }
    } catch (error) {
        console.error("Error verifying payment:", error);
        res.status(500).json({ error: "Something went wrong while verifying payment" });
    }
});

export default router;
