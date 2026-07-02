import  { useState } from 'react';

const Signup = ({ setPage }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Signup attempt:', formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">

      <button 
        onClick={() => setPage('home')} 
        className="absolute top-8 left-8 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium"
      >
        ← Back to Portfolio
      </button>

      <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">Name</label>
            <input type="text" placeholder='Full Name' onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-700 focus:border-orange-500'}`} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
            <input type="email" placeholder='Email' onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-700 focus:border-orange-500'}`} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">Password</label>
            <input type="password" placeholder='Password' onChange={(e) => setFormData({...formData, password: e.target.value})}
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-700 focus:border-orange-500'}`} />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">Confirm Password</label>
            <input type="password" placeholder='Confirm Password' onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border focus:outline-none ${errors.confirmPassword ? 'border-red-500' : 'border-gray-700 focus:border-orange-500'}`} />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors mt-6">
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 text-sm text-center mt-6">
  Already have an account? {' '}
  <button 
    onClick={() => setPage('login')} 
    className="text-orange-500 hover:underline font-medium"
  >
    Sign in
  </button>
</p>
      </div>
    </div>
  );
};

export default Signup;