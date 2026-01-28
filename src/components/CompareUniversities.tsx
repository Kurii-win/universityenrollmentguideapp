import { useState } from 'react';
import { GraduationCap, TrendingUp, Users, DollarSign, Star, Heart, ArrowRight } from 'lucide-react';
import { getUniversities } from '../data/universities';
import { University } from '../App';

interface CompareUniversitiesProps {
  favoriteIds: string[];
  onNavigateToProfile: () => void;
}

export function CompareUniversities({ favoriteIds, onNavigateToProfile }: CompareUniversitiesProps) {
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const universities = getUniversities();
  
  const favoriteUniversities = universities.filter(uni => favoriteIds.includes(uni.id));

  const toggleSelection = (id: string) => {
    if (selectedForCompare.includes(id)) {
      setSelectedForCompare(selectedForCompare.filter(uid => uid !== id));
    } else if (selectedForCompare.length < 2) {
      setSelectedForCompare([...selectedForCompare, id]);
    }
  };

  const compareUniversities = favoriteUniversities.filter(uni => 
    selectedForCompare.includes(uni.id)
  );

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <GraduationCap className="w-10 h-10 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">Compare</h1>
        </div>
        <p className="text-gray-600 text-sm px-4">
          {favoriteIds.length > 0 
            ? 'Select 2 favorites to compare' 
            : 'Add favorites from your matches to compare'}
        </p>
      </div>

      {/* Empty State */}
      {favoriteIds.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <div className="mb-4">
            <Heart className="w-16 h-16 text-gray-300 mx-auto" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">No Favorites Yet</h3>
          <p className="text-gray-600 text-sm mb-6">
            Start by finding your university matches and tap the heart icon to save your favorites.
          </p>
          <button
            onClick={onNavigateToProfile}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-200"
          >
            Find Matches
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <>
          {/* Favorite Universities Grid */}
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-3 px-1">
              Your Favorites ({favoriteIds.length})
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {favoriteUniversities.map((uni) => (
                <button
                  key={uni.id}
                  onClick={() => toggleSelection(uni.id)}
                  className={`text-left p-3 rounded-2xl border-2 transition-all ${
                    selectedForCompare.includes(uni.id)
                      ? 'border-green-500 bg-green-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-green-300'
                  }`}
                >
                  <div className="relative mb-2">
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-20 object-cover rounded-lg"
                    />
                    {selectedForCompare.includes(uni.id) && (
                      <div className="absolute top-1 right-1 bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        {selectedForCompare.indexOf(uni.id) + 1}
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-xs mb-1 line-clamp-2">
                    {uni.name}
                  </h3>
                  <p className="text-xs text-gray-600">{uni.country}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs text-gray-700">#{uni.ranking}</span>
                  </div>
                </button>
              ))}
            </div>
            
            {favoriteIds.length > 0 && selectedForCompare.length < 2 && (
              <p className="text-xs text-gray-500 text-center mt-3">
                Select {2 - selectedForCompare.length} more to compare
              </p>
            )}
          </div>

          {/* Comparison Table */}
          {compareUniversities.length === 2 && (
            <div className="bg-white rounded-3xl shadow-lg p-5 mb-4">
              <h3 className="font-bold text-gray-900 mb-4 text-center">Side-by-Side Comparison</h3>
              
              <div className="space-y-4">
                {/* University Names */}
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-2 text-center">Universities</div>
                  <div className="grid grid-cols-2 gap-3">
                    {compareUniversities.map((uni) => (
                      <div key={uni.id} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl px-3 py-3 text-center">
                        <p className="text-sm font-bold text-gray-900 line-clamp-2">{uni.name}</p>
                        <p className="text-xs text-gray-600 mt-1">{uni.country}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ranking */}
                <div>
                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs font-medium text-gray-700">World Ranking</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {compareUniversities.map((uni) => (
                      <div key={uni.id} className="bg-yellow-50 rounded-xl px-3 py-3 text-center">
                        <p className="text-2xl font-bold text-gray-900">#{uni.ranking}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Min GPA */}
                <div>
                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-gray-700">Minimum GPA</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {compareUniversities.map((uni) => (
                      <div key={uni.id} className="bg-green-50 rounded-xl px-3 py-3 text-center">
                        <p className="text-2xl font-bold text-gray-900">{uni.minGPA}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Acceptance Rate */}
                <div>
                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-medium text-gray-700">Acceptance Rate</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {compareUniversities.map((uni) => (
                      <div key={uni.id} className="bg-purple-50 rounded-xl px-3 py-3 text-center">
                        <p className="text-2xl font-bold text-gray-900">{uni.acceptanceRate}%</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tuition */}
                <div>
                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-medium text-gray-700">Tuition Range</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {compareUniversities.map((uni) => (
                      <div key={uni.id} className="bg-emerald-50 rounded-xl px-3 py-3 text-center">
                        <p className="text-xs font-bold text-gray-900">{uni.tuitionRange}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Fields */}
                <div>
                  <div className="text-xs font-medium text-gray-700 mb-2 text-center">Top Programs</div>
                  <div className="grid grid-cols-2 gap-3">
                    {compareUniversities.map((uni) => (
                      <div key={uni.id} className="bg-blue-50 rounded-xl px-3 py-3">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {uni.fields.slice(0, 3).map((field) => (
                            <span
                              key={field}
                              className="px-2 py-0.5 bg-white text-gray-700 rounded-full text-xs"
                            >
                              {field}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Bottom spacing for navigation */}
      <div className="h-4"></div>
    </div>
  );
}
