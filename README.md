# Antigravity Agent Configuration

This repository contains the custom **Skills** and **Workflows** used by the Antigravity agent to enforce development standards, security protocols, and operational best practices.

## 📂 Repository Structure

- **`.agent/workflows/`**: Automation scripts that guide the agent through specific processes (Project Init, Git flow).
- **`skills/`**: Knowledge bases that define how the agent performs technical tasks (Web Development standards).

---

## 🚀 Workflows

### 1. Project Initiation (`init-project.md`)
Standardized questionnaire for starting new projects. Ensures architectural decisions are made upfront:
- **Deployment**: Local vs. Production.
- **Architecture**: Decoupled (Client/Server) vs. Monolithic.
- **Methodology**: TDD (Test Driven Development) opt-in.
- **Infrastructure**: Data storage and Cloud provider selection.

### 2. Git Feature Flow (`git-feature-flow.md`)
Enforces a disciplined Git process:
- **Feature Branches**: Mandatory `feature/<topic>` branching.
- **Strict PR Policy**: **Direct commits to `main` are FORBIDDEN**. All features must go through a Pull Request.
- **Drift Detection**: Monitors for scope creep. Explicitly allows vertical-slice dev (FE + BE) but flags unrelated changes.
- **Security Pre-Check**: Mandatory `git diff` scan for leaked keys and exposed endpoints before committing.
- **PR Documentation**: Requires Feature notes, Architectural changes, and **Screenshots/Videos** for UI changes.

---

## 🧠 Skills

### Web Development (`skills/web-dev/SKILL.md`)
The "Master Guide" for all web development tasks. Combines low-level coding conventions with high-level operational rules.

#### 🔒 Security & Operations
- **Security First**: strict no-secrets policy (`.env` only), API Auth checks, and Input Validation.
- **Production Readiness**: No hardcoded URLs. Schema migration planning. Deployment artifact syncing.
- **Local Environment**: **NO Local Docker**. Use native runtimes (`npm run dev`). Dockerfiles are for remote deployment only.
- **AI Integration**: Prioritize **Gemini 3.0**. Maintain `AI_MODELS.md` for cost tracking.

#### 💻 Technology Stack
- **Frameworks**: React, Next.js (App Router).
- **Language**: TypeScript (Strict Mode).
- **Styling**: Tailwind CSS, Shadcn UI.
- **State**: Redux Toolkit (global), React Context.

#### 📏 Coding Standards
- **Naming**: `kebab-case` files, `PascalCase` components.
- **Style**: Tabs, strict equality (`===`), no semicolons (mostly).
- **Testing**: Jest + React Testing Library. Red-Green-Refactor if TDD is active.
