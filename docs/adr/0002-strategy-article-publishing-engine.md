# ADR 0002: Strategy Article Publishing Engine

* **Status**: Accepted & Implemented
* **Date**: 2026-09-02
* **Deciders**: Product & Content Engineering Team

---

## Context & Problem Statement

Debate theory and strategy articles require structured reading views with category tagging (Policy Theory, LD Strategy, Flowing Techniques, Cross-Examination), reading time metrics, related reading recommendations, and rich typography.

---

## Decision Drivers

1. **Rich Reading Experience**: Optimized typography (`@tailwindcss/typography`, custom Inter fonts).
2. **Fast Client-Side Routing**: Instant transitions between article previews and full-text reading views without page reloads.
3. **Structured Content Model**: Clean data contracts for article metadata, tags, author attribution, and publication dates.

---

## Decision Outcome

Implement client-side article views in `src/pages/Articles.tsx` and `src/pages/FullArticle.tsx`:

* **Article Catalog**: Searchable and tag-filterable grid with reading duration estimates.
* **Full Article Reader**: Dedicated reading canvas with breadcrumbs, author profile badges, and related article links.

### Positive Consequences
* Fast, native reading experience without external CMS hosting dependencies.
