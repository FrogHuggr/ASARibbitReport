# The Ribbit Report - Feature Documentation

## Overview

The Ribbit Report is a mobile-first Progressive Web App (PWA) designed as an educational magazine for children ages 9-12, focused on amphibian conservation. The app is developed in partnership with the Amphibian Survival Alliance.

---

## Core Features

### Progressive Web App (PWA)

- **Installable**: Users can add the app to their home screen on iOS, Android, and desktop
- **Offline Support**: Service worker caches core assets for offline access
- **Native-like Experience**: Runs in standalone mode without browser chrome when installed
- **App Icons**: Custom MarshMellow mascot icons in 192x192 and 512x512 sizes
- **Favicon**: MarshMellow favicon in 16x16 and 32x32 sizes for browser tabs
- **Loading Splash**: MarshMellow with toolbox "Building your page..." animation shown before React loads
- **Web App Manifest**: Full PWA configuration with theme colors and display settings

### Welcome Experience

- **First-Time Welcome Modal**: MarshMellow greets new visitors with an animated introduction
- **Device-Specific Install Instructions**: Contextual guidance for iOS Safari, Android Chrome, and desktop browsers
- **One-Time Display**: Uses localStorage to show the welcome modal only once per device
- **PWA Detection**: Automatically skips the welcome modal if already running as an installed app

---

## Content Sections

### Dispatches

Field reports from amphibian researchers around the world.

- **Regional Filtering**: Filter dispatches by continent (All, Asia, Americas, Africa)
- **Dispatch Cards**: Each card displays:
  - Hero image with lazy loading
  - IUCN conservation status badge (color-coded)
  - Country location with map pin icon
  - Species common and scientific names
  - Article title
  - Researcher photo and name
- **Surprise Me**: Random dispatch selection with haptic feedback
- **Coming Soon Teaser**: Animated placeholder card for future content
- **Dispatch Detail Pages**: Full article view with:
  - Hero image with Ken Burns animation effect
  - Multiple content section types (text, researcher bio, fun facts, key points)
  - Species information sidebar
  - Conservation status explanation

### The Real Story

Educational articles that debunk common misconceptions.

- **Frogs vs Toads**: Detailed comparison article explaining the biological differences
- **Expandable sections**: Collapsible content areas for deeper exploration

### Wild Decisions

Interactive choose-your-own-adventure style conservation scenarios.

- **Scenario Cards**: Visual cards with difficulty ratings
- **Decision Trees**: Multi-path stories with branching choices
- **Outcome Tracking**: Shows consequences of conservation decisions
- **Educational Outcomes**: Each ending explains the real-world implications

### Myth Busters

Debunking common myths about amphibians.

- **Myth Cards**: Swipeable cards revealing truth behind myths
- **Visual Reveals**: Before/after style myth debunking
- **Source Citations**: Links to scientific sources

### Collection Pages

Curated content groupings for easy discovery.

- **New This Month**: Recently added content
- **MarshMellow's Picks**: Mascot-curated favorites
- **Most Popular**: Trending content based on engagement

---

## Navigation

### Header

- **Logo Link**: MarshMellow waving image with "The Ribbit Report" text, links to home
- **Search Button**: Magnifying glass icon opens full-screen search overlay
- **Hamburger Menu**: Three-line icon opens the navigation drawer

### Hamburger Menu

- **Scrollable Content**: Menu scrolls if content exceeds viewport height
- **Animated Entry**: Slide-in-right animation with backdrop fade
- **Organized Sections**:
  - Explore: Dispatches, The Real Story, Wild Decisions, Myth Busters, Species Files (coming soon), Conservation Toolkit (coming soon)
  - Collections: New This Month, MarshMellow's Picks, Most Popular
  - About: Settings/About page link
- **Coming Soon Badges**: Disabled items show "Coming Soon" indicator

### Bottom Navigation

- **Fixed Position**: Always visible at bottom of screen
- **Four Primary Destinations**: Home, Explore, Dispatches, Settings
- **Active State Indicators**: Visual feedback for current section
- **Safe Area Support**: Respects device safe areas (notch, home indicator)

