import { useState } from 'react';
import { GraduationCap, Mail, Lock, ArrowLeft, Shield } from 'lucide-react';

interface AdminLoginProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

export function AdminLogin({ onBack, onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple demo authentication - in real app, validate against backend
    if (email === 'admin@edupathway.com' && password === 'admin123') {
      alert('Admin login successful!');
      onLoginSuccess();
    } else {
      alert('Invalid admin credentials. Try:\nEmail: admin@edupathway.com\nPassword: admin123');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back to Home</span>
      </button>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-3">
          <GraduationCap className="w-10 h-10 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">EduPathway</h1>
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Shield className="w-5 h-5 text-green-600" />
          <h2 className="text-xl font-bold text-gray-900">Admin Portal</h2>
        </div>
        <p className="text-gray-600 text-sm">
          Sign in to access the admin dashboard
        </p>
      </div>

      {/* Login Form */}
      <div className="bg-white rounded-3xl shadow-lg p-6">
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div>
            <label htmlFor="admin-email" className="block text-sm font-semibold text-gray-900 mb-2">
              Admin Email
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@edupathway.com"
                required
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="admin-password" className="block text-sm font-semibold text-gray-900 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign In to Admin Panel
          </button>
        </form>

        {/* Demo Credentials Info */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-xs font-semibold text-blue-900 mb-2">Demo Credentials:</p>
          <div className="space-y-1 text-xs text-blue-800">
            <p><strong>Email:</strong> admin@edupathway.com</p>
            <p><strong>Password:</strong> admin123</p>
          </div>
        </div>
      </div>

      {/* Security Notice */}
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
    </div>
  );
}
