interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  id?: string;
  name?: string;
  options: Option[];
  value?: string;
  onChange?: (e: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
}

export default function Select({
  id,
  name,
  options,
  value,
  onChange,
  onFocus,
  onBlur,
  className = '',
  label,
  error,
  helperText,
  disabled = false,
  required = false,
  placeholder,
}: SelectProps) {
  // Base classes
  const baseClasses = 'w-full rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors';
  
  // Error class
  const errorClass = error ? 'border-red-500' : '';
  
  // Disabled class
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Combine all classes
  const selectClasses = `${baseClasses} ${errorClass} ${disabledClass} py-3 pl-4 pr-10 appearance-none ${className}`;
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={selectClasses}
          disabled={disabled}
          required={required}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
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