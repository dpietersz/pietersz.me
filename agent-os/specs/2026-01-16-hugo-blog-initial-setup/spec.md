# Specification: Hugo Blog Initial Setup

## Goal

Create a minimal, retro-styled personal blog for Dimitri Pietersz at pietersz.me using Hugo with Gruvbox theme, featuring distinctive visual identity through asymmetric layouts, Monaspace typography, and thoughtful sidenote implementation while maintaining excellent readability.

## User Stories

- As a reader, I want a clean, distraction-free reading experience so that I can focus on the content without visual noise
- As a visitor, I want to quickly understand who Dimitri is and what he writes about so that I can decide to follow his work

## Specific Requirements

**Hugo Site Foundation**
- Initialize Hugo site with Extended Hugo (required for SCSS)
- Configure hugo-theme-gruvbox as Hugo module
- Set baseURL to https://pietersz.me
- Configure site metadata: title "pietersz.me", author "Dimitri Pietersz"
- Enable taxonomies for tags only (no categories)
- Configure permalinks as /posts/:year/:slug/

**Gruvbox Theme Configuration**
- Set defaultTheme to "dark" (user's retro preference)
- Use themeColor "orange" to complement Gruvbox warmth
- Set themeContrast to "medium" for readability balance
- Configure Prism.js with gruvbox-dark and gruvbox-light themes
- Enable FlexSearch for client-side search functionality
- Disable JSON Resume integration (not needed)

**Typography System**
- Integrate Monaspace Neon font family from GitHub releases as web font
- Use Monaspace Neon exclusively for ALL text: headings, body, code blocks, UI elements
- Load font weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Set base font size 18px for comfortable reading
- Configure line-height 1.7 for body text (slightly increased for monospace readability), 1.3 for headings
- Enable Monaspace texture healing and code ligatures features
- Fallback stack: "Monaspace Neon", "SF Mono", "Fira Code", monospace

**Visual Distinctiveness Strategy**
- Implement asymmetric content layout: main content offset left, creating generous right margin for sidenotes
- Add subtle "terminal cursor" blink animation after site title (CSS-only, non-intrusive)
- Use Gruvbox accent colors sparingly as "highlighter pen" strokes on key headings
- Create monospace-styled metadata (date, read time) resembling git log output
- Add subtle scan-line texture overlay on dark mode (CSS gradient, very low opacity)
- Implement subtle hover state on post cards: slight left-shift with accent border reveal

**Homepage Layout**
- Display site title and tagline prominently
- List recent posts (10 most recent) with title, date, read time
- Post list styled as minimal text links (no cards, no images)
- Include brief intro paragraph above post list
- Footer with social links and copyright

**Blog Post Structure**
- Use page bundles: posts/YYYY-MM-DD-post-name/index.md with co-located images/
- Front matter: title, subtitle (optional), date, tags, draft, description
- Display read time calculation (Hugo template)
- Show tags at post bottom only (hidden from listings)
- Display related posts (3 maximum) based on tag overlap

**Navigation System**
- Minimal horizontal nav: Posts, About, Search icon, RSS icon, Theme toggle icon
- No hamburger menu on mobile; stack nav items vertically
- Social icons in footer only (not nav): GitHub, X, Instagram, LinkedIn
- Social icons have subtle rotation animation on hover (6 degrees, as in steipete.me)

**About Page**
- Circular profile photo (planning/visuals/profile-photo.jpg) with subtle border
- Brief bio: Data Engineer, coder, AI enthusiast, building Surpassion
- Mention freelance work and SaaS development journey
- GitHub activity chart using ghchart.rshah.org/dpietersz service
- Social links row below bio
- Contact email: dimitri@pietersz.me

**Sidenotes Implementation**
- Desktop (>1024px): Display in right margin/gutter area, positioned inline with reference
- Use Hugo shortcode: {{< sidenote >}}content{{< /sidenote >}}
- Mobile (<1024px): Render inline as styled block with distinct background
- Mobile styling: Gruvbox bg1 background, left border accent, italic text, 0.9em font size
- Reference Daniel Miessler's mobile pattern from planning/visuals/sidenote-mobile-example.png

**Social Sharing**
- Position at post bottom, after content, before related posts
- Platforms: X, BlueSky, LinkedIn, WhatsApp, Facebook, Telegram, Pinterest, Email
- Use SVG icons from Simple Icons or Tabler Icons
- Share URLs include post title and URL
- Subtle styling: text links with icons, not prominent buttons

**Syntax Highlighting**
- Use Prism.js (theme built-in) with Gruvbox color schemes
- Auto-switch between gruvbox-dark and gruvbox-light based on theme
- Enable line numbers for code blocks >5 lines
- Support languages: Go, Python, JavaScript, TypeScript, Bash, YAML, JSON, SQL, Markdown
- Copy-to-clipboard button on code blocks

**Diagram Support**
- Enable GoAT for ASCII diagrams (Hugo native, no config needed)
- Integrate Mermaid.js for complex diagrams (flowcharts, sequence)
- Load Mermaid.js only on pages containing mermaid code blocks
- Style Mermaid output to use Gruvbox color variables

**Search Functionality**
- Use FlexSearch integration from Gruvbox theme
- Index post titles, descriptions, and content
- Search UI: Modal overlay triggered by search icon
- Style search input and results to match Gruvbox theme

**RSS Feed**
- Auto-generate at /index.xml using Hugo built-in
- Include full post content (not just summary)
- Set feed title to "pietersz.me" with appropriate description

**SEO Configuration**
- Configure Open Graph meta tags for social sharing
- Add Twitter Card meta tags (summary_large_image)
- Generate sitemap.xml automatically
- Create robots.txt allowing all crawlers
- Set canonical URLs for all pages

## Visual Design

**`planning/visuals/profile-photo.jpg`**
- Use as About page profile image
- Crop to square aspect ratio
- Display at 200px diameter circular frame
- Add 3px border using Gruvbox fg0 color
- Subtle box-shadow for depth

**`planning/visuals/sidenote-mobile-example.png`**
- Reference shows sidenotes as inline blocks on mobile
- Light background differentiation from main content
- Left border accent line for visual separation
- Slightly reduced font size compared to body text
- Adequate padding (1rem) for breathing room
- Full-width within content column

## Existing Code to Leverage

**steipete.me About Page Pattern**
- GitHub activity chart integration using ghchart.rshah.org service
- Circular profile photo with side-by-side bio layout on desktop
- Flex layout switching to stacked on mobile
- Simple, scannable bio paragraphs

**steipete.me Social Icons Pattern**
- SVG icons with stroke styling (not filled)
- Hover animation: rotate-6 (6 degree rotation)
- Consistent sizing across desktop/mobile
- Screen reader labels for accessibility

**steipete.me Share Links Pattern**
- Platforms array configuration in constants file
- URL construction with title and permalink placeholders
- Icon mapping pattern for dynamic rendering
- Accessible link titles and sr-only labels

**hugo-theme-gruvbox Features**
- Built-in FlexSearch integration for search
- Prism.js syntax highlighting with theme switching
- PostCSS pipeline with PurgeCSS for production
- Placeholder partials for head/footer customization

**Gruvbox Theme Customization Points**
- head/head_start.html for custom fonts loading
- head/head_end.html for additional scripts
- footer_end.html for custom footer content
- comments.html placeholder (leave empty, out of scope)

## Out of Scope

- Analytics integration (Plausible, Google Analytics, or similar)
- Comments system (Giscus, Disqus, or similar)
- Newsletter signup form or email capture
- Contact form functionality
- Multi-language/i18n support
- Archive page by year/month
- Categories taxonomy (tags only)
- Author pages or multi-author support
- Image gallery or lightbox functionality
- Table of contents for posts
