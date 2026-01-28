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
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* University Image */}
      <div className="w-full h-40 relative">
        <img
          src={university.image}
          alt={university.name}
          className="w-full h-full object-cover"
        />
        {/* Match Score Badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-lg">
          <div className={`text-2xl font-bold ${getMatchScoreColor(university.matchScore)}`}>
            {university.matchScore}
          </div>
          <div className="text-xs text-gray-600 font-medium">Match</div>
        </div>
        
        {/* Favorite Button */}
        {onToggleFavorite && (
          <button
            onClick={() => onToggleFavorite(university.id)}
            className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:scale-110 transition-transform"
          >
            <Heart 
              className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
            />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900 leading-tight">{university.name}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${getChanceColor(university.admissionChance)}`}>
              {university.admissionChance}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs">{university.country}</span>
          </div>
        </div>

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