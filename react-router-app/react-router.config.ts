import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  // configured for GH pages
  ssr: false,
  basename: "/wf_prep/",
} satisfies Config;
