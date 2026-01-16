# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website project (pietersz.me) using an agent-os workflow system for structured AI-assisted development.

## Agent-OS Workflow

This project uses a spec-driven development workflow. Specs are stored in `agent-os/specs/YYYY-MM-DD-spec-name/` directories.

### Commands (in recommended order)

1. `/plan-product` - Create product mission, roadmap, and tech stack documentation
2. `/shape-spec` - Initialize a new spec and gather requirements through targeted questions
3. `/write-spec` - Generate detailed spec.md from requirements
4. `/create-tasks` - Break down spec into actionable tasks.md
5. `/implement-tasks` - Execute tasks sequentially with verification
6. `/orchestrate-tasks` - Advanced: assign different subagents to task groups

### Spec Folder Structure

```
agent-os/specs/[YYYY-MM-DD-spec-name]/
├── planning/
│   ├── requirements.md    # Gathered requirements
│   └── visuals/           # Reference images/screenshots
├── spec.md                # Detailed specification
├── tasks.md               # Actionable task breakdown
├── orchestration.yml      # Subagent assignments (if using /orchestrate-tasks)
└── verifications/
    └── final-verification.md
```

### Product Documentation

Product-level docs live in `agent-os/product/`:
- `mission.md` - Product vision and strategy
- `roadmap.md` - Phased development plan
- `tech-stack.md` - Technology choices

## Development Standards

Standards are defined in `agent-os/standards/` and exposed as Claude Code skills:
- Backend: api, migrations, models, queries
- Frontend: accessibility, components, css, responsive
- Global: coding-style, commenting, conventions, error-handling, tech-stack, validation
- Testing: test-writing

When implementing features, reference the relevant standards in `agent-os/standards/[category]/[standard].md`.

## Tech Stack

Tech stack is not yet configured. Update `agent-os/standards/global/tech-stack.md` or run `/plan-product` to establish it.
