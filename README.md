# Antigravity Agent Configuration

This repository contains the custom **Skills** and **Workflows** used by the Antigravity agent to enforce development standards, security protocols, and operational best practices.

> [!TIP]
> **First Step**: To experiment with these rules, head into Antigravity and ask the agent to initialize an app with this boilerplate:
> `init app from it https://github.com/neillock/antigravity-boilerplate`
> and follow instructions through.

## 📂 Repository Structure

```
├── .agent/workflows/       # Automation scripts for project processes
│   ├── init-project.md     # Project initialization questionnaire
│   └── git-feature-flow.md # Git branching and PR workflow
├── docs/
│   └── GLOBAL_RULES.md     # Versioned copy of global agent rules
├── skills/                 # Knowledge bases for technical tasks
│   ├── web-dev/            # Web development standards
│   └── saas-landing/       # SaaS landing page specifications
├── template/               # Reusable boilerplate (NextAuth, Middleware, API Docs)
└── AI_MODELS.md            # [REQUIRED] Audit log of AI model usage (Gemini, etc.)
```

---

## 🚀 Workflows

### 1. Project Initiation (`init-project.md`)
Standardized phased questionnaire for starting new projects. Enforces a **Mandatory Skill Routing Gate** to ensure domain-specific standards are established early.

| Phase | Focus | Guidance |
|-------|-------|----------|
| **1: Foundation** | GitHub, Locale, Artifact Storage | Loads `web-dev` skill for core principles |
| **2: Discovery** | **Mandatory Skill Routing Gate** | **REQUIRED**: Must load and complete `SKILL.md` discovery questions for selected type (E-commerce, SaaS, etc.) before proceeding |
| **3: Visuals** | Color Palette & Theme | Integration with `index.css` |
| **4: Technical** | Auth, Deployment, Data | Loads `auth` skill for Google SSO; routes based on tech stack choices |
| **5: Docs** | README & AI Audit | Enforces documentation standards |

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
- **Production Readiness (EXPERIMENTAL)**: Environment variables only, schema migration planning
- **Local Environment**: No local Docker (native runtimes only)
- **AI Integration**: Prioritize Gemini 3.0 > 2.5, maintain `AI_MODELS.md` with code locations and costs

#### 💻 Technology Stack
- **Frameworks**: React, Next.js (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS, Shadcn UI
- **State**: Redux Toolkit (global), React Context (simple)

#### 📏 Coding Standards
- **Naming**: `kebab-case` files, `PascalCase` components, `UPPER_CASE` constants
- **Style**: Tabs, strict equality (`===`), no semicolons
- **Testing**: Jest + React Testing Library, TDD optional
- **Link Integrity**: No dead links or 404s. External links must be verified. No placeholders like `#` in production.

#### 📚 API Documentation
- **Swagger/OpenAPI**: Required for all backend APIs. Serve at `/api/docs` or `/swagger`.
- **Classification**: Every endpoint must document Auth status, Roles, and Rate Limits.
- **Reference**: See [`template/API_ENDPOINTS.md`](file:///Users/nwl/antigravity/antig-v2/template/API_ENDPOINTS.md) for the required template.

---

---

### Specialized Design Skills

> [!NOTE]
> Currently, only **E-commerce** and **SaaS Landing** skills have reached full design polish. Other templates are in active development and may receive structural updates.

| Skill | Focus | Location | Status |
|-------|-------|----------|--------|
| **E-commerce** | Conversion engineering, locale-awareness, and checkout optimization | `skills/ecommerce/` | **POLISHED** |
| **SaaS Landing** | CRO-optimized landing page anatomy and spring animations | `skills/saas-landing/` | **POLISHED** |
| **Auth & Accounts** | Secure Google SSO, RBAC, and account management standards | `skills/auth/` | **READY** |
| **Portfolio** | Personal branding, visual storytelling, and outcome-driven work grids | `skills/portfolio/` | **BETA** |
| **Blog** | Readability-first layout, newsletter growth, and content discovery | `skills/blog/` | **BETA** |
| **Corporate** | B2B authority building, service clarity, and lead generation | `skills/corporate/` | **BETA** |
| **Web Dev** | Core coding standards, API docs, and link integrity | `skills/web-dev/` | **CORE** |

---

## 🎥 Samples

View the agent's capabilities in action through these recorded demos:

### E-commerce Polish
Demonstrating high-conversion storefront engineering, mobile-responsive layouts, and localized UI.
[Watch the E-commerce Demo on YouTube](https://youtube.com/shorts/jxaH_fzWy7k?feature=share)

---

## 📋 Global Rules (`docs/GLOBAL_RULES.md`)

These rules apply across ALL workspaces:

1. **GitHub Linkage** - Always ask, enforce feature branches
2. **Security First** - No key leakage, API auth, scan before commit
3. **No Local Docker** - Native runtimes for local dev
4. **Strict PR Policy** - Never merge to main locally
5. **AI Model Prioritization** - Gemini 3.0 > 2.5
6. **Mandatory AI Documentation** - Maintain `AI_MODELS.md` in root with:
   - **Service/Feature**, **Model Name**, **File Location**, **Purpose**, and **Estimated Cost**.
   - **Update Trigger**: Update on EVERY commit that changes AI usage.
7. **Mandatory Project Documentation** - Every project MUST include a `README.md` with "Getting Started" instructions (setup, installation, and local run commands).

---

## 🚦 Getting Started

When starting a new project, simply say:
- "init project" or "start new app"

The agent will follow the `init-project` workflow to gather requirements before writing any code.
