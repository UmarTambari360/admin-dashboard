import { Card } from "./Card";
import { formatNumber, getChangeColor, getTrendIcon } from "../utils/cn";

const StatCard = ({ title, value, change, trend, color = "blue", icon }) => {
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    cyan: "bg-cyan-500",
  };

  return (
    <Card className="relative overflow-hidden w-[90%]">
      <div
        className={`absolute inset-0 ${colorClasses[color]} opacity-5 `}
      ></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium tracking-wide text-gray-600 uppercase dark:text-gray-100">
            {title}
          </h3>
          {change !== undefined && (
            <div
              className={`flex items-center text-sm font-medium ${getChangeColor(
                change
              )}`}
            >
              <span className="mr-1">{getTrendIcon(trend)}</span>
              {Math.abs(change)}%
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {icon && (
              <div className={`p-2 rounded-lg ${colorClasses[color]} mr-3`}>
                <div className="text-lg text-white">{icon}</div>
              </div>
            )}
            <div
              className={`text-2xl font-bold ${colorClasses[color].replace(
                "bg-",
                "text-"
              )}`}
            >
              {typeof value === "number" ? formatNumber(value) : value}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
