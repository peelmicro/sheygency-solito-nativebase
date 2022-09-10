import { HStack, VStack, Text, Box, Button } from 'native-base'
import LottieComponent from '../styled/lottie'

export function HomeIntro() {
  return (
    <HStack justifyContent="center" flexWrap="wrap" mt={[5, 20]}>
      <VStack w="100%" space="10" flexBasis={['100%', '50%']}>
        <Text
          fontSize={['5xl', '5xl', '7xl']}
          fontWeight="semibold"
          color="primary.400"
          lineHeight="sm"
        >
          The Best{`\n`}
          <Text color="secondary.400" fontWeight="bold">
            Marketing
          </Text>
        </Text>
        <Text
          fontSize="4xl"
          fontWeight="semibold"
          _light={{ color: 'black' }}
          _dark={{ color: 'white' }}
        >
          {"Doesn't feel like marketing"}
        </Text>
        <Button
          py="5"
          bg="secondary.400"
          _text={{
            color: 'white',
            fontSize: '2xl',
          }}
          _hover={{ bg: 'primary.400' }}
        >
          Get Started
        </Button>
      </VStack>
      <Box w="100%" flexBasis={['100%', '50%']} p="10">
        <LottieComponent lottieDocument="marketing.json" />
      </Box>
    </HStack>
  )
}
