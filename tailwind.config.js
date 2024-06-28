// tailwind.config.js
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss'),

    // Or with a custom prefix:
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
};
