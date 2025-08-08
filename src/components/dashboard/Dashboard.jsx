import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react';
import StatCard from '../StatCard';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import AnalyticsSection from './AnalyticsSection';
import ActivityDashboard from './ActivityDashboard';
import { dashboardStats } from '../../data/mockData';

const Dashboard = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
          Welcome back, Umar!
        </h1>
        <p className="text-sm text-gray-600 sm:text-base dark:text-gray-300">
          Here's what's happening with your business today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
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
          color="red"
          icon={<Activity size={20} />}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="text-white bg-gradient-to-r from-indigo-600 to-indigo-400">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold sm:text-2xl">89K</div>
                <div className="text-xs text-blue-100 sm:text-sm">FRIENDS</div>
              </div>
              <div className="text-2xl sm:text-3xl">👥</div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-white bg-gradient-to-r from-gray-600 to-gray-500">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold sm:text-2xl">1.79K</div>
                <div className="text-xs sm:text-sm text-cyan-100">TWEETS</div>
              </div>
              <div className="text-2xl sm:text-3xl">✉️</div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-white bg-gradient-to-r from-green-600 to-green-400">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold sm:text-2xl">500</div>
                <div className="text-xs text-indigo-100 sm:text-sm">CONTACTS</div>
              </div>
              <div className="text-2xl sm:text-3xl">👤</div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-white bg-gradient-to-r from-orange-500 to-orange-400">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold sm:text-2xl">12+</div>
                <div className="text-xs text-orange-100 sm:text-sm">EVENTS</div>
              </div>
              <div className="text-2xl sm:text-3xl opacity-80">📅</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 sm:space-y-3">
              <button className="w-full p-2 text-sm text-left text-blue-700 transition-colors rounded-lg sm:p-3 sm:text-base bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30">
                📊 View Analytics
              </button>
              <button className="w-full p-2 text-sm text-left text-green-700 transition-colors rounded-lg sm:p-3 sm:text-base bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-300 dark:hover:bg-green-900/30">
                👥 Manage Users
              </button>
              <button className="w-full p-2 text-sm text-left text-purple-700 transition-colors rounded-lg sm:p-3 sm:text-base bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/30">
                ⚙️ Settings
              </button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">New user registered</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">Payment received</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">System updated</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">Server Status</span>
                <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-300">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">Database</span>
                <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-300">Healthy</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">API Status</span>
                <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-300">Active</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full">
        <AnalyticsSection />
      </div>

      <div className="w-full">
        <ActivityDashboard />
      </div>
    </div>
  );
};

export default Dashboard;