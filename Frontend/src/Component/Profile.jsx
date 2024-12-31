import React, { useEffect, useState } from 'react';
import { Book, Mail, User, Edit, Plus, Home, Star, DollarSign, BookOpen } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { Logout } from './Logout';
import axios from 'axios';

const AdminProfile = () => {
    const navigate = useNavigate();
    const [Auth, setAuth] = useAuth();
    const[books,updatebooks]=useState([])
    const [admin, updateAdmin] = useState([]);

    const users=JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        if (!users) {
            navigate("/login");
        }
    }, [users, navigate]); // Dependency array ensures this runs after render when 'users' changes

    // Early return if 'users' is not found, prevent further component rendering
    if (!users) {
        return null;
    }
    const userId=users.id

    const handleNavigateHome = () => {
        navigate('/');
    };

    useEffect(()=>{
        const adminget=()=>{
            const user=JSON.parse(localStorage.getItem("user"))
            console.log(user)
            if(user){
                updateAdmin(user)
            }
        }
        adminget()

        const getbooks=async()=>{
            await axios.get(`http://localhost:4001/user/publish/getbook/${userId}`)
            .then((res)=>{
                console.log(res.data)
                updatebooks(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
        getbooks()
    },[])

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Navigation Button */}
                <button 
                    onClick={handleNavigateHome}
                    className="fixed top-4 left-4 bg-white p-3 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
                >
                    <Home className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </button>

                {/* Header Section */}
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent animate-fadeIn">
                        Admin Profile
                    </h1>
                    { Auth ? (<Logout/>):
                        (<div>
                            <a
                                className="btn px-4 py-2 bg-black text-white"
                                onClick={() =>
                                    document.getElementById("my_modal_3").showModal()
                                }
                            >
                                Login
                            </a>
                            <Login />
                        </div>
                    )}
                </div>

                {/* Profile Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 rounded-full relative group">
                                <img
                                    src="/api/placeholder/160/160"
                                    alt="Admin profile"
                                    className="w-full h-full object-cover rounded-full ring-4 ring-white shadow-lg"
                                />
                                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer">
                                    <Edit className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <h2 className="mt-4 text-2xl font-semibold">Name: {admin.name}</h2>
                            
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="md:col-span-2 bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500">
                        <h2 className="text-xl font-semibold mb-6">Publishing Statistics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard icon={<Book />} title="Published Books" value={books.length} color="blue" />
                            <StatCard icon={<User />} title="Author Rating" value="4.8/5" color="purple" />
                            <StatCard icon={<Mail />} title="Total Sales" value="2.4k" color="green" />
                        </div>
                    </div>
                </div>

                {/* Published Books Section */}
                <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-3xl overflow-hidden shadow-xl">
                    <div className="p-8 border-b border-gray-100">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                                    Published Books
                                </h2>
                                <p className="text-gray-500 mt-1">Manage your published works</p>
                            </div>
                            <Link to="/publishbook">
                                <button className="group px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-400 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95">
                                    <span className="flex items-center gap-2">
                                        <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                                        Add New Book
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {books.map((book,index) => (
                                <BookCard key={index} book={book.mybook} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, title, value, color }) => (
    <div className={`bg-${color}-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1`}>
        <div className="flex items-center gap-4">
            <div className={`p-3 bg-${color}-500 rounded-lg`}>{icon}</div>
            <div>
                <p className="text-sm text-gray-600">{title}</p>
                <p className={`text-2xl font-bold text-${color}-600`}>{value}</p>
            </div>
        </div>
    </div>
);

const BookCard = ({ book }) => (
    <div className="group relative">
        <div className="relative rounded-2xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Book Cover */}
            <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-black transition-colors">
                        {book.booktitle}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-300 group-hover:text-black transition-colors">
                        <BookOpen className="w-4 h-4" />
                        <span>By {book.bookauthor}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">4.5</span>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-400">
                            <DollarSign className="w-4 h-4" />
                            <span className="text-lg font-bold">{book.price}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="flex-1 px-4 py-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg font-medium transition-colors">
                            Edit
                        </button>
                        <button className="flex-1 px-4 py-2 bg-emerald-500/90 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AdminProfile;