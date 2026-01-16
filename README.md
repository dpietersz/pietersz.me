# Dimitri Pietersz's Personal Website

This is the source code for my personal website, built with [Hugo](https://gohugo.io) and the [Hermit-V2](https://github.com/1bl4z3r/hermit-V2) theme.

## About

I'm Dimitri Pietersz, a Data Engineer and AI enthusiast building [Surpassion](https://surpassion.ai). This website hosts my personal blog where I write about AI workflows, data engineering, productivity, homelab projects, and building in public.

## Project Structure

```text
├── assets/
│   └── scss/             # Custom SCSS styles (userstyles.scss)
├── content/
│   ├── about/            # About page
│   └── posts/            # Blog posts in Markdown format
├── layouts/
│   ├── _default/         # Base templates
│   ├── partials/         # Reusable template partials
│   ├── posts/            # Post-specific templates
│   └── shortcodes/       # Custom shortcodes
├── static/               # Static assets (images, fonts, favicon)
├── themes/
│   └── hermit-v2/        # Hugo theme (submodule)
├── hugo.toml             # Hugo configuration
└── LICENSE               # Dual license (CC BY 4.0 + MIT)
```

## Commands

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `hugo server`          | Starts local dev server at `localhost:1313` |
| `hugo`                 | Build the production site to `./public/`    |
| `hugo server -D`       | Include draft posts in dev server           |

## License

This repository uses dual licensing:

- **Documentation & Blog Posts**: Licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- **Code & Code Snippets**: Licensed under the [MIT License](LICENSE)

See the [LICENSE](LICENSE) file for full details.
