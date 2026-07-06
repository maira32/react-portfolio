import { useState } from 'react';

const ForgotPassword = ({ setPage }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    setError('');
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://portfolio-backend-livid-tau.vercel.app/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong.');

      setMessage(data.message);
      setEmail('');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-4 relative">
      <button onClick={() => setPage('login')} className="inline-block mb-8 md:mb-0 md:absolute top-8 left-4 sm:left-8 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium">
        ← Back to Login
      </button>

      <div className="bg-gray-800/50 p-6 sm:p-8 rounded-2xl border border-gray-700 w-full max-w-md shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">Forgot Password</h2>
        <p className="text-gray-400 text-sm text-center mb-6">Enter your email and we'll send you a link to reset your password.</p>

        {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm mb-4 text-center">{error}</div>}
        {message && <div className="bg-green-500/10 border border-green-500 text-green-500 p-3 rounded-lg text-sm mb-4 text-center">{message}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500" />
          </div>

          <button type="submit" disabled={isLoading} className={`w-full text-white font-bold py-3 rounded-lg transition-colors mt-2 ${isLoading ? 'bg-orange-500/50 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}>
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;