# SEO Configuration Documentation

## Overview
This document describes the SEO configuration implemented for pietersz.me.

## Components

### 1. Open Graph Meta Tags
**Location:** `/layouts/partials/opengraph.html`

Configured meta tags:
- `og:url` - Canonical permalink
- `og:site_name` - Site title
- `og:title` - Page/post title
- `og:description` - Page description or summary
- `og:locale` - Language locale (en_US)
- `og:type` - "article" for posts, "website" for pages
- `og:image` - Featured image with fallbacks

For articles, additional tags:
- `article:section` - Content section
- `article:published_time` - Publication date
- `article:modified_time` - Last modified date
- `article:tag` - Post tags

**Image Priority:**
1. Front matter `images` parameter
2. Front matter `featuredImg` parameter
3. Site-wide default: `params.seo.og_image`

### 2. Twitter Card Meta Tags
**Location:** `/layouts/partials/twitter_cards.html`

Configured meta tags:
- `twitter:card` - "summary_large_image" (default)
- `twitter:title` - Page/post title
- `twitter:description` - Page description or summary
- `twitter:site` - @dimitrip80
- `twitter:creator` - @dimitrip80
- `twitter:image` - Featured image with same fallback logic as Open Graph

**Configuration in hugo.toml:**
```toml
[params.seo]
  twitter_site = "@dimitrip80"
  twitter_creator = "@dimitrip80"
  og_image = "/images/og-default.png"
  twitter_card = "summary_large_image"
```

### 3. Canonical URLs
**Location:** `/layouts/partials/schema.html`

Every page includes a canonical link element pointing to its permalink:
```html
<link rel="canonical" href="{{ .Permalink }}">
```

This prevents duplicate content issues and ensures proper URL indexing.

### 4. Sitemap
**Configuration:** `hugo.toml`

Hugo automatically generates `/sitemap.xml` with all public pages.

Settings:
```toml
[sitemap]
  changefreq = 'weekly'
  filename = 'sitemap.xml'
  priority = 0.5
```

The sitemap includes:
- Homepage
- All blog posts
- About page
- Tag pages
- Post listing pages

### 5. Robots.txt
**Configuration:** `hugo.toml`

Hugo automatically generates `/robots.txt` when `enableRobotsTXT = true`.

Content:
```
User-agent: *
Sitemap: https://pietersz.me/sitemap.xml
```

This allows all search engine crawlers and points them to the sitemap.

### 6. Additional SEO Features

**Structured Data (JSON-LD):**
The Hermit V2 theme includes structured data via `/themes/hermit-v2/layouts/_partials/webschema.html`:
- WebSite schema for homepage
- BlogPosting schema for articles

**Meta Tags:**
- `robots` - "index, follow" for crawlable pages
- `author` - Post author name
- `description` - Page description
- `theme-color` - Browser theme color (#282828)

## Usage

### Adding Featured Images to Posts

To add a featured image that will appear in social media previews:

**Option 1: Single image**
```yaml
---
title: "My Post"
featuredImg: "/images/my-post-featured.jpg"
---
```

**Option 2: Multiple images**
```yaml
---
title: "My Post"
images:
  - "/images/my-post-featured.jpg"
  - "/images/my-post-alt.jpg"
---
```

### Customizing Twitter Card Type

To use "summary" card instead of "summary_large_image" for a specific post:

Not currently supported per-post, but can be changed globally in `hugo.toml`:
```toml
[params.seo]
  twitter_card = "summary"
```

### Testing Social Media Previews

1. **Twitter/X Card Validator:**
   https://cards-dev.twitter.com/validator

2. **Facebook Sharing Debugger:**
   https://developers.facebook.com/tools/debug/

3. **LinkedIn Post Inspector:**
   https://www.linkedin.com/post-inspector/

## Files Modified

1. `/hugo.toml` - Added SEO configuration section and sitemap settings
2. `/layouts/partials/opengraph.html` - Custom Open Graph implementation
3. `/layouts/partials/twitter_cards.html` - Custom Twitter Cards implementation
4. `/layouts/partials/schema.html` - Canonical URL implementation

## Notes

- The theme's `structure-extra.html` partial loads our custom Open Graph and Twitter Cards partials
- Canonical URLs use the `baseURL` configured in `hugo.toml` (https://pietersz.me)
- Robots.txt and sitemap.xml are automatically generated on each build
- All SEO meta tags are production-ready and follow best practices
