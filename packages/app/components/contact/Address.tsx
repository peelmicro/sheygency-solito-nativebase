import { Box, Text, VStack, HStack, Center } from 'native-base'
import Building from '../../assets/icons/building'
import Mail from '../../assets/icons/mail'
import Phone from '../../assets/icons/phone'
import { Factory } from 'native-base'
const FactoryBuilding = Factory(Building)
const FactoryMail = Factory(Mail)
const FactoryPhone = Factory(Phone)

export function ContactAddress() {
  return (
    <VStack
      bg="primary.400"
      flexBasis={['100%', '100%', '100%', '50%']}
      rounded="3xl"
      p="8"
      space="5"
      width="100%"
    >
      <Text fontSize="3xl" color="white" fontWeight="semibold">
        Get In Touch
      </Text>
      <Text fontSize="lg" color="white">
        SHEYGENCY is a digital marketing agency, we provide marketing and
        development services
      </Text>

      <HStack space="5" alignItems="center">
        <Center h="12" w="12" bg="#ffa60021" p="2" rounded="1">
          <FactoryBuilding height={36} width={36} color="secondary.400" />
        </Center>
        <Box>
          <Text color="white" fontWeight="semibold" fontSize="xl">
            Visit US
          </Text>
          <Text color="white" fontSize={['xs', 'md', 'lg']}>
            Hyderabd , Amberpet , India
          </Text>
        </Box>
      </HStack>

      <HStack space="5" alignItems="center">
        <Center h="12" w="12" bg="#ffa60021" p="2" rounded="1">
          <FactoryMail height={36} width={36} color="secondary.400" />
        </Center>
        <Box>
          <Text color="white" fontWeight="semibold" fontSize="xl">
            Mail US
          </Text>
          <Text color="white" fontSize={['xs', 'md', 'lg']}>
            sathyaprakasBox95@gmail.com
          </Text>
        </Box>
      </HStack>

      <HStack space="5" alignItems="center">
        <Center h="12" w="12" bg="#ffa60021" p="2" rounded="1">
          <FactoryPhone height={36} width={36} color="secondary.400" />
        </Center>
        <Box>
          <Text color="white" fontWeight="semibold" fontSize="xl">
            Call US
          </Text>
          <Text color="white" fontSize={['xs', 'md', 'lg']}>
            9989649278
          </Text>
        </Box>
      </HStack>
    </VStack>
  )
}
