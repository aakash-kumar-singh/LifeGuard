export const HeroSVG = () => {
  return (
    <div className="relative w-full h-full animate-float">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Elements */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3730A3" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Decorative Background Circles */}
        <circle
          cx="250"
          cy="250"
          r="200"
          fill="url(#gradient1)"
          className="animate-pulse-slow"
        />
        <circle
          cx="250"
          cy="250"
          r="150"
          fill="url(#gradient1)"
          className="animate-pulse-slow"
          opacity="0.5"
        />

        {/* Main Shield Shape */}
        <path
          d="M250,100 
               L350,150 
               V250 
               C350,350 300,400 250,420 
               C200,400 150,350 150,250 
               V150 Z"
          fill="url(#gradient2)"
          stroke="#fff"
          strokeWidth="2"
          filter="url(#glow)"
          className="animate-shield"
        />

        {/* Checkmark Inside Shield */}
        <path
          d="M200,250 L235,285 L300,220"
          fill="none"
          stroke="#fff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw"
        />

        {/* Decorative Dots */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={250 + 120 * Math.cos((i * Math.PI) / 4)}
            cy={250 + 120 * Math.sin((i * Math.PI) / 4)}
            r="4"
            fill="#fff"
            className="animate-ping-slow"
          />
        ))}

        {/* Small Floating Shields */}
        {[...Array(3)].map((_, i) => (
          <g key={i} className={`animate-float-${i + 1}`}>
            <path
              d={`M${150 + i * 100},${150 + i * 30} 
                    l30,10 v30 
                    c0,30 -15,45 -30,50 
                    c-15,-5 -30,-20 -30,-50 
                    v-30 Z`}
              fill="white"
              opacity="0.2"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};
