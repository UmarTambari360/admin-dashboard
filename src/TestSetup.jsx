import { ThemeProvider } from './hooks/useTheme';
import { dashboardStats } from './data/mockData';
import { formatNumber } from './utils/cn';

function TestSetup() {
  return (
    <ThemeProvider>
      <div className="min-h-screen p-8 bg-white dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Setup Test - Dashboard Preview
        </h1>
        <div className="p-4 mt-4 bg-blue-100 rounded-lg dark:bg-blue-900/20">
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