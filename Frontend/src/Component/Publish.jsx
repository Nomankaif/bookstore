import React, { useState } from 'react';
import { ChevronRight, BookOpen, Users, BarChart, Star } from 'lucide-react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const PublishingStep = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border  border-gray-100">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <h3 className="ml-3 text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ author, role, content }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
          <span className="text-emerald-700 font-bold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{content}</p>
      <div className="mt-4 flex text-yellow-400">
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, value, label }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all  mt-14 lg:mt-20 duration-300">
      <Icon className="w-8 h-8 mx-auto mb-4 text-emerald-600" />
      <h3 className="text-3xl font-bold text-gray-800 mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export const Publish = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Transform Your Story Into Reality</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of authors who have successfully published their books with our innovative platform
            </p>
            <button
              className={`
                px-8 py-4 bg-white text-black rounded-full font-semibold
                transform transition-all duration-300
                hover:scale-105 hover:shadow-xl
                ${isHovered ? 'scale-105 shadow-xl' : ''}
              `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="flex items-center">
              <Link to="/publishbook">

                Start Your Publishing Journey
              </Link>
                <ChevronRight className="ml-2 w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            icon={BookOpen}
            value="10K+"
            label="Books Published"
          />
          <StatCard 
            icon={Users}
            value="50K+"
            label="Active Authors"
          />
          <StatCard 
            icon={BarChart}
            value="1M+"
            label="Books Sold"
          />
        </div>
      </div>

      {/* Publishing Steps */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Your Path to Publishing Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PublishingStep
            icon={BookOpen}
            title="Write & Upload"
            description="Upload your manuscript in any format. Our smart system handles the rest."
          />
          <PublishingStep
            icon={Users}
            title="Expert Review"
            description="Get feedback from our professional editors and improve your work."
          />
          <PublishingStep
            icon={BarChart}
            title="Publish & Sell"
            description="Launch your book globally and track sales in real-time."
          />
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              author="Alex Thompson"
              role="First-time Author"
              content="The support I received throughout my publishing journey was exceptional. They turned my dream into reality!"
            />
            <TestimonialCard
              author="Sarah Chen"
              role="Bestselling Author"
              content="Their platform made the entire process seamless. My book reached readers worldwide!"
            />
            <TestimonialCard
              author="Michael Rodriguez"
              role="Self-published Author"
              content="The marketing tools and analytics helped me understand my readers better. Highly recommend!"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Share Your Story?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our community of authors and start your publishing journey today
          </p>
          <button
            className="px-8 py-4 bg-white text-black font-semibold rounded-full 
              transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Publish;