import { useState } from 'react';
import { ArrowLeft, User, Mail, Lock, Save } from 'lucide-react';

interface AccountSettingsProps {
  onBack: () => void;
  userData: { name: string; email: string };
  onUserDataChange: (userData: { name: string; email: string }) => void;
}

export function AccountSettings({ onBack, userData, onUserDataChange }: AccountSettingsProps) {
  const [formData, setFormData] = useState({
    fullName: userData.name,
    email: userData.email,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords if trying to change
    if (formData.newPassword) {
      if (formData.newPassword !== formData.confirmPassword) {
        alert('New passwords do not match!');
        return;
      }
      if (formData.newPassword.length < 6) {
        alert('Password must be at least 6 characters!');
        return;
      }
    }

    // Here you would send the data to your backend
    console.log('Updated account data:', formData);
    alert('Account settings updated successfully!');
    onBack();
    onUserDataChange({ name: formData.fullName, email: formData.email });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm">Back to Home</span>
      </button>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Account Settings</h1>
        <p className="text-sm text-gray-600">Manage your personal information and security</p>
      </div>

      {/* Settings Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h2>
          
          <div className="space-y-4">
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
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Change Password</h2>
          <p className="text-xs text-gray-500 mb-4">Leave blank if you don't want to change your password</p>
          
          <div className="space-y-4">
            {/* Current Password */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mb-2">
                <Lock className="w-3.5 h-3.5" />
                Current Password
              </label>
              <input
                type="password"
                value={formData.currentPassword}
                onChange={(e) => handleChange('currentPassword', e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter current password"
              />
            </div>

            {/* New Password */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mb-2">
                <Lock className="w-3.5 h-3.5" />
                New Password
              </label>
              <input
                type="password"
                value={formData.newPassword}
                onChange={(e) => handleChange('newPassword', e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="At least 6 characters"
                minLength={6}
              />
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mb-2">
                <Lock className="w-3.5 h-3.5" />
                Confirm New Password
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Re-enter new password"
                minLength={6}
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-200"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </form>
    </div>
  );
}