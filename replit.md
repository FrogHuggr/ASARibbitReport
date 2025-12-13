# The Ribbit Report

## Overview

The Ribbit Report is a digital magazine for kids focused on amphibian conservation education. It features interactive content including field dispatches from researchers around the world, myth-busting quizzes, conservation dilemmas, and educational articles about frogs, toads, and other amphibians. The app is guided by "MarshMellow," a friendly Red-eyed Tree Frog mascot who provides context and encouragement throughout the experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 19** with TypeScript for type-safe component development
- **Vite 7** as the build tool with Hot Module Replacement for fast development
- **React Router DOM v7** for client-side routing with nested route structure

### Styling Approach
- **Tailwind CSS v4** with the Vite plugin for styling
- Custom design tokens defined in CSS for colors (regional palettes, IUCN status colors, dark mode)
- Dark mode support via CSS classes and React context (`ThemeContext`)
- Custom fonts: Baloo 2 (display) and Nunito (body) loaded from Google Fonts

### Application Structure
- **Pages pattern**: Each route corresponds to a page component in `src/pages/`
- **Shared layout**: `AppShell` component wraps all routes with consistent header and bottom navigation
- **Data-driven content**: Static TypeScript data files in `src/data/` define all content (dispatches, myths, dilemmas, facts)
- **Reusable UI components**: Located in `src/components/ui/` for consistent design patterns

### State Management
- React Context for global theme state (dark/light mode with localStorage persistence)
- Local component state with `useState` for interactive features
- No external state management library needed due to static content nature

### Content Types
1. **Dispatches**: Field reports from researchers with rich sections (stories, facts, alerts, researcher profiles)
2. **Myth Busters**: Swipe-through true/false cards about amphibian misconceptions
3. **Wild Decisions**: Conservation dilemma scenarios with multiple choice outcomes
4. **Real Stories**: In-depth educational articles (e.g., Frogs vs. Toads comparison)
5. **Did You Know Facts**: Random rotating facts for the home page

### Icon System
- **Lucide React** for consistent iconography throughout the app
- Emoji fallbacks for some decorative elements

## External Dependencies

### Production Dependencies
- `react` / `react-dom`: Core UI framework
- `react-router-dom`: Client-side routing
- `tailwindcss` / `@tailwindcss/vite`: Styling system
- `lucide-react`: Icon library

### Development Dependencies
- `typescript`: Type checking
- `vite` / `@vitejs/plugin-react`: Build tooling
- `eslint` with React and TypeScript plugins: Code linting

### External Services
- **Google Fonts**: Baloo 2 and Nunito font families loaded via CDN
- **Amphibian Survival Alliance**: Referenced organization (content partner, not API integration)

### Static Assets
- Images stored in `/public/images/` organized by content type (dispatches, marshmellow mascot, wild decisions)
- SVG favicon (`/frog-icon.svg`)