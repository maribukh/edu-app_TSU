import React from "react";

interface SkillTrajectoryProps {
  technologies: string[];
  level: "Beginner" | "Advanced" | "Workshop";
}

const SkillTrajectory: React.FC<SkillTrajectoryProps> = ({
  technologies,
  level,
}) => {
  const paths = {
    Beginner: "M 50 100 C 250 150, 550 50, 750 100",
    Advanced: "M 50 100 C 150 20, 350 180, 550 20, 750 100",
    Workshop: "M 50 100 C 400 20, 400 180, 750 100",
  };

  const selectedPath = paths[level] || paths.Beginner;

  const getPointAtLength = (percent: number) => {
    if (level === "Advanced") {
      const x = 50 + percent * 700;
      const y = 100 + 80 * Math.sin(percent * Math.PI * 2);
      return { x, y };
    }
    if (level === "Workshop") {
      const x = 50 + percent * 700;
      const y =
        100 + 160 * Math.sin(percent * Math.PI) * (percent < 0.5 ? -0.5 : 0.5);
      return { x, y };
    }

    const x = 50 + percent * 700;
    const y = 100 + 80 * Math.sin(percent * Math.PI) * (percent < 0.5 ? 1 : -1);
    return { x, y };
  };

  return (
    <div className="relative w-full aspect-[3/1] bg-grid-pattern bg-center p-4">
      <style>
        {`
          .skill-path {
            stroke-dasharray: 2000;
            stroke-dashoffset: 2000;
            animation: draw-path 2.5s ease-out forwards;
          }
          @keyframes draw-path {
            to {
              stroke-dashoffset: 0;
            }
          }
          .node {
            opacity: 0;
            animation: fade-in 0.5s ease-out forwards;
          }
          .node-group:hover .node-circle {
            stroke: #FF00FF;
            filter: drop-shadow(0 0 8px #FF00FF);
          }
          .node-group:hover .node-tooltip {
            opacity: 1;
            transform: translateY(-5px);
          }
        `}
      </style>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={selectedPath}
          stroke="url(#path-gradient)"
          strokeWidth="3"
          fill="none"
          className="skill-path"
          filter="url(#neon-glow)"
        />
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#FF00FF" />
          </linearGradient>
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="node" style={{ animationDelay: "0.2s" }}>
          <circle
            cx="50"
            cy="100"
            r="10"
            fill="#0A0A0F"
            stroke="#00F0FF"
            strokeWidth="2"
            filter="url(#neon-glow)"
          />
          <text
            x="50"
            y="130"
            fill="#E0E0E0"
            fontSize="14"
            textAnchor="middle"
            fontFamily="Orbitron"
          >
            Fundamentals
          </text>
        </g>

        {technologies.map((tech, index) => {
          const progress = (index + 1) / (technologies.length + 1);
          const { x, y } = getPointAtLength(progress);

          return (
            <g
              key={tech}
              className="node node-group"
              style={{ animationDelay: `${0.8 + index * 0.2}s` }}
            >
              <circle
                cx={x}
                cy={y}
                r="7"
                fill="#0A0A0F"
                stroke="#00F0FF"
                strokeWidth="2"
                className="node-circle transition-all duration-300"
              />
              <text
                x={x}
                y={y - 20}
                fill="#FF00FF"
                fontSize="12"
                textAnchor="middle"
                fontFamily="Orbitron"
                className="node-tooltip opacity-0 transition-all duration-300"
              >
                {tech}
              </text>
            </g>
          );
        })}

        <g
          className="node"
          style={{ animationDelay: `${0.8 + technologies.length * 0.2}s` }}
        >
          <circle
            cx="750"
            cy="100"
            r="12"
            fill="#0A0A0F"
            stroke="#FF00FF"
            strokeWidth="3"
            filter="url(#neon-glow)"
          />
          <path d="M750 95 L755 100 L750 105 L745 100 Z" fill="#FF00FF" />
          <text
            x="750"
            y="130"
            fill="#E0E0E0"
            fontSize="14"
            textAnchor="middle"
            fontFamily="Orbitron"
          >
            Mastery
          </text>
        </g>
      </svg>
    </div>
  );
};

export default SkillTrajectory;
