import { ThemeProvider } from './hooks/useTheme';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <ThemeProvider>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default App;