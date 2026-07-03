import { useState } from 'react';

const Login = ({ setPage }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop execution if frontend validation fails
    }

    setErrors({});
    setIsLoading(true);
    setApiError(''); // Clear any previous errors

    try {
      // 1. Make the request to your backend
      const response = await fetch('https://api.yourdomain.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formData.email, 
          password: formData.password 
        })
      });

      // 2. Parse the JSON response
      const data = await response.json();

      // 3. Check if the server returned an error status (like 400 or 401)
      if (!response.ok) {
        throw new Error(data.message || 'Invalid email or password');
      }

      // 4. Success! (Usually you save a token here, then redirect)
      console.log('Login successful:', data);
      // localStorage.setItem('token', data.token); // Example token storage
      setPage('home'); 

    } catch (error) {
      // Catch network errors or errors we threw manually
      setApiError(error.message);
    } finally {
      // Turn off the loading state regardless of success or failure
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <button onClick={() => setPage('home')} className="inline-block mb-8 md:mb-0 md:absolute top-8 left-8 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium">
        ← Back to Portfolio
      </button>

      <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>
        
        {apiError && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm mb-4 text-center">
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
            <input type="email" placeholder='Email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-orange-500 focus:ring-orange-500/50'}`} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">Password</label>
            <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-orange-500 focus:ring-orange-500/50'}`} />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full text-white font-bold py-3 rounded-lg transition-colors mt-6 ${isLoading ? 'bg-orange-500/50 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <p className="text-gray-400 text-sm text-center mt-6">
          Don't have an account? <button onClick={() => setPage('signup')} className="text-orange-500 hover:underline font-medium">Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;





 

   