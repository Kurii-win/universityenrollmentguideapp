import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { CompareUniversities } from './components/CompareUniversities';
import { AcademicProfile } from './components/AcademicProfile';
import { Favorites } from './components/Favorites';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { AdminDashboard } from './components/Admin/AdminDashboard';
import { Home, GitCompare, Target, Heart } from 'lucide-react';

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

type ActivePage = 'home' | 'compare' | 'match' | 'favorites' | 'login' | 'signup' | 'adminDashboard';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [currency, setCurrency] = useState<string>('USD');
  const [authenticatedUniversityId, setAuthenticatedUniversityId] = useState<string | null>(null);

  const toggleFavorite = (id: string) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter(fid => fid !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };

  const handleAdminLogin = (universityId: string) => {
    setAuthenticatedUniversityId(universityId);
    setActivePage('adminDashboard');
  };

  const handleAdminLogout = () => {
    setAuthenticatedUniversityId(null);
    setActivePage('home');
  };

  // Check if currently in admin mode
  const isAdminMode = activePage === 'adminDashboard';

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-20">
      <div className={`container mx-auto px-4 py-6 ${isAdminMode ? 'max-w-7xl' : 'max-w-md'}`}>
        {/* Render active page */}
        {activePage === 'home' && (
          <HomePage 
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite}
            onNavigateToLogin={() => setActivePage('login')}
            currency={currency}
            onCurrencyChange={setCurrency}
          />
        )}
        {activePage === 'compare' && (
          <CompareUniversities 
            favoriteIds={favoriteIds}
            onNavigateToProfile={() => setActivePage('match')}
          />
        )}
        {activePage === 'match' && (
          <AcademicProfile 
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite}
            currency={currency}
            onCurrencyChange={setCurrency}
          />
        )}
        {activePage === 'favorites' && (
          <Favorites 
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite}
            currency={currency}
          />
        )}
        {activePage === 'login' && (
          <Login 
            onBack={() => setActivePage('home')}
            onSwitchToSignUp={() => setActivePage('signup')}
            onAdminLogin={handleAdminLogin}
          />
        )}
        {activePage === 'signup' && (
          <SignUp 
            onBack={() => setActivePage('home')}
            onSwitchToLogin={() => setActivePage('login')}
            onAdminLogin={handleAdminLogin}
          />
        )}
        {activePage === 'adminDashboard' && (
          <AdminDashboard 
            onLogout={handleAdminLogout}
            universityId={authenticatedUniversityId || undefined}
          />
        )}
      </div>

      {/* Bottom Navigation - Hide in admin mode */}
      {!isAdminMode && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 max-w-md">
            <div className="grid grid-cols-4 gap-2 py-3">
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

              {/* Match Button */}
              <button
                onClick={() => setActivePage('match')}
                className={`flex flex-col items-center gap-1 py-2 rounded-xl transition-all ${
                  activePage === 'match'
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Target className="w-6 h-6" />
                <span className="text-xs font-medium">Match</span>
              </button>

              {/* Favorites Button */}
              <button
                onClick={() => setActivePage('favorites')}
                className={`flex flex-col items-center gap-1 py-2 rounded-xl transition-all ${
                  activePage === 'favorites'
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Heart className="w-6 h-6" />
                <span className="text-xs font-medium">Favorites</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}