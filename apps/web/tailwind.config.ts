import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        apple: "14px"
      },
      boxShadow: {
        "apple": "0 1px 0 rgba(255,255,255,.36) inset, 0 -1px 0 rgba(0,0,0,.16) inset, 0 8px 20px rgba(0,0,0,.24)",
        "apple-pressed": "0 2px 8px rgba(0,0,0,.22) inset"
      }
    }
  },
  plugins: [],
} satisfies Config;
