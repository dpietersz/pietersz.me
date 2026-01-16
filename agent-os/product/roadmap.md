# Product Roadmap

1. [ ] Hugo Site Configuration — Configure Hugo with hugo-theme-gruvbox, set up site metadata (title, description, author, base URL), configure permalinks, and enable built-in features (syntax highlighting with Chroma, taxonomies for tags). `S`

2. [ ] Content Structure Setup — Create content directory structure with posts/, about/, and root _index.md. Configure page bundles for posts to support co-located images. Create placeholder content for testing. `XS`

3. [ ] Navigation and Menu — Configure main navigation with Posts, About, and RSS links. Add social links (GitHub, X/Twitter, LinkedIn) with icon-based display. Implement subtle rotation animation on social icon hover. `S`

4. [ ] Typography and Font Integration — Integrate GitHub Next Monaspace Neon font via web fonts. Configure font stack for headings, body text, and code blocks. Ensure proper fallbacks and loading performance. `S`

5. [ ] Theme Customization — Customize Gruvbox theme colors for both light and dark modes. Style title/subtitle hierarchy. Configure dark/light theme toggle. Refine overall visual appearance to match retro, minimal aesthetic. `M`

6. [ ] Blog Post Features — Implement read time calculation and display. Configure tag display in post detail view (hidden from post list). Style post metadata (date, read time, tags). Add title and subtitle styling. `S`

7. [ ] Syntax Highlighting and Code Blocks — Configure Chroma with Gruvbox color scheme. Style code blocks with proper contrast in both themes. Test with multiple languages (Go, Python, JavaScript, Bash, YAML). `XS`

8. [ ] Sidenotes and Margin Notes — Implement sidenote/margin note system in the gutter area. Create shortcode or markdown extension for easy authoring. Ensure responsive behavior on smaller screens. `M`

9. [ ] Diagram Support — Enable GoAT ASCII diagrams (Hugo native). Integrate Mermaid.js for complex diagrams. Style diagram output to match Gruvbox theme. Document usage for content authoring. `S`

10. [ ] Image Processing — Configure Hugo image processing for responsive images. Set up page bundle structure for post images. Implement lazy loading and proper sizing. Optimize for performance. `S`

11. [ ] Search Functionality — Configure FlexSearch integration (built into Gruvbox theme). Style search interface to match site design. Test search across posts and pages. `S`

12. [ ] Social Sharing — Add social sharing icons for X, LinkedIn, and other platforms. Position sharing UI appropriately in post layout. Implement share URLs with proper metadata. `S`

13. [ ] Related Content — Implement related posts feature based on tags or content similarity. Display related content suggestions at end of posts. Style to encourage exploration without being intrusive. `S`

14. [ ] About Page — Create comprehensive About page with personal introduction. Include professional background, interests, and contact information. Style to match overall site aesthetic. `XS`

15. [ ] GitHub Actions CI/CD — Set up GitHub Actions workflow for Hugo builds. Configure automatic deployment to GitHub Pages on push to main branch. Add build caching for performance. `S`

16. [ ] GitHub Pages Deployment — Configure GitHub repository for Pages hosting. Set up custom domain (www.pietersz.me) in repository settings. Verify HTTPS and deployment pipeline. `XS`

17. [ ] Cloudflare DNS Configuration — Configure Cloudflare DNS records to point www.pietersz.me to GitHub Pages. Set up proper CNAME or A records. Document DNS configuration for reference. `XS`

18. [ ] RSS Feed Configuration — Configure Hugo's built-in RSS feed generation. Customize feed template if needed (title, description, full content vs summary). Add RSS icon link to navigation. Verify feed validates correctly. `XS`

19. [ ] Performance and SEO — Add meta tags, Open Graph, and Twitter Card support. Configure sitemap and robots.txt. Test page speed and optimize as needed. Verify mobile responsiveness. `S`

20. [ ] First Blog Post — Write and publish inaugural blog post introducing the site and its purpose. Test full publishing workflow from markdown to deployed content. `S`

> Notes
> - Order reflects technical dependencies and incremental build-up from foundation to features
> - Items 1-2 establish the foundation before any customization
> - Items 3-7 build core reading experience
> - Items 8-13 add advanced features that depend on core being stable
> - Items 14-18 handle deployment and optimization
> - Item 19 is the launch milestone
> - Each item represents a testable, complete feature
