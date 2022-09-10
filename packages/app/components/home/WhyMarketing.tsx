import { VStack, Text, Box } from 'native-base'
import LottieComponent from '../styled/lottie'

export function HomeWhyMarketing() {
  return (
    <VStack mt="20" justifyContent="center" alignContent="center">
      <Text
        textAlign="center"
        fontSize={['5xl', '8xl']}
        fontWeight="semibold"
        color="primary.400"
      >
        <Text>Why </Text>
        <Text color="secondary.400">Marketing</Text>
      </Text>
      <Box alignSelf="center" w={['80%', '60%']}>
        <LottieComponent lottieDocument="forget-password.json" />
      </Box>
      <Text fontSize="md" color="gray.600" mt="10">
        Do you know what your customers want? Do you think your customers trust
        your products? When was the last time you saw a customer tweeting about
        your product or service? Was it a complaint or compliment?
      </Text>
      <Text fontSize="4xl" fontWeight="semibold" color="primary.400" mt="10">
        The answers to all these questions lie in marketing.
      </Text>
      <Text fontSize="md" color="gray.600" mt="10">
        How you market your business determines if the enterprise will be
        successful or not. Marketing is a tool used to create and maintain
        demand, relevance, reputation, competition and more. Without it, your
        business is likely to close down due to lack of sales.
      </Text>
    </VStack>
  )
}
