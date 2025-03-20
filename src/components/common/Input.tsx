interface InputProps {
  id?: string;
  name?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  startIcon?: any;
  endIcon?: any;
}

export default function Input({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  className = '',
  label,
  error,
  helperText,
  disabled = false,
  readOnly = false,
  required = false,
  startIcon,
  endIcon,
}: InputProps) {
  // Base classes
  const baseClasses = 'w-full rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors';
  
  // Error class
  const errorClass = error ? 'border-red-500' : '';
  
  // Disabled class
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Icon padding
  const iconPaddingStart = startIcon ? 'pl-10' : 'pl-4';
  const iconPaddingEnd = endIcon ? 'pr-10' : 'pr-4';
  
  // Combine all classes
  const inputClasses = `${baseClasses} ${errorClass} ${disabledClass} ${iconPaddingStart} ${iconPaddingEnd} py-3 ${className}`;
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        {startIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {startIcon}
          </div>
        )}
        
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={inputClasses}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
        />
        
        {endIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {endIcon}
          </div>
        )}
      </div>
      
      {error && (
        <div className="mt-1 text-sm text-red-500">{error}</div>
      )}
      
      {helperText && !error && (
        <div className="mt-1 text-sm text-gray-500">{helperText}</div>
      )}
    </div>
  );
} 