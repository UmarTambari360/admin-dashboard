import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react';
import StatCard from '../StatCard';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import AnalyticsSection from './AnalyticsSection';
import ActivityDashboard from './ActivityDashboard';
import { dashboardStats } from '../../data/mockData';

const Dashboard = () => {
  return (
    <div className="px-4 space-y-6 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Welcome back, Umar!
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Here's what's happening with your business today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Users"
          value={dashboardStats.users.total}
          change={dashboardStats.users.change}
          trend={dashboardStats.users.trend}
          color="blue"
          icon={<Users size={20} />}
        />
        
        <StatCard
          title="Income"
          value={`$${dashboardStats.income.total}`}
          change={dashboardStats.income.change}
          trend={dashboardStats.income.trend}
          color="green"
          icon={<DollarSign size={20} />}
        />
        
        <StatCard
          title="Conversion Rate"
          value={`${dashboardStats.conversionRate.total}%`}
          change={dashboardStats.conversionRate.change}
          trend={dashboardStats.conversionRate.trend}
          color="orange"
          icon={<TrendingUp size={20} />}
        />
        
        <StatCard
          title="Sessions"
          value={dashboardStats.sessions.total}
          change={dashboardStats.sessions.change}
          trend={dashboardStats.sessions.trend}
          color="purple"
          icon={<Activity size={20} />}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card className="text-white bg-gradient-to-r from-orange-500 to-orange-400">
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">89K</div>
                <div className="text-sm text-blue-100">FRIENDS</div>
              </div>
              <div className="text-3xl opacity-90">👥</div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-white bg-gradient-to-r from-cyan-600 to-cyan-400">
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">1.79K</div>
                <div className="text-sm text-cyan-100">TWEETS</div>
              </div>
              <div className="text-3xl opacity-90">✉️</div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-white bg-gradient-to-r from-violet-600 to-violet-400 dark:text-gray-100">
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">500</div>
                <div className="text-sm text-indigo-100">CONTACTS</div>
              </div>
              <div className="text-3xl opacity-90">👤</div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-white bg-gradient-to-r from-orange-600 to-orange-400">
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">12+</div>
                <div className="text-sm text-orange-100">EVENTS</div>
              </div>
              <div className="text-3xl opacity-0">📅</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full p-3 text-left text-blue-700 transition-colors rounded-lg bg-blue-50 hover:bg-blue-100">
                📊 View Analytics
              </button>
              <button className="w-full p-3 text-left text-green-700 transition-colors rounded-lg bg-green-50 hover:bg-green-100">
                👥 Manage Users
              </button>
              <button className="w-full p-3 text-left text-purple-700 transition-colors rounded-lg bg-purple-50 hover:bg-purple-100">
                ⚙️ Settings
              </button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-800 dark:text-gray-100">New user registered</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-800 dark:text-gray-100">Payment received</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-800 dark:text-gray-100">System updated</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-800 dark:text-gray-100">Server Status</span>
                <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-800 dark:text-gray-100">Database</span>
                <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">Healthy</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-800 dark:text-gray-100">API Status</span>
                <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">Active</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <AnalyticsSection />

      <ActivityDashboard />
    </div>
  );
};

export default Dashboard;