---

## Mascot: MarshMellow

MarshMellow is a friendly frog character serving as the app's guide and mascot.

### Appearances

- **Welcome Modal**: Waving pose with animated background bubbles
- **Header Logo**: Small waving MarshMellow next to app title
- **Home Page**: Multiple poses including thinking, happy, and magnifying glass
- **404 Page**: Lost/confused pose
- **PWA Icons**: Waving head used as app icon
- **MarshMellow's Picks**: Featured in collection curation

### Image Assets

- marshmellow-wave.png: Waving greeting pose
- marshmellow-happy.png: Celebratory pose
- marshmellow-thinking.png: Contemplative poses (multiple variations)
- marshmellow-magnifying.png: Investigative/discovery pose
- marshmellow-lost.png: Confused pose for 404 page

---

## Settings and Preferences

### Display Settings

- **Dark Mode Toggle**: System-aware with manual override
  - Light theme: Cream/white backgrounds
  - Dark theme: Dark gray backgrounds with adjusted text colors
- **Text Size Options**: Three sizes (Small, Medium, Large) for accessibility
  - Affects body text, paragraphs, and readable content
  - Preserves heading hierarchy
- **Glossary Highlights Toggle**: Enable/disable interactive glossary term highlighting
  - When enabled: Glossary terms show with dotted underline and tap-for-definition tooltips
  - When disabled: Plain text without interactive highlights

### Language / Translation Helper (Beta)

- **Browser-Based Translation**: Leverages browser translation APIs for multilingual support
- **Supported Languages**: English (default), Spanish, French, Portuguese, German
- **Beta Designation**: All non-English options clearly marked as beta
- **MarshMellow Info Box**: When non-English selected, shows friendly explanation:
  - Scientific names remain unchanged (universal across languages)
  - Translations may be imperfect (browser-based)
  - Glossary still shows original English definitions
  - Requires internet connection
- **Feedback Link**: Easy email link to report translation issues (info@amphibians.org)
- **Multilingual Section Header**: "Language / Idioma / Langue" for discoverability

### Install as App Section

- **Device Detection**: Identifies iOS, Android, or desktop
- **Step-by-Step Instructions**: Platform-specific installation guide with icons
- **Installation Status**: Shows "App Installed" confirmation when running as PWA

### Quick Links

- **Meet MarshMellow**: About the mascot page
- **Conservation Status Guide**: IUCN status explanation
- **Amphibian Survival Alliance**: External link to ASA website

### App Information

- Version number display
- Copyright notice
- Organization attribution

---

## User Experience Features

### Haptic Feedback

- **Light Haptics**: Navigation taps, filter selections
- **Medium Haptics**: Primary actions like "Surprise Me"
- **Device Support**: Graceful degradation on unsupported devices

### Animations

- **Page Transitions**: Smooth navigation between views
- **Ken Burns Effect**: Slow zoom on hero images
- **Slide Animations**: Menu drawer, bottom sheets
- **Fade Animations**: Modal backdrops, content reveals
- **Scale Animations**: Modal entrance effects
- **Bounce Animations**: Decorative elements in welcome modal

### Loading States

- **Lazy Loading**: Images load on scroll into viewport
- **Skeleton States**: Placeholder UI during content load

### Error Handling

- **404 Page**: Custom "Lost in the Wild" page with MarshMellow
  - Friendly messaging appropriate for children
  - Navigation options to return home or explore
  - Fun footer message about frog safety

---

## Technical Architecture

### Framework and Build

- **React 19**: Latest React with concurrent features
- **TypeScript**: Full type safety throughout codebase
- **Vite**: Fast development server and optimized production builds
- **React Router v6**: Client-side routing with nested routes

### Styling

- **Tailwind CSS v4**: Utility-first CSS framework
- **Custom Design Tokens**: Consistent color palette and spacing
- **Dark Mode**: CSS class-based theme switching
- **Responsive Design**: Mobile-first with tablet/desktop breakpoints
- **Custom Fonts**: Baloo 2 for headings, Nunito for body text

