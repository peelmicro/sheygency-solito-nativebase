import { useLottie, LottieOptions } from 'lottie-react'

export default function LottieComponent({
  lottieDocument,
}: {
  lottieDocument: string
}) {
  try {
    const animationData = require(`../../../assets/lottie/${lottieDocument}`)
    if (!animationData) {
      return null
    }
    const options: LottieOptions = {
      animationData,
      loop: true,
      autoplay: true,
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { View } = useLottie(options)

    return View
  } catch (error) {
    console.log(`Lottie: ${lottieDocument}:`, error)
    return null
  }
}
