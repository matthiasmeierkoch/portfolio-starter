// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... other configs
  theme: {
    extend: {
      fontFamily: {
        // Use the CSS variable for the 'sans' utility class
        // and include a system font fallback.
        sans: ['var(--font-dm-sans)', ...defaultTheme.fontFamily.sans],
        
        // Create a new utility class for Playfair Display (e.g., font-display)
        display: ['var(--font-playfair)', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};