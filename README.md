# Project Lantern

Elite debate coaching and strategic communication platform offering tailored training programs across Policy Debate, Lincoln-Douglas, Public Forum, and executive communication, complete with integrated session booking and strategy publications.

---

## Architecture & Component Map

```
+-------------------------------------------------------------------------------+
|                            Project Lantern Web Platform                       |
|                                                                               |
|  +-------------------------------------------------------------------------+  |
|  | Header (Navigation, Brand Identity, Direct Booking Action)              |  |
|  +-------------------------------------------------------------------------+  |
|                                       |                                       |
|  +------------------------------------+------------------------------------+  |
|  | About Section                      | Booking Section                    |  |
|  | - Coach Background (Berkeley/Lex)  | - Session Types (1-on-1, Prep)     |  |
|  | - National Circuit Credentials     | - Cal.com / Intake Integration     |  |
|  | - Specialization Tags              | - Custom Duration & Goal Selection |  |
|  +------------------------------------+------------------------------------+  |
|                                       |                                       |
|  +------------------------------------+------------------------------------+  |
|  | Blog & Publications Preview        | Full Article Engine (/articles)    |  |
|  | - Theory Articles & Paradigm Guides| - Categorized Strategy Guides      |  |
|  | - Flowing & Rebuttal Drills        | - Dedicated Reading Canvas         |  |
|  +------------------------------------+------------------------------------+  |
|                                       |                                       |
|  +-------------------------------------------------------------------------+  |
|  | Design System (Tailwind CSS, Pastel Gradient Tokens, Radix UI)          |  |
|  +-------------------------------------------------------------------------+  |
+-------------------------------------------------------------------------------+
```

---

## Core Capabilities

* **Curriculum & Circuit Specializations**: Comprehensive training modules covering national circuit formats (TOC, NDCA, NCFL, NSDA) across Policy Debate, Lincoln-Douglas, and Public Forum.
* **Direct Session Booking**: Integrated scheduling interface for selecting session durations, focus areas (prep, drills, round review), and intake goals.
* **Strategy Article & Theory Publishing**: In-platform publishing engine for debate theory, affirmative/negative strategy guides, and rebuttal mechanics.
* **Responsive Design System**: Accessible UI built with Tailwind CSS, custom gradient tokens, and Radix UI headless components.

---

## Repository Structure

```
project-lantern/
├── src/
│   ├── components/           # UI section modules
│   │   ├── About.tsx         # Coach credentials and circuit track record
│   │   ├── Blog.tsx          # Featured strategy article previews
│   │   ├── Booking.tsx       # Consultation and session scheduling interface
│   │   ├── Header.tsx        # Responsive navigation and CTA header
│   │   └── ui/               # Radix UI primitive wrappers and form controls
│   ├── pages/                # Application routes
│   │   ├── Articles.tsx      # Full strategy article catalog and filter grid
│   │   ├── FullArticle.tsx   # Long-form article reading view
│   │   ├── Index.tsx         # Main landing page
│   │   └── NotFound.tsx      # 404 handler
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions and class merging
│   ├── App.tsx               # Client router and React Query provider
│   └── main.tsx              # DOM entry point
├── docs/
│   └── adr/                  # Architectural Decision Records (ADRs 0001 - 0002)
├── public/                   # Static assets, icons, and profile imagery
├── index.html                # Entry HTML document
├── package.json              # Dependencies and build scripts
├── tailwind.config.ts        # Design tokens and theme settings
└── vite.config.ts            # Vite bundler configuration
```

---

## Prerequisites

* **Node.js**: 18.x or higher
* **Package Manager**: `npm`, `pnpm`, or `bun`

---

## Quickstart

### 1. Installation

```bash
git clone https://github.com/kaushalbalagurusamy/project-lantern.git
cd project-lantern

npm install
```

### 2. Running Development Server

```bash
npm run dev
```

The application will start locally at `http://localhost:8076`.

### 3. Production Build

```bash
# Build optimized static distribution
npm run build

# Preview production build locally
npm run preview
```

---

## Technical Documentation & ADRs

All foundational architectural decisions are recorded in [`docs/adr/`](docs/adr/):

* [`docs/adr/0001-debate-coaching-portal-architecture.md`](docs/adr/0001-debate-coaching-portal-architecture.md) — Debate Coaching Portal Architecture
* [`docs/adr/0002-strategy-article-publishing-engine.md`](docs/adr/0002-strategy-article-publishing-engine.md) — Strategy Article Publishing Engine

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
