module.exports = {
  root: true,
  env: {
    es2022: true,
  },
  extends: [
    'plugin:tailwindcss/recommended',
  ],
  settings: {
    'tailwindcss': {
      config: 'app/tailwind.config.js',
      tags: ['tw'],
    },
  },
  plugins: ['tailwindcss'],
}
