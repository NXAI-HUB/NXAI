interface BadgeProps {
  children: any;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'full';
  className?: string;
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  rounded = 'full',
  className = '',
}: BadgeProps) {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary/20 text-primary',
    secondary: 'bg-gray-700 text-gray-200',
    success: 'bg-green-500/20 text-green-500',
    warning: 'bg-yellow-500/20 text-yellow-500',
    danger: 'bg-red-500/20 text-red-500',
    info: 'bg-blue-500/20 text-blue-500',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  };
  
  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-md',
    full: 'rounded-full',
  };
  
  // Combine all classes
  const badgeClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${className}`;
  
  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
} 