module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    mode: 'all',
    content: ['./components/**/*.tsx', './pages/**/*.tsx'],
    options: {
      whitelist: ['h1', 'h2', 'h3', 'p', 'blockquote', 'strong', 'em'],
    }
  },
  theme: {
    fontFamily: {
      title: ['Signika', 'Cantarell', 'sans-serif'],
      sans: ['Quattrocento Sans', 'Cantarell', 'Segoe UI', 'sans-serif']
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme("colors.black"),
          'pre code': {
            fontSize: '1em'
          }
        }
      }
    }),
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      }
    },
  },
}
