import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'var(--color-white)',
      black: 'var(--color-black)',

      gray: {
        storm: 'var(--color-grey-storm)',
        overcast: 'var(--color-grey-overcast)',
        broken: 'var(--color-grey-broken)',
        scattered: 'var(--color-grey-scattered)',
        few: 'var(--color-grey-few)'
      },
      blue: {
        light: 'var(--color-light-blue)',
        lightmorning: 'var(--color-lightmorning-blue)',
        afternoon: 'var(--color-afternoon-blue)',
        schiphol: 'var(--color-schiphol-blue)',
        schipholBackground: 'var(--color-schiphol-background)'
      },
      pink: {
        lightmorning: 'var(--color-lightmorning-pink)',
        morning: 'var(--color-morning-pink)',
        evening: 'var(--color-evening-pink)',
        'evening-lilac': 'var(--color-evening-lilac)'
      },
      dusk: {
        green: 'var(--color-dusk-green)',
        blue: 'var(--color-dusk-blue)'
      },
      red: {
        DEFAULT: 'var(--color-dark-red)'
      },
      green: {
        DEFAULT: 'var(--color-green)',
        light: 'var(--color-light-green)'
      },
      yellow: {
        light: 'var(--color-light-yellow)',
        seebuyfly: 'var(--color-seebuyfly-yellow)'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Neue Frutiger']
      },
      maxWidth: {
        '7xl': '60rem'
      },
      spacing: {
        '8vw': '8vw'
      },
      backgroundImage: {
        'gradient-flights': 'var(--gradient-flights)',
        'gradient-parking': 'var(--gradient-parking)',
        'gradient-at-schiphol': 'var(--gradient-at-schiphol)',
        'gradient-more': 'var(--gradient-more)',
        'gradient-privium': 'var(--gradient-privium)'
      }
    }
  },
  plugins: []
} satisfies Config
