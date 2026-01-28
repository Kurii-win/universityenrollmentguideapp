import { University } from '../App';
import { MapPin, DollarSign, Users, TrendingUp, CheckCircle, Star, Heart } from 'lucide-react';

interface UniversityMatch extends University {
  matchScore: number;
  matchReasons: string[];
  admissionChance: 'High' | 'Medium' | 'Low';
}

interface UniversityCardProps {
  university: UniversityMatch;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function UniversityCard({ university, isFavorite = false, onToggleFavorite }: UniversityCardProps) {
  const getChanceColor = (chance: string) => {
    switch (chance) {
      case 'High':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-emerald-600';
    return 'text-orange-600';
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative">
      {/* Card Layout with Square Logo on Left */}
      <div className="flex">
        {/* Square Logo */}
        <div className="w-24 h-24 flex-shrink-0 relative m-4">
          <img
            src={university.image}
            alt={university.name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 py-4 pr-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-bold text-gray-900 leading-tight">{university.name}</h3>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1 text-gray-600">
              <MapPin className="w-3 h-3" />
              <span className="text-xs">{university.country}</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getChanceColor(university.admissionChance)}`}>
              {university.admissionChance}
            </span>
          </div>
        </div>
      </div>

      {/* Favorite Button - Absolute Position */}
      {onToggleFavorite && (
        <button
          onClick={() => onToggleFavorite(university.id)}
          className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
        >
          <Heart 
            className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
        </button>
      )}

      {/* Expanded Content Below */}
      <div className="px-4 pb-4">
        <p className="text-gray-700 text-xs mb-3 leading-relaxed">{university.description}</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="flex items-center gap-1.5 text-xs bg-amber-50 px-2 py-1.5 rounded-lg">
            <Star className="w-3.5 h-3.5 text-yellow-600" />
            <span className="text-gray-700">
              Rank <strong>#{university.ranking}</strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs bg-green-50 px-2 py-1.5 rounded-lg">
            <TrendingUp className="w-3.5 h-3.5 text-green-600" />
            <span className="text-gray-700">
              GPA <strong>{university.minGPA}</strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs bg-emerald-50 px-2 py-1.5 rounded-lg">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-gray-700">
              <strong>{university.acceptanceRate}%</strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs bg-teal-50 px-2 py-1.5 rounded-lg">
            <DollarSign className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-gray-700 truncate">
              <strong>{university.tuitionRange}</strong>
            </span>
          </div>
        </div>

        {/* Fields */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1.5">
            {university.fields.slice(0, 3).map((field) => (
              <span
                key={field}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
              >
                {field}
              </span>
            ))}
            {university.fields.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                +{university.fields.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Match Reasons */}
        <div className="bg-green-50 rounded-2xl p-3">
          <h4 className="font-semibold text-gray-900 mb-2 text-xs">Why This Match?</h4>
          <ul className="space-y-1">
            {university.matchReasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-1.5 text-xs text-gray-700">
                <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Info for Singapore Universities */}
        {university.admissionInfo && (
          <div className="mt-3 bg-blue-50 rounded-2xl p-3">
            <h4 className="font-semibold text-gray-900 mb-2 text-xs">Admission Requirements</h4>
            <p className="text-xs text-gray-700 leading-relaxed">{university.admissionInfo}</p>
          </div>
        )}

        {university.scholarships && (
          <div className="mt-3 bg-purple-50 rounded-2xl p-3">
            <h4 className="font-semibold text-gray-900 mb-2 text-xs">Scholarship Opportunities</h4>
            <p className="text-xs text-gray-700 leading-relaxed">{university.scholarships}</p>
          </div>
        )}

        {university.intakePeriods && university.intakePeriods.length > 0 && (
          <div className="mt-3 bg-orange-50 rounded-2xl p-3">
            <h4 className="font-semibold text-gray-900 mb-2 text-xs">Intake Periods</h4>
            <div className="flex flex-wrap gap-1.5">
              {university.intakePeriods.map((intake, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-white rounded-lg text-xs font-medium text-gray-700 border border-orange-200"
                >
                  {intake}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}