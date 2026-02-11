import { useState } from 'react';
import { Search, Filter, MoreVertical, Mail, Phone, MapPin } from 'lucide-react';

export function UserManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock user data
  const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 8900',
      country: 'United States',
      status: 'active',
      joinDate: '2024-01-15',
      favorites: 12,
      matches: 8
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+44 20 7123 4567',
      country: 'United Kingdom',
      status: 'active',
      joinDate: '2024-01-20',
      favorites: 8,
      matches: 5
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.j@example.com',
      phone: '+1 555 123 4567',
      country: 'Canada',
      status: 'inactive',
      joinDate: '2024-02-01',
      favorites: 3,
      matches: 2
    },
    {
      id: '4',
      name: 'Sarah Williams',
      email: 'sarah.w@example.com',
      phone: '+61 2 1234 5678',
      country: 'Australia',
      status: 'active',
      joinDate: '2024-02-05',
      favorites: 15,
      matches: 10
    },
    {
      id: '5',
      name: 'Tom Brown',
      email: 'tom.brown@example.com',
      phone: '+81 3 1234 5678',
      country: 'Japan',
      status: 'active',
      joinDate: '2024-02-08',
      favorites: 6,
      matches: 4
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">User Management</h2>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search users by name or email..."
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
          <div>
            <p className="text-2xl font-bold text-gray-900">{filteredUsers.length}</p>
            <p className="text-xs text-gray-600">Total Users</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">
              {users.filter(u => u.status === 'active').length}
            </p>
            <p className="text-xs text-gray-600">Active Users</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-500">
              {users.filter(u => u.status === 'inactive').length}
            </p>
            <p className="text-xs text-gray-600">Inactive Users</p>
          </div>
        </div>
      </div>

      {/* Users List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full text-lg font-bold text-green-700">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {user.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{user.country}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">Joined</p>
                      <p className="text-sm font-medium text-gray-900">{user.joinDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Favorites</p>
                      <p className="text-sm font-medium text-gray-900">{user.favorites}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Matches</p>
                      <p className="text-sm font-medium text-gray-900">{user.matches}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
          <p className="text-gray-500">No users found</p>
        </div>
      )}
    </div>
  );
}
