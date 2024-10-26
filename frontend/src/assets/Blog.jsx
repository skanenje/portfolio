import React, { useState, useEffect } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=skanenje')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 3))) // Get the latest 3 posts
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div className="bg-[#1a1b3a] rounded-xl p-6 border border-white/10 hover:scale-[1.02] transition-all duration-300">
      <h3 className="text-xl font-semibold mb-4 text-white">Latest Blog Posts</h3>
      {posts.map(post => (
        <div key={post.id} className="mb-4 last:mb-0">
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-[#FFCC70] hover:underline">
            {post.title}
          </a>
          <p className="text-sm text-white/70">{new Date(post.published_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;