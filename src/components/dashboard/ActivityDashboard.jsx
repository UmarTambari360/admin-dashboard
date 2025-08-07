import RecentActivity from "./RecentActivity";
import TransactionSummary from "./TransactionSummary";

const ActivityDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
          Activity & Transactions
        </h2>
        <p className="text-gray-500 dark:text-gray-200">
          Monitor user activities and financial transactions
        </p>
      </div>

      <TransactionSummary />

      <RecentActivity />
    </div>
  );
};

export default ActivityDashboard;
