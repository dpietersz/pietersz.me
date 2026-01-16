# DNS Setup Instructions for pietersz.me

This document provides step-by-step instructions for configuring Cloudflare DNS to work with GitHub Pages for the pietersz.me blog.

## Overview

- **Primary Domain:** pietersz.me (apex/root domain)
- **Redirect:** www.pietersz.me → pietersz.me
- **DNS Provider:** Cloudflare
- **Hosting:** GitHub Pages
- **SSL/TLS:** Managed by GitHub Pages and Cloudflare

## Prerequisites

- Domain registered and nameservers pointed to Cloudflare
- GitHub repository set up with GitHub Pages enabled
- GitHub Pages configured to use GitHub Actions as source

## DNS Configuration Steps

### 1. Configure A Records for Apex Domain

Add four A records pointing to GitHub Pages IP addresses:

| Type | Name | Content | TTL | Proxy Status |
|------|------|---------|-----|--------------|
| A | @ | 185.199.108.153 | Auto | DNS only (gray cloud) |
| A | @ | 185.199.109.153 | Auto | DNS only (gray cloud) |
| A | @ | 185.199.110.153 | Auto | DNS only (gray cloud) |
| A | @ | 185.199.111.153 | Auto | DNS only (gray cloud) |

**Important:** Set proxy status to "DNS only" (gray cloud icon) for all A records. GitHub Pages handles SSL/TLS directly.

### 2. Configure CNAME Record for www Subdomain

Add a CNAME record to redirect www to apex domain:

| Type | Name | Content | TTL | Proxy Status |
|------|------|---------|-----|--------------|
| CNAME | www | pietersz.me | Auto | DNS only (gray cloud) |

**Note:** GitHub Pages will automatically redirect www.pietersz.me to pietersz.me

### 3. Cloudflare SSL/TLS Configuration

1. Navigate to **SSL/TLS** → **Overview** in Cloudflare dashboard
2. Set encryption mode to **Full (strict)**
3. Navigate to **SSL/TLS** → **Edge Certificates**
4. Enable the following settings:
   - ✅ Always Use HTTPS
   - ✅ HTTP Strict Transport Security (HSTS) - Enable with caution
   - ✅ Minimum TLS Version: 1.2
   - ✅ Opportunistic Encryption
   - ✅ TLS 1.3

### 4. Cloudflare Page Rules (Optional but Recommended)

Create a page rule to ensure HTTPS and apex domain usage:

1. Navigate to **Rules** → **Page Rules**
2. Create new page rule:
   - **URL:** `http://pietersz.me/*`
   - **Setting:** Always Use HTTPS
3. Create another page rule:
   - **URL:** `http://www.pietersz.me/*`
   - **Setting:** Forwarding URL (301 - Permanent Redirect)
   - **Destination:** `https://pietersz.me/$1`
4. Create third page rule:
   - **URL:** `https://www.pietersz.me/*`
   - **Setting:** Forwarding URL (301 - Permanent Redirect)
   - **Destination:** `https://pietersz.me/$1`

### 5. Cloudflare Performance Settings

Recommended performance optimizations:

1. Navigate to **Speed** → **Optimization**
   - ✅ Auto Minify: HTML, CSS, JavaScript
   - ✅ Brotli compression
   - ✅ Early Hints
   - ✅ HTTP/3 (with QUIC)

2. Navigate to **Caching** → **Configuration**
   - **Browser Cache TTL:** Respect Existing Headers
   - **Caching Level:** Standard

## GitHub Pages Configuration

### 1. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Under **Custom domain**, enter: `pietersz.me`
4. Wait for DNS check to complete (may take a few minutes)
5. Once DNS check passes, enable **Enforce HTTPS**

### 2. Verify CNAME File

The CNAME file should be automatically created in the `static/` directory and will be copied to the `public/` directory during build. This file contains only:

```
pietersz.me
```

### 3. Trigger Deployment

1. Push changes to the `main` branch
2. GitHub Actions workflow will automatically build and deploy
3. Check **Actions** tab to monitor deployment progress
4. Deployment typically takes 2-5 minutes

## Verification Steps

After completing the DNS and GitHub Pages configuration, verify the setup:

### DNS Propagation Check

