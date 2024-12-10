import daisyui from 'daisyui'
import { dark, light } from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],

  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },

  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        darkTheme: {
          ...dark,
          'primary': '#1b446c',
          'base-300': '#2A323C',
          'accent': '#fff',
        },
        lightTheme: {
          ...light,
          primary: '#00ff63',
          'base-300': '#ffffff',
          accent: '#000',
        },
      },
    ],
  },
}