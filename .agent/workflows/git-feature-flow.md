---
description: Enforces feature branch workflow and monitors for scope creep to encourage frequent commits.
---

# Git Feature Workflow

Use this workflow to manage code changes, distinct features, and prevent "drift".

1. **Feature Start**
   - **Check Branch**: Run `git branch --show-current`.
   - **Decision**:
     - IF on `main` or `master`: STOP. You must create a new feature branch.
     - IF user asks for a NEW feature: Create a new branch `feature/<topic>`.
     - IF continuing existing work: Ensure you are on the correct `feature/<topic>` branch.

2. **Drift Detection (Per Turn)**
   - **Analyze**: Before executing a new user request, compare it to the current branch name and previous tasks.
   - **Check**: "Is this request a distinct new feature or a significant departure from the current branch's goal?"
   - **Exemption (Decoupled Architectures)**:
     - IF the project is decoupled (Client/Server) AND the new request targets the *current feature's* opposing stack (e.g., switching from wiring the Frontend UI to fixing the Backend API for the *same* feature), this is **NOT** drift. Proceed without warning.
     - "Vertical Slice" development is encouraged.
   - **Trigger**:
     - IF **Drift Detected** (e.g., on `feature/login` but user asks to "fix the billing CSS"):
       1. **PAUSE**.
       2. Propose: "We are drifting from `feature/<current>`. Shall we commit this work now?"
       3. Ask: "Should we start a new branch `feature/billing-css` for this new request?"

3. **Commit Protocol**
   - **Security Pre-Check**:
     1. REVIEW the `git diff`.
     2. CHECK for **Key Leakage**: Are there any hardcoded secrets, tokens, or private keys?
     3. CHECK for **Exposed Endpoints**: Did we add an API route without Auth middleware?
     4. IF found: FIX before committing.
   - **AI Model Documentation Check**:
     1. CHECK: "Did this feature involve adding or changing AI model usage (Gemini, etc)?"
     2. IF YES: Update `AI_MODELS.md` with the model name and estimated pricing.
   - **Frequency**: Suggest committing after every successfully verified logical step.
   - **Command**: `git add . && git commit -m "<descriptive message>"`
   - **Push**: `git push origin <branch-name>` (if remote exists).

4. **Feature Completion & PR Documentation**
   - **Pre-Merge Requirement**: Before asking the user to review the final feature, you MUST generate a Pull Request Description.
   - **Validation**: Ensure the PR Description contains:
     - **Feature Changes**: What did you build?
     - **Architectural Changes**: Did you change the DB schema, file structure, or add dependencies?
     - **Visuals (Frontend Only)**:
       - **Requirements**: You MUST include Screenshots and/or Video recordings of the UI changes.
       - **Action**: Use the `browser` tool to capture these if not already available.
   - **Strict Rule**: **DO NOT** merge to `main` locally.
   - **Action**:
     1. Push the final changes: `git push origin <branch-name>`
     2. Instruct the User: "Please review and merge the Pull Request at [Repository URL]."
