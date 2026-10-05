/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FBFAF8',
        surface: { DEFAULT: '#FFFFFF', muted: '#F5F3EF' },
        line: { subtle: '#ECE8E1', strong: '#DDD6CB' },
        ink: { DEFAULT: '#1C1917', secondary: '#6B645B', tertiary: '#A39C91' },
        accent: {
          DEFAULT: '#B2502A',
          hover: '#9A4322',
          soft: '#F7E7DD',
          ink: '#7A3418',
        },
        status: {
          active: { soft: '#E3F0E7', ink: '#1D4D31' },
          inactive: { soft: '#EEEAE4', ink: '#5C564E' },
        },
        panel: { dark: '#2B1B15', line: '#4B2F23', glow: '#C9633A' },
        scrim: '#1C1917',
        // Tonos de avatar (valores fijos en el diseño)
        avatar: {
          clay: { soft: '#F7E7DD', ink: '#7A3418' },
          sage: { soft: '#E4ECE2', ink: '#2F4A2E' },
          lilac: { soft: '#EAE4F1', ink: '#4B3768' },
          sand: { soft: '#F3EAD3', ink: '#6B4E12' },
          mist: { soft: '#E1ECEF', ink: '#1F4A57' },
          rose: { soft: '#F4E1E3', ink: '#7A2A33' },
        },
      },

      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'sans-serif'],
      },

      // Escala tipográfica exacta del diseño
      fontSize: {
        eyebrow: ['11px', { lineHeight: '16px', letterSpacing: '0.06em' }],
        caption: ['12px', { lineHeight: '18px' }],
        label: ['13px', { lineHeight: '18px' }],
        body: ['14px', { lineHeight: '20px' }],
        lead: ['15px', { lineHeight: '22px' }],
        'heading-sm': ['22px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
        'heading-md': ['26px', { lineHeight: '30px', letterSpacing: '-0.02em' }],
        'heading-lg': ['28px', { lineHeight: '34px', letterSpacing: '-0.02em' }],
        'display-md': ['34px', { lineHeight: '40px', letterSpacing: '-0.025em' }],
        'display-lg': ['38px', { lineHeight: '46px', letterSpacing: '-0.025em' }],
      },

      borderRadius: {
        check: '5px',
        segment: '7px',
        tab: '8px',
        chip: '9px',
        control: '10px',   // inputs y botones
        track: '11px',     // pista de tabs
        group: '14px',     // grupos del slide-over
        card: '16px',      // tabla
        island: '20px',    // sidebar y slide-over
      },

      boxShadow: {
        slideover: '-10px 0 36px 0 rgba(28, 23, 20, 0.12)',
      },

      width: { sidebar: '240px', slideover: '520px', form: '400px' },
      height: { input: '44px', search: '38px', 'btn-md': '40px', 'btn-lg': '46px', row: '60px' },
    },
  },
  plugins: [],
}
