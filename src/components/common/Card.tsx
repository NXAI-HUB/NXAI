interface CardProps {
  children: any;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  onClick,
}: CardProps) {
  // Base classes
  const baseClasses = 'rounded-lg bg-background-dark text-white overflow-hidden';
  
  // Variant classes
  const variantClasses = {
    default: 'border border-gray-800',
    elevated: 'border border-gray-800 shadow-xl',
    bordered: 'border-2 border-primary/20',
  };
  
  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
  };
  
  // Interactive class
  const interactiveClass = onClick ? 'cursor-pointer hover:bg-background-light transition-colors' : '';
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${interactiveClass} ${className}`;
  
  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
} 