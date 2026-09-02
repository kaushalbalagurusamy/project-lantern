# ADR 0001: Debate Coaching Portal Architecture

* **Status**: Accepted & Implemented
* **Date**: 2026-09-02
* **Deciders**: Product & Engineering Team

---

## Context & Problem Statement

Project Lantern provides elite debate coaching and executive strategic communication across competitive circuits (TOC, NDCA, NCFL, NSDA). The platform requires a high-performance web portal offering coach credentials, coaching specializations (Policy, Lincoln-Douglas, Public Forum), automated scheduling/booking integration, and strategy publications.

---

## Decision Drivers

1. **Conversion & Scheduling Flow**: Frictionless booking integration for prospective debaters and executive clients.
2. **Fast Static Delivery**: Client-side React 18 + Vite SPA architecture with instant routing.
3. **Responsive Media Layout**: Professional presentation across mobile and desktop devices.

---

## Decision Outcome

Adopt a modular React 18 + Vite SPA topology:

* **Presentation Layer**: Section-based layout (`Header.tsx`, `About.tsx`, `Booking.tsx`, `Blog.tsx`).
* **Routing**: `react-router-dom` v6 routing between the main portal (`/`), article catalog (`/articles`), and long-form strategy breakdowns (`/article/:id`).
* **Styling**: Tailwind CSS with custom pastel gradient design tokens and Radix UI primitives.

### Positive Consequences
* Zero server management overhead.
* Seamless user journey from credential discovery to session booking.
