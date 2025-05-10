import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [preview, setPreview] = useState(user?.photoURL || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleURLChange = (e) => {
    const url = e.target.value;
    setPhotoURL(url);
    setPreview(url);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await updateUser({ displayName: name, photoURL: preview });
      navigate('/profile');
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Update Profile</h2>
          <p className="text-gray-600">Update your profile information</p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full overflow-hidden border border-gray-300">
            {preview ? (
              <img
                src={preview}
                alt={name || 'User'}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-600 text-2xl font-bold">
                {name ? name.charAt(0) : 'U'}
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Display Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
              Profile Photo URL
            </label>
            <input
              id="photoURL"
              type="url"
              value={photoURL}
              onChange={handleURLChange}
              placeholder="https://example.com/photo.jpg"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-between gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/profile')}
              className="w-1/2 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-1/2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
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
