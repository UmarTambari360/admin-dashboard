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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Analytics Overview</h2>
          <p className="text-gray-400">Detailed insights into your business performance</p>
        </div>
        <div className="flex items-center space-x-2 dark:text-gray-100">
          <select className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="text-white bg-gradient-to-r from-blue-500 to-blue-600">
          <CardContent>
            <div className="text-center">
              <div className="mb-2 text-sm opacity-90">New Clients</div>
              <div className="text-2xl font-bold">{formatNumber(salesMetrics.newClients)}</div>
              <div className="mt-1 text-xs opacity-75">↗ +12.5%</div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-white bg-gradient-to-r from-red-500 to-red-600">
          <CardContent>
            <div className="text-center">
              <div className="mb-2 text-sm opacity-90">Recurring Clients</div>
              <div className="text-2xl font-bold">{formatNumber(salesMetrics.recurringClients)}</div>
              <div className="mt-1 text-xs opacity-75">↗ +8.2%</div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-white bg-gradient-to-r from-orange-500 to-orange-600">
          <CardContent>
            <div className="text-center">
              <div className="mb-2 text-sm opacity-90">Pageviews</div>
              <div className="text-2xl font-bold">{formatNumber(salesMetrics.pageviews)}</div>
              <div className="mt-1 text-xs opacity-75">↗ +15.7%</div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-white bg-gradient-to-r from-green-500 to-green-600">
          <CardContent>
            <div className="text-center">
              <div className="mb-2 text-sm opacity-90">Organic Traffic</div>
              <div className="text-2xl font-bold">{formatNumber(salesMetrics.organic)}</div>
              <div className="mt-1 text-xs opacity-75">↗ +23.1%</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <TrafficChart />
        
        <ProgressChart />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SalesChart />
        <RevenueChart />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Performance Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-green-600">92</div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Overall Rating</div>
                <div className="text-xs text-green-600">↗ Excellent</div>
              </div>
            </div>
            <div className="h-2 mt-4 bg-gray-200 rounded-full">
              <div className="h-2 bg-green-500 rounded-full" style={{ width: '92%' }}></div>
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
                <div className="text-sm text-gray-400">Average CVR</div>
                <div className="text-xs text-blue-600">↗ +0.8%</div>
              </div>
            </div>
            <div className="h-2 mt-4 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-500 rounded-full" style={{ width: '32%' }}></div>
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
                <div className="text-sm text-gray-400">Session Bounce</div>
                <div className="text-xs text-green-600">↘ -2.1%</div>
              </div>
            </div>
            <div className="h-2 mt-4 bg-gray-200 rounded-full">
              <div className="h-2 bg-orange-500 rounded-full" style={{ width: '24%' }}></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsSection;