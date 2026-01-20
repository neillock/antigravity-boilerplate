---
description: Standard procedure for initializing a new project. Establishes deployment, domain discovery, and technical requirements.
---

# Project Initiation Workflow

Follow this phased questionnaire to initialize the project correctly. This workflow ensures that every technical and domain decision is guided by the appropriate **Skill Specification**.

## Phase 1: Foundation Setup
1. **Standards & Philosophy**
   - **ACTION**: LOAD `skills/web-dev/SKILL.md`.
   - **MANDATORY**: Review the "Core Philosophy & Constraints" (Ref §1) with the user to ensure alignment on native runtimes (No Local Docker) and Type Safety.

2. **GitHub Linkage**
   - ASK: "Should this workspace be linked to a GitHub repository?"
   - IF **Yes**:
     - Ensure `git init` is run (if not already a repo).
     - Ask for the remote URL or create a new repository.
     - Run `git remote add origin <url>`.
     - **Reminder**: From this point, all work must be on a feature branch. No direct commits to main.
   - IF **No**:
     - Proceed without Git version control.

3. **Locale & Regional Settings**
   - ASK: "Which **Language**, **Currency**, and **Timezone** should this project be bound to?"
   - ACTION: Record these settings for use in the application components.

4. **Artifact & Log Storage**
   - ASK: "Do you want to store project artifacts (plans, logs) in a `logs/` folder?"
   - IF **Yes**: Create `logs/` directory and add to `.gitignore`.

## Phase 2: Domain Discovery (MANDATORY GATE)
5. **Application Type Selection**
   - ASK: "What type of application are you building?"
   - **Options**:
     - **SaaS** → LOAD `skills/saas-landing/SKILL.md`.
     - **E-commerce** → LOAD `skills/ecommerce/SKILL.md`.
     - **Portfolio/Personal** → LOAD `skills/portfolio/SKILL.md`.
     - **Blog/Publishing** → LOAD `skills/blog/SKILL.md`.
     - **Corporate/Business** → LOAD `skills/corporate/SKILL.md`.
     - **Internal Tool** → Skip landing page design, focus on functionality.
     - **Other** → Proceed with general web-dev skill.

6. **Domain-Specific Discovery**
   - [!IMPORTANT]
   - **ACTION**: Once a type is selected, you MUST load the corresponding `SKILL.md` and IMMEDIATELY ask the **"Phase 1: Discovery"** questions from that file.
   - **STOP**: Do NOT proceed to Phase 3 until the user has answered the domain-specific discovery questions.

## Phase 3: Visual Identity
7. **Color Palette Discovery**
   - ASK: "What **Color Palette** should we use for this project?"
   - SUGGEST: "If you're looking for inspiration, try [Coolors.co](https://coolors.co/)."
   - ACTION: Initialize `index.css` (or equivalent) with these variables.

## Phase 4: Technical Specifications & Skill Routing
8. **Deployment Target**
   - ASK: "Is this application intended for local development only, or do you plan to push it to production (EXPERIMENTAL)?"

9. **Architecture & Decoupling**
   - ASK: "Do you want to decouple the backend and frontend application logic?"
   - IF **Yes**: Plan for `client/` and `server/` structure.
   - REFERENCE: Refer to `skills/web-dev/SKILL.md` (Ref §12) for decoupling detection triggers.

10. **Development Methodology**
    - ASK: "Do you want to follow a Test Driven Development (TDD) approach?"
    - IF **Yes**: Ensure future implementation plans follow the Red-Green-Refactor cycle.

11. **Authentication (Skill Routing)**
    - ASK: "How would you like to handle user authentication?"
    - **Options**:
      - **Google Authentication** → LOAD `skills/auth/SKILL.md`.
        - **ACTION**: Review the "Google OAuth 2.0 Best Practices" (Ref §2) with the user.
      - **Simple Admin** → Database-backed username/password.
      - **None** → Public application.

12. **Data Requirements**
    - ASK: "Does this application require persistent data storage?"
    - IF **Yes**:
      - ASK: "Which cloud service do you prefer for data storage? (Firestore, Firebase RTDB, Cloud SQL, Other)"
      - ACTION: If **Firebase** or **Cloud Run** are mentioned, search for and LOAD any relevant deployment or database skills (e.g., `skills/cloud-run` if exists).

## Phase 5: Documentation & Standards
13. **README Configuration**
    - ACTION: Create/update `README.md`.
    - MANDATORY: Include "Getting Started" instructions as per `skills/web-dev/SKILL.md` (Ref §14).

14. **AI Model Documentation**
    - **ACTION**: Initialize `AI_MODELS.md` in the project root.
    - MANDATORY: Follow the documentation standard in `skills/web-dev/SKILL.md` (Ref §10).
