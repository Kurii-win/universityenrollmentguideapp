import { useState } from 'react';
import { StudentProfile } from '../App';
import { DollarSign, Globe, TrendingUp, Languages, X, GraduationCap } from 'lucide-react';
import { currencies, currencySymbols } from '../utils/currency';

interface StudentFormProps {
  onSubmit: (profile: StudentProfile) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
}

interface CertificationLevel {
  name: string;
  level: string;
}

export function StudentForm({ onSubmit, currency, onCurrencyChange }: StudentFormProps) {
  const [academicBackground, setAcademicBackground] = useState('');
  const [gpa, setGpa] = useState('');
  const [country, setCountry] = useState('');
  const [budget, setBudget] = useState('');
  const [certifications, setCertifications] = useState<string[]>([]);
  const [showLevelModal, setShowLevelModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState('');

  const academicBackgrounds = [
    'Grade-12',
    'SAT',
    'IGCSE A level',
    'IGCSE O level',
    'OSSD',
    'GED'
  ];

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

  // Get currency symbol
  const symbol = currencySymbols[currency] || '$';

  // Budget ranges with currency conversion
  const getBudgetRanges = () => {
    const baseBudget = [
      { label: `Under ${symbol}10,000`, value: 'Under $10,000' },
      { label: `${symbol}10,000 - ${symbol}25,000`, value: '$10,000 - $25,000' },
      { label: `${symbol}25,000 - ${symbol}50,000`, value: '$25,000 - $50,000' },
      { label: `${symbol}50,000+`, value: '$50,000+' },
      { label: 'No Preference', value: 'No Preference' }
    ];
    return baseBudget;
  };

  const certificationOptions = [
    { name: 'JLPT', enabledFor: 'Japan' },
    { name: 'TOEFL', enabledFor: 'all' },
    { name: 'IELTS', enabledFor: 'all' },
    { name: 'HSK', enabledFor: 'China' },
    { name: 'TOPIK', enabledFor: 'South Korea' },
    { name: 'Duolingo', enabledFor: 'all' }
  ];

  const certificationLevels: { [key: string]: string[] } = {
    'IELTS': ['6.0', '6.5', '7.0', '7.5', '8.0', '8.5', '9.0'],
    'TOEFL': ['80', '85', '90', '95', '100', '105', '110', '115', '120'],
    'JLPT': ['N4', 'N3', 'N2', 'N1'],
    'HSK': ['HSK 5', 'HSK 6'],
    'TOPIK': ['Level 4', 'Level 5', 'Level 6'],
    'Duolingo': ['100', '110', '120', '130', '140', '150', '160']
  };

  // Check if certification is enabled based on selected country
  const isCertEnabled = (certName: string, enabledFor: string) => {
    if (enabledFor === 'all') return true;
    return country === enabledFor;
  };

  const handleCertificationClick = (certName: string, enabledFor: string) => {
    // Don't allow click if not enabled for this country
    if (!isCertEnabled(certName, enabledFor)) return;

    // Check if already has this certification
    const hasThisCert = certifications.some(c => c.startsWith(certName));
    if (hasThisCert) {
      // Remove all certifications with this name
      setCertifications(certifications.filter(c => !c.startsWith(certName)));
    } else {
      // Show level selection modal
      setSelectedCert(certName);
      setShowLevelModal(true);
    }
  };

  const handleLevelSelect = (level: string) => {
    const fullCertification = `${selectedCert} ${level}`;
    setCertifications([...certifications, fullCertification]);
    setShowLevelModal(false);
    setSelectedCert('');
  };

  const isCertSelected = (certName: string) => {
    return certifications.some(c => c.startsWith(certName));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const profile: StudentProfile = {
      gpa: parseFloat(gpa) || 0,
      country,
      budget,
      certifications
    };

    onSubmit(profile);
  };

  const isFormValid = academicBackground && gpa && country && budget;

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900">Your Academic Profile</h2>
          
          {/* Currency Selector */}
          <select
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
            className="px-2 py-1 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white font-medium text-gray-700"
          >
            {currencies.map((curr) => (
              <option key={curr.code} value={curr.code}>
                {curr.code}
              </option>
            ))}
          </select>
        </div>
        
        <div className="space-y-5">
          {/* Academic Background */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Background
            </label>
            <select
              value={academicBackground}
              onChange={(e) => setAcademicBackground(e.target.value)}
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              <option value="">Select your academic background</option>
              {academicBackgrounds.map((bg) => (
                <option key={bg} value={bg}>{bg}</option>
              ))}
            </select>
          </div>

          {/* GPA */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              GPA (0-4.0)
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="4"
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="3.5"
              required
            />
          </div>

          {/* Preferred Country */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mb-2">
              <Globe className="w-3.5 h-3.5" />
              Preferred Country
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              <option value="">Select a country</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mb-2">
              <DollarSign className="w-3.5 h-3.5" />
              Annual Budget
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              <option value="">Select budget range</option>
              {getBudgetRanges().map((b) => (
                <option key={b.value} value={b.value}>{b.label}</option>
              ))}
            </select>
          </div>

          {/* Language Certifications */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mb-3">
              <Languages className="w-3.5 h-3.5" />
              Language Certifications (Optional)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {certificationOptions.map((cert) => {
                const isEnabled = isCertEnabled(cert.name, cert.enabledFor);
                const isSelected = isCertSelected(cert.name);
                
                return (
                  <button
                    key={cert.name}
                    type="button"
                    onClick={() => handleCertificationClick(cert.name, cert.enabledFor)}
                    disabled={!isEnabled}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isSelected && isEnabled
                        ? 'bg-green-500 text-white shadow-md shadow-green-200'
                        : isEnabled
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed opacity-50'
                    }`}
                  >
                    {cert.name}
                  </button>
                );
              })}
            </div>
            {certifications.length > 0 && (
              <div className="mt-3 space-y-1">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between bg-green-50 px-3 py-2 rounded-lg">
                    <span className="text-xs text-gray-700">
                      <strong>{cert}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => setCertifications(certifications.filter((_, i) => i !== index))}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-200"
        >
          Find My Matches
        </button>
      </form>

      {/* Level Selection Modal */}
      {showLevelModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-sm p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                Select {selectedCert} Level
              </h3>
              <button
                onClick={() => {
                  setShowLevelModal(false);
                  setSelectedCert('');
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {certificationLevels[selectedCert]?.map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => handleLevelSelect(level)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-xl text-left font-medium text-gray-900 transition-all border-2 border-transparent hover:border-green-300"
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}