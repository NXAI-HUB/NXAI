interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12 w-12" }: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className={className}>
      {/* Define gradients and effects */}
      <defs>
        {/* Background gradient */}
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F0B30" />
          <stop offset="100%" stopColor="#1D0F45" />
        </linearGradient>
        
        {/* Main top gradient */}
        <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C2FF" />
          <stop offset="100%" stopColor="#9B4BFF" />
        </linearGradient>
        
        {/* Main side gradient */}
        <linearGradient id="sideGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4B9B" />
          <stop offset="100%" stopColor="#FF007A" />
        </linearGradient>
        
        {/* Inner ring gradient */}
        <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF007A" />
          <stop offset="100%" stopColor="#9B4BFF" />
        </linearGradient>
        
        {/* Glow effect */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Background */}
      <rect width="500" height="500" fill="url(#bgGradient)" />
      
      {/* 3D ring */}
      <g transform="translate(250, 250) rotate(-25)">
        {/* Glow effect base */}
        <ellipse cx="0" cy="0" rx="150" ry="70" fill="#FF007A" opacity="0.2" filter="url(#glow)" />
        
        {/* Side cylinder */}
        <g>
          <path d="M-150,0 A150,70 0 0,0 150,0 A150,70 0 0,0 -150,0 L-150,60 A150,70 0 0,0 150,60 A150,70 0 0,0 -150,60 Z" fill="url(#sideGradient)" />
        </g>
        
        {/* Top ellipse */}
        <ellipse cx="0" cy="0" rx="150" ry="70" fill="url(#topGradient)" />
        
        {/* Inner ellipse cutout */}
        <ellipse cx="0" cy="0" rx="80" ry="35" fill="white" />
        
        {/* Innermost ellipse */}
        <ellipse cx="0" cy="0" rx="40" ry="18" fill="url(#innerGradient)" />
      </g>
    </svg>
  );
} 