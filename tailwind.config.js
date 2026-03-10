const { theme } = require('./src/shared/constants/themeColors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Фоновые цвета
        'bg-primary': theme.bg.primary,
        'bg-secondary': theme.bg.secondary,
        'bg-tertiary': theme.bg.tertiary,

        // Текст
        'text-primary': theme.text.primary,
        'text-secondary': theme.text.secondary,
        'text-tertiary': theme.text.tertiary,
        'text-accent': theme.text.accent,

        // Акценты
        'accent-primary': theme.accent.primary,
        'accent-secondary': theme.accent.secondary,
        'accent-tertiary': theme.accent.tertiary,
        'accent-quaternary': theme.accent.quaternary,

        // Обратная связь
        'feedback-success': theme.feedback.success,
        'feedback-error': theme.feedback.error,
        'feedback-warning': theme.feedback.warning,
        'feedback-info': theme.feedback.info,
      },
    },
  },
  plugins: [],
}
