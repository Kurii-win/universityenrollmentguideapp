import { useState } from 'react';
import { UniversityManagement } from './UniversityManagement';
import { EditUniversity } from './EditUniversity';
import { GraduationCap, LogOut, School, Edit } from 'lucide-react';
import { getUniversities } from '../../data/universities';

interface AdminDashboardProps {
  onLogout: () => void;
  universityId?: string;
}

type AdminSection = 'view' | 'edit';

export function AdminDashboard({ onLogout, universityId = '26' }: AdminDashboardProps) {
  const [activeSection, setActiveSection] = useState<AdminSection>('view');

  // Get the university data
  const universities = getUniversities();
  const university = universities.find(uni => uni.id === universityId);

  if (!university) {
    return <div>University not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-green-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">{university.name}</h1>
                <p className="text-xs text-gray-500">University Representative Portal</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Action Buttons */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveSection('view')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeSection === 'view'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <School className="w-5 h-5" />
              <span>View Details</span>
            </button>

            <button
              onClick={() => setActiveSection('edit')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeSection === 'edit'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Edit className="w-5 h-5" />
              <span>Edit Information</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        {activeSection === 'view' && <UniversityManagement universityId={universityId} />}
        {activeSection === 'edit' && <EditUniversity university={university} onSuccess={() => setActiveSection('view')} />}
      </div>
    </div>
  );
}