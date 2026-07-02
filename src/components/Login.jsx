import  { useState } from 'react';

const Login = ({ setPage }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Login attempt:', formData);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      
      <button 
        onClick={() => setPage('home')} 
        className="inline-block mb-8 md:mb-0 md:absolute top-8 left-8 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium"
      >
        ← Back to Portfolio
      </button>

      <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-orange-500 focus:ring-orange-500/50'}`}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">Password</label>
            <input 
              type="password" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-orange-500 focus:ring-orange-500/50'}`}
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <button  type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors mt-6">
            Sign In
          </button>
        </form>
       <p className="text-gray-400 text-sm text-center mt-6">
  Don't have an account?{' '}
  <button 
    onClick={() => setPage('signup')} 
    className="text-orange-500 hover:underline font-medium"
  >
    Sign up
  </button>
</p>
      </div>
    </div>
  );
};

export default Login;