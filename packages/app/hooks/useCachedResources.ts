import { useEffect, useState } from 'react'
import * as Font from 'expo-font'

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(
    Font.isLoaded('montserrat')
  )

  async function loadResourcesAndDataAsync() {
    try {
      await Font.loadAsync({
        'montserrat-black': require('../assets/fonts/Montserrat-Black.ttf'),
        'montserrat-black-italic': require('../assets/fonts/Montserrat-BlackItalic.ttf'),
        'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'montserrat-bold-italic': require('../assets/fonts/Montserrat-BoldItalic.ttf'),
        'montserrat-extra-bold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
        'montserrat-extra-bold-italic': require('../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
        'montserrat-extra-light': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
        'montserrat-extra-light-italic': require('../assets/fonts/Montserrat-ExtraLightItalic.ttf'),
        'montserrat-italic': require('../assets/fonts/Montserrat-Italic.ttf'),
        'montserrat-light': require('../assets/fonts/Montserrat-Light.ttf'),
        'montserrat-light-italic': require('../assets/fonts/Montserrat-LightItalic.ttf'),
        'montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'montserrat-medium-italic': require('../assets/fonts/Montserrat-MediumItalic.ttf'),
        montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
        'montserrat-semi-bold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'montserrat-semi-bold-italic': require('../assets/fonts/Montserrat-SemiBoldItalic.ttf'),
        'montserrat-thin': require('../assets/fonts/Montserrat-Thin.ttf'),
        'montserrat-thin-italic': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      })
    } catch (e) {
      console.warn(e)
    } finally {
      setIsLoadingComplete(true)
    }
  }

  useEffect(() => {
    if (!isLoadingComplete) {
      loadResourcesAndDataAsync()
    }
  }, [isLoadingComplete])

  return isLoadingComplete
}
