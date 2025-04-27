import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

// export default defineConfig({
//   // base: "/Aunty-Ozy-Foodies/",
//   server: {
//     sourcemap: false,

//     mime: {
//       // Set the MIME type for .js files to application/javascript
//       js: "application/javascript",
//     },
//   },
//   plugins: [
//     tailwindcss(), // Add Tailwind CSS as a plugin
//   ],
// });

export default defineConfig(({ mode }) => ({
  base: mode === "github" ? "/Aunty-Ozy-Foodies/" : "./",
  server: {
    sourcemap: false, 
      host: '0.0.0.0', // Listen on all network interfaces
    
    mime: {
      // Set the MIME type for .js files to application/javascript
      js: "application/javascript",
    },
  },
  plugins: [
    tailwindcss(), // Add Tailwind CSS as a plugin
  ],
}));
