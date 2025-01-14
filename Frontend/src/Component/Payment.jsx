import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../Config';
import Navbar from './Navbar';

export const Payment = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('card');

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/user/paybook/getpaybook/${id}`);
                setBook(res.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch book details.');
                setLoading(false);
            }
        };
        fetchBookDetails();
    }, [id]);

    const handlePayment = async () => {
        try {
            
            const orderResponse = await axios.post(`${BASE_URL}/payment/create-order`, {
                amount: book.price * 100, 
                currency: 'INR',
            });

            const { id: orderId, amount, currency } = orderResponse.data;

            // Step 2: Open Razorpay Checkout
            const options = {
                key: 'rzp_test_4ECPF8MZ4W8VRB', // Replace with your Razorpay key
                amount: amount,
                currency: currency,
                name: 'BookMyStore',
                description: `Payment for ${book.booktitle}`,
                order_id: orderId,
                handler: function (response) {
                    console.log('Payment successful:', response);
                    // Step 3: Verify payment on the server
                    verifyPayment(response, orderId);
                },
                prefill: {
                    name: 'Noman kaif',
                    email: 'mdnomankaif55@gmail.com',
                    contact: '6302741807',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (err) {
            console.error('Payment initiation failed:', err);
            alert('Payment initiation failed. Please try again.');
        }
    };

    const verifyPayment = async (response, orderId) => {
        try {
            const verificationResponse = await axios.post(`${BASE_URL}http://localhost:4001/payment/verify`, {
                orderId,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
            });

            if (verificationResponse.data.success) {
                alert('Payment verified successfully!');
            } else {
                alert('Payment verification failed.');
            }
        } catch (err) {
            console.error('Payment verification failed:', err);
            alert('Payment verification failed.');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-lg text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-col justify-center items-center lg:mt-20 gap-8 max-w-6xl mx-auto">
                    {/* Left side - Book Details */}
                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-lg shadow-md h-full">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                                <div className="flex gap-6 mb-6">
                                    <img
                                        src={book.coverImage || "/api/placeholder/200/300"}
                                        alt={book.booktitle}
                                        className="w-32 h-48 object-cover rounded-lg shadow-md"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold">{book.booktitle}</h3>
                                        <p className="text-gray-600">by {book.bookauthor}</p>
                                        <p className="text-2xl font-bold text-blue-600">${book.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Payment */}
                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                                <button
                                    className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                                    onClick={handlePayment}
                                >
                                    Pay ${book.price}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Payment;
