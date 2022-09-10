import { Text, VStack, HStack, Input, Button, Box } from 'native-base'

export function ContactContactForm() {
  return (
    <VStack
      flexBasis={['100%', '100%', '100%', '45%']}
      mt="10"
      w="100%"
      space="5"
    >
      <Text fontSize="4xl" color="primary.400" fontWeight="semibold">
        Send a Message
      </Text>

      <HStack
        space="5"
        // w="100%"
        // _web={{ w: ['100%', '100%', '100%', '48%'] }}
        // _ios={{ w: ['100%', '100%', '100%', '48%'] }}
        // _android={{ w: ['100%', '100%', '100%', '48%'] }}
        flexWrap="wrap"
      >
        <Input
          placeholder="First name"
          py="3"
          px="5"
          bg="blue.50"
          rounded="lg"
          color="gray.800"
          // w="100%"
          flexBasis={['100%', '100%', '100%', '47%']}
          fontSize="lg"
        />
        <Input
          placeholder="Last name"
          py="3"
          px="5"
          bg="blue.50"
          rounded="lg"
          color="gray.500"
          mt={['5', '5', '5', '0']}
          // w="100%"
          flexBasis={['100%', '100%', '100%', '47%']}
          fontSize="lg"
        />
      </HStack>

      <HStack
        space="5"
        // w="100%"
        // _web={{ w: ['100%', '100%', '100%', '48%'] }}
        // _ios={{ w: ['100%', '100%', '100%', '48%'] }}
        // _android={{ w: ['100%', '100%', '100%', '48%'] }}
        flexWrap="wrap"
      >
        <Input
          placeholder="Email"
          py="3"
          px="5"
          bg="blue.50"
          rounded="lg"
          color="gray.500"
          // w="100%"
          flexBasis={['100%', '100%', '100%', '47%']}
          fontSize="lg"
        />

        <Input
          placeholder="Phone Number"
          py="3"
          px="5"
          bg="blue.50"
          rounded="lg"
          color="gray.500"
          // w="100%"
          mt={['5', '5', '5', '0']}
          flexBasis={['100%', '100%', '100%', '47%']}
          fontSize="lg"
        />
      </HStack>

      <Input
        multiline
        numberOfLines={5}
        placeholder="Message"
        py="3"
        px="5"
        bg="blue.50"
        rounded="lg"
        color="gray.500"
        fontSize="lg"
      />

      <Button
        alignSelf="flex-end"
        py="3"
        px="5"
        rounded="lg"
        bg="secondary.400"
        _text={{
          color: 'white',
          fontSize: 'xl',
        }}
        _hover={{ bg: 'primary.400' }}
      >
        Send A Message
      </Button>
    </VStack>
  )
}