### State Management

- **React Context**: Theme and text size preferences
- **localStorage**: Persisted user preferences and welcome modal state
- **URL State**: Filter states reflected in navigation

### Performance Optimizations

- **Image Optimization**: Resized assets (500px max width)
- **Lazy Loading**: Deferred image loading with native lazy attribute
- **Code Splitting**: Route-based chunking
- **Service Worker Caching**: Network-first strategy with offline fallback
- **Tree Shaking**: Unused code elimination in production

### Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG-compliant color combinations
- **Text Scaling**: User-adjustable text sizes

---

## Data Structure

### Dispatches

Each dispatch contains:
- Unique identifier
- Species information (common name, scientific name)
- Location (country, region, coordinates)
- IUCN conservation status
- Hero image with alt text
- Article title and content sections
- Researcher information with photo

### Content Sections

Modular section types for flexible content:
- Text sections with rich formatting
- Researcher bio sections
- Fun fact callouts
- Key point summaries
- Image galleries

---

## Regional Color Palettes

Location-specific color schemes reflecting local environments:

- **Panama**: Purple/gold tropical rainforest theme
- **Peru**: Blue/gold high Andes theme
- **Argentina**: Orange/green Patagonian steppe theme
- **Nepal**: Gray/teal Himalayan streams theme
- **India (Kudremukh)**: Blue/green monsoon forest theme
- **India (Western Ghats)**: Green/gold lush canopy theme

---

## IUCN Status Integration

Conservation status display throughout the app:

- **CR (Critically Endangered)**: Red badge
- **EN (Endangered)**: Orange badge
- **VU (Vulnerable)**: Yellow badge
- **NT (Near Threatened)**: Light green badge
- **LC (Least Concern)**: Green badge

Dedicated Conservation Status page explains each category with examples.

---

## Glossary System

Kid-friendly definitions for scientific, conservation, and geographic terms.

### Data Structure

- **58 terms** with definitions written for ages 9-12
- **Three categories**: scientific, conservation, geographic
- **Pronunciation guides** for difficult words (e.g., "am-FIB-ee-un" for amphibian)
- **Helper functions** for lookups and filtering

### Term Categories

- **Scientific**: amphibian, ecosystem, endemic, metamorphosis, species, habitat, etc.
- **Conservation**: biodiversity, Critically Endangered, habitat loss, restoration, sanctuary, etc.
- **Geographic**: Andes, Himalayas, monsoon, Patagonia, Western Ghats, wetlands, etc.

### Interactive Tooltips

- **`<GlossaryTerm>` component**: Wraps individual terms with interactive tooltips
- **`<GlossaryText>` component**: Automatically detects and wraps glossary terms in text blocks
- **Visual styling**: Green dotted underline indicates clickable terms
- **Tooltip content**: Shows term, pronunciation (if available), definition, and category badge
- **Mobile**: Tap to show/hide definition tooltip
- **Desktop**: Click to show/hide (with outside-click to dismiss)
- **Smart positioning**: Tooltips appear above or below based on available screen space, and align left/center/right to stay on screen
- **First-occurrence only**: Each term is only highlighted once per text block to avoid clutter
- **User preference**: Can be disabled via Settings toggle for distraction-free reading

### Future Enhancements

- Optional dedicated Glossary page for browsing all terms alphabetically

---

## Search

Full-screen search overlay for finding content across the entire app.

### Search Index

Unified search system that indexes all content types:
- **Dispatches**: Species names (common and scientific), countries, regions, researcher names, article titles, and content
- **Glossary Terms**: Term names, definitions, and categories
- **Myth Busters**: Claims, reveals, and answers
- **Real Stories**: Titles, subtitles, and content
- **Wild Decisions**: Titles, labels, prompts, and story content

### Search Interface

