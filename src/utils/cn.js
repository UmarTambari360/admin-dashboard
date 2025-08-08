export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num);
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

export function getChangeColor(change) {
  if (change > 0) return 'text-green-500';
  if (change < 0) return 'text-red-500';
  return 'text-gray-500';
}

export function getTrendIcon(trend) {
  return trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→';
}