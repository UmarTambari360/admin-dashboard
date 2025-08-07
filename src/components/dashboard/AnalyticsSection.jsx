import TrafficChart from './TrafficChart';
import SalesChart from './SalesChart';
import RevenueChart from './RevenueChart';
import ProgressChart from './ProgressChart';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { salesMetrics } from '../../data/mockData';
import { formatNumber } from '../../utils/cn';

const AnalyticsSection = () => {
  return (
    <div className="space-y-6">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Analytics Overview</h2>
          <p className="text-gray-600">Detailed insights into your business performance</p>
        </div>
        <div className="flex items-center space-x-2">
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-300">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>
      </div>

      {/* Traffic & sales metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent>
            <div className="text-center">
              <div className="text-sm opacity-90 mb-2">New Clients</div>
              <div className="text-2xl font-bold">{formatNumber(salesMetrics.newClients)}</div>
              <div className="text-xs opacity-75 mt-1">↗ +12.5%</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardContent>
            <div className="text-center">
              <div className="text-sm opacity-90 mb-2">Recurring Clients</div>
              <div className="text-2xl font-bold">{formatNumber(salesMetrics.recurringClients)}</div>
              <div className="text-xs opacity-75 mt-1">↗ +8.2%</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent>
            <div className="text-center">
              <div className="text-sm opacity-90 mb-2">Pageviews</div>
              <div className="text-2xl font-bold">{formatNumber(salesMetrics.pageviews)}</div>
              <div className="text-xs opacity-75 mt-1">↗ +15.7%</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent>
            <div className="text-center">
              <div className="text-sm opacity-90 mb-2">Organic Traffic</div>
              <div className="text-2xl font-bold">{formatNumber(salesMetrics.organic)}</div>
              <div className="text-xs opacity-75 mt-1">↗ +23.1%</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main traffic chart - spans 2 columns */}
        <TrafficChart />
        
        {/* Progress Chart */}
        <ProgressChart />
      </div>

      {/* Secondary Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <RevenueChart />
      </div>

      {/* Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-green-600">92</div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Overall Rating</div>
                <div className="text-xs text-green-600">↗ Excellent</div>
              </div>
            </div>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-blue-600">3.2%</div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Average CVR</div>
                <div className="text-xs text-blue-600">↗ +0.8%</div>
              </div>
            </div>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bounce Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-orange-600">24%</div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Session Bounce</div>
                <div className="text-xs text-green-600">↘ -2.1%</div>
              </div>
            </div>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '24%' }}></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsSection;