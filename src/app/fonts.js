// app/fonts.ts
import localFont from 'next/font/local'

export const primaryFont = localFont({
  src: [
    // {
    //   path: '/fonts/PrimaryFont-Regular.woff2',
    //   weight: '400',
    //   style: 'normal',
    // },
    {
      path: '/fonts/PlayfairDisplay-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    // {
    //   path: '/fonts/PrimaryFont-Bold.woff2',
    //   weight: '700',
    //   style: 'normal',
    // },
  ],
  variable: '--font-primary',
})



// export const secondaryFont = localFont({
//   src: '../public/fonts/SecondaryFont.woff2',
//   variable: '--font-secondary',
// })