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
| 2 | **Artifact Storage** - Store logs in a `logs/` folder? |
| 3 | **Application Type** - SaaS, E-commerce, Portfolio, Internal Tool? |
| 4 | **Deployment Target** - Local or Production? |
| 5 | **Architecture** - Decouple frontend/backend? |
| 6 | **Methodology** - Use TDD? |
| 7-8 | **Data & Cloud** - Storage needs and provider selection |

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

### SaaS Landing Page (`skills/saas-landing/SKILL.md`)
CRO-optimized landing page specification:

#### Discovery Phase (Mandatory)
1. Company Name & What they do
2. Visual Persona (Serious/Premium, Fun/Playful, Quirky/Bold)
3. The 3 Big Outcomes

#### Page Anatomy
| Section | Key Elements |
|---------|--------------|
| **Hero** | Eyebrow text, H1 with 3 outcomes, Primary CTA + subtext, Visual, Trust bar |
| **Social Proof** | Value heading, 3-5 outcome cards, Mini quotes, Micro-CTA |
| **Pricing** | Toggle (Monthly/Yearly with Save %), Plan cards with audience, Tooltips, Reassurance |
| **FAQ** | Categorized, bulleted answers, "Book a call" link, No dead ends |
| **Final CTA** | Outcome-focused headline, Trust boosters (G2/Capterra ratings) |

#### Visual & Motion
- **Color**: 60-30-10 rule
- **Typography**: Serif headings, Sans-serif body
- **Spacing**: 140px+ "Luxury Padding" between sections
- **Animation**: Spring physics, drift-and-fade scroll, magnetic button hovers

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