- **Full-screen overlay**: Clean, focused search experience
- **Live search**: Results update as you type
- **Grouped results**: Results organized by content type with color-coded badges
- **Type indicators**: Icons and labels for each content type (Dispatch, Glossary, Myth Buster, etc.)
- **Popular searches**: Suggested search terms when search is empty
- **No results state**: Friendly MarshMellow illustration with helpful message

### Search Scoring

Smart relevance scoring prioritizes results:
- Exact title match: Highest priority
- Title starts with query: High priority
- Title contains query: Medium priority
- Content contains query words: Standard priority

### Future-Proof Design

New content types can be added to search by simply adding entries to the unified search index.

---

## Analytics

Privacy-focused analytics for tracking app usage without collecting personal data.

### Data Collected

| Data | Example | Purpose |
|------|---------|---------|
| Page path | `/dispatches/india-western-ghats` | Track which content is popular |
| Page title | `Western Ghats Frog \| The Ribbit Report` | Readable page names in dashboard |
| Referrer | `https://google.com` | Understand how users find the app |
| Timestamp | Auto-generated | Track trends over time |

### Data NOT Collected

- No IP addresses
- No device information
- No user IDs or identifiers
- No cookies
- No location data
- No personal information
- No tracking across sessions

### Admin Dashboard

- **Location**: `/admin/analytics` (password protected)
- **Access**: Hidden route, not linked in app UI
- **Authentication**: Session-based password protection
- **Displays**:
  - Total page views (all time)
  - Today's page views
  - This week's page views
  - Top 10 most popular pages
  - Daily stats for last 30 days

### Technical Implementation

- **Frontend**: `AnalyticsTracker` component tracks page views on route changes
- **Backend**: Express server with PostgreSQL database (hosted on Replit)
- **API Endpoints**:
  - `POST /api/analytics/event` - Record page view
  - `GET /api/analytics/stats` - Fetch dashboard data

### Future Tracking Options

Additional COPPA-compliant events that could be tracked:
- Search queries used
- Glossary term clicks
- Wild Decision choices
- Content section expansions

---

## Privacy & Compliance

### COPPA Compliance

The Children's Online Privacy Protection Act (COPPA) applies to apps directed at children under 13. The Ribbit Report is designed for ages 9-12 and maintains strict COPPA compliance.

**How we comply:**

1. **No Personal Data Collection**
   - No account creation required
   - No names, emails, or identifiers collected
   - No location tracking
   - No device fingerprinting

2. **No Cookies**
   - All preferences stored in localStorage (device-only, not transmitted)
   - No tracking cookies
   - No third-party cookies

3. **Privacy-Friendly Analytics**
   - Only aggregate page view counts
   - No way to identify individual users
   - No cross-session tracking
   - No behavioral profiling

4. **No Third-Party Services**
   - No Google Analytics
   - No Facebook Pixel
   - No advertising networks
   - No social media trackers

5. **No External Data Sharing**
   - Analytics data stays on our servers
   - No data sold or shared with third parties

### Data Storage

| Data Type | Storage Location | Duration |
|-----------|------------------|----------|
| Theme preference | localStorage | Until cleared |
| Text size preference | localStorage | Until cleared |
| Language preference | localStorage | Until cleared |
| Glossary toggle state | localStorage | Until cleared |
| Welcome modal seen | localStorage | Until cleared |
| Admin session auth | sessionStorage | Until tab closed |
| Page view events | PostgreSQL (Replit) | Indefinite |

### Privacy Notice

The app displays "Privacy-friendly analytics. No cookies. No personal data." on the analytics dashboard.

### Contact

For privacy questions: info@amphibians.org

---

## Future Features (Coming Soon)

### Species Files

Comprehensive database of amphibian species with:
- Detailed species profiles
- Range maps
- Conservation status history
- Related dispatches

### Conservation Toolkit

Interactive resources for young conservationists:
- Backyard habitat guides
- Citizen science project connections
- Educational activities
- Printable resources

---

## Browser Support

- Safari (iOS 12+)
- Chrome (Android 8+, Desktop)
- Firefox (Desktop)
- Edge (Desktop)

PWA installation supported on all major mobile browsers.
