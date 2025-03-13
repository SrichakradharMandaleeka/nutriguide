import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Benefits of Traditional Indian Spices",
      excerpt: "Discover how common Indian spices can boost your immunity and overall health.",
      author: "Dr. Priya Sharma",
      date: "March 15, 2024",
      category: "Nutrition"
    },
    {
      title: "Balancing Modern Life with Ayurvedic Principles",
      excerpt: "Learn how to incorporate ancient wisdom into your busy lifestyle.",
      author: "Rahul Verma",
      date: "March 12, 2024",
      category: "Lifestyle"
    },
    {
      title: "Yoga for Better Digestion",
      excerpt: "Simple yoga poses that can improve your digestive health.",
      author: "Maya Patel",
      date: "March 10, 2024",
      category: "Fitness"
    }
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Health & Wellness Blog</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <article key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="text-sm text-green-600 font-medium mb-2">{post.category}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <User className="w-4 h-4 mr-1" />
                <span className="mr-4">{post.author}</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
              </div>

              <button className="flex items-center text-green-600 hover:text-green-700 transition-colors">
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-4">
            Get the latest health tips, recipes, and wellness advice delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Write for Us</h2>
          <p className="text-gray-600 mb-4">
            Are you a health professional or wellness expert? Share your knowledge with our community.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
            Become a Contributor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;