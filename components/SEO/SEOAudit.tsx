// components/SEO/SEOAudit.tsx
"use client";

import { useEffect } from "react";

interface SEOAuditProps {
  page?: string;
}

export default function SEOAudit({ page = "homepage" }: SEOAuditProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const auditSEO = () => {
        const issues: string[] = [];

        // Check for title tag
        const title = document.querySelector("title");
        if (
          !title ||
          title.textContent!.length < 30 ||
          title.textContent!.length > 60
        ) {
          issues.push(
            "Title tag missing or not optimized (30-60 characters recommended)"
          );
        }

        // Check for meta description
        const metaDesc = document.querySelector(
          'meta[name="description"]'
        ) as HTMLMetaElement;
        if (
          !metaDesc ||
          metaDesc.content.length < 120 ||
          metaDesc.content.length > 160
        ) {
          issues.push(
            "Meta description missing or not optimized (120-160 characters recommended)"
          );
        }

        // Check for H1 tag
        const h1Tags = document.querySelectorAll("h1");
        if (h1Tags.length === 0) {
          issues.push("No H1 tag found");
        } else if (h1Tags.length > 1) {
          issues.push("Multiple H1 tags found (only one recommended)");
        }

        // Check for alt text on images
        const images = document.querySelectorAll("img:not([alt])");
        if (images.length > 0) {
          issues.push(`${images.length} images missing alt text`);
        }

        // Check for canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
          issues.push("Canonical URL missing");
        }

        // Check for Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector(
          'meta[property="og:description"]'
        );
        const ogImage = document.querySelector('meta[property="og:image"]');

        if (!ogTitle || !ogDesc || !ogImage) {
          issues.push(
            "Open Graph tags incomplete (title, description, image required)"
          );
        }

        // Check for structured data
        const structuredData = document.querySelectorAll(
          'script[type="application/ld+json"]'
        );
        if (structuredData.length === 0) {
          issues.push("No structured data found");
        }

        // Check for internal links
        const internalLinks = document.querySelectorAll(
          'a[href^="/"], a[href*="ashentrix.com"]'
        );
        if (internalLinks.length < 5) {
          issues.push("Few internal links found (good for SEO to have more)");
        }

        // Output results
        if (issues.length > 0) {
          console.group(`🔍 SEO Audit Results for ${page}`);
          issues.forEach((issue) => console.warn("⚠️", issue));
          console.groupEnd();
        } else {
          console.log(`✅ SEO Audit passed for ${page}`);
        }

        // Performance suggestions
        console.group("🚀 Performance Suggestions");
        console.info("💡 Consider lazy loading images below the fold");
        console.info("💡 Minimize CSS and JavaScript");
        console.info("💡 Use WebP/AVIF image formats");
        console.info("💡 Enable compression (gzip/brotli)");
        console.info("💡 Use a CDN for static assets");
        console.groupEnd();
      };

      // Run audit after page loads
      if (document.readyState === "complete") {
        setTimeout(auditSEO, 1000);
      } else {
        window.addEventListener("load", () => setTimeout(auditSEO, 1000));
      }
    }
  }, [page]);

  return null;
}
