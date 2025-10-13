// postcss.config.mjs

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // This must be the new package name
    '@tailwindcss/postcss': {}, 
  },
};

export default config;