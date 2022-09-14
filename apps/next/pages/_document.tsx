export { default } from '@native-base/next-adapter/document'
// import React from 'react'
// // import { DocumentContext, DocumentInitialProps } from 'next/document'
// import { default as NativebaseDocument } from '@native-base/next-adapter/document'

// // Icon Font Library Imports
// import MaterialIconsFont from '@native-base/icons/FontsCSS/MaterialIconsFontFaceCSS'
// import EntypoFontFaceCSS from '@native-base/icons/FontsCSS/EntypoFontFaceCSS'
// const fontsCSS = `${MaterialIconsFont} ${EntypoFontFaceCSS}`

// export default class Document extends NativebaseDocument {
//   static async getInitialProps(ctx: { renderPage: any }) {
//     const props = await super.getInitialProps(ctx)
//     const styles = [
//       <style key={'fontsCSS'} dangerouslySetInnerHTML={{ __html: fontsCSS }} />,
//       ...props.styles,
//     ]
//     return { ...props, styles: React.Children.toArray(styles) }
//   }
// }
