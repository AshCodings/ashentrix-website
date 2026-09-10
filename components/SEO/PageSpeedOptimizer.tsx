// components/SEO/PageSpeedOptimizer.tsx
"use client";

import { useEffect } from "react";

export default function PageSpeedOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement("link");
      fontLink.rel = "preload";
      fontLink.href = "/fonts/IBMPlexSans-Regular.woff2";
      fontLink.as = "font";
      fontLink.type = "font/woff2";
      fontLink.crossOrigin = "anonymous";
      document.head.appendChild(fontLink);

      // Preload critical images
      const heroImageLink = document.createElement("link");
      heroImageLink.rel = "preload";
      heroImageLink.href = "/images/hero-bg.jpg";
      heroImageLink.as = "image";
      document.head.appendChild(heroImageLink);
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll("script[src]");
      scripts.forEach((script) => {
        if (!script.hasAttribute("async") && !script.hasAttribute("defer")) {
          script.setAttribute("defer", "");
        }
      });
    };

    // Lazy load images below the fold
    const lazyLoadImages = () => {
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                imageObserver.unobserve(img);
              }
            }
          });
        });

        const lazyImages = document.querySelectorAll("img[data-src]");
        lazyImages.forEach((img) => imageObserver.observe(img));
      }
    };

    // Critical resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetches = [
        "www.googletagmanager.com",
        "www.google-analytics.com",
        "fonts.googleapis.com",
        "fonts.gstatic.com",
        "www.clarity.ms",
        "connect.facebook.net",
      ];

      dnsPrefetches.forEach((domain) => {
        const link = document.createElement("link");
        link.rel = "dns-prefetch";
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical domains
      const preconnects = [
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
      ];

      preconnects.forEach((url) => {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = url;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      });
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeThirdPartyScripts();
    lazyLoadImages();
    addResourceHints();

    // Web Vitals optimization
    const optimizeWebVitals = () => {
      // Optimize LCP by ensuring hero image loads quickly
      const heroImage = document.querySelector(
        "img[priority]"
      ) as HTMLImageElement;
      if (heroImage) {
        heroImage.fetchPriority = "high";
        heroImage.loading = "eager";
      }

      // Optimize CLS by setting dimensions on images
      const images = document.querySelectorAll(
        "img:not([width]):not([height])"
      );
      images.forEach((img) => {
        const element = img as HTMLImageElement;
        if (!element.style.aspectRatio) {
          element.style.aspectRatio = "16/9"; // Default aspect ratio
        }
      });
    };

    // Run after DOM is fully loaded
    if (document.readyState === "complete") {
      optimizeWebVitals();
    } else {
      window.addEventListener("load", optimizeWebVitals);
    }
  }, []);

  return null; // This component doesn't render anything
}
