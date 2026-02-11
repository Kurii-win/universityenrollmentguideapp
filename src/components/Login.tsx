import { useState } from 'react';
import { GraduationCap, Mail, Lock, ArrowLeft, Shield } from 'lucide-react';

interface LoginProps {
  onBack: () => void;
  onSwitchToSignUp: () => void;
  onAdminLogin: (universityId: string) => void;
}

type LoginMode = 'user' | 'admin';

export function Login({ onBack, onSwitchToSignUp, onAdminLogin }: LoginProps) {
  const [loginMode, setLoginMode] = useState<LoginMode>('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle user login logic here
    console.log('User login attempt:', { email, password });
    alert('Login successful!');
    onBack();
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // University-specific authentication
    const universityAccounts = [
      { email: 'adminAU@au.edu', password: 'adminAU1969', universityId: '26', universityName: 'Assumption University of Thailand' },
      { email: 'adminRU@ru.edu', password: 'adminRU1989', universityId: '27', universityName: 'Rangsit University' }
    ];

    const account = universityAccounts.find(
      acc => acc.email === email && acc.password === password
    );

    if (account) {
      alert(`Welcome ${account.universityName} Administrator!`);
      onAdminLogin(account.universityId);
    } else {
      alert('Invalid credentials. Try one of these:\n\nAssumption University:\nEmail: adminAU@au.edu\nPassword: adminAU1969\n\nRangsit University:\nEmail: adminRU@ru.edu\nPassword: adminRU1989');
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col relative">
      {/* Admin Button - Top Right */}
      <button
        onClick={() => setLoginMode(loginMode === 'admin' ? 'user' : 'admin')}
        className={`absolute top-0 right-0 w-12 h-12 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
          loginMode === 'admin' ? 'bg-amber-600 hover:bg-amber-700' : 'bg-green-600 hover:bg-green-700'
        }`}
        title={loginMode === 'admin' ? 'Switch to User Login' : 'Admin Panel'}
      >
        <Shield className="w-6 h-6" />
      </button>

      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Home</span>
        </button>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <GraduationCap className="w-10 h-10 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">EduPathway</h1>
          </div>
          {loginMode === 'user' ? (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600 text-sm">
                Sign in to your account
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">Admin Portal</h2>
              </div>
              <p className="text-gray-600 text-sm font-semibold">
                University Representative Access
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Login Form */}
      <div className="bg-white rounded-3xl shadow-lg p-6">
        <form onSubmit={loginMode === 'user' ? handleUserLogin : handleAdminLogin} className="space-y-5">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              {loginMode === 'admin' ? 'University Admin Email' : 'Email Address'}
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={loginMode === 'admin' ? 'adminAU@au.edu' : 'your.email@example.com'}
                required
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={loginMode === 'admin' ? 'Enter admin password' : 'Enter your password'}
                required
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Forgot Password - Only for user login */}
          {loginMode === 'user' && (
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-green-600 hover:text-green-700 font-medium"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {loginMode === 'admin' ? 'Sign In to Admin Panel' : 'Sign In'}
          </button>

          {/* Sign Up Link - Only for user login */}
          {loginMode === 'user' && (
            <div className="text-center pt-2">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={onSwitchToSignUp}
                  className="text-green-600 hover:text-green-700 font-semibold hover:underline"
                >
                  Sign up here
                </button>
              </p>
            </div>
          )}
        </form>
      </div>

      {/* Additional Info */}
      {loginMode === 'user' ? (
        <div className="mt-6 bg-green-50 rounded-2xl p-4">
          <h3 className="font-semibold text-gray-900 mb-2 text-sm">Why create an account?</h3>
          <ul className="space-y-1.5 text-xs text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Save your favorite universities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Get personalized university recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Track your application progress</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Receive scholarship updates</span>
            </li>
          </ul>
        </div>
      ) : (
        <div className="mt-6 bg-amber-50 rounded-2xl p-4">
          <h3 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-600" />
            Security Notice
          </h3>
          <ul className="space-y-1.5 text-xs text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>This is an administrative area with elevated privileges</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>All actions are logged for security purposes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>Do not share your admin credentials with anyone</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}