import { useState, useEffect } from 'react';
import { StudentProfile, University } from '../App';
import { UniversityCard } from './UniversityCard';
import { ArrowLeft, Award, TrendingUp } from 'lucide-react';
import { getUniversities } from '../data/universities';

interface UniversityResultsProps {
  profile: StudentProfile;
  onReset: () => void;
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
}

interface UniversityMatch extends University {
  matchScore: number;
  matchReasons: string[];
  admissionChance: 'High' | 'Medium' | 'Low';
}

export function UniversityResults({ profile, onReset, favoriteIds, onToggleFavorite }: UniversityResultsProps) {
  const [matches, setMatches] = useState<UniversityMatch[]>([]);

  useEffect(() => {
    const universities = getUniversities();
    const matchedUniversities = calculateMatches(universities, profile);
    setMatches(matchedUniversities);
  }, [profile]);

  const calculateMatches = (universities: University[], profile: StudentProfile): UniversityMatch[] => {
    // For Singapore, return only the 4 specific universities
    if (profile.country === 'Singapore') {
      const singaporeUniversityIds = ['17', '21', '30', '31'];
      const singaporeUniversities = universities.filter(uni => 
        singaporeUniversityIds.includes(uni.id)
      );
      
      return singaporeUniversities.map(uni => ({
        ...uni,
        matchScore: 95,
        matchReasons: [
          'Located in your preferred country',
          'Meets your profile requirements',
          'Suitable for international students'
        ],
        admissionChance: 'High' as const
      }));
    }

    // For Thailand, return only the 4 specific universities
    if (profile.country === 'Thailand') {
      const thailandUniversityIds = ['26', '27', '32', '33'];
      const thailandUniversities = universities.filter(uni => 
        thailandUniversityIds.includes(uni.id)
      );
      
      return thailandUniversities.map(uni => ({
        ...uni,
        matchScore: 95,
        matchReasons: [
          'Located in your preferred country',
          'Meets your profile requirements',
          'Suitable for international students'
        ],
        admissionChance: 'High' as const
      }));
    }

    // Original matching logic for other countries
    const matched: UniversityMatch[] = [];

    for (const uni of universities) {
      let matchScore = 0;
      const matchReasons: string[] = [];

      // Country match (60 points)
      if (uni.country === profile.country) {
        matchScore += 60;
        matchReasons.push('Located in your preferred country');
      }

      // GPA match (40 points)
      if (profile.gpa >= uni.minGPA) {
        matchScore += 40;
        if (profile.gpa >= uni.minGPA + 0.5) {
          matchScore += 15;
          matchReasons.push('Your GPA exceeds requirements');
        } else {
          matchReasons.push('Meets GPA requirements');
        }
      }

      // Budget compatibility (20 points)
      if (isBudgetCompatible(profile.budget, uni.tuitionRange)) {
        matchScore += 20;
        matchReasons.push('Fits your budget');
      }

      // Bonus for language certifications
      if (profile.certifications.length > 0) {
        const certBonus = Math.min(15, profile.certifications.length * 3);
        matchScore += certBonus;
        matchReasons.push(`Language proficiency: ${profile.certifications.join(', ')}`);
      }

      // Only include universities with reasonable match
      if (matchScore >= 40) {
        const admissionChance = calculateAdmissionChance(matchScore, profile.gpa, uni);
        matched.push({
          ...uni,
          matchScore,
          matchReasons,
          admissionChance
        });
      }
    }

    // Sort by match score
    return matched.sort((a, b) => b.matchScore - a.matchScore);
  };

  const isBudgetCompatible = (studentBudget: string, tuitionRange: string): boolean => {
    if (studentBudget === 'No Preference') return true;
    
    const budgetMap: { [key: string]: number } = {
      'Under $10,000': 10000,
      '$10,000 - $25,000': 25000,
      '$25,000 - $50,000': 50000,
      '$50,000+': 100000
    };

    const tuitionMap: { [key: string]: number } = {
      'Under $10,000': 10000,
      '$10,000 - $30,000': 30000,
      '$30,000 - $50,000': 50000,
      '$50,000 - $70,000': 70000,
      '$70,000+': 100000
    };

    return (tuitionMap[tuitionRange] || 0) <= (budgetMap[studentBudget] || 0);
  };

  const calculateAdmissionChance = (matchScore: number, gpa: number, uni: University): 'High' | 'Medium' | 'Low' => {
    if (matchScore >= 85 && gpa >= uni.minGPA + 0.5) return 'High';
    if (matchScore >= 65 && gpa >= uni.minGPA) return 'Medium';
    return 'Low';
  };

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={onReset}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm">Back to Profile</span>
      </button>

      {/* Results Header */}
      <div className="bg-white rounded-3xl shadow-lg p-5 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold text-gray-900">Your Matches</h2>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          We found {matches.length} universities that match your profile.
        </p>

        {/* Profile Summary */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4">
          <h3 className="font-semibold text-gray-900 mb-2 text-sm">Profile Summary</h3>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="text-gray-700">GPA: <strong>{profile.gpa.toFixed(2)}</strong></span>
            </div>
            <div className="text-gray-700">
              Country: <strong>{profile.country}</strong>
            </div>
            <div className="text-gray-700 col-span-2">
              Budget: <strong>{profile.budget}</strong>
            </div>
          </div>
          {profile.certifications.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <span className="text-gray-700 text-xs">
                <strong>Language Certifications:</strong> {profile.certifications.join(', ')}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* University Cards */}
      {matches.length > 0 ? (
        <div className="space-y-4">
          {matches.map((uni) => (
            <UniversityCard 
              key={uni.id} 
              university={uni}
              isFavorite={favoriteIds.includes(uni.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <p className="text-gray-600 text-sm mb-2">
            No universities found matching your criteria.
          </p>
          <p className="text-gray-500 text-xs">
            Try adjusting your preferences or expanding your search criteria.
          </p>
        </div>
      )}
    </div>
  );
}