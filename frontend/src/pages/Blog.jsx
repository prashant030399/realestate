import React from 'react';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  // Sample blog posts (replace with API or CMS later)
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Things to Check Before Buying a Flat',
      description: 'Here’s a checklist every first-time homebuyer should follow while inspecting a property.',
      image: '/images/blog1.jpg',
      date: 'July 1, 2025',
      author: 'Cocoon Estate Team',
    },
    {
      id: 2,
      title: 'Why Real Estate is Still the Best Long-Term Investment',
      description: 'Even after market fluctuations, real estate continues to be the strongest wealth creator in India.',
      image: '/images/blog2.jpg',
      date: 'June 25, 2025',
      author: 'Rohit Mehra',
    },
    {
      id: 3,
      title: 'Interior Design Tips for Compact Apartments',
      description: 'Make your small apartment feel luxurious and spacious with these proven design tips.',
      image: '/images/blog3.jpg',
      date: 'June 15, 2025',
      author: 'Priya Sharma',
    },
  ];

  return (
    <div className="pt-20 pb-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Real Estate Blog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
