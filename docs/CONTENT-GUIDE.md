# Content Guide

How to create posts and pages for pietersz.me.

## Folder Structure

```
content/
├── posts/
│   ├── _index.md
│   └── 2026/
│       ├── simple-post.md              # Post without images
│       └── post-with-images/           # Post with images (page bundle)
│           ├── index.md
│           ├── hero.jpg
│           └── diagram.png
└── about/
    └── index.md
```

## Creating a Post

### Simple Post (no images)

Create a markdown file: `content/posts/YYYY/post-title.md`

```markdown
---
title: 'My Post Title'
subtitle: 'Optional subtitle'
date: 2026-01-16T10:00:00+01:00
draft: false
description: 'Brief description for SEO and post listings.'
tags: ['tag1', 'tag2']
pin: false
---

Your content here...
```

### Post with Images (page bundle)

Create a folder: `content/posts/YYYY/post-title/`

```
content/posts/2026/my-post/
├── index.md
├── hero.jpg
└── screenshot.png
```

Reference images with relative paths:

```markdown
![Alt text](hero.jpg)
![Screenshot](screenshot.png)
```

## Front Matter Options

| Field         | Required | Description                                    |
|---------------|----------|------------------------------------------------|
| `title`       | Yes      | Post title                                     |
| `date`        | Yes      | Publication date (ISO 8601 format)             |
| `draft`       | No       | Set `true` to hide from production             |
| `description` | No       | SEO description, shown in post listings        |
| `subtitle`    | No       | Shown below title on post page                 |
| `tags`        | No       | Array of tags: `['ai', 'data']`                |
| `pin`         | No       | Set `true` to pin post to top of listings      |

---

## Shortcodes

### Sidenote (Custom)

Add margin notes (desktop) or inline callouts (mobile):

```markdown
{{</* sidenote */>}}This appears in the margin on desktop.{{</* /sidenote */>}}
```

### Figure

Display images with captions:

```markdown
{{</* figure src="image.jpg" alt="Description" caption="Image caption" */>}}
```

With link:

```markdown
{{</* figure
  src="/images/photo.jpg"
  alt="Photo description"
  link="https://example.com"
  caption="Click to visit"
  class="my-class"
*/>}}
```

**Arguments:** `src`, `alt`, `caption`, `title`, `link`, `target`, `rel`, `class`, `width`, `height`, `loading`

### Details (Collapsible)

Create expandable/collapsible sections:

```markdown
{{</* details summary="Click to expand" */>}}
Hidden content here. Supports **markdown**.
{{</* /details */>}}
```

Open by default:

```markdown
{{</* details summary="Already open" open=true */>}}
This content is visible initially.
{{</* /details */>}}
```

**Arguments:** `summary` (default: "Details"), `open` (bool), `class`, `name`, `title`

### Highlight

Syntax highlighting with options:

```markdown
{{</* highlight python "linenos=inline, hl_lines=2 4-6" */>}}
def example():
    important = True    # highlighted
    normal = False
    also = True         # highlighted
    more = True         # highlighted
    last = True         # highlighted
{{</* /highlight */>}}
```

Inline code highlighting:

```markdown
Use {{</* highlight go "hl_inline=true" */>}}fmt.Println("inline"){{</* /highlight */>}} in text.
```

**Options:** `linenos`, `hl_lines`, `linenostart`, `style`, `hl_inline`

### YouTube

Embed YouTube videos:

```markdown
{{</* youtube VIDEO_ID */>}}

{{</* youtube id=dQw4w9WgXcQ start=30 end=60 */>}}
```

**Arguments:** `id`, `start`, `end`, `autoplay`, `mute`, `loop`, `controls`, `loading`, `title`, `class`

### Vimeo

Embed Vimeo videos:

```markdown
{{</* vimeo VIDEO_ID */>}}

{{</* vimeo id=123456789 class="my-video" */>}}
```

### X (Twitter)

Embed tweets:

```markdown
{{</* x user="username" id="1234567890" */>}}
```

### Ref / Relref

Create links to other pages:

```markdown
[Link text]({{</* ref "/posts/2026/other-post" */>}})

[Relative link]({{</* relref "other-post" */>}})
```

### Param

Insert front matter or site config values:

```markdown
This post was written by {{</* param author */>}}.
```

### QR Code

Generate QR codes:

```markdown
{{</* qr text="https://pietersz.me" */>}}
```

---

## Code Blocks

Fenced code blocks with syntax highlighting and line numbers:

````markdown
```python
def hello():
    print("Hello, World!")
```
````

Supported languages: python, javascript, typescript, go, rust, sql, bash, yaml, json, html, css, and [200+ more](https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages).

### Highlight Specific Lines

````markdown
```python {hl_lines=[2,4]}
def example():
    important_line = True  # highlighted
    normal_line = False
    also_important = True  # highlighted
```
````

---

## Images

### In Page Bundles

```markdown
![Alt text](image.jpg)
```

### From Static Folder

Place images in `static/images/` and reference:

```markdown
![Alt text](/images/my-image.jpg)
```

### With Caption (Figure Shortcode)

```markdown
{{</* figure src="image.jpg" caption="Image caption here" */>}}
```

---

## Markdown Basics

### Links

```markdown
[External link](https://example.com)
[Internal link](/posts/2026/other-post/)
[Email](mailto:dimitri@pietersz.me)
```

### Lists

```markdown
- Bullet point
- Another point
  - Nested point

1. Numbered item
2. Another item
```

### Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.
```

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

### Horizontal Rule

```markdown
---
```

### Raw HTML

HTML is supported when needed:

```html
<details>
<summary>Click to expand</summary>

Hidden content here.

</details>
```

---

## Draft Posts

Set `draft: true` in front matter. View drafts locally:

```bash
hugo server -D
```

Drafts are excluded from production builds.

## URL Structure

Posts are published at: `pietersz.me/posts/YYYY/post-slug/`

The slug is derived from the filename (without `.md`).

