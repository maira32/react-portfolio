import { useState, useEffect } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const ResetPassword = ({ setPage }) => {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get('token');
    if (urlToken) setToken(urlToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('https://portfolio-backend-livid-tau.vercel.app/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to reset password.');

      setSuccess('Password reset successful! Redirecting to login...');
      setTimeout(() => setPage('login'), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 max-w-md text-center">
          <p className="text-red-500 mb-4">Invalid or missing reset link.</p>
          <button onClick={() => setPage('forgot-password')} className="text-orange-500 hover:underline font-medium">
            Request a new link
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-4 relative">
      <div className="bg-gray-800/50 p-6 sm:p-8 rounded-2xl border border-gray-700 w-full max-w-md shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Reset Password</h2>

        {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm mb-4 text-center">{error}</div>}
        {success && <div className="bg-green-500/10 border border-green-500 text-green-500 p-3 rounded-lg text-sm mb-4 text-center">{success}</div>}

        {!success && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">New Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-900 text-white px-4 py-3 pr-11 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500" />
                <button type="button" onClick={() => setShowPassword((p) => !p)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500" tabIndex={-1}>
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">Confirm Password</label>
              <input type={showPassword ? 'text' : 'password'} placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500" />
            </div>

            <button type="submit" disabled={isLoading} className={`w-full text-white font-bold py-3 rounded-lg transition-colors mt-4 ${isLoading ? 'bg-orange-500/50 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}>
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;