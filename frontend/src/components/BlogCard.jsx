import React from 'react';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{post.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{post.date} · {post.author}</p>
        <p className="text-gray-600 text-sm">{post.description}</p>
        <a
          href="#"
          className="inline-block text-blue-600 mt-3 text-sm hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
