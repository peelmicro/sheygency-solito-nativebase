import { NavigationProvider } from './navigation'
import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'

export function Provider({ children }: { children: React.ReactElement }) {
  const config = {
    dependencies: {
      'linear-gradient': require('expo-linear-gradient').LinearGradient,
    },
  }
  const theme = extendTheme({
    fontConfig: {
      Montserrat: {
        100: {
          normal: 'montserrat-thin',
          italic: 'montserrat-thin-italic',
        },
        200: {
          normal: 'montserrat-extra-light',
          italic: 'montserrat-extra-light-italic',
        },
        300: {
          normal: 'montserrat-light',
          italic: 'montserrat-light-italic',
        },
        400: {
          normal: 'montserrat',
          italic: 'montserrat-italic',
        },
        500: {
          normal: 'montserrat-medium',
          italic: 'montserrat-medium-italic',
        },
        600: {
          normal: 'montserrat-semi-bold',
          italic: 'montserrat-semi-bold-italic',
        },
        700: {
          normal: 'montserrat-bold',
          italic: 'montserrat-bold-italic',
        },
        800: {
          normal: 'montserrat-extra-bold',
          italic: 'montserrat-extra-bold-italic',
        },
        900: {
          normal: 'montserrat-black',
          italic: 'montserrat-black-italic',
        },
      },
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
      mono: 'Montserrat',
    },
    colors: {
      primary: {
        50: '#5bc8ca',
        100: '#44afb1',
        200: '#33888a',
        300: '#236162',
        400: '#113b3c',
        500: '#001515',
        600: '#001515',
        700: '#001515',
        800: '#001515',
        900: '#001515',
      },
      secondary: {
        50: '#ffeedc',
        100: '#ffd1b0',
        200: '#fcb382',
        300: '#fa9552',
        400: '#f77722',
        500: '#dd5e08',
        600: '#ad4904',
        700: '#7c3302',
        800: '#4c1d00',
        900: '#200700',
      },
    },
  })

  return (
    <NativeBaseProvider theme={theme} config={config}>
      <NavigationProvider>{children}</NavigationProvider>
    </NativeBaseProvider>
  )
}
