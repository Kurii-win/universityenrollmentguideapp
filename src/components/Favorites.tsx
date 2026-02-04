import { getUniversities } from '../data/universities';
import { UniversityCard } from './UniversityCard';
import { University } from '../App';
import { GraduationCap, Heart } from 'lucide-react';

interface UniversityMatch extends University {
  matchScore: number;
  matchReasons: string[];
  admissionChance: 'High' | 'Medium' | 'Low';
}

interface FavoritesProps {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  currency: string;
}

export function Favorites({ favoriteIds, onToggleFavorite, currency }: FavoritesProps) {
  const universities = getUniversities();
  
  // Filter to get only favorited universities
  const favoriteUniversities = universities.filter(uni => 
    favoriteIds.includes(uni.id)
  );

  // Convert to UniversityMatch format for display
  const matches: UniversityMatch[] = favoriteUniversities.map(uni => ({
    ...uni,
    matchScore: Math.floor(Math.random() * 20) + 80, // Random score between 80-99
    matchReasons: [
      'Added to your favorites',
      'Matches your interests',
      'Strong academic programs'
    ],
    admissionChance: 'High' as const
  }));

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <GraduationCap className="w-10 h-10 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">EduPathway</h1>
        </div>
        <p className="text-gray-600 text-sm px-4">
          Your Favorite Universities
        </p>
      </div>

      {/* Content */}
      {matches.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">No Favorites Yet</h3>
          <p className="text-gray-600 text-sm">
            Start adding universities to your favorites by tapping the heart icon on any university card
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {matches.map((uni) => (
            <UniversityCard 
              key={uni.id} 
              university={uni}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
              currency={currency}
            />
          ))}
        </div>
      )}

      {/* Bottom spacing for navigation */}
      <div className="h-4"></div>
    </div>
  );
}