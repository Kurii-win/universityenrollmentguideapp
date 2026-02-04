import { GraduationCap, User, Search } from 'lucide-react';
import { getUniversities } from '../data/universities';
import { UniversityCard } from './UniversityCard';
import { University } from '../App';
import { useState, useEffect } from 'react';
import { currencies } from '../utils/currency';

interface UniversityMatch extends University {
  matchScore: number;
  matchReasons: string[];
  admissionChance: 'High' | 'Medium' | 'Low';
}

interface HomePageProps {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  onNavigateToLogin: () => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
}

export function HomePage({ favoriteIds, onToggleFavorite, onNavigateToLogin, currency, onCurrencyChange }: HomePageProps) {
  const [featuredUniversities, setFeaturedUniversities] = useState<UniversityMatch[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const universities = getUniversities();
    
    // Featured countries
    const featuredCountries = [
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
    
    // Get one random university from each country
    const selected = featuredCountries
      .map(country => {
        const countryUniversities = universities.filter(uni => uni.country === country);
        if (countryUniversities.length > 0) {
          // Get random university from this country
          const randomIndex = Math.floor(Math.random() * countryUniversities.length);
          return countryUniversities[randomIndex];
        }
        return null;
      })
      .filter((uni): uni is University => uni !== null)
      .slice(0, 10);

    // Convert to UniversityMatch format
    const matches: UniversityMatch[] = selected.map(uni => ({
      ...uni,
      matchScore: Math.floor(Math.random() * 20) + 80, // Random score between 80-99
      matchReasons: [
        'World-class education',
        'International student friendly',
        'Strong academic programs'
      ],
      admissionChance: 'High' as const
    }));

    setFeaturedUniversities(matches);
  }, []);

  // Filter universities based on search
  const allUniversities = getUniversities();
  const filteredUniversities = searchQuery.trim() 
    ? allUniversities.filter(uni => 
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.fields.some(field => field.toLowerCase().includes(searchQuery.toLowerCase()))
      ).map(uni => ({
        ...uni,
        matchScore: Math.floor(Math.random() * 20) + 80,
        matchReasons: [
          'World-class education',
          'International student friendly',
          'Strong academic programs'
        ],
        admissionChance: 'High' as const
      }))
    : featuredUniversities;

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-6 relative">
        <div className="flex items-center justify-center gap-2 mb-3">
          <GraduationCap className="w-10 h-10 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">EduPathway</h1>
        </div>
        
        {/* Profile/Login Icon Button - Absolute positioned at top right */}
        <button
          onClick={onNavigateToLogin}
          className="absolute top-0 right-0 bg-white rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 border border-gray-200"
        >
          <User className="w-5 h-5 text-gray-700" />
        </button>
        
        {/* Search Bar */}
        <div className="relative px-4">
          <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search universities, countries, or fields..."
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
          />
        </div>
      </div>

      {/* Featured Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4 px-1">
          <h2 className="text-lg font-bold text-gray-900">
            {searchQuery.trim() ? `Search Results (${filteredUniversities.length})` : 'Featured Universities'}
          </h2>
          
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
        
        {filteredUniversities.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">No Results Found</h3>
            <p className="text-gray-600 text-sm">
              Try searching with different keywords
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredUniversities.map((uni) => (
              <UniversityCard 
                key={uni.id} 
                university={uni}
                isFavorite={favoriteIds.includes(uni.id)}
                onToggleFavorite={onToggleFavorite}
                currency={currency}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-4"></div>
    </div>
  );
}