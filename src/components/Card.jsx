import { cn } from '../utils/cn';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 transition-colors w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={cn("mb-3 sm:mb-4", className)}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={cn("text-base sm:text-lg font-semibold text-gray-900 dark:text-white", className)}>
      {children}
    </h3>
  );
};

const CardContent = ({ children, className = '' }) => {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent };