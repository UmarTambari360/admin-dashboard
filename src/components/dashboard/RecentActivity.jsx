import { useState } from "react";
import { Filter, Search, MoreHorizontal } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../Card";
import Button from "../Button";
import ActivityItem from "./ActivityItem";
import { recentActivity } from "../../data/mockData";

const RecentActivity = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredActivity = recentActivity.filter((activity) => {
    const matchesFilter = filter === "all" || activity.type === filter;
    const matchesSearch =
      activity.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.action.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filterOptions = [
    { value: "all", label: "All Activity", count: recentActivity.length + 1},
    {
      value: "payment",
      label: "Payments",
      count: recentActivity.filter((a) => a.type === "payment").length,
    },
    {
      value: "subscription",
      label: "Subscriptions",
      count: recentActivity.filter((a) => a.type === "subscription").length,
    },
    {
      value: "user",
      label: "Users",
      count: recentActivity.filter((a) => a.type === "user").length,
    },
    {
      value: "refund",
      label: "Refunds",
      count: recentActivity.filter((a) => a.type === "refund").length,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between dark:text-gray-100">
          <div>
            <CardTitle>Recent Activity</CardTitle>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
              Latest user actions and transactions
            </p>
          </div>
          <Button variant="outline" size="sm">
            <MoreHorizontal size={16} />
          </Button>
        </div>

        <div className="flex flex-col gap-4 mt-4 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
            />
            <input
              type="text"
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 pr-8 text-sm bg-gray-100 border border-gray-300 rounded-lg appearance-none dark:text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.count})
                </option>
              ))}
            </select>
            <Filter
              size={16}
              className="absolute text-gray-200 transform -translate-y-1/2 pointer-events-none right-2 top-1/2"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="divide-y divide-gray-100 ">
          {filteredActivity.length > 0 ? (
            filteredActivity.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))
          ) : (
            <div className="p-8 text-center">
              <div className="mb-2 text-gray-200 dark:text-gray-100 ">
                <Search size={48} className="mx-auto dark:text-gray-100 " />
              </div>
              <p className="text-gray-200 dark:text-gray-100 ">
                No activities found
              </p>
              <p className="text-sm text-gray-400">Try a valid name</p>
            </div>
          )}
        </div>

        {filteredActivity.length > 0 && (
          <div className="p-4 border-t border-gray-100">
            <Button variant="outline" className="w-full">
              Load More Activities
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
