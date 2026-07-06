import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = ({ setPage, onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
      return; 
    }

    setErrors({});
    setIsLoading(true);
    setApiError(''); 

    try {
      const response = await fetch('https://portfolio-backend-livid-tau.vercel.app/api/login', {
  method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formData.email, 
          password: formData.password 
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid email or password');
      }

localStorage.setItem('portfolio_token', data.token);
localStorage.setItem('portfolio_user', JSON.stringify(data.user));

      console.log('Login successful:', data);
      if (onLoginSuccess) onLoginSuccess(data.user);
      setPage('home'); 

    } catch (error) {
      setApiError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-4 relative">
      <button onClick={() => setPage('home')} className="inline-block mb-8 md:mb-0 md:absolute top-8 left-4 sm:left-8 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium">
        ← Back to Portfolio
      </button>

      <div className="bg-gray-800/50 p-6 sm:p-8 rounded-2xl border border-gray-700 w-full max-w-md shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>
        
        {apiError && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm mb-4 text-center">
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
            <input type="email" placeholder='Email' autoComplete="off" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-orange-500 focus:ring-orange-500/50'}`} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} placeholder="Password" autoComplete="new-password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
                className={`w-full bg-gray-900 text-white px-4 py-3 pr-11 rounded-lg border focus:outline-none focus:ring-2 transition-colors ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-orange-500 focus:ring-orange-500/50'}`} />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            <div className="text-right mt-2">
              <button type="button" onClick={() => setPage('forgot-password')} className="text-orange-500 hover:underline text-sm font-medium">
                Forgot password?
              </button>
            </div>
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