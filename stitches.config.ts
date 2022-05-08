import { createStitches, PropertyValue } from '@stitches/react'

export const { styled, getCssText, config, createTheme, css, globalCss, keyframes, prefix, reset, theme } =
  createStitches({
    theme: {
      colors: {
        'hsl-black': '0 0% 0%',

        'primary-50': '#EAEFFB',
        'primary-100': '#D9E2F7',
        'primary-200': '#AFC2EE',
        'primary-300': '#89A5E7',
        'primary-400': '#5E85DE',
        'primary-500': '#3867D6',
        'primary-600': '#254FB2',
        'primary-700': '#1C3C87',
        'primary-800': '#122759',
        'primary-900': '#0A152F',

        'grey-50': '#fafafa',
        'grey-100': '#f5f5f5',
        'grey-200': '#e5e5e5',
        'grey-300': '#d4d4d4',
        'grey-400': '#a3a3a3',
        'grey-500': '#737373',
        'grey-600': '#525252',
        'grey-700': '#404040',
        'grey-800': '#262626',
        'grey-900': '#171717',

        'bg-light': '#F3F3F3',
        'bg-dark': '#121212',

        bg: '$bg-light',

        white: '#FFFFFF',
        black: '#000000',

        heading: '$grey-900',
        text: '$grey-800',
      },

      fonts: {
        primary: '"Lato", sans-serif',
        accent: '"Raleway", sans-serif',
      },
      fontSizes: {
        '6xl': '5.96rem', // 95.37px
        '5xl': '4.768rem', // 76.29px
        '4xl': '3.815rem', // 61.04px
        '3xl': '3.052rem', // 48.83px
        '2xl': '2.441rem', // 39.06px
        xl: '1.953rem', // 31.25px
        lg: '1.563rem', // 25.00px
        md: '1.25rem', // 20.00px
        base: '1rem', // 16px
        sm: '0.8rem', // 12.80px
        xs: '0.64rem', // 10.24px
      },
      fontWeights: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
        black: '900',
      },
      lineHeights: {
        none: 1,
        tight: 1.2,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      },

      space: {
        0: '0px',
        '0_5': '2px',
        1: '4px',
        '1_5': '6px',
        2: '8px',
        '2_5': '10px',
        3: '12px',
        '3_5': '14px',
        4: '16px',
        '4_5': '18px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        18: '72px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
      },
      sizes: {
        0: '0px',
        '0_5': '0.125rem',
        1: '0.25rem',
        '1_5': '0.375rem',
        2: '0.5rem',
        '2_5': '0.625rem',
        3: '0.75rem',
        '3_5': '0.875rem',
        4: '1rem',
        '4_5': '1.125rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
        full: '100%',
        vw: '100vw',
        vh: 'calc(var(--vh, 1vh) * 100)',
      },

      radii: {
        none: '0px',
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        rightXl: '2px 12px 12px 2px',
        '2xl': '16px',
        '3xl': '24px',
        full: '9999px',
      },
      zIndices: {
        auto: 'auto',
        underlay: -1,
        base: 0,
        floating: 1,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
      },

      shadows: {
        xs: '0 0 0 1px hsl($colors$hsl-black / 0.05)',
        sm: '0 1px 2px 0 hsl($colors$hsl-black / 0.05)',
        default: '0 1px 3px 0 hsl($colors$hsl-black / 0.1), 0 1px 2px 0 hsl($colors$hsl-black / 0.06)',
        md: '0 4px 6px -1px hsl($colors$hsl-black / 0.1), 0 2px 4px -1px hsl($colors$hsl-black / 0.06)',
        lg: '0 10px 15px -3px hsl($colors$hsl-black / 0.1), 0 4px 6px -2px hsl($colors$hsl-black / 0.05)',
        xl: '0 20px 25px -5px hsl($colors$hsl-black / 0.1), 0 10px 10px -5px hsl($colors$hsl-black / 0.04)',
        '2xl': '0 25px 50px -12px hsl($colors$hsl-black / 0.25)',
        inner: 'inset 0 2px 4px 0 hsl($colors$hsl-black / 0.06)',
        outline: '0 0 0 3px $colors$primary-500',
        none: 'none',
      },
      transitions: {
        all: 'all 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
        color: [
          'background-color 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'border-color 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'color 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'fill 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'stroke 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
        ].join(','),
        accelerated: [
          'background-color 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'border-color 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'color 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'fill 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'box-shadow 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'filter 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'backdrop-filter 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          'stroke 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
        ].join(','),
        opacity: 'all 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
        transform: 'all 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
        background: 'background-color 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
      },
    },
    media: {
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)',
      '2xl': '(min-width: 1366px)',
      '3xl': '(min-width: 1536px)',
      '4xl': '(min-width: 1792px)',
      '5xl': '(min-width: 1920px)',
      '6xl': '(min-width: 2560px)',
    },
    utils: {
      paddingX: (value: PropertyValue<'padding'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value: PropertyValue<'padding'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      marginX: (value: PropertyValue<'margin'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      marginY: (value: PropertyValue<'margin'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      size: (value: PropertyValue<'width'>) => ({
        width: value,
        height: value,
      }),
      spaceX: (value: PropertyValue<'margin'>) => ({
        '& > * + *': {
          marginLeft: value,
        },
      }),
      spaceY: (value: PropertyValue<'margin'>) => ({
        '& > * + *': {
          marginTop: value,
        },
      }),
      gridCols: (value: number) => ({
        gridTemplateColumns: Array(value).fill('1fr').join(' '),
      }),
      gridRows: (value: number) => ({
        gridTemplateRows: Array(value).fill('1fr').join(' '),
      }),
      colSpan: (value: number) => ({
        gridColumn: `span ${value}`,
      }),
      rowSpan: (value: number) => ({
        gridRow: `span ${value}`,
      }),
      gridColsFit: (value: PropertyValue<'width'>) => ({
        gridTemplateColumns: `repeat(auto-fit, minmax(${typeof value === 'number' ? `${value}px` : value}, 1fr))`,
      }),
      gridColsFill: (value: PropertyValue<'width'>) => ({
        gridTemplateColumns: `repeat(auto-fill, minmax(${typeof value === 'number' ? `${value}px` : value}, 1fr))`,
      }),
      gridRowsFit: (value: PropertyValue<'width'>) => ({
        gridTemplateRows: `repeat(auto-fit, minmax(${typeof value === 'number' ? `${value}px` : value}, 1fr))`,
      }),
      gridRowsFill: (value: PropertyValue<'width'>) => ({
        gridTemplateRows: `repeat(auto-fill, minmax(${typeof value === 'number' ? `${value}px` : value}, 1fr))`,
      }),
      lineClamp: (value: number) => ({
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': `${value}`,
        textOverflow: 'ellipsis',
      }),
    },
  })

export const darkTheme = createTheme({
  colors: {
    bg: '$bg-dark',

    heading: '$grey-50',
    text: '$grey-200',
  },
})

export const globalStyles = globalCss({
  html: {
    size: '$full',
  },

  body: {
    fontFamily: '$primary',
    lineHeight: '$normal',

    width: '$vw',
    height: '$vh',
    overflow: 'hidden',

    backgroundColor: '$bg',
    backgroundImage: 'url(/images/bg/bg.svg)',
    backgroundSize: '12px',
    backgroundRepeat: 'repeat',

    transition: '$color',
  },

  '*, *::before, *::after': {
    margin: 0,
    padding: 0,

    boxSizing: 'border-box',

    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',

    transition: '$color',
  },

  '*::selection': {
    backgroundColor: '$primary-500',
    color: '$white',
  },

  '#__next': {
    size: '$full',
    overflow: 'hidden',
  },
})

export enum Themes {
  dark = 'dark',
  light = 'light',
}
