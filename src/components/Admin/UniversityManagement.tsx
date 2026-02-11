import { getUniversities } from '../../data/universities';
import { MapPin, DollarSign, Users, TrendingUp, Star, BookOpen, Award, Calendar } from 'lucide-react';

interface UniversityManagementProps {
  universityId: string;
}

export function UniversityManagement({ universityId }: UniversityManagementProps) {
  // Get the specific university data
  const universities = getUniversities();
  const university = universities.find(uni => uni.id === universityId);

  if (!university) {
    return <div>University not found</div>;
  }

  return (
    <div className="space-y-6">
      {/* University Details Card */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">University Information</h2>

        {/* University Image and Basic Info */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <img
            src={university.image}
            alt={university.name}
            className="w-full md:w-48 h-48 object-cover rounded-xl"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{university.country}</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{university.description}</p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-amber-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="text-xs font-medium text-gray-600">World Ranking</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">#{university.ranking}</p>
          </div>

          <div className="bg-green-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-xs font-medium text-gray-600">Min GPA</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{university.minGPA}</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-medium text-gray-600">Acceptance Rate</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{university.acceptanceRate}%</p>
          </div>

          <div className="bg-purple-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-purple-600" />
              <span className="text-xs font-medium text-gray-600">Tuition Range</span>
            </div>
            <p className="text-sm font-bold text-gray-900">{university.tuitionRange}</p>
          </div>
        </div>

        {/* Programs */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-green-600" />
            <h4 className="font-bold text-gray-900">Available Programs</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {university.fields.map((field, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
              >
                {field}
              </span>
            ))}
          </div>
        </div>

        {/* Admission Requirements */}
        {university.admissionInfo && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-green-600" />
              <h4 className="font-bold text-gray-900">Admission Requirements</h4>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-gray-700 leading-relaxed">{university.admissionInfo}</p>
            </div>
          </div>
        )}

        {/* Scholarships */}
        {university.scholarships && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-green-600" />
              <h4 className="font-bold text-gray-900">Scholarship Opportunities</h4>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <p className="text-sm text-gray-700 leading-relaxed">{university.scholarships}</p>
            </div>
          </div>
        )}

        {/* Intake Periods */}
        {university.intakePeriods && university.intakePeriods.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-green-600" />
              <h4 className="font-bold text-gray-900">Intake Periods</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {university.intakePeriods.map((intake, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium border border-orange-200"
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