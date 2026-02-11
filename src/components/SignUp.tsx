import { useState } from 'react';
import { ArrowLeft, GraduationCap, Mail, Lock, User, Shield } from 'lucide-react';

interface SignUpProps {
  onBack: () => void;
  onSwitchToLogin: () => void;
  onAdminLogin: (universityId: string) => void;
  onUserSignUp: (name: string, email: string) => void;
}

export function SignUp({ onBack, onSwitchToLogin, onAdminLogin, onUserSignUp }: SignUpProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters!');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Sign up data:', formData);
    alert('Account created successfully!');
    onSwitchToLogin();
    onUserSignUp(formData.fullName, formData.email);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Admin Button - Top Right */}
      <button
        onClick={onSwitchToLogin}
        className="absolute top-0 right-0 w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        title="Admin Panel"
      >
        <Shield className="w-6 h-6" />
      </button>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm">Back to Home</span>
      </button>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-3">
          <GraduationCap className="w-10 h-10 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">EduPathway</h1>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Create Account</h2>
        <p className="text-gray-600 text-sm">
          Join us to find your perfect university match
        </p>
      </div>

      {/* Sign Up Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-6 space-y-5">
        {/* Full Name */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mb-2">
            <User className="w-3.5 h-3.5" />
            Full Name
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mb-2">
            <Mail className="w-3.5 h-3.5" />
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="john.doe@example.com"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mb-2">
            <Lock className="w-3.5 h-3.5" />
            Password
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="At least 6 characters"
            required
            minLength={6}
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mb-2">
            <Lock className="w-3.5 h-3.5" />
            Confirm Password
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Re-enter your password"
            required
            minLength={6}
          />
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-200"
        >
          Create Account
        </button>

        {/* Login Link */}
        <div className="text-center pt-2">
          <p className="text-sm text-gray-600">
            Already registered?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-green-600 hover:text-green-700 font-semibold hover:underline"
            >
              Log in here
            </button>
          </p>
        </div>
      </form>

      {/* Terms */}
      <p className="text-center text-xs text-gray-500 mt-6">
        By signing up, you agree to our{' '}
        <a href="#" className="text-green-600 hover:underline">Terms of Service</a>
        {' '}and{' '}
        <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
      </p>
    </div>
  );
}