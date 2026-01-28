import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { CompareUniversities } from './components/CompareUniversities';
import { AcademicProfile } from './components/AcademicProfile';
import { Home, GitCompare, User } from 'lucide-react';

export interface StudentProfile {
  gpa: number;
  country: string;
  budget: string;
  certifications: string[];
}

export interface University {
  id: string;
  name: string;
  country: string;
  ranking: number;
  minGPA: number;
  tuitionRange: string;
  fields: string[];
  acceptanceRate: number;
  image: string;
  description: string;
  admissionInfo?: string;
  scholarships?: string;
  intakePeriods?: string[];
}

type ActivePage = 'home' | 'compare' | 'profile';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter(fid => fid !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-20">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* Render active page */}
        {activePage === 'home' && <HomePage />}
        {activePage === 'compare' && (
          <CompareUniversities 
            favoriteIds={favoriteIds}
            onNavigateToProfile={() => setActivePage('profile')}
          />
        )}
        {activePage === 'profile' && (
          <AcademicProfile 
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 max-w-md">
          <div className="grid grid-cols-3 gap-2 py-3">
            {/* Compare Button */}
            <button
              onClick={() => setActivePage('compare')}
              className={`flex flex-col items-center gap-1 py-2 rounded-xl transition-all relative ${
                activePage === 'compare'
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <GitCompare className="w-6 h-6" />
              <span className="text-xs font-medium">Compare</span>
              {favoriteIds.length > 0 && (
                <span className="absolute top-1 right-1/4 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {favoriteIds.length}
                </span>
              )}
            </button>

            {/* Home Button */}
            <button
              onClick={() => setActivePage('home')}
              className={`flex flex-col items-center gap-1 py-2 rounded-xl transition-all ${
                activePage === 'home'
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">Home</span>
            </button>

            {/* Profile Button */}
            <button
              onClick={() => setActivePage('profile')}
              className={`flex flex-col items-center gap-1 py-2 rounded-xl transition-all ${
                activePage === 'profile'
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs font-medium">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}