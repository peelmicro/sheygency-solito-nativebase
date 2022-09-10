/** @type {import('next').NextConfig} */

const { withNativebase } = require('@native-base/next-adapter')
const path = require('path')
const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withImages = require('next-images')

module.exports = withNativebase({
  dependencies: [
    '@expo/next-adapter',
    'react-native-vector-icons',
    'react-native-vector-icons-for-web',
    'solito',
    'moti',
    'app',
  ],
  plugins: [
    [withFonts, { projectRoot: __dirname }],
    withImages,
    [withExpo, { projectRoot: __dirname }],
  ],
  nextConfig: {
    projectRoot: __dirname,
    reactStrictMode: true,
    webpack5: true,
    images: {
      disableStaticImages: true,
    },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.ttf$/,
        loader: 'url-loader', // or directly file-loader
        include: path.resolve(__dirname, 'node_modules/@native-base/icons'),
      })
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
        'react-native-linear-gradient': 'react-native-web-linear-gradient',
        '@expo/vector-icons': 'react-native-vector-icons',
      }
      config.resolve.extensions = [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions,
      ]
      return config
    },
  },
})
