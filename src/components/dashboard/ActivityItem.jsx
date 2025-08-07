import { 
  CreditCard, 
  UserPlus, 
  RefreshCw, 
  AlertTriangle, 
  CheckCircle,
  XCircle,
  Info,
  DollarSign
} from 'lucide-react';

const ActivityItem = ({ activity }) => {
  const getIcon = (type, status) => {
    const iconProps = { size: 20 };
    
    switch (type) {
      case 'payment':
        return <CreditCard {...iconProps} />;
      case 'subscription':
        return <RefreshCw {...iconProps} />;
      case 'user':
        return <UserPlus {...iconProps} />;
      case 'refund':
        return <DollarSign {...iconProps} />;
      default:
        return <Info {...iconProps} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-600 border-green-200';
      case 'error':
        return 'bg-red-100 text-red-600 border-red-200';
      case 'warning':
        return 'bg-orange-100 text-orange-600 border-orange-200';
      case 'info':
        return 'bg-blue-100 text-blue-600 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    const iconProps = { size: 14 };
    
    switch (status) {
      case 'success':
        return <CheckCircle {...iconProps} className="text-green-500" />;
      case 'error':
        return <XCircle {...iconProps} className="text-red-500" />;
      case 'warning':
        return <AlertTriangle {...iconProps} className="text-orange-500" />;
      case 'info':
        return <Info {...iconProps} className="text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-start space-x-4 p-4 transition-colors rounded-lg">
      {/* Icon */}
      <div className={`
        flex items-center justify-center w-10 h-10 rounded-full border-2
        ${getStatusColor(activity.status)}
      `}>
        {getIcon(activity.type, activity.status)}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
              {activity.user}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-200 mt-1">
              {activity.action}
            </p>
            <div className="flex items-center mt-2 space-x-2">
              {getStatusIcon(activity.status)}
              <span className="text-xs text-gray-500 dark:text-gray-200">
                {activity.time}
              </span>
            </div>
          </div>
          
          {/* Amount */}
          <div className="text-right ml-4">
            <span className={`
              text-sm font-medium
              ${activity.amount.startsWith('-') 
                ? 'text-red-500' 
                : activity.amount === '$0.00' 
                  ? 'text-gray-400 dark:text-gray-200' 
                  : 'text-green-500'
              }
            `}>
              {activity.amount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;