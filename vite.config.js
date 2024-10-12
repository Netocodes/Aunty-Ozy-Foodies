import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Aunty-Ozy-Foodies/",
  server: {
    sourcemap: false,
    mime: {
      // Set the MIME type for .js files to application/javascript
      js: "application/javascript",
    },
  },
  plugins: [
    tailwindcss(), // Add Tailwind CSS as a plugin
  ],
});
