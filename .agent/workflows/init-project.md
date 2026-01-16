---
description: Standard procedure for initializing a new project. Establishes deployment and data requirements.
---

# Project Initiation Workflow

Follow this questionnaire to determine the project's architectural constraints.

1. **GitHub Linkage**
   - ASK: "Should this workspace be linked to a GitHub repository?"
   - IF **Yes**:
     - Ensure `git init` is run (if not already a repo).
     - Ask for the remote URL or create a new repository.
     - Run `git remote add origin <url>`.
     - **Reminder**: From this point, all work must be on a feature branch. No direct commits to main.
   - IF **No**:
     - Proceed without Git version control (local-only project).

2. **Locale & Regional Settings**
   - ASK: "Which **Language**, **Currency**, and **Timezone** should this project be bound to?"
   - IF **E-commerce**: Ensure these are strictly defined to handle pricing, tax, and shipping logic.
   - IF **Global SaaS**: Use these to set the default localization strategy.

3. **Artifact & Log Storage**
   - ASK: "Do you want to store project artifacts (implementation plans, walkthroughs, logs) in a `logs/` folder within this workspace?"
   - IF **Yes**:
     - Create a `logs/` directory in the project root.
     - Store implementation plans, walkthroughs, and build/test output here.
     - Add `logs/` to `.gitignore` if logs should not be committed, OR keep it tracked if documentation should be versioned.
   - IF **No**:
     - Use the default artifact location (e.g., `~/.gemini/antigravity/brain/<conversation-id>/`).

4. **Application Type**
   - ASK: "What type of application are you building?"
   - **Options**:
     - **SaaS** → Load `skills/saas-landing/SKILL.md` for landing pages.
     - **E-commerce** → Load `skills/ecommerce/SKILL.md` for high-conversion storefronts.
     - **Portfolio/Personal** → Load `skills/portfolio/SKILL.md` for creative/professional showcases.
     - **Blog/Publishing** → Load `skills/blog/SKILL.md` for content-driven sites.
     - **Corporate/Business** → Load `skills/corporate/SKILL.md` for authority-driven B2B sites.
     - **Internal Tool** → Skip landing page design, focus on functionality.
     - **Other** → Proceed with general web-dev skill.

5. **Deployment Target**
   - ASK: "Is this application intended for local development/testing only, or do you plan to push it to production (EXPERIMENTAL)?"
   - IF **Local**: Continue to Step 5.
   - IF **Production (EXPERIMENTAL)**: Continue to Step 5.

5. **Architecture & Decoupling**
   - ASK: "Do you want to decouple the backend and frontend application logic?"
     - Context: "Decoupling separates the UI (React) from the business logic/API key handling (Node/Express/Functions). This is recommended for security and scalability."
   - IF **Yes**:
     - Plan for a `client/` and `server/` structure (or separate repositories).
     - Ensure no sensitive logic goes into `client/`.
   - IF **No**:
     - Plan for an integrated structure (e.g., standard SPA or Next.js with API routes if applicable).

6. **Development Methodology**
   - ASK: "Do you want to follow a Test Driven Development (TDD) approach?"
   - IF **Yes**:
     - The project will require strict "Test First" workflows (Red-Green-Refactor).
   - IF **No**:
     - Standard development (Write code -> Verify).

7. **Authentication**
   - ASK: "How would you like to handle user authentication?"
   - **Options**:
     - **Simple Admin** → Database-backed username/password (for quick prototypes, not recommended for real users).
     - **Google Authentication** → Modern, secure SSO using Google Accounts.
     - **None** → Public application with no restricted areas.

8. **Data Requirements (Production Only)**
   - IF (From Step 4 was **Local**): Skip to End (unless user explicitly wants to treat local like prod).
   - ASK: "Does this application require persistent data storage?"
   - IF **No**: Proceed with stateless architecture (e.g., static site, simple container).
   - IF **Yes**: Continue to Step 9.

9. **Cloud Service Selection (Production + Data)**
   - ASK: "Which cloud service do you prefer for data storage?"
     - Options to suggest:
       - **Firebase Realtime Database**: For low-latency syncing.
       - **Firestore**: For flexible, scalable document storage.
       - **Cloud SQL**: For relational data (Postgres/MySQL).
       - **Other**: User defined.
   - ACTION: Record the choice and configure the project accordingly (e.g., generate `firebase.json` or Cloud SQL connection logic).

10. **README Configuration**
    - ACTION: Create or update the `README.md` file in the project root.
    - MANDATORY: Include "Getting Started" instructions (setup, environment variables, dependencies, and local development commands).
    - REFERENCE: See `skills/web-dev/SKILL.md` (Section 14) for the documentation standard.
