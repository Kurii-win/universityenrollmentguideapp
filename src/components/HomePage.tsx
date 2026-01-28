import { GraduationCap, User } from 'lucide-react';
import { getUniversities } from '../data/universities';
import { UniversityCard } from './UniversityCard';
import { University } from '../App';
import { useState, useEffect } from 'react';

interface UniversityMatch extends University {
  matchScore: number;
  matchReasons: string[];
  admissionChance: 'High' | 'Medium' | 'Low';
}

interface HomePageProps {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  onNavigateToLogin: () => void;
}

export function HomePage({ favoriteIds, onToggleFavorite, onNavigateToLogin }: HomePageProps) {
  const [featuredUniversities, setFeaturedUniversities] = useState<UniversityMatch[]>([]);

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
        
        <p className="text-gray-600 text-sm px-4">
          Discover universities around the world
        </p>
      </div>

      {/* Featured Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">
          Featured Universities
        </h2>
        
        <div className="space-y-4">
          {featuredUniversities.map((uni) => (
            <UniversityCard 
              key={uni.id} 
              university={uni}
              isFavorite={favoriteIds.includes(uni.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-4"></div>
    </div>
  );
}