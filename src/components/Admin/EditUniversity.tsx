import { useState } from 'react';
import { School, Globe, DollarSign, TrendingUp, Users, BookOpen, Award, Calendar, Save } from 'lucide-react';
import { University } from '../../App';

interface EditUniversityProps {
  university: University;
  onSuccess: () => void;
}

export function EditUniversity({ university, onSuccess }: EditUniversityProps) {
  const [formData, setFormData] = useState({
    universityName: university.name,
    country: university.country,
    budget: university.tuitionRange,
    gpaRequirement: university.minGPA.toString(),
    acceptanceRate: university.acceptanceRate.toString(),
    program1: university.fields[0] || '',
    program2: university.fields[1] || '',
    program3: university.fields[2] || '',
    admissionRequirements: university.admissionInfo || '',
    scholarshipOpportunities: university.scholarships || '',
    intakePeriod1: university.intakePeriods?.[0] || '',
    intakePeriod2: university.intakePeriods?.[1] || '',
    intakePeriod3: university.intakePeriods?.[2] || ''
  });

  const countries = [
    'United States',
    'United Kingdom',
    'Japan',
    'South Korea',
    'China',
    'Thailand',
    'Singapore',
    'Malaysia',
    'Australia',
    'Canada'
  ];

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would send data to backend
    console.log('Updated university data:', formData);
    alert('University information updated successfully!');
    onSuccess();
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit University Information</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-gray-50 rounded-xl p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <School className="w-5 h-5 text-green-600" />
            Basic Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* University Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Name *
              </label>
              <input
                type="text"
                value={formData.universityName}
                onChange={(e) => handleChange('universityName', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Harvard University"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4" />
                  Country *
                </div>
              </label>
              <select
                value={formData.country}
                onChange={(e) => handleChange('country', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4" />
                  Annual Budget (THB) *
                </div>
              </label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="500,000 - 1,000,000 THB"
                required
              />
            </div>
          </div>
        </div>

        {/* Academic Requirements */}
        <div className="bg-gray-50 rounded-xl p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Academic Requirements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* GPA Requirement */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum GPA (0-4.0) *
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="4"
                value={formData.gpaRequirement}
                onChange={(e) => handleChange('gpaRequirement', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="3.0"
                required
              />
            </div>

            {/* Acceptance Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  Acceptance Rate (%) *
                </div>
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={formData.acceptanceRate}
                onChange={(e) => handleChange('acceptanceRate', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="50"
                required
              />
            </div>
          </div>
        </div>

        {/* Top Programs */}
        <div className="bg-gray-50 rounded-xl p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-green-600" />
            Top 3 Programs
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Program 1 *
              </label>
              <input
                type="text"
                value={formData.program1}
                onChange={(e) => handleChange('program1', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Computer Science"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Program 2 *
              </label>
              <input
                type="text"
                value={formData.program2}
                onChange={(e) => handleChange('program2', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Business Administration"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Program 3 *
              </label>
              <input
                type="text"
                value={formData.program3}
                onChange={(e) => handleChange('program3', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Engineering"
                required
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-xl p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-green-600" />
            Additional Information
          </h3>
          
          <div className="space-y-4">
            {/* Admission Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admission Requirements *
              </label>
              <textarea
                value={formData.admissionRequirements}
                onChange={(e) => handleChange('admissionRequirements', e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Myanmar Grade-12 certificate, GED, SAT, OSSD, IGCSE O Level, IGCSE A Level (English proficiency mandatory: IELTS/TOEFL required)"
                required
              />
            </div>

            {/* Scholarship Opportunities */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scholarship Opportunities *
              </label>
              <textarea
                value={formData.scholarshipOpportunities}
                onChange={(e) => handleChange('scholarshipOpportunities', e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Merit-based scholarships available for international students with partial tuition reductions..."
                required
              />
            </div>
          </div>
        </div>

        {/* Intake Periods */}
        <div className="bg-gray-50 rounded-xl p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-green-600" />
            Intake Periods
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Intake Period 1 *
              </label>
              <input
                type="text"
                value={formData.intakePeriod1}
                onChange={(e) => handleChange('intakePeriod1', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="January"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Intake Period 2
              </label>
              <input
                type="text"
                value={formData.intakePeriod2}
                onChange={(e) => handleChange('intakePeriod2', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="August"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Intake Period 3
              </label>
              <input
                type="text"
                value={formData.intakePeriod3}
                onChange={(e) => handleChange('intakePeriod3', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="September"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onSuccess}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg"
          >
            <Save className="w-5 h-5" />
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
}