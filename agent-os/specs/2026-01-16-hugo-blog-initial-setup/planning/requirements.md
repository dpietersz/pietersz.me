# Spec Requirements: Hugo Blog Initial Setup

## Initial Description

Initial implementation of a personal blog for Dimitri Pietersz using Hugo static site generator with Gruvbox theme.

This is the foundational setup for pietersz.me, covering the complete initial implementation of the blog platform. The scope includes all 20 roadmap items from product planning: Hugo site structure, Gruvbox theme, homepage, blog posts, navigation, about page, responsive design, syntax highlighting, RSS feed, SEO, social media links, dark/light mode, tags, search functionality, and deployment pipeline.

## Requirements Discussion

### First Round Questions

**Q1:** For social media profiles, which platforms should be linked in the navigation/footer?
**Answer:**
- GitHub: dpietersz (github.com/dpietersz)
- X/Twitter: dimitrip80 (x.com/dimitrip80)
- Instagram: dimi.tri80 (instagram.com/dimi.tri80)
- LinkedIn: linkedin.com/in/dpietersz

**Q2:** For the About page content, what information should be included?
**Answer:**
- Include a circular profile photo (like Peter Steinberger's blog steipete.me)
- Brief and simple style like Peter Steinberger's about page
- Content focus: Data Engineer by day, loves coding and AI, passionate about new technologies
- Company name "Surpassion" - represents surpassing yourself with passion
- Freelance Data Engineer and developer building first SaaS product
- FEATURE: Show GitHub activity chart/diagram like Peter does (GitHub contribution graph)

**Q3:** How should sidenotes behave on mobile devices?
**Answer:**
- Always shown inline (not collapsed/hidden)
- Special styling with distinctive background/border treatment
- Reference: Daniel Miessler's mobile sidenote design where sidenotes appear as styled inline blocks

**Q4:** Which social sharing platforms should be enabled for posts?
**Answer:**
- Same as steipete.me: X, BlueSky, LinkedIn, WhatsApp, Facebook, Telegram, Pinterest, Email

**Q5:** Should analytics be included in the initial launch?
**Answer:**
- Skip for initial launch (out of scope)

**Q6:** How should the domain configuration work?
**Answer:**
- PRIMARY: pietersz.me (apex domain - the real site)
- REDIRECT: www.pietersz.me -> pietersz.me
- Note: This is opposite of initial tech-stack.md - apex is primary, www redirects to it

**Q7:** What features should be excluded from initial launch?
**Answer:**
- Analytics
- Comments system
- Newsletter signup
- Contact form

**Q8:** What design requirements are most important?
**Answer:**
- Minimal, retro vibes with Gruvbox theme + Monaspace Neon font
- Avoid information overload
- Easy on the eyes for reading
- MUST have "quirkiness" or "unique identity/style" that stands out from other developer blogs
- Some layout/styling should be different from standard blogs to stand out
- BUT must not compromise minimalism
- Need to identify what makes this blog visually distinctive beyond just Gruvbox + Monaspace

**Q9:** Contact information?
**Answer:**
- Name: Dimitri Pietersz
- Email: dimitri@pietersz.me
- Domain: pietersz.me

### Existing Code to Reference

**Similar Features Identified:**
- Reference: steipete.me (Peter Steinberger's blog) - About page layout with circular photo and GitHub activity
- Reference: Daniel Miessler's blog - Mobile sidenote styling with inline blocks

No similar existing features in this codebase (this is the initial setup).

### Follow-up Questions

None required - all questions answered comprehensively.

## Visual Assets

### Files Provided:

Bash check confirmed: No visual files currently in the visuals folder.

**User mentioned providing:**
1. Profile photo (user's LinkedIn photo) - to be used on About page in circular format
2. Daniel Miessler mobile sidenote screenshot - reference for mobile sidenote styling

These files should be added to: `/Users/pietersz/dev/Projects/pietersz.me/agent-os/specs/2026-01-16-hugo-blog-initial-setup/planning/visuals/`

### Visual Insights:

Based on referenced sites (steipete.me, Daniel Miessler):
- About page should feature circular profile photo prominently
- GitHub contribution graph/activity display on About page
- Sidenotes on mobile should be styled inline blocks with distinctive background/border
- Minimal, clean layout that doesn't compromise readability

## Requirements Summary

### Functional Requirements

**Core Site Structure:**
- Hugo static site with Gruvbox theme
- Homepage with post listings
- About page with personal intro
- Posts section with blog content
- Navigation: Posts, About, Search, RSS, Theme toggle

**About Page Features:**
- Circular profile photo display
- Brief bio: Data Engineer, coder, AI enthusiast, technology passionate
- Company mention: Surpassion (surpassing yourself with passion)
- Role: Freelance Data Engineer and developer building first SaaS product
- GitHub activity chart/contribution graph integration

**Social Integration:**
- Social profile links: GitHub (dpietersz), X/Twitter (dimitrip80), Instagram (dimi.tri80), LinkedIn (dpietersz)
- Social sharing on posts: X, BlueSky, LinkedIn, WhatsApp, Facebook, Telegram, Pinterest, Email

**Sidenotes/Margin Notes:**
- Desktop: Display in gutter/margin area
- Mobile: Always visible inline (not collapsed)
- Mobile styling: Distinctive background/border treatment (reference Daniel Miessler style)

**Technical Features:**
- Dark/Light theme toggle with Gruvbox palette
- Syntax highlighting (Chroma with Gruvbox)
- FlexSearch integration
- RSS/Atom feed
- GoAT ASCII diagrams (Hugo native)
- Mermaid.js for complex diagrams
- Read time calculation on posts
- Tag system (visible in post detail, hidden from lists)
- Related posts feature

### Reusability Opportunities

- This is the initial implementation, no existing code to reuse
- External references for design patterns:
  - steipete.me: About page structure, GitHub activity display, social sharing buttons
  - Daniel Miessler's blog: Mobile sidenote styling

### Scope Boundaries

**In Scope:**
- Complete Hugo site setup with Gruvbox theme
- All 20 roadmap items (except analytics)
- Homepage, About page, Posts structure
- Navigation with social links
- Dark/Light theme toggle
- Syntax highlighting with Gruvbox
- Sidenotes with responsive mobile behavior
- Diagrams (GoAT, Mermaid)
- Search functionality (FlexSearch)
- RSS feed
- Social sharing
- Related posts
- SEO meta tags and sitemap
- GitHub Actions CI/CD
- GitHub Pages deployment
- Cloudflare DNS configuration
- First blog post

**Out of Scope:**
- Analytics (deferred to future)
- Comments system
- Newsletter signup
- Contact form

### Technical Considerations

**Domain Configuration (Updated from tech-stack.md):**
- PRIMARY domain: pietersz.me (apex domain)
- REDIRECT: www.pietersz.me -> pietersz.me
- This reverses the original tech-stack.md assumption
- DNS: A records for apex pointing to GitHub Pages IPs
- CNAME record for www redirecting to apex

**Design Philosophy:**
- Minimal, retro vibes
- Gruvbox color palette (light and dark modes)
- Monaspace Neon typography
- Must have unique identity/quirkiness that stands out
- Cannot compromise on minimalism
- Easy on eyes for reading
- Avoid information overload

**Design Distinctiveness Challenge:**
The user explicitly wants something that stands out from standard developer blogs while remaining minimal. The spec writer should consider creative approaches beyond just theme colors and fonts to create visual distinctiveness.

**Hosting Stack:**
- Hugo Extended (required for SCSS)
- GitHub Pages hosting
- GitHub Actions for CI/CD
- Cloudflare for DNS management

**Content Structure:**
```
content/
  posts/               # Blog posts as page bundles
    _index.md          # Posts list page
    YYYY-MM-DD-post-name/
      index.md         # Post content
      images/          # Co-located images
  about/
    index.md           # About page
  _index.md            # Homepage
```

**Configuration Files:**
- hugo.toml - Main Hugo configuration
- .github/workflows/hugo.yml - GitHub Actions deployment
- CNAME - Custom domain for GitHub Pages
