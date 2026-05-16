import type { NextConfig } from "next";

const LEGACY_DETAIL_ROUTES: Record<string, string> = {
  blog: "blog",
  "blog-deails-sidebar-left": "blog",
  "blog-deails-sidebar-left-white": "blog",
  "blog-deails-sidebar-white": "blog",
  "blog-deails-video": "blog",
  "blog-deails-video-popup": "blog",
  "blog-deails-video-popup-white": "blog",
  "blog-deails-video-two": "blog",
  "blog-deails-video-two-white": "blog",
  "blog-deails-video-white": "blog",
  "blog-details": "blog",
  "blog-details-sidebar": "blog",
  "blog-details-sidebar-white": "blog",
  "blog-details-standard": "blog",
  "blog-details-standard-white": "blog",
  "blog-details-white": "blog",
  service: "service",
  "service-details": "service",
  "service-details-center": "service",
  "service-details-center-white": "service",
  "service-details-four": "service",
  "service-details-four-white": "service",
  "service-details-three": "service",
  "service-details-three-white": "service",
  "service-details-two": "service",
  "service-details-two-white": "service",
  "service-details-white": "service",
  portfolio: "portfolio",
  "portfolio-details": "portfolio",
  "portfolio-details-five": "portfolio",
  "portfolio-details-five-white": "portfolio",
  "portfolio-details-four": "portfolio",
  "portfolio-details-four-white": "portfolio",
  "portfolio-details-three": "portfolio",
  "portfolio-details-three-white": "portfolio",
  "portfolio-details-two": "portfolio",
  "portfolio-details-two-white": "portfolio",
  "portfolio-details-white": "portfolio",
  team: "team",
  "team-details": "team",
  "team-details-white": "team",
};

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return Object.entries(LEGACY_DETAIL_ROUTES)
      .filter(([from]) => !["blog", "service", "portfolio", "team"].includes(from))
      .map(([from, to]) => ({
        source: `/${from}/:slug`,
        destination: `/${to}/:slug`,
        permanent: true,
      }));
  },
};

export default nextConfig;
