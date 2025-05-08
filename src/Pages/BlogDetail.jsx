import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { BookOpen, MessageSquare, Save } from 'lucide-react';

const blogPostsData = [
    {
      id: 1,
      title: "5 Ways to Save on Utility Bills This Winter",
      excerpt: "Discover practical tips to reduce your utility expenses during the cold winter months without sacrificing comfort.",
      content: `
        <p>Winter can be a challenging time for household budgets, with heating costs often skyrocketing. Here are five effective strategies to keep your utility bills manageable without compromising on comfort:</p>
        
        <h3>1. Optimize Your Thermostat Settings</h3>
        <p>Consider lowering your thermostat by just 1-2 degrees. This small change can lead to significant savings over time. Additionally, programmable thermostats can automatically reduce temperatures when you're sleeping or away from home.</p>
        
        <h3>2. Seal Drafts and Insulate</h3>
        <p>Inspect your home for drafts around windows, doors, and electrical outlets. Proper sealing can prevent warm air from escaping and cold air from entering. Adding extra insulation in attics and walls can also dramatically improve heating efficiency.</p>
        
        <h3>3. Maintain Your Heating System</h3>
        <p>Regular maintenance of your heating system ensures it runs efficiently. Replace filters monthly during heavy use periods and have professional maintenance done annually.</p>
        
        <h3>4. Use Energy-Efficient Lighting</h3>
        <p>With shorter daylight hours in winter, lighting costs increase. Switch to LED bulbs, which use up to 75% less energy than traditional incandescent bulbs and last much longer.</p>
        
        <h3>5. Be Water-Wise</h3>
        <p>Hot water usage contributes significantly to winter utility bills. Install low-flow showerheads and faucet aerators, fix leaks promptly, and consider insulating your water heater to reduce standby heat losses.</p>
        
        <p>By implementing these strategies, you can enjoy a warm and comfortable winter home while keeping your utility expenses under control.</p>
      `,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "May 3, 2025",
      readTime: "5 min read",
      author: {
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?img=1",
        role: "Energy Efficiency Specialist"
      },
      tags: ["Utility Bills", "Winter Savings", "Energy Efficiency"]
    },
    {
      id: 2,
      title: "Understanding Your Electricity Bill Components",
      excerpt: "Learn to decode the various charges on your electricity bill and understand what you're really paying for each month.",
      content: `
        <p>Electricity bills can often seem like a confusing jumble of charges and fees. Understanding each component can help you identify ways to save money and spot any billing errors. Here's a breakdown of the typical elements you'll find on your electricity bill:</p>
        
        <h3>Supply Charges</h3>
        <p>This is the actual cost of the electricity you've used, typically measured in kilowatt-hours (kWh). The price per kWh might vary depending on your plan, time of use, or seasonal factors.</p>
        
        <h3>Delivery Charges</h3>
        <p>These fees cover the cost of delivering electricity to your home through the power grid. They include:</p>
        <ul>
          <li>Transmission charges: For electricity movement from generation plants to substations</li>
          <li>Distribution charges: For electricity movement from substations to your home</li>
          <li>Customer charges: Fixed monthly fees for billing and customer service</li>
        </ul>
        
        <h3>Taxes and Regulatory Fees</h3>
        <p>Various government taxes, regulatory fees, and environmental charges are often added to electricity bills to fund public programs or incentivize renewable energy development.</p>
        
        <h3>Additional Fees</h3>
        <p>Depending on your location and provider, you might see fees for:</p>
        <ul>
          <li>Demand charges: Based on your highest usage during specific periods</li>
          <li>Power factor corrections: For commercial customers with inefficient electrical systems</li>
          <li>Special service charges: For services like meter reading or maintenance</li>
        </ul>
        
        <h3>How to Optimize Your Bill</h3>
        <p>Once you understand each component, you can take targeted actions to reduce costs:</p>
        <ul>
          <li>Shift high-power activities to off-peak hours if you have a time-of-use plan</li>
          <li>Identify and eliminate vampire energy from devices on standby</li>
          <li>Compare supplier options if you live in a deregulated market</li>
        </ul>
        
        <p>By becoming more knowledgeable about your electricity bill, you gain greater control over your energy expenses and can make informed decisions about your consumption habits.</p>
      `,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      date: "April 28, 2025",
      readTime: "3 min read",
      author: {
        name: "Michael Chang",
        avatar: "https://i.pravatar.cc/150?img=2",
        role: "Utility Analyst"
      },
      tags: ["Electricity", "Bill Analysis", "Utility Management"]
    },
    {
      id: 3,
      title: "The Future of Digital Payment Systems",
      excerpt: "How blockchain and AI technologies are revolutionizing the way we pay bills and manage financial transactions.",
      content: `
        <p>The landscape of digital payment systems is evolving rapidly, with emerging technologies promising to transform how we handle financial transactions. Blockchain technology and artificial intelligence stand at the forefront of this revolution, offering unprecedented security, efficiency, and convenience.</p>
        
        <h3>Blockchain: The Foundation of Trust</h3>
        <p>Blockchain technology is fundamentally changing digital payments through its decentralized and immutable ledger system. Key impacts include:</p>
        <ul>
          <li><strong>Reduced Intermediaries:</strong> By enabling direct peer-to-peer transactions, blockchain eliminates the need for traditional intermediaries like banks, potentially lowering transaction fees.</li>
          <li><strong>Enhanced Security:</strong> The cryptographic nature of blockchain makes transactions nearly impossible to alter or hack, significantly reducing fraud.</li>
          <li><strong>Smart Contracts:</strong> Automated, self-executing contracts can facilitate automatic bill payments when predefined conditions are met, streamlining recurring payments.</li>
        </ul>
        
        <h3>AI: The Intelligence Layer</h3>
        <p>Artificial intelligence adds a layer of intelligence to payment systems, enabling:</p>
        <ul>
          <li><strong>Predictive Payments:</strong> AI algorithms can analyze spending patterns to predict upcoming bills and recommend optimal payment schedules.</li>
          <li><strong>Fraud Detection:</strong> Machine learning models can identify unusual transaction patterns in real-time, flagging potential fraud before it occurs.</li>
          <li><strong>Personalized Financial Advice:</strong> AI-powered assistants can provide customized recommendations to help users optimize their payment strategies and improve financial health.</li>
        </ul>
        
        <h3>The Convergence: Smart Payment Networks</h3>
        <p>When blockchain and AI converge, they create intelligent payment networks with remarkable capabilities:</p>
        <ul>
          <li><strong>Adaptive Security:</strong> AI continuously monitors blockchain transactions, learning and adapting security protocols in response to new threats.</li>
          <li><strong>Dynamic Pricing:</strong> Smart contracts powered by AI can negotiate optimal rates in real-time based on usage patterns and market conditions.</li>
          <li><strong>Autonomous Financial Ecosystems:</strong> Self-regulating payment systems that can operate with minimal human intervention, automatically balancing accounts and making payments.</li>
        </ul>
        
        <h3>Challenges and Considerations</h3>
        <p>Despite their promise, these technologies face hurdles:</p>
        <ul>
          <li>Regulatory uncertainty as governments work to establish appropriate frameworks</li>
          <li>Privacy concerns regarding AI's use of personal financial data</li>
          <li>Scalability limitations of current blockchain implementations</li>
        </ul>
        
        <p>As these technologies mature and converge, we can expect a fundamental shift in how utility bills and other payments are processed. The future points toward systems that are not merely passive conduits for transactions but active participants in optimizing our financial lives.</p>
      `,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      date: "April 15, 2025",
      readTime: "7 min read",
      author: {
        name: "Anya Patel",
        avatar: "https://i.pravatar.cc/150?img=3",
        role: "Fintech Researcher"
      },
      tags: ["Digital Payments", "Blockchain", "Artificial Intelligence"]
    }
  ];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPost = () => {
      setLoading(true);
      const postId = parseInt(id || '0');
      const foundPost = blogPostsData.find(post => post.id === postId);
      if (foundPost) {
        setPost(foundPost);
        const related = blogPostsData.filter(p => p.id !== postId).slice(0, 2);
        setRelatedPosts(related);
      }
      setLoading(false);
    };
    fetchBlogPost();
  }, [id]);

  const goBack = () => navigate('/');

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-pulse flex flex-col w-full max-w-3xl">
          
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
        <button onClick={goBack} className="px-6 py-2 bg-blue-500 text-white rounded-md">Back to Blog</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 md:container left-1/2 -translate-x-1/2 w-full py-6 md:py-12 px-4 z-20">
          <button onClick={goBack} className="bg-gray-600 text-white py-2 px-4 rounded-md mb-4">
            Back
          </button>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-white/80 gap-4">
            <span>{post.readTime}</span> <span>·</span> <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Author information */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-400 flex items-center justify-center">
                  {post.author.avatar ? <img src={post.author.avatar} alt={post.author.name} className="rounded-full" /> : post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.role}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-600">{tag}</span>
                ))}
              </div>

              {/* Blog content */}
              <div className="prose prose-frost max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="overflow-hidden rounded-lg shadow-md mb-4">
                    <div className="h-40 overflow-hidden">
                      <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-gray-500 mb-1">{relatedPost.date}</div>
                      <h4 className="font-semibold mb-2 line-clamp-2">{relatedPost.title}</h4>
                      <button onClick={() => navigate(`/blog/${relatedPost.id}`)} className="text-blue-600 hover:text-blue-800">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-6">
              <h3 className="font-bold mb-4 text-center">Share This Article</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 w-full rounded-md font-medium flex items-center gap-2 justify-center"><MessageSquare strokeWidth={1.5}/>Share</button>
                <button className="px-4 py-2 border border-gray-300 w-full rounded-md font-medium flex items-center gap-2 justify-center"><BookOpen strokeWidth={1.5}/>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
