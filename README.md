# Mohan P — Sci-Fi HUD Gamified Web Portfolio

> A game-inspired, cyberpunk HUD personal portfolio website built with **React.js** (Frontend) and **Node.js / Express** (Backend), fully implementing the Figma design specifications ([Figma Community: Web Portfolio Design](https://www.figma.com/design/tpXJJNFsj7Jqk3mxbJ2v7L/Web-Portfolio-Design--Community-?node-id=0-1&p=f&t=QDShFVUxEdzwQ8nv-0)) customized with **Mohan P's** professional background, SAP ABAP & MERN stack experience, and machine learning accomplishments.

---

## ⚡ Architecture & Tech Stack

### 1. Frontend (`client/`)
- **React.js 18** + **Vite 5** (Fast HMR & Optimized Production Build)
- **Tailwind CSS 3** with custom cyberpunk neon color palette & sci-fi fonts (`Orbitron`, `Share Tech Mono`, `Rajdhani`)
- **Web Audio API Synthesizer**: Procedural, zero-dependency audio engine generating realistic sci-fi UI blips, laser sounds, explosion feedback, victory chords, and an ambient synthesizer drone.
- **HTML5 Canvas Animation Engine**:
  - Interactive Bioluminescent Cyber Whale with undulating skeletal fins, rib lighting, floating data packets, and pointer tracking.
  - Playable Arcade Mini-Game: **"Cyber Mainframe Defender"** where users destroy corrupted kernel packets and earn real coins credited to their HUD wallet.
- **Lucide Icons** & **Canvas Confetti** for milestone celebrations.

### 2. Backend (`server/`)
- **Node.js** + **Express.js** RESTful API
- **Endpoints**:
  - `GET /api/profile` — Mohan P's profile, credentials, education (CGPA 8.7), skills, and stats.
  - `GET /api/logs` — Case studies (SAP ABAP XML optimization, MERN fitness app, Phishing URL detector, Breast Cancer classification).
  - `GET /api/achievements` — 22 achievement protocols across Legendary, Epic, Rare, and Uncommon tiers.
  - `GET /api/creations` — Production projects and research artifacts with GitHub and demo links.
  - `GET /api/quests` — Active quest lines and rewards.
  - `POST /api/challenges` — Receives and logs visitor challenges from the "CHALLENGE ME" modal.
  - `POST /api/contact` — Secure transmission message dispatcher.
  - `POST /api/action/reward` — Coin and XP award validation.
  - `GET /api/health` — Server telemetry and uptime.

---

## 🛰️ Figma MCP Integration

The Figma MCP configuration has been added to `~/.gemini/config/mcp_config.json` and `.agents/mcp_config.json`:

```json
{
  "mcpServers": {
    "Figma": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

---

## 🎮 Interface Features

1. **Welcome Screen**:
   - Massive red typography (`HI!`) with narrative intro and `[ENTER THE SYSTEM]` button.
2. **HUD Beginning (Home)**:
   - Interactive Cyber Whale swimming through network grids.
   - Top status header with live ticking Server & Local time, Level 48 badge, and Coins awarded.
   - Left Profile sidebar with avatar corner brackets, title, corporation (Vistex), availability status (`OPEN FOR HIRE`), and `[OPEN CONNECTION]` modal.
   - Right sidebar with `ACTIVE QUEST` (The React Skill-up line) and rewards claim.
3. **Data Logs (Case Studies)**:
   - `DATA LOG DUMP INITIALIZED` view with 4 structured grid cards (`PROJECT UPDATE`, `CHALLENGES`, `NEXT STEPS`, `CONCLUSION`).
   - `[PREVIEW VISUAL RECORDS]` modal showing architectural data flow blueprints.
   - Clickable `OLDER LOGS` list that loads each project into the main viewer.
4. **Achievements**:
   - Circular progress ring (`13/22 PROGRESS`).
   - Interactive status filter checkboxes (`ACHIEVED`, `IN PROGRESS`, `TODO`).
   - `[CHALLENGE ME]` modal allowing recruiters/visitors to submit coding challenges directly to the Node.js backend.
5. **Creations**:
   - Showcase of Mohan's actual full-stack, enterprise, and machine learning projects with tech tags and repository links.
6. **Games**:
   - Playable **Cyber Mainframe Defender** arcade game where users steer defense turrets, shoot bugs, score points, earn coins, and level up!

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or v20+)
- npm

### 1. Install Dependencies
```bash
# In the root directory:
npm --prefix server install
npm --prefix client install
```

### 2. Start Backend & Frontend
You can launch both simultaneously using the root launcher:
```bash
node start.js
```

Or run them individually:
```bash
# Terminal 1 - Backend Server (Port 5000):
npm run server

# Terminal 2 - Frontend Client (Port 5173):
npm run client
```

Open your browser at `http://localhost:5173` to enter the system!
