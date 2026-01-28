import { GraduationCap, Star, MapPin, TrendingUp } from 'lucide-react';
import { getUniversities } from '../data/universities';

export function HomePage() {
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
  const featuredUniversities = featuredCountries
    .map(country => {
      const countryUniversities = universities.filter(uni => uni.country === country);
      if (countryUniversities.length > 0) {
        // Get random university from this country
        const randomIndex = Math.floor(Math.random() * countryUniversities.length);
        return countryUniversities[randomIndex];
      }
      return null;
    })
    .filter(uni => uni !== null)
    .slice(0, 10);

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <GraduationCap className="w-10 h-10 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">EduPathway</h1>
        </div>
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
            <div
              key={uni.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              {/* University Image */}
              <div className="w-full h-40 relative">
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-full object-cover"
                />
                {/* Country Badge */}
                <div className="absolute top-3 right-3 bg-green-600 text-white rounded-2xl px-3 py-2 shadow-lg">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-bold">{uni.country}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {uni.name}
                </h3>

                <p className="text-gray-700 text-xs mb-3 leading-relaxed">
                  {uni.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-amber-50 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Star className="w-3 h-3 text-yellow-600" />
                      <span className="text-xs text-gray-600">Rank</span>
                    </div>
                    <p className="text-sm font-bold text-gray-900">#{uni.ranking}</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-1.5 mb-1">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-gray-600">GPA</span>
                    </div>
                    <p className="text-sm font-bold text-gray-900">{uni.minGPA}</p>
                  </div>
                  
                  <div className="bg-emerald-50 rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-600 mb-1">Accept</div>
                    <p className="text-sm font-bold text-gray-900">{uni.acceptanceRate}%</p>
                  </div>
                </div>

                {/* Top Fields */}
                <div className="mt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {uni.fields.slice(0, 3).map((field) => (
                      <span
                        key={field}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {field}
                      </span>
                    ))}
                    {uni.fields.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        +{uni.fields.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-4"></div>
    </div>
  );
}