```bash
# Check A records
dig pietersz.me +short

# Expected output (in any order):
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Check CNAME record
dig www.pietersz.me +short

# Expected output:
# pietersz.me
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

### Website Access Check

1. **Apex domain:** https://pietersz.me
   - Should load successfully with valid SSL certificate

2. **www subdomain:** https://www.pietersz.me
   - Should redirect to https://pietersz.me

3. **HTTP to HTTPS:** http://pietersz.me
   - Should redirect to https://pietersz.me

### SSL Certificate Check

```bash
# Check SSL certificate
curl -vI https://pietersz.me 2>&1 | grep -i "subject:\|issuer:"

# Expected:
# Valid certificate issued by GitHub or Let's Encrypt
```

### GitHub Pages Status

1. Navigate to repository **Settings** → **Pages**
2. Verify:
   - ✅ Custom domain shows: `pietersz.me`
   - ✅ DNS check passes with green checkmark
   - ✅ Enforce HTTPS is enabled
   - ✅ "Your site is published at https://pietersz.me" message appears

## Troubleshooting

### DNS Changes Not Propagating

- DNS propagation can take 24-48 hours in worst case
- Use online DNS propagation checkers: https://www.whatsmydns.net/
- Clear local DNS cache:
  ```bash
  # macOS
  sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

  # Linux
  sudo systemd-resolve --flush-caches

  # Windows
  ipconfig /flushdns
  ```

### GitHub Pages DNS Check Failing

1. Ensure all four A records are correctly configured
2. Ensure CNAME file exists in repository root (copied from static/)
3. Wait 5-10 minutes and click "Check again" in GitHub Pages settings
4. Verify nameservers are properly pointed to Cloudflare

### SSL Certificate Issues

1. Ensure "Enforce HTTPS" is enabled in GitHub Pages settings
2. Check Cloudflare SSL/TLS mode is set to "Full (strict)"
3. Wait 24 hours for SSL certificate to provision
4. Clear browser cache and test in incognito mode

### www Redirect Not Working

1. Verify CNAME record for www is correctly configured
2. Check Cloudflare page rules are active and properly ordered
3. Test with curl to see actual redirect:
   ```bash
   curl -I https://www.pietersz.me
   ```
4. Clear browser cache and test in incognito mode

### Site Not Updating After Push

1. Check **Actions** tab for failed workflow runs
2. Review workflow logs for build errors
3. Ensure `CNAME` file exists in static/ directory
4. Verify GitHub Pages is enabled and configured correctly
5. Check if deployment job completed successfully

## Timeline Expectations

| Step | Expected Time |
|------|---------------|
| DNS propagation (A records) | 5 minutes - 24 hours |
| DNS propagation (CNAME) | 5 minutes - 24 hours |
| GitHub Pages DNS check | 5-10 minutes |
| SSL certificate provisioning | 1-24 hours |
| First deployment | 2-5 minutes |
| Subsequent deployments | 2-5 minutes |

## Support Resources

- **GitHub Pages Documentation:** https://docs.github.com/en/pages
- **Cloudflare DNS Documentation:** https://developers.cloudflare.com/dns/
- **Hugo Deployment Guide:** https://gohugo.io/hosting-and-deployment/hosting-on-github/

## Security Notes

1. **HTTPS Only:** Never serve content over HTTP. Always redirect to HTTPS.
2. **HSTS:** Consider enabling HSTS with a short max-age initially (e.g., 1 week), then increase to 1 year after confirming everything works.
3. **CAA Records (Optional):** Consider adding CAA records to specify which certificate authorities can issue certificates for your domain:
   ```
   pietersz.me. CAA 0 issue "letsencrypt.org"
   pietersz.me. CAA 0 issue "pki.goog"
   ```

## Next Steps

After completing DNS setup and verifying the site is live:

1. ✅ Test site on multiple devices and browsers
2. ✅ Verify all pages load correctly (homepage, posts, about)
3. ✅ Test social sharing previews using https://cards-dev.twitter.com/validator
4. ✅ Submit sitemap to Google Search Console: https://pietersz.me/sitemap.xml
5. ✅ Monitor GitHub Actions for successful deployments
6. ✅ Set up monitoring/alerts for site availability (optional)

---

**Last Updated:** 2026-01-16
**Maintainer:** Dimitri Pietersz
