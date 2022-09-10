import { Box, Text, HStack, VStack } from 'native-base'
import LottieComponent from '../styled/lottie'

export function ClientsIntro() {
  return (
    <HStack
      h={['600px', '600px', '600px', '800px']}
      bg="primary.400"
      flexWrap="wrap"
      p="10"
    >
      <Box alignSelf="center" w="100%" flexBasis={['100%', '50%']} p="10">
        <LottieComponent lottieDocument="review-clients.json" />
      </Box>
      <VStack alignSelf="center" w="100%" flexBasis={['100%', '50%']}>
        <Text
          fontSize={['4xl', '4xl', '4xl', '6xl', '8xl']}
          fontWeight="semibold"
          color="white"
          lineHeight="sm"
        >
          We{' '}
          <Text color="secondary.400" fontWeight="bold">
            work
          </Text>
          {`\n`}
          together with our <Text color="green.400">clients</Text>
        </Text>
      </VStack>
    </HStack>
  )
}
