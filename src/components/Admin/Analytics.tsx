import { Users, School, Heart, TrendingUp, Globe, DollarSign } from 'lucide-react';

export function Analytics() {
  // Mock data - in real app, this would come from API
  const stats = {
    totalUsers: 1247,
    totalUniversities: 40,
    totalFavorites: 3891,
    avgMatchScore: 87.5,
    topCountries: [
      { name: 'United States', count: 456 },
      { name: 'United Kingdom', count: 389 },
      { name: 'Canada', count: 278 },
      { name: 'Australia', count: 234 },
      { name: 'Japan', count: 198 }
    ],
    recentActivity: [
      { user: 'John Doe', action: 'Signed up', time: '2 min ago' },
      { user: 'Jane Smith', action: 'Added favorite', time: '5 min ago' },
      { user: 'Mike Johnson', action: 'Matched universities', time: '12 min ago' },
      { user: 'Sarah Williams', action: 'Updated profile', time: '18 min ago' },
      { user: 'Tom Brown', action: 'Signed up', time: '23 min ago' }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Users */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</h3>
          <p className="text-sm text-gray-600 mt-1">Total Users</p>
          <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
            <TrendingUp className="w-3 h-3" />
            <span>+12.5% this month</span>
          </div>
        </div>

        {/* Total Universities */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-purple-100 p-3 rounded-xl">
              <School className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{stats.totalUniversities}</h3>
          <p className="text-sm text-gray-600 mt-1">Universities</p>
          <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
            <span>Across 10 countries</span>
          </div>
        </div>

        {/* Total Favorites */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-red-100 p-3 rounded-xl">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{stats.totalFavorites.toLocaleString()}</h3>
          <p className="text-sm text-gray-600 mt-1">Total Favorites</p>
          <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
            <TrendingUp className="w-3 h-3" />
            <span>+8.3% this week</span>
          </div>
        </div>

        {/* Avg Match Score */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-green-100 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{stats.avgMatchScore}%</h3>
          <p className="text-sm text-gray-600 mt-1">Avg Match Score</p>
          <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
            <TrendingUp className="w-3 h-3" />
            <span>+2.1% improvement</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Countries */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-bold text-gray-900">Top Countries</h3>
          </div>
          <div className="space-y-3">
            {stats.topCountries.map((country, index) => (
              <div key={country.name} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg text-sm font-bold text-green-700">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{country.name}</span>
                    <span className="text-sm text-gray-600">{country.count} searches</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(country.count / stats.topCountries[0].count) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
          </div>
          <div className="space-y-3">
            {stats.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full text-sm font-bold text-green-700">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                  <p className="text-xs text-gray-600">{activity.action}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
