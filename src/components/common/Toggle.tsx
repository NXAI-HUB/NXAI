interface ToggleProps {
  id?: string;
  label?: string;
  checked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
  className?: string;
  description?: string;
}

export default function Toggle({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  description,
}: ToggleProps) {
  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <button
          type="button"
          id={id}
          role="switch"
          aria-checked={checked}
          className={`${
            checked ? 'bg-primary' : 'bg-gray-700'
          } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/30 ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={disabled}
          onClick={(e) => onChange && onChange(e)}
        >
          <span
            className={`${
              checked ? 'translate-x-5' : 'translate-x-0'
            } pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
          >
            <span
              className={`${
                checked ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in'
              } absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
              aria-hidden="true"
            >
              <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                <path
                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              className={`${
                checked ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out'
              } absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
              aria-hidden="true"
            >
              <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 12 12">
                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
              </svg>
            </span>
          </span>
        </button>
      </div>
      {(label || description) && (
        <div className="ml-3 text-sm">
          {label && (
            <label htmlFor={id} className="font-medium text-white cursor-pointer">
              {label}
            </label>
          )}
          {description && <p className="text-gray-400">{description}</p>}
        </div>
      )}
    </div>
  );
} 