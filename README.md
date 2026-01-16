# Antigravity Agent Configuration

This repository contains the custom **Skills** and **Workflows** used by the Antigravity agent to enforce development standards, security protocols, and operational best practices.

## 📂 Repository Structure

```
├── .agent/workflows/       # Automation scripts for project processes
│   ├── init-project.md     # Project initialization questionnaire
│   └── git-feature-flow.md # Git branching and PR workflow
├── docs/
│   └── GLOBAL_RULES.md     # Versioned copy of global agent rules
└── skills/                 # Knowledge bases for technical tasks
    ├── web-dev/            # Web development standards
    │   └── SKILL.md
    └── saas-landing/       # SaaS landing page specifications
        └── SKILL.md
```

---

## 🚀 Workflows

### 1. Project Initiation (`init-project.md`)
Standardized questionnaire for starting new projects:

| Step | Question |
|------|----------|
| 1 | **GitHub Linkage** - Should this workspace be linked to GitHub? |
| 2 | **Locale Discovery** - Language, Currency, and Timezone? |
| 3 | **Artifact Storage** - Store logs in a `logs/` folder? |
| 4 | **Application Type** - SaaS, E-commerce, Portfolio, Blog, Corporate? |
| 5 | **Deployment Target** - Local or Production? |
| 6 | **Architecture** - Decouple frontend/backend? |
| 7 | **Methodology** - Use TDD? |
| 8-9 | **Data & Cloud** - Storage needs and provider selection |

### 2. Git Feature Flow (`git-feature-flow.md`)
Enforces a disciplined Git process:

- **Feature Branches**: Mandatory `feature/<topic>` branching
- **Strict PR Policy**: No direct commits to `main`. All features via Pull Request
- **Drift Detection**: Monitors scope creep, allows vertical-slice development
- **Security Pre-Check**: Scans `git diff` for leaked keys and exposed endpoints
- **AI Docs Check**: Ensures `AI_MODELS.md` is updated on every AI change
- **PR Documentation**: Requires Title, Description, Feature notes, and **Screenshots/Videos** for UI changes

---

## 🧠 Skills

### Web Development (`skills/web-dev/SKILL.md`)
Comprehensive standards for modern web applications:

#### 🔒 Security & Operations
- **Security First**: No hardcoded secrets, API Auth required, input validation
- **Production Readiness**: Environment variables only, schema migration planning
- **Local Environment**: No local Docker (native runtimes only)
- **AI Integration**: Prioritize Gemini 3.0 > 2.5, maintain `AI_MODELS.md` with code locations and costs

#### 💻 Technology Stack
- **Frameworks**: React, Next.js (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS, Shadcn UI
- **State**: Redux Toolkit (global), React Context (simple)

#### 📏 Coding Standards
- **Naming**: `kebab-case` files, `PascalCase` components
- **Style**: Tabs, strict equality (`===`), no semicolons
- **Testing**: Jest + React Testing Library, TDD optional

#### 📚 API Documentation
- **Swagger/OpenAPI**: Required for all backend APIs
- **Content**: Routes, schemas, auth requirements, rate limits
- **Location**: Serve at `/api/docs` or `/swagger`

---

---

### Specialized Design Skills

| Skill | Focus | Location |
|-------|-------|----------|
| **E-commerce** | Conversion engineering, locale-awareness, and checkout optimization | `skills/ecommerce/` |
| **Portfolio** | Personal branding, visual storytelling, and outcome-driven work grids | `skills/portfolio/` |
| **Blog** | Readability-first layout, newsletter growth, and content discovery | `skills/blog/` |
| **Corporate** | B2B authority building, service clarity, and lead generation | `skills/corporate/` |
| **SaaS Landing** | CRO-optimized landing page anatomy and spring animations | `skills/saas-landing/` |
| **Authentication** | Secure Google SSO and RBAC account management | `skills/auth/` |

---

## 📋 Global Rules (`docs/GLOBAL_RULES.md`)

These rules apply across ALL workspaces:

1. **GitHub Linkage** - Always ask, enforce feature branches
2. **Security First** - No key leakage, API auth, scan before commit
3. **No Local Docker** - Native runtimes for local dev
4. **Strict PR Policy** - Never merge to main locally
5. **AI Model Prioritization** - Gemini 3.0 > 2.5, document all usage with costs

---

## 🚦 Getting Started

When starting a new project, simply say:
- "init project" or "start new app"

The agent will follow the `init-project` workflow to gather requirements before writing any code.
