// Medieval themed SVG illustrations for each chapter

export const illustrations = {
  intro: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#1a1a2e"/>
        <stop offset="100%" style="stop-color:#16213e"/>
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#f4d03f"/>
        <stop offset="50%" style="stop-color:#c9a227"/>
        <stop offset="100%" style="stop-color:#f4d03f"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#skyGrad)"/>
    <!-- Sun/AI orb -->
    <circle cx="200" cy="100" r="50" fill="url(#goldGrad)" opacity="0.9">
      <animate attributeName="r" values="50;55;50" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="100" r="60" fill="none" stroke="#f4d03f" stroke-width="2" opacity="0.5">
      <animate attributeName="r" values="60;70;60" dur="3s" repeatCount="indefinite"/>
    </circle>
    <!-- Binary rays -->
    <g fill="#f4d03f" opacity="0.6" font-family="monospace" font-size="8">
      <text x="200" y="170" text-anchor="middle">01001001 01000001</text>
      <text x="200" y="185" text-anchor="middle">10110100 11001010</text>
    </g>
    <!-- Mountains/landscape -->
    <polygon points="0,300 80,200 160,250 240,180 320,220 400,300" fill="#2d3436"/>
    <polygon points="0,300 100,220 200,270 300,200 400,300" fill="#1e272e"/>
    <!-- Castle silhouette -->
    <rect x="170" y="210" width="20" height="50" fill="#1e272e"/>
    <rect x="210" y="210" width="20" height="50" fill="#1e272e"/>
    <rect x="160" y="200" width="40" height="15" fill="#1e272e"/>
    <rect x="200" y="200" width="40" height="15" fill="#1e272e"/>
    <polygon points="180,200 170,180 190,180" fill="#1e272e"/>
    <polygon points="220,200 210,175 230,175" fill="#1e272e"/>
    <!-- Human figure -->
    <circle cx="200" cy="260" r="10" fill="#dcdde1"/>
    <line x1="200" y1="270" x2="200" y2="295" stroke="#dcdde1" stroke-width="3"/>
    <line x1="185" y1="280" x2="215" y2="280" stroke="#dcdde1" stroke-width="3"/>
  </svg>`,

  audience: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="parchment" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#d4a574"/>
        <stop offset="100%" style="stop-color:#c9956c"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="#2d1810"/>
    <!-- Bookshelf -->
    <rect x="20" y="40" width="360" height="220" fill="#4a2c17" stroke="#8b4513" stroke-width="3"/>
    <!-- Books on shelf 1 -->
    <rect x="30" y="50" width="25" height="60" fill="#8b0000"/>
    <rect x="60" y="45" width="20" height="65" fill="#191970"/>
    <rect x="85" y="50" width="30" height="60" fill="#006400"/>
    <rect x="120" y="48" width="22" height="62" fill="#8b4513"/>
    <rect x="147" y="52" width="28" height="58" fill="#4b0082"/>
    <rect x="180" y="45" width="18" height="65" fill="#b8860b"/>
    <rect x="203" y="50" width="32" height="60" fill="#2f4f4f"/>
    <rect x="240" y="48" width="24" height="62" fill="#800000"/>
    <rect x="269" y="50" width="26" height="60" fill="#556b2f"/>
    <rect x="300" y="45" width="20" height="65" fill="#483d8b"/>
    <rect x="325" y="52" width="28" height="58" fill="#8b0000"/>
    <!-- Shelf divider -->
    <rect x="20" y="115" width="360" height="8" fill="#654321"/>
    <!-- Books on shelf 2 -->
    <rect x="35" y="130" width="28" height="55" fill="#006400"/>
    <rect x="68" y="128" width="22" height="57" fill="#8b4513"/>
    <rect x="95" y="132" width="30" height="53" fill="#191970"/>
    <rect x="130" y="127" width="25" height="58" fill="#4b0082"/>
    <rect x="160" y="130" width="20" height="55" fill="#b8860b"/>
    <rect x="185" y="128" width="35" height="57" fill="#800000"/>
    <rect x="225" y="132" width="22" height="53" fill="#2f4f4f"/>
    <rect x="252" y="128" width="28" height="57" fill="#8b0000"/>
    <rect x="285" y="130" width="24" height="55" fill="#556b2f"/>
    <rect x="314" y="127" width="30" height="58" fill="#483d8b"/>
    <!-- Shelf divider 2 -->
    <rect x="20" y="190" width="360" height="8" fill="#654321"/>
    <!-- Scroll -->
    <ellipse cx="100" cy="230" rx="40" ry="20" fill="url(#parchment)"/>
    <rect x="60" y="210" width="80" height="40" fill="url(#parchment)"/>
    <ellipse cx="60" cy="230" rx="10" ry="20" fill="#c9956c"/>
    <ellipse cx="140" cy="230" rx="10" ry="20" fill="#d4a574"/>
    <!-- Quill -->
    <path d="M250,240 Q280,200 290,205 Q285,210 270,240 Z" fill="#f5f5dc"/>
    <line x1="270" y1="240" x2="255" y2="265" stroke="#4a2c17" stroke-width="2"/>
    <!-- Inkwell -->
    <ellipse cx="320" cy="250" rx="20" ry="8" fill="#1a1a2a"/>
    <rect x="300" y="235" width="40" height="15" fill="#2a2a3a"/>
    <ellipse cx="320" cy="235" rx="20" ry="8" fill="#1a1a2a"/>
  </svg>`,

  future: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="futureGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#0f0f23"/>
        <stop offset="100%" style="stop-color:#1a1a3e"/>
      </linearGradient>
      <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#9b59b6"/>
        <stop offset="50%" style="stop-color:#3498db"/>
        <stop offset="100%" style="stop-color:#1abc9c"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#futureGrad)"/>
    <!-- Stars -->
    <circle cx="50" cy="40" r="1.5" fill="#fff"/>
    <circle cx="150" cy="30" r="1" fill="#fff"/>
    <circle cx="280" cy="50" r="1.5" fill="#fff"/>
    <circle cx="350" cy="80" r="1" fill="#fff"/>
    <circle cx="80" cy="90" r="1" fill="#fff"/>
    <circle cx="320" cy="25" r="1.5" fill="#fff"/>
    <!-- Crystal ball/Orb -->
    <circle cx="200" cy="130" r="60" fill="url(#crystalGrad)" opacity="0.3"/>
    <circle cx="200" cy="130" r="55" fill="none" stroke="url(#crystalGrad)" stroke-width="2"/>
    <ellipse cx="185" cy="115" rx="15" ry="10" fill="#fff" opacity="0.3"/>
    <!-- Brain/AI pattern inside -->
    <path d="M175,120 Q180,100 200,105 Q220,100 225,120 Q230,140 210,150 Q190,150 175,140 Q165,130 175,120" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.6"/>
    <circle cx="185" cy="125" r="3" fill="#fff" opacity="0.6"/>
    <circle cx="215" cy="125" r="3" fill="#fff" opacity="0.6"/>
    <circle cx="200" cy="140" r="3" fill="#fff" opacity="0.6"/>
    <line x1="185" y1="125" x2="200" y2="140" stroke="#fff" stroke-width="1" opacity="0.4"/>
    <line x1="215" y1="125" x2="200" y2="140" stroke="#fff" stroke-width="1" opacity="0.4"/>
    <!-- Stand -->
    <path d="M170,185 Q200,200 230,185" fill="none" stroke="#b8860b" stroke-width="4"/>
    <ellipse cx="200" cy="200" rx="50" ry="15" fill="#8b4513"/>
    <ellipse cx="200" cy="195" rx="45" ry="12" fill="#a0522d"/>
    <!-- Human figures in silhouette -->
    <g fill="#2c3e50">
      <circle cx="100" cy="250" r="12"/>
      <path d="M88,262 L88,300 M112,262 L112,300 M75,280 L125,280"/>
      <circle cx="300" cy="250" r="12"/>
      <path d="M288,262 L288,300 M312,262 L312,300 M275,280 L325,280"/>
    </g>
    <!-- Connecting lines to orb -->
    <line x1="100" y1="250" x2="155" y2="150" stroke="#3498db" stroke-width="1" stroke-dasharray="5,5" opacity="0.5"/>
    <line x1="300" y1="250" x2="245" y2="150" stroke="#9b59b6" stroke-width="1" stroke-dasharray="5,5" opacity="0.5"/>
  </svg>`,

  competencies: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#c0392b"/>
        <stop offset="100%" style="stop-color:#922b21"/>
      </linearGradient>
      <linearGradient id="goldMetal" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#f1c40f"/>
        <stop offset="50%" style="stop-color:#f39c12"/>
        <stop offset="100%" style="stop-color:#f1c40f"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="#1a1a2e"/>
    <!-- Three pillars -->
    <rect x="60" y="150" width="50" height="120" fill="#7f8c8d"/>
    <rect x="60" y="140" width="50" height="15" fill="#95a5a6"/>
    <rect x="55" y="130" width="60" height="15" fill="#bdc3c7"/>
    <rect x="175" y="120" width="50" height="150" fill="#7f8c8d"/>
    <rect x="175" y="110" width="50" height="15" fill="#95a5a6"/>
    <rect x="170" y="100" width="60" height="15" fill="#bdc3c7"/>
    <rect x="290" y="150" width="50" height="120" fill="#7f8c8d"/>
    <rect x="290" y="140" width="50" height="15" fill="#95a5a6"/>
    <rect x="285" y="130" width="60" height="15" fill="#bdc3c7"/>
    <!-- Shield on center pillar -->
    <path d="M200,50 L230,60 L230,100 Q230,130 200,145 Q170,130 170,100 L170,60 Z" fill="url(#shieldGrad)" stroke="url(#goldMetal)" stroke-width="3"/>
    <!-- Shield emblem - eye/awareness symbol -->
    <ellipse cx="200" cy="95" rx="20" ry="12" fill="#fff"/>
    <circle cx="200" cy="95" r="8" fill="#2c3e50"/>
    <circle cx="200" cy="95" r="4" fill="#000"/>
    <circle cx="202" cy="93" r="2" fill="#fff"/>
    <!-- Icons on side pillars -->
    <!-- Hourglass (temporal) -->
    <path d="M70,80 L100,80 L95,95 L85,105 L75,95 L70,80" fill="none" stroke="url(#goldMetal)" stroke-width="2"/>
    <path d="M70,130 L100,130 L95,115 L85,105 L75,115 L70,130" fill="none" stroke="url(#goldMetal)" stroke-width="2"/>
    <ellipse cx="85" cy="105" rx="8" ry="3" fill="#f1c40f" opacity="0.5"/>
    <!-- Brain (independence) -->
    <path d="M300,80 Q310,70 325,75 Q340,70 340,85 Q345,100 335,110 Q340,120 325,125 Q310,125 305,115 Q295,120 295,105 Q285,95 295,85 Q295,75 300,80" fill="none" stroke="url(#goldMetal)" stroke-width="2"/>
    <!-- Floor -->
    <rect x="0" y="270" width="400" height="30" fill="#2c3e50"/>
    <!-- Labels -->
    <text x="85" y="285" text-anchor="middle" fill="#ecf0f1" font-size="10">TIME</text>
    <text x="200" y="285" text-anchor="middle" fill="#ecf0f1" font-size="10">AWARENESS</text>
    <text x="315" y="285" text-anchor="middle" fill="#ecf0f1" font-size="10">INDEPENDENCE</text>
  </svg>`,

  resources: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#8b4513"/>
        <stop offset="100%" style="stop-color:#a0522d"/>
      </linearGradient>
      <linearGradient id="pages" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#f5deb3"/>
        <stop offset="100%" style="stop-color:#faebd7"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="#2d1810"/>
    <!-- Wooden desk -->
    <rect x="0" y="200" width="400" height="100" fill="#5c3d2e"/>
    <line x1="0" y1="205" x2="400" y2="205" stroke="#4a2c17" stroke-width="2"/>
    <!-- Large open book -->
    <path d="M50,100 Q200,80 200,100 L200,250 Q200,230 50,250 Z" fill="url(#pages)"/>
    <path d="M350,100 Q200,80 200,100 L200,250 Q200,230 350,250 Z" fill="url(#pages)"/>
    <!-- Book spine -->
    <rect x="195" y="95" width="10" height="160" fill="#654321"/>
    <!-- Text lines on left page -->
    <g stroke="#8b7355" stroke-width="1" opacity="0.6">
      <line x1="70" y1="120" x2="180" y2="120"/>
      <line x1="70" y1="135" x2="170" y2="135"/>
      <line x1="70" y1="150" x2="175" y2="150"/>
      <line x1="70" y1="165" x2="160" y2="165"/>
      <line x1="70" y1="180" x2="180" y2="180"/>
      <line x1="70" y1="195" x2="165" y2="195"/>
      <line x1="70" y1="210" x2="175" y2="210"/>
    </g>
    <!-- Text lines on right page -->
    <g stroke="#8b7355" stroke-width="1" opacity="0.6">
      <line x1="220" y1="120" x2="330" y2="120"/>
      <line x1="220" y1="135" x2="320" y2="135"/>
      <line x1="220" y1="150" x2="335" y2="150"/>
      <line x1="220" y1="165" x2="310" y2="165"/>
      <line x1="220" y1="180" x2="330" y2="180"/>
      <line x1="220" y1="195" x2="315" y2="195"/>
      <line x1="220" y1="210" x2="325" y2="210"/>
    </g>
    <!-- Illuminated letter -->
    <rect x="65" y="112" width="25" height="30" fill="#c0392b" stroke="#f1c40f" stroke-width="1"/>
    <text x="77" y="135" text-anchor="middle" fill="#f1c40f" font-size="20" font-weight="bold">A</text>
    <!-- Candle -->
    <rect x="360" y="140" width="15" height="60" fill="#f5f5dc"/>
    <ellipse cx="367" cy="140" rx="7" ry="3" fill="#f5f5dc"/>
    <path d="M367,130 Q370,120 367,110 Q364,120 367,130" fill="#f39c12">
      <animate attributeName="d" values="M367,130 Q370,120 367,110 Q364,120 367,130;M367,130 Q372,115 367,105 Q362,115 367,130;M367,130 Q370,120 367,110 Q364,120 367,130" dur="1s" repeatCount="indefinite"/>
    </path>
    <ellipse cx="367" cy="108" rx="4" ry="6" fill="#f1c40f" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="0.5s" repeatCount="indefinite"/>
    </ellipse>
    <!-- Candle holder -->
    <ellipse cx="367" cy="200" rx="18" ry="6" fill="#b8860b"/>
    <rect x="355" y="195" width="25" height="8" fill="#daa520"/>
  </svg>`,

  tools: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="steelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#bdc3c7"/>
        <stop offset="50%" style="stop-color:#7f8c8d"/>
        <stop offset="100%" style="stop-color:#bdc3c7"/>
      </linearGradient>
      <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#5d4e37"/>
        <stop offset="100%" style="stop-color:#8b7355"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="#1a1a2e"/>
    <!-- Forge glow -->
    <ellipse cx="200" cy="280" rx="150" ry="40" fill="#e74c3c" opacity="0.2"/>
    <!-- Anvil -->
    <path d="M150,250 L250,250 L270,270 L130,270 Z" fill="#2c3e50"/>
    <rect x="160" y="235" width="80" height="20" fill="#34495e"/>
    <rect x="170" y="225" width="60" height="15" fill="#4a6278"/>
    <!-- Sword on anvil -->
    <rect x="195" y="100" width="10" height="130" fill="url(#steelGrad)"/>
    <polygon points="200,60 185,100 215,100" fill="url(#steelGrad)"/>
    <!-- Sword guard -->
    <rect x="175" y="225" width="50" height="8" fill="#f1c40f"/>
    <!-- Hammer -->
    <rect x="280" y="180" width="40" height="25" fill="#7f8c8d"/>
    <rect x="295" y="200" width="10" height="50" fill="url(#handleGrad)"/>
    <!-- Tongs -->
    <path d="M80,180 L120,220 M80,220 L120,180" stroke="#5d4e37" stroke-width="8" stroke-linecap="round"/>
    <circle cx="100" cy="200" r="10" fill="#5d4e37"/>
    <!-- Sparks -->
    <g fill="#f39c12">
      <circle cx="180" cy="150" r="2">
        <animate attributeName="cy" values="150;100;150" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      </circle>
      <circle cx="220" cy="140" r="1.5">
        <animate attributeName="cy" values="140;80;140" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="200" cy="145" r="2">
        <animate attributeName="cy" values="145;90;145" dur="0.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite"/>
      </circle>
    </g>
    <!-- Glowing runes on sword -->
    <g fill="#3498db" opacity="0.8">
      <rect x="197" y="130" width="6" height="2"/>
      <rect x="197" y="145" width="6" height="2"/>
      <rect x="197" y="160" width="6" height="2"/>
      <rect x="197" y="175" width="6" height="2"/>
    </g>
  </svg>`,

  ethics: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="scaleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#f1c40f"/>
        <stop offset="50%" style="stop-color:#f39c12"/>
        <stop offset="100%" style="stop-color:#f1c40f"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="#16213e"/>
    <!-- Scale base -->
    <rect x="180" y="250" width="40" height="30" fill="#8b4513"/>
    <ellipse cx="200" cy="250" rx="30" ry="8" fill="#a0522d"/>
    <!-- Scale pole -->
    <rect x="195" y="100" width="10" height="155" fill="url(#scaleGrad)"/>
    <!-- Scale beam -->
    <rect x="100" y="95" width="200" height="10" fill="url(#scaleGrad)"/>
    <!-- Left pan (Ethics/Human) -->
    <line x1="120" y1="100" x2="120" y2="160" stroke="#daa520" stroke-width="2"/>
    <line x1="100" y1="100" x2="120" y2="160" stroke="#daa520" stroke-width="1"/>
    <line x1="140" y1="100" x2="120" y2="160" stroke="#daa520" stroke-width="1"/>
    <ellipse cx="120" cy="165" rx="35" ry="10" fill="#daa520"/>
    <!-- Human heart symbol -->
    <path d="M120,145 C110,135 100,145 120,160 C140,145 130,135 120,145" fill="#e74c3c"/>
    <!-- Right pan (AI) -->
    <line x1="280" y1="100" x2="280" y2="180" stroke="#daa520" stroke-width="2"/>
    <line x1="260" y1="100" x2="280" y2="180" stroke="#daa520" stroke-width="1"/>
    <line x1="300" y1="100" x2="280" y2="180" stroke="#daa520" stroke-width="1"/>
    <ellipse cx="280" cy="185" rx="35" ry="10" fill="#daa520"/>
    <!-- Circuit/AI symbol -->
    <rect x="265" y="155" width="30" height="20" fill="none" stroke="#3498db" stroke-width="2"/>
    <circle cx="270" cy="160" r="3" fill="#3498db"/>
    <circle cx="290" cy="160" r="3" fill="#3498db"/>
    <circle cx="280" cy="170" r="3" fill="#3498db"/>
    <line x1="270" y1="160" x2="280" y2="170" stroke="#3498db" stroke-width="1"/>
    <line x1="290" y1="160" x2="280" y2="170" stroke="#3498db" stroke-width="1"/>
    <!-- Crown at top -->
    <path d="M185,80 L190,60 L200,75 L210,60 L215,80 Z" fill="#f1c40f"/>
    <rect x="183" y="78" width="34" height="8" fill="#f39c12"/>
    <!-- Stars/decorations -->
    <polygon points="50,50 53,60 63,60 55,67 58,77 50,70 42,77 45,67 37,60 47,60" fill="#f1c40f" opacity="0.6"/>
    <polygon points="350,70 352,77 360,77 354,82 356,89 350,84 344,89 346,82 340,77 348,77" fill="#f1c40f" opacity="0.6"/>
  </svg>`,

  strategies: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#d4a574"/>
        <stop offset="100%" style="stop-color:#c9956c"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="#2d1810"/>
    <!-- Map background -->
    <rect x="30" y="30" width="340" height="240" fill="url(#mapGrad)" rx="5"/>
    <!-- Map edges (worn look) -->
    <path d="M30,30 Q35,35 30,40" stroke="#8b7355" fill="none"/>
    <path d="M370,30 Q365,35 370,40" stroke="#8b7355" fill="none"/>
    <!-- Compass rose -->
    <g transform="translate(320, 80)">
      <circle cx="0" cy="0" r="25" fill="none" stroke="#8b4513" stroke-width="2"/>
      <polygon points="0,-20 5,-5 0,0 -5,-5" fill="#c0392b"/>
      <polygon points="0,20 5,5 0,0 -5,5" fill="#2c3e50"/>
      <polygon points="20,0 5,5 0,0 5,-5" fill="#8b4513"/>
      <polygon points="-20,0 -5,5 0,0 -5,-5" fill="#8b4513"/>
      <text x="0" y="-28" text-anchor="middle" fill="#8b4513" font-size="8">N</text>
    </g>
    <!-- Path/Route with numbered waypoints -->
    <path d="M60,220 Q100,180 120,150 Q140,120 180,130 Q220,140 250,100 Q280,60 340,80" fill="none" stroke="#c0392b" stroke-width="3" stroke-dasharray="10,5"/>
    <!-- Waypoint 1 -->
    <circle cx="60" cy="220" r="15" fill="#c0392b"/>
    <text x="60" y="225" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">1</text>
    <!-- Waypoint 2 -->
    <circle cx="120" cy="150" r="15" fill="#2980b9"/>
    <text x="120" y="155" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">2</text>
    <!-- Waypoint 3 -->
    <circle cx="180" cy="130" r="15" fill="#27ae60"/>
    <text x="180" y="135" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">3</text>
    <!-- Waypoint 4 (destination) -->
    <circle cx="250" cy="100" r="15" fill="#8e44ad"/>
    <text x="250" y="105" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">4</text>
    <!-- Castle/Goal -->
    <g transform="translate(330, 60)">
      <rect x="-15" y="0" width="10" height="25" fill="#7f8c8d"/>
      <rect x="5" y="0" width="10" height="25" fill="#7f8c8d"/>
      <rect x="-5" y="5" width="10" height="20" fill="#95a5a6"/>
      <polygon points="-10,0 -10,-8 -5,-5 0,-8 5,-5 10,-8 10,0" fill="#7f8c8d"/>
      <polygon points="0,5 5,5 10,-3 15,0 15,5" fill="#95a5a6"/>
      <rect x="-2" y="15" width="4" height="10" fill="#5d4e37"/>
    </g>
    <!-- Scroll corners (decorative) -->
    <ellipse cx="30" cy="35" rx="10" ry="20" fill="#c9956c"/>
    <ellipse cx="30" cy="265" rx="10" ry="20" fill="#c9956c"/>
  </svg>`,

  reflection: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mirrorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#74b9ff"/>
        <stop offset="50%" style="stop-color:#a29bfe"/>
        <stop offset="100%" style="stop-color:#74b9ff"/>
      </linearGradient>
      <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#f1c40f"/>
        <stop offset="50%" style="stop-color:#d4ac0d"/>
        <stop offset="100%" style="stop-color:#f1c40f"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="#1a1a2e"/>
    <!-- Mirror frame -->
    <ellipse cx="200" cy="150" rx="95" ry="120" fill="url(#frameGrad)"/>
    <ellipse cx="200" cy="150" rx="85" ry="110" fill="url(#mirrorGrad)"/>
    <!-- Reflection - human silhouette -->
    <circle cx="200" cy="100" r="25" fill="#2c3e50" opacity="0.7"/>
    <path d="M175,125 L175,200 M225,125 L225,200 M160,160 L240,160" stroke="#2c3e50" stroke-width="8" opacity="0.7"/>
    <!-- Hands reaching toward each other -->
    <path d="M160,160 L130,140" stroke="#2c3e50" stroke-width="6" opacity="0.7"/>
    <path d="M240,160 L270,140" stroke="#2c3e50" stroke-width="6" opacity="0.7"/>
    <!-- Real person silhouette (outside mirror) -->
    <circle cx="80" cy="200" r="20" fill="#ecf0f1"/>
    <rect x="70" y="220" width="20" height="50" fill="#ecf0f1"/>
    <line x1="90" y1="230" x2="120" y2="200" stroke="#ecf0f1" stroke-width="6"/>
    <!-- Decorative elements -->
    <g fill="#f1c40f">
      <!-- Top ornament -->
      <ellipse cx="200" cy="30" rx="20" ry="15"/>
      <polygon points="200,20 190,5 210,5"/>
      <!-- Side ornaments -->
      <circle cx="105" cy="150" r="8"/>
      <circle cx="295" cy="150" r="8"/>
    </g>
    <!-- Light rays from mirror -->
    <g stroke="#a29bfe" stroke-width="1" opacity="0.5">
      <line x1="115" y1="100" x2="80" y2="60"/>
      <line x1="130" y1="80" x2="100" y2="40"/>
      <line x1="270" y1="80" x2="300" y2="40"/>
      <line x1="285" y1="100" x2="320" y2="60"/>
    </g>
    <!-- Floor -->
    <rect x="0" y="270" width="400" height="30" fill="#2c3e50"/>
    <!-- Dragon watermark -->
    <path d="M320,250 Q340,230 360,250 Q380,230 370,210 Q390,200 380,180 L370,190 Q360,180 350,200 Q340,190 330,210 Q320,200 320,220 Q310,230 320,250" fill="#3d3d5c" opacity="0.3"/>
  </svg>`
};

// Decorative elements
export const decorativeElements = {
  cornerOrnament: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,100 Q0,50 30,30 Q50,20 70,25 Q80,15 100,0" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="30" cy="30" r="5" fill="currentColor"/>
    <circle cx="70" cy="25" r="4" fill="currentColor"/>
    <path d="M10,90 Q15,70 30,60" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M25,95 Q35,80 50,70" fill="none" stroke="currentColor" stroke-width="1"/>
  </svg>`,
  
  divider: `<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="15" x2="70" y2="15" stroke="currentColor" stroke-width="1"/>
    <circle cx="85" cy="15" r="4" fill="none" stroke="currentColor" stroke-width="1"/>
    <circle cx="100" cy="15" r="6" fill="currentColor"/>
    <circle cx="115" cy="15" r="4" fill="none" stroke="currentColor" stroke-width="1"/>
    <line x1="130" y1="15" x2="200" y2="15" stroke="currentColor" stroke-width="1"/>
  </svg>`,

  flourish: `<svg viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,20 Q25,5 50,20 Q75,35 100,20 Q125,5 150,20" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="50" cy="20" r="3" fill="currentColor"/>
    <circle cx="100" cy="20" r="3" fill="currentColor"/>
  </svg>`
};
