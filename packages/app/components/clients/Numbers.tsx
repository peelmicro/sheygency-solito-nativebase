import { Box, Text, Flex, Spacer, VStack } from 'native-base'
export function ClientsNumbers() {
  return (
    <Box px={['5', '5', '24', '24', '52']} mt="20">
      <Text fontSize={['xl', '2xl']} color="gray.600" my="5">
        Until today we have provided our services to ....
      </Text>
      <Flex
        bg="secondary.400"
        p="5"
        justifyContent="space-between"
        alignItems="center"
        rounded="1"
        flexDirection={['column', 'row']}
      >
        <VStack alignItems="center">
          <Text fontSize={['7xl', '7xl', '8xl', '9xl']} color="white">
            152
          </Text>
          <Text fontSize="2xl" color="white">
            Clients
          </Text>
        </VStack>
        <Spacer />
        <VStack alignItems="center">
          <Text fontSize={['7xl', '7xl', '8xl', '9xl']} color="white">
            485
          </Text>
          <Text fontSize="2xl" color="white">
            Projects
          </Text>
        </VStack>
        <Spacer />
        <VStack alignItems="center">
          <Text fontSize={['7xl', '7xl', '8xl', '9xl']} color="white">
            24
          </Text>
          <Text fontSize="2xl" color="white">
            Locations
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}
