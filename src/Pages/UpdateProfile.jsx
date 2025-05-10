import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { User, Image as ImageIcon, Wallet, ArrowLeft } from 'lucide-react';

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [preview, setPreview] = useState(user?.photoURL || '');
  const [balance, setBalance] = useState(() => {
    const stored = localStorage.getItem('userBalance');
    return stored ? Number(stored) : 0;
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await updateUser({ displayName: name, photoURL: preview });
      localStorage.setItem('userBalance', balance.toString());
      navigate('/profile');
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleURLChange = (e) => {
    const url = e.target.value;
    setPhotoURL(url);
    setPreview(url);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1400px] w-full flex justify-center mx-auto px-4 flex-col py-12">
      <div className='mb-6'>
        <Link to='/profile'>
          <div className='flex items-center gap-1 text-[#3A63D8] hover:text-[#1A2C92] transition'>
            <ArrowLeft size={16}></ArrowLeft> Back to Profile
          </div>
        </Link>
      </div>
      <div className="bg-white w-full p-8 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Update Profile Information</h2>
        
        <div className="flex justify-center mb-6">
          <div className="h-28 w-28 rounded-full overflow-hidden border-4 border-[#7FA9ED]">
            {preview ? (
              <img src={preview} alt={name || 'User'} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-600 text-3xl font-bold">
                {name ? name.charAt(0) : 'U'}
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <User size={16} />
              </span>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div className="relative">
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-1">Profile Photo URL</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <ImageIcon size={16} />
              </span>
              <input
                id="photoURL"
                type="url"
                value={photoURL}
                onChange={handleURLChange}
                placeholder="https://example.com/photo.jpg"
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">Enter a valid image URL</p>
          </div>

          {/* Account Balance */}
          <div className="relative">
            <label htmlFor="balance" className="block text-sm font-medium text-gray-700 mb-1">Account Balance (BDT)</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Wallet size={16} />
              </span>
              <input
                id="balance"
                type="number"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                min="0"
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">Enter account balance in BDT</p>
          </div>

          {/* Buttons */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#5C86E2] text-white py-2 rounded-md hover:bg-[#3A63D8] transition disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? 'Updating...' : 'Update Profile'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
