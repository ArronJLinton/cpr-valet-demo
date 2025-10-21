<!--
Sync Impact Report:
Version change: 0.0.0 → 1.0.0 (initial constitution)
Modified principles: N/A (new constitution)
Added sections: Core Principles, Development Standards, Quality Assurance, Governance
Removed sections: N/A
Templates requiring updates: ✅ plan-template.md (constitution check section), ✅ spec-template.md (user story structure), ✅ tasks-template.md (task organization)
Follow-up TODOs: None
-->

# Trash Valet Demo Constitution

## Core Principles

### I. Simplicity First

Code MUST be written for human readability over cleverness. Every component, function, and file should be immediately understandable to a new developer within 5 minutes. Complex logic MUST be broken into smaller, well-named functions. Abstractions are only allowed when they demonstrably reduce complexity, not add it.

### II. TypeScript Everywhere

All code MUST be written in TypeScript with strict type checking enabled. No `any` types allowed without explicit justification. Interfaces and types MUST be defined for all data structures. This ensures compile-time safety and serves as living documentation for new developers.

### III. Component-Driven Development

React components MUST be small, focused, and reusable. Each component should have a single responsibility. Props interfaces MUST be clearly defined. Components MUST be organized in a logical folder structure that mirrors the application's information architecture.

### IV. Documentation as Code

Every public function, component, and complex logic block MUST have JSDoc comments explaining purpose, parameters, and return values. README files MUST exist for each major feature area. Code examples MUST be provided for complex usage patterns.

### V. Test-Driven Quality

Critical user flows MUST have integration tests. Complex business logic MUST have unit tests. All tests MUST be written in plain language that describes the expected behavior. Test files MUST be co-located with the code they test.

## Development Standards

### Code Organization

- Use feature-based folder structure over technical layers
- Keep related files together (component, styles, tests, types)
- Maximum 3 levels of folder nesting
- Use index files for clean imports

### Naming Conventions

- Components: PascalCase (e.g., `UserProfile`)
- Functions: camelCase with descriptive verbs (e.g., `validateUserInput`)
- Files: kebab-case for components, camelCase for utilities
- Constants: SCREAMING_SNAKE_CASE

### Performance Guidelines

- Use React.memo for expensive components
- Implement proper key props for lists
- Lazy load screens and heavy components
- Optimize images and assets

## Quality Assurance

### Code Review Requirements

- All code MUST be reviewed by at least one other developer
- Reviews MUST focus on readability and maintainability
- Complex logic MUST include inline comments explaining the "why"
- New dependencies MUST be justified and documented

### Testing Standards

- Integration tests for user journeys
- Unit tests for business logic
- Visual regression tests for UI components
- All tests MUST be deterministic and fast

## Governance

This constitution supersedes all other development practices. Amendments require:

1. Documentation of the proposed change
2. Team discussion and consensus
3. Update to this constitution file
4. Migration plan for existing code

All pull requests MUST verify compliance with these principles. Complexity additions MUST be justified with clear reasoning. Use this constitution as the primary guidance for all development decisions.

**Version**: 1.0.0 | **Ratified**: 2025-01-27 | **Last Amended**: 2025-01-27
