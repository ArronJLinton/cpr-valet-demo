---
description: 'Task list for CPR CRM Application implementation'
---

# Tasks: CPR CRM Application

**Input**: Design documents from `/specs/001-cpr-crm-app/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Following the "Test-Driven Quality" principle, integration tests for critical user flows are MANDATORY. Unit tests for complex business logic are REQUIRED. Tests must be written in plain language that describes expected behavior.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story. Each task must be simple enough for a new developer to understand and complete.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Mobile app**: `src/`, `tests/` at repository root
- Paths follow React Native/Expo structure with TypeScript

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure per implementation plan
- [x] T002 Initialize React Native/Expo project with TypeScript dependencies
- [x] T003 [P] Configure ESLint and Prettier for code quality
- [x] T004 [P] Set up Jest and React Native Testing Library for testing
- [x] T005 [P] Configure app.json with required permissions (camera, location, media library)
- [x] T006 [P] Set up EAS build configuration
- [x] T007 [P] Create folder structure following defined architecture

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T008 Setup Expo SQLite database schema and migrations framework
- [ ] T009 [P] Implement permission utilities in src/utils/permissions.ts
- [ ] T010 [P] Create location utilities in src/utils/location.ts
- [ ] T011 [P] Set up database service in src/services/database.ts
- [ ] T012 [P] Implement error handling and logging utilities in src/utils/errorHandling.ts
- [ ] T013 [P] Create TypeScript interfaces in src/types/index.ts
- [ ] T014 [P] Set up React Context for global state management
- [ ] T015 [P] Configure navigation with React Navigation in src/components/Navigation/
- [ ] T016 [P] Create constants and mock data in src/constants/
- [ ] T017 [P] Set up media service utilities in src/services/mediaService.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Employee Time Tracking (Priority: P1) 🎯 MVP

**Goal**: Enable employees to clock in/out at properties with geofencing verification and location tracking

**Independent Test**: Can be fully tested by having an employee attempt to clock in/out at various locations and verifying the system only allows it within designated property zones

### Tests for User Story 1 (MANDATORY) ⚠️

**NOTE: Following "Test-Driven Quality" principle - Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T018 [P] [US1] Integration test for clock in/out flow in tests/integration/clockInOut.test.ts
- [ ] T019 [P] [US1] Unit test for geofencing validation in tests/utils/location.test.ts
- [ ] T020 [P] [US1] Unit test for time entry validation in tests/services/timeService.test.ts

### Implementation for User Story 1

- [ ] T021 [P] [US1] Create User model in src/types/user.ts
- [ ] T022 [P] [US1] Create Property model in src/types/property.ts
- [ ] T023 [P] [US1] Create TimeEntry model in src/types/timeEntry.ts
- [ ] T024 [US1] Implement geofencing service in src/services/geofencingService.ts (depends on T021, T022)
- [ ] T025 [US1] Implement time tracking service in src/services/timeService.ts (depends on T023)
- [ ] T026 [US1] Create clock in/out component in src/components/ClockInOut/ClockInOutButton.tsx
- [ ] T027 [US1] Add geofencing validation to location utilities
- [ ] T028 [US1] Implement time entry database operations
- [ ] T029 [US1] Add error handling for GPS and geofencing failures
- [ ] T030 [US1] Add logging for time tracking operations

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Service Proof Documentation (Priority: P1) 🎯 MVP

**Goal**: Enable employees to upload photos/videos as proof of service with automatic metadata capture

**Independent Test**: Can be fully tested by having an employee upload various media files and verifying all metadata is correctly captured and stored

### Tests for User Story 2 (MANDATORY) ⚠️

- [ ] T031 [P] [US2] Integration test for media upload flow in tests/integration/mediaUpload.test.ts
- [ ] T032 [P] [US2] Unit test for media metadata capture in tests/services/mediaService.test.ts
- [ ] T033 [P] [US2] Unit test for ProofCard component in tests/components/ProofCard.test.tsx

### Implementation for User Story 2

- [ ] T034 [P] [US2] Create MediaUpload model in src/types/media.ts
- [ ] T035 [US2] Implement camera integration in src/components/MediaUpload/CameraButton.tsx
- [ ] T036 [US2] Create MediaUploadCard component in src/components/MediaUpload/MediaUploadCard.tsx
- [ ] T037 [US2] Implement photo/video capture with metadata in src/services/mediaService.ts
- [ ] T038 [US2] Create ProofCard component in src/components/ProofCard/ProofCard.tsx
- [ ] T039 [US2] Create ProofList component in src/components/ProofCard/ProofList.tsx
- [ ] T040 [US2] Implement media storage and retrieval services
- [ ] T041 [US2] Add thumbnail generation and optimization
- [ ] T042 [US2] Integrate with User Story 1 components (clock-in requirement)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Violation Reporting (Priority: P2)

**Goal**: Enable employees to report violations with photos and specific violation type selection

**Independent Test**: Can be fully tested by having an employee report various violation types and verifying the system generates proper reports and notifications

### Tests for User Story 3 (MANDATORY) ⚠️

- [ ] T043 [P] [US3] Integration test for violation reporting flow in tests/integration/violationReporting.test.ts
- [ ] T044 [P] [US3] Unit test for violation form generation in tests/components/ViolationForm.test.tsx
- [ ] T045 [P] [US3] Unit test for automated report generation in tests/services/reportService.test.ts

### Implementation for User Story 3

- [ ] T046 [P] [US3] Create ViolationReport model in src/types/violationReport.ts
- [ ] T047 [US3] Create violation types configuration in src/constants/violationTypes.ts
- [ ] T048 [US3] Implement violation form component in src/components/ViolationForm/ViolationForm.tsx
- [ ] T049 [US3] Implement violation reporting service in src/services/violationService.ts
- [ ] T050 [US3] Create automated report generation service in src/services/reportService.ts
- [ ] T051 [US3] Implement violation report database operations
- [ ] T052 [US3] Add photo attachment functionality for violations
- [ ] T053 [US3] Integrate with User Story 1 components (clock-in requirement)

**Checkpoint**: At this point, User Stories 1, 2, AND 3 should all work independently

---

## Phase 6: User Story 4 - Vendor Property Management (Priority: P2)

**Goal**: Enable vendors to assign employees to properties, review proof uploads, and communicate with stakeholders

**Independent Test**: Can be fully tested by having a vendor assign employees, review uploaded proof, and send messages to verify the workflow functions correctly

### Tests for User Story 4 (MANDATORY) ⚠️

- [ ] T054 [P] [US4] Integration test for vendor dashboard in tests/integration/vendorDashboard.test.ts
- [ ] T055 [P] [US4] Unit test for employee assignment in tests/services/assignmentService.test.ts
- [ ] T056 [P] [US4] Unit test for vendor dashboard component in tests/components/Dashboard/VendorDashboard.test.tsx

### Implementation for User Story 4

- [ ] T057 [P] [US4] Create Assignment model in src/types/assignment.ts
- [ ] T058 [US4] Implement vendor dashboard in src/components/Dashboard/VendorDashboard.tsx
- [ ] T059 [US4] Create employee assignment service in src/services/assignmentService.ts
- [ ] T060 [US4] Implement proof review functionality in vendor dashboard
- [ ] T061 [US4] Create messaging interface in src/components/Messaging/MessageInterface.tsx
- [ ] T062 [US4] Implement user-to-user communication service in src/services/messagingService.ts
- [ ] T063 [US4] Add automated violation and performance reports to vendor dashboard
- [ ] T064 [US4] Integrate with User Stories 1, 2, 3 components

**Checkpoint**: At this point, User Stories 1, 2, 3, AND 4 should all work independently

---

## Phase 7: User Story 5 - Property Manager Client Portal (Priority: P3)

**Goal**: Enable property managers to view reports, upload tenant lists, and communicate with operations team

**Independent Test**: Can be fully tested by having a property manager upload tenant lists, view reports, and communicate with operations to verify the client portal functionality

### Tests for User Story 5 (MANDATORY) ⚠️

- [ ] T065 [P] [US5] Integration test for property manager portal in tests/integration/propertyManagerPortal.test.ts
- [ ] T066 [P] [US5] Unit test for CSV upload processing in tests/services/csvService.test.ts
- [ ] T067 [P] [US5] Unit test for property manager dashboard in tests/components/Dashboard/PropertyManagerDashboard.test.tsx

### Implementation for User Story 5

- [ ] T068 [P] [US5] Create TenantList model in src/types/tenantList.ts
- [ ] T069 [US5] Implement property manager dashboard in src/components/Dashboard/PropertyManagerDashboard.tsx
- [ ] T070 [US5] Create CSV upload service in src/services/csvService.ts
- [ ] T071 [US5] Implement tenant list processing and storage
- [ ] T072 [US5] Add property reports viewing functionality
- [ ] T073 [US5] Implement automated email report delivery
- [ ] T074 [US5] Add communication interface for operations team
- [ ] T075 [US5] Integrate with User Stories 1, 2, 3, 4 components

**Checkpoint**: At this point, User Stories 1, 2, 3, 4, AND 5 should all work independently

---

## Phase 8: User Story 6 - Multi-Language Support (Priority: P3)

**Goal**: Enable users to access the application in English or Spanish with automatic language application

**Independent Test**: Can be fully tested by having users sign up in different languages and verifying the interface displays correctly in their selected language

### Tests for User Story 6 (MANDATORY) ⚠️

- [ ] T076 [P] [US6] Integration test for language switching in tests/integration/languageSupport.test.ts
- [ ] T077 [P] [US6] Unit test for i18n utilities in tests/utils/i18n.test.ts
- [ ] T078 [P] [US6] Unit test for language toggle component in tests/components/LanguageToggle.test.tsx

### Implementation for User Story 6

- [ ] T079 [P] [US6] Set up react-native-localize for i18n in src/utils/i18n.ts
- [ ] T080 [US6] Create language toggle component in src/components/LanguageToggle/LanguageToggle.tsx
- [ ] T081 [US6] Implement language switching functionality
- [ ] T082 [US6] Translate all UI text and messages to Spanish
- [ ] T083 [US6] Add language preference storage in user settings
- [ ] T084 [US6] Implement automatic language application during signup
- [ ] T085 [US6] Add RTL support for future languages
- [ ] T086 [US6] Integrate language support across all existing components

**Checkpoint**: All user stories should now be independently functional with multi-language support

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T087 [P] Add JSDoc comments to all public APIs and complex functions
- [ ] T088 [P] Code cleanup and refactoring across all components
- [ ] T089 [P] Performance optimization (image loading, lazy loading, memory management)
- [ ] T090 [P] Additional unit tests for complex business logic in tests/unit/
- [ ] T091 [P] Security hardening (encryption, secure storage, access controls)
- [ ] T092 [P] Error boundary implementation for graceful failures
- [ ] T093 [P] Demo data preparation and sample scenarios
- [ ] T094 [P] Documentation updates in README.md
- [ ] T095 [P] E2E testing with Detox for critical user flows
- [ ] T096 [P] Performance testing on various devices
- [ ] T097 [P] App store deployment preparation
- [ ] T098 [P] Demo walkthrough and presentation materials

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Integrates with US1 (clock-in requirement)
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Integrates with US1 (clock-in requirement)
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - Integrates with US1, US2, US3
- **User Story 5 (P3)**: Can start after Foundational (Phase 2) - Integrates with US1, US2, US3, US4
- **User Story 6 (P3)**: Can start after Foundational (Phase 2) - Integrates with all existing components

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before components
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together:
Task: "Integration test for clock in/out flow in tests/integration/clockInOut.test.ts"
Task: "Unit test for geofencing validation in tests/utils/location.test.ts"
Task: "Unit test for time entry validation in tests/services/timeService.test.ts"

# Launch all models for User Story 1 together:
Task: "Create User model in src/types/user.ts"
Task: "Create Property model in src/types/property.ts"
Task: "Create TimeEntry model in src/types/timeEntry.ts"
```

---

## Implementation Strategy

### MVP First (User Stories 1 & 2 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Time Tracking)
4. Complete Phase 4: User Story 2 (Media Upload)
5. **STOP and VALIDATE**: Test both stories independently
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (Basic MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo (Full MVP!)
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Add User Story 5 → Test independently → Deploy/Demo
7. Add User Story 6 → Test independently → Deploy/Demo
8. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Time Tracking)
   - Developer B: User Story 2 (Media Upload)
   - Developer C: User Story 3 (Violation Reporting)
3. After P1 stories complete:
   - Developer A: User Story 4 (Vendor Management)
   - Developer B: User Story 5 (Property Manager Portal)
   - Developer C: User Story 6 (Multi-Language Support)
4. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- Follow "Simplicity First" principle - each task should be understandable by new developers
- All components must be fully typed with TypeScript
- JSDoc comments required for all public APIs
