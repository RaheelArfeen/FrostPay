import { BookOpen } from 'lucide-react';
import { Link } from 'react-router';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Save on Utility Bills This Winter",
      excerpt: "Discover practical tips to reduce your utility expenses during the cold winter months without sacrificing comfort.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "May 3, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Your Electricity Bill Components",
      excerpt: "Learn to decode the various charges on your electricity bill and understand what you're really paying for each month.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      date: "April 28, 2025",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "The Future of Digital Payment Systems",
      excerpt: "How blockchain and AI technologies are revolutionizing the way we pay bills and manage financial transactions.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      date: "April 15, 2025",
      readTime: "7 min read"
    }
  ];

  return (
    <section className="py-16">
      <div className="md:w-[1400px] mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center md:mb-0">Latest from Our Blog</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg frost-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 transition">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
