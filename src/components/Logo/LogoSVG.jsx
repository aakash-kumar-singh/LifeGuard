export const LogoSVG = ({ variant = "default", className = "w-12 h-12" }) => {
  const logos = {
    default: (
      <svg
        viewBox="0 0 100 100"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3730A3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main Shield */}
        <path
          d="M50,10 
               L85,25 
               V45 
               C85,65 
               70,85 
               50,90 
               C30,85 
               15,65 
               15,45 
               V25 Z"
          fill="url(#logoGradient)"
          className="animate-pulse-slow"
          filter="url(#glow)"
        />

        {/* Inner Shield Design */}
        <path
          d="M50,20 
               L75,32 
               V45 
               C75,60 
               65,75 
               50,80 
               C35,75 
               25,60 
               25,45 
               V32 Z"
          fill="white"
          fillOpacity="0.2"
          className="animate-pulse-slow"
        />

        {/* Life Line */}
        <path
          d="M35,50 
               H45 
               L48,35 
               L52,65 
               L55,45 
               H65"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="animate-draw"
        />

        {/* Decorative Dots */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={50 + 30 * Math.cos((i * Math.PI) / 4)}
            cy={50 + 30 * Math.sin((i * Math.PI) / 4)}
            r="2"
            fill="white"
            className="animate-ping-slow"
          />
        ))}
      </svg>
    ),

    minimal: (
      <svg
        viewBox="0 0 100 100"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50,10 L85,25 V45 C85,65 70,85 50,90 C30,85 15,65 15,45 V25 Z"
          fill="currentColor"
          className="animate-pulse-slow"
        />
        <path
          d="M35,50 H45 L48,35 L52,65 L55,45 H65"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),

    animated: (
      <svg
        viewBox="0 0 100 100"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="animatedGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#60A5FA">
              <animate
                attributeName="stop-color"
                values="#60A5FA; #3730A3; #60A5FA"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#3730A3">
              <animate
                attributeName="stop-color"
                values="#3730A3; #60A5FA; #3730A3"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        {/* Animated Shield */}
        <path
          d="M50,10 L85,25 V45 C85,65 70,85 50,90 C30,85 15,65 15,45 V25 Z"
          fill="url(#animatedGradient)"
        >
          <animate
            attributeName="d"
            dur="2s"
            repeatCount="indefinite"
            values="
                M50,10 L85,25 V45 C85,65 70,85 50,90 C30,85 15,65 15,45 V25 Z;
                M50,15 L80,28 V45 C80,62 67,80 50,85 C33,80 20,62 20,45 V28 Z;
                M50,10 L85,25 V45 C85,65 70,85 50,90 C30,85 15,65 15,45 V25 Z"
          />
        </path>

        {/* Animated Life Line */}
        <path
          d="M35,50 H45 L48,35 L52,65 L55,45 H65"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="2s"
            fill="freeze"
          />
        </path>
      </svg>
    ),

    text: (
      <svg
        viewBox="0 0 200 100"
        className={`${className} w-auto`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3730A3" />
          </linearGradient>
        </defs>

        {/* Shield Icon */}
        <g transform="translate(10, 20) scale(0.6)">
          <path
            d="M50,10 L85,25 V45 C85,65 70,85 50,90 C30,85 15,65 15,45 V25 Z"
            fill="url(#textGradient)"
          />
          <path
            d="M35,50 H45 L48,35 L52,65 L55,45 H65"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Text */}
        <text
          x="80"
          y="55"
          fontFamily="Arial"
          fontSize="24"
          fontWeight="bold"
          fill="currentColor"
        >
          LifeGuard
        </text>
      </svg>
    ),
  };

  return logos[variant] || logos.default;
};
