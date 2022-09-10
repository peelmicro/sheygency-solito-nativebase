import { Box, Text, HStack, Center, useBreakpointValue } from 'native-base'
import AboutIntroSvg from './AboutIntroSvg'

export function AboutIntro() {
  const width = useBreakpointValue({
    base: '80%',
    sm: '80%',
    md: '70%',
    lg: '50%',
    xl: '40%',
  })
  return (
    <>
      <Box
        bg={{
          linearGradient: {
            colors: ['#ff4e00', '#ec9f05'],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        style={{ transform: [{ rotate: '8deg' }] }}
        top="-200"
        left="-80"
        right="0"
        roundedBottomRight="50"
        h="700px"
      ></Box>
      <HStack
        zIndex="10"
        justifyContent="center"
        flexWrap="wrap"
        alignContent="center"
        position="absolute"
        w="100%"
        bg={['secondary.400', 'secondary.400', 'transparent']}
      >
        <Center w={['80%', '80%', '50%']}>
          <AboutIntroSvg width={width} />
        </Center>
        <Center w={['80%', '80%', '50%']} alignItems="flex-start">
          <Text
            fontSize={['3xl', '3xl', '4xl', '5xl']}
            fontWeight="semibold"
            color="white"
          >
            SHEYGENCY
          </Text>
          <Text
            fontSize={['xl', 'xl', 'xl', '2xl']}
            fontWeight="semibold"
            color="white"
          >
            OLDER | STRONGER | WISER
          </Text>
        </Center>
      </HStack>
    </>
  )
}
