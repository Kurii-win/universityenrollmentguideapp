import { useState } from 'react';
import { StudentForm } from './StudentForm';
import { UniversityResults } from './UniversityResults';
import { GraduationCap } from 'lucide-react';
import { StudentProfile } from '../App';

interface AcademicProfileProps {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
}

export function AcademicProfile({ favoriteIds, onToggleFavorite, currency, onCurrencyChange }: AcademicProfileProps) {
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (profile: StudentProfile) => {
    setStudentProfile(profile);
    setShowResults(true);
  };

  const handleReset = () => {
    setStudentProfile(null);
    setShowResults(false);
  };

  return (
    <div>
      {/* Header */}
      {!showResults && (
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <GraduationCap className="w-10 h-10 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">EduPathway</h1>
          </div>
          <p className="text-gray-600 text-sm px-4">
            Find your perfect university match based on your qualifications
          </p>
        </div>
      )}

      {/* Main Content */}
      {!showResults ? (
        <StudentForm onSubmit={handleSubmit} currency={currency} onCurrencyChange={onCurrencyChange} />
      ) : (
        <UniversityResults 
          profile={studentProfile!} 
          onReset={handleReset}
          favoriteIds={favoriteIds}
          onToggleFavorite={onToggleFavorite}
          currency={currency}
        />
      )}

      {/* Bottom spacing for navigation */}
      <div className="h-4"></div>
    </div>
  );
}