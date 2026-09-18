/**
 * Abstract SVG stand-ins for each project card.
 * Swap any of these for a real screenshot with:
 *   <img className="proj__visual" src="/shot.png" alt="" />
 *
 * The viz-* classes drive the scroll-triggered reveal animation (see
 * global.css) — they're purely cosmetic and safe to remove if you swap
 * in a real screenshot instead.
 */

function RiskVisual() {
  return (
    <svg className="proj__visual" viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="190" fill="#17181B" />
      <circle cx="80" cy="95" r="46" fill="none" stroke="rgba(244,244,241,0.14)" strokeWidth="8" />
      <circle
        className="viz-arc"
        cx="80"
        cy="95"
        r="46"
        fill="none"
        stroke="#D9FF3E"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="289"
        transform="rotate(-90 80 95)"
      />
      <text className="viz-value" x="80" y="101" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="22" fill="#F4F4F1">
        72
      </text>
      <text x="80" y="150" textAnchor="middle" fontSize="12" fill="#9A9DA4">
        risk score
      </text>
      <rect x="170" y="46" width="180" height="12" rx="6" fill="rgba(244,244,241,0.12)" />
      <rect className="viz-bar-h" x="170" y="46" width="120" height="12" rx="6" fill="#D9FF3E" />
      <rect x="170" y="74" width="180" height="12" rx="6" fill="rgba(244,244,241,0.12)" />
      <rect className="viz-bar-h" x="170" y="74" width="70" height="12" rx="6" fill="#7C8B99" />
      <rect x="170" y="102" width="180" height="12" rx="6" fill="rgba(244,244,241,0.12)" />
      <rect className="viz-bar-h" x="170" y="102" width="145" height="12" rx="6" fill="#D9FF3E" />
      <text x="170" y="138" fontSize="12" fill="#686B71">
        flagged transactions
      </text>
    </svg>
  );
}

function ChurnVisual() {
  return (
    <svg className="proj__visual" viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="190" fill="#17181B" />
      <line x1="30" y1="30" x2="30" y2="150" stroke="rgba(244,244,241,0.14)" strokeWidth="1" />
      <line x1="30" y1="150" x2="370" y2="150" stroke="rgba(244,244,241,0.14)" strokeWidth="1" />
      <path
        className="viz-line"
        d="M30,55 L85,80 L140,72 L195,110 L250,98 L305,128 L360,140"
        fill="none"
        stroke="#7C8B99"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="viz-dot" cx="360" cy="140" r="5" fill="#7C8B99" />
      <text x="200" y="20" textAnchor="middle" fontSize="12" fill="#9A9DA4">
        predicted churn — trending down
      </text>
    </svg>
  );
}

function PhishVisual() {
  const rows = [
    { y: 20, cy: 34, dot: '#7C8B99', label: 'inbound email — clean' },
    { y: 58, cy: 72, dot: '#D9FF3E', label: 'link scan — flagged' },
    { y: 96, cy: 110, dot: '#7C8B99', label: 'sms text — clean' },
    { y: 134, cy: 148, dot: '#D9FF3E', label: 'url pattern — flagged' },
  ];

  return (
    <svg className="proj__visual" viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="190" fill="#17181B" />
      {rows.map((row) => (
        <g className="viz-row" key={row.y}>
          <rect x="24" y={row.y} width="352" height="28" rx="6" fill="rgba(244,244,241,0.10)" />
          <circle cx="42" cy={row.cy} r="4.5" fill={row.dot} />
          <text x="56" y={row.cy + 4} fontSize="11.5" fill="#F4F4F1">
            {row.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function JobSimVisual() {
  return (
    <svg className="proj__visual" viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="190" fill="#17181B" />
      <line x1="30" y1="20" x2="30" y2="150" stroke="rgba(244,244,241,0.14)" strokeWidth="1" />
      <line x1="30" y1="150" x2="370" y2="150" stroke="rgba(244,244,241,0.14)" strokeWidth="1" />
      <rect className="viz-bar-v" x="90" y="20" width="70" height="130" fill="#7C8B99" />
      <text className="viz-value" x="125" y="14" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="13" fill="#F4F4F1">
        5,150
      </text>
      <text x="125" y="168" textAnchor="middle" fontSize="11" fill="#9A9DA4">
        raw rows
      </text>
      <rect className="viz-bar-v" x="230" y="28" width="70" height="122" fill="#D9FF3E" />
      <text className="viz-value" x="265" y="22" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="13" fill="#F4F4F1">
        4,820
      </text>
      <text x="265" y="168" textAnchor="middle" fontSize="11" fill="#9A9DA4">
        analysis-ready
      </text>
    </svg>
  );
}

const VISUALS = {
  risk: RiskVisual,
  churn: ChurnVisual,
  phish: PhishVisual,
  jobsim: JobSimVisual,
};

export default function ProjectVisual({ type }) {
  const Visual = VISUALS[type];
  return Visual ? <Visual /> : null;
}
