import { TrendingUp, TrendingDown, DollarSign, CreditCard } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../Card";
import { formatCurrency } from "../../utils/cn";

const TransactionSummary = () => {
  const transactionStats = [
    {
      title: "Total Revenue",
      amount: 45280,
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Transactions",
      amount: 1283,
      change: "+8.2%",
      trend: "up",
      icon: CreditCard,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Refunds",
      amount: 2140,
      change: "-3.1%",
      trend: "down",
      icon: TrendingDown,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      title: "Net Income",
      amount: 43140,
      change: "+15.8%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  const recentTransactions = [
    {
      id: "TXN-001",
      customer: "Acme Corp",
      amount: 2500,
      status: "completed",
      date: "2024-08-06",
      method: "Credit Card",
    },
    {
      id: "TXN-002",
      customer: "Tech Solutions",
      amount: 1800,
      status: "pending",
      date: "2024-08-06",
      method: "Bank Transfer",
    },
    {
      id: "TXN-003",
      customer: "Digital Agency",
      amount: 3200,
      status: "completed",
      date: "2024-08-05",
      method: "PayPal",
    },
    {
      id: "TXN-004",
      customer: "Startup Inc",
      amount: 950,
      status: "failed",
      date: "2024-08-05",
      method: "Credit Card",
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      completed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      failed: "bg-red-100 text-red-800",
    };
    return badges[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {transactionStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index}>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="mb-1 text-sm text-gray-500 dark:text-gray-100">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {stat.title.includes("Revenue") ||
                      stat.title.includes("Income") ||
                      stat.title.includes("Refunds")
                        ? formatCurrency(stat.amount)
                        : stat.amount.toLocaleString()}
                    </p>
                    <div
                      className={`flex items-center mt-2 text-sm ${stat.color}`}
                    >
                      {stat.trend === "up" ? (
                        <TrendingUp size={16} />
                      ) : (
                        <TrendingDown size={16} />
                      )}
                      <span className="ml-1">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <IconComponent size={24} className={stat.color} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <p className="text-sm text-gray-700 dark:text-gray-100">
            Latest payment transactions
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 font-medium text-left text-gray-900 dark:text-gray-100">
                    Transaction ID
                  </th>
                  <th className="px-4 py-3 font-medium text-left text-gray-900 dark:text-gray-100">
                    Customer
                  </th>
                  <th className="px-4 py-3 font-medium text-left text-gray-900 dark:text-gray-100">
                    Amount
                  </th>
                  <th className="px-4 py-3 font-medium text-left text-gray-900 dark:text-gray-100">
                    Method
                  </th>
                  <th className="px-4 py-3 font-medium text-left text-gray-900 dark:text-gray-100">
                    Status
                  </th>
                  <th className="px-4 py-3 font-medium text-left text-gray-900 dark:text-gray-100">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="text-gray-900 border-b border-gray-100 hover:bg-gray-50 dark:text-gray-100 hover:text-gray-800"
                  >
                    <td className="px-4 py-3">
                      <span className="font-mono text-sm text-green-500">
                        {transaction.id}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium tex">
                        {transaction.customer}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold">
                        {formatCurrency(transaction.amount)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-200">
                      {transaction.method}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`
                        inline-flex px-2 py-1 text-xs font-medium rounded-full capitalize
                        ${getStatusBadge(transaction.status)}
                      `}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-200">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Showing 4 of 127 transactions
            </p>
            <div className="flex space-x-2">
              <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-black dark:text-gray-100">
                Previous
              </button>
              <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-black dark:text-gray-100">
                Next
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionSummary;
