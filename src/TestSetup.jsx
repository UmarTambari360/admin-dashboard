// Test component to verify our setup is working
import { ThemeProvider } from './hooks/useTheme';
import { dashboardStats } from './data/mockData';
import { formatNumber } from './utils/cn';

function TestSetup() {
  return (
    <ThemeProvider>
      <div className="p-8 bg-white dark:bg-gray-900 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Setup Test - Dashboard Preview
        </h1>
        <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-blue-800 dark:text-blue-200">
            ✅ React + JSX working
          </p>
          <p className="text-blue-800 dark:text-blue-200">
            ✅ Tailwind + Dark mode working
          </p>
          <p className="text-blue-800 dark:text-blue-200">
            ✅ Mock data loaded: {formatNumber(dashboardStats.users.total)} users
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default TestSetup;