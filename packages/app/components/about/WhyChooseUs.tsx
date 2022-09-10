/* eslint-disable jsx-a11y/alt-text */
import { MotiPressable } from 'moti/interactions'
import { Box, Text, Image, Center, HStack, VStack } from 'native-base'

export function AboutWhyChooseUs() {
  const items = [
    {
      title: 'Innovative and Passionate',
      description:
        'We are a team of creative and passionate designers and developers. We are fully aware of the importance of designing for the digital age and strive to deliver the best result for our clients.',
      source: require('../../assets/images/innovation.png'),
    },
    {
      title: 'Good Return on Investment',
      description:
        'Working with us means providing your business with great savings. All our digital marketing and web development packages are being offered at competitive prices',
      source: require('../../assets/images/investment.png'),
    },
    {
      title: 'Seamless Customer Support',
      description:
        'We are always here to help you with any questions you may have. We are always here to help you with any questions you may have. We are always here to help you with any questions you may have.',
      source: require('../../assets/images/customer-support.png'),
    },
  ]
  return (
    <Box mx={['3', '3', '32']} mt="20" borderWidth="1" shadow="1">
      <Center bg="primary.400" h="72" w="100%">
        <Text
          fontSize={['4xl', '5xl', '7xl']}
          fontWeight="semibold"
          color="white"
          textAlign="center"
        >
          Why Choose US
        </Text>
      </Center>
      <HStack flexWrap="wrap" justifyContent="space-evenly" p="5">
        {items.map((item) => (
          <Box key={item.title} flexBasis={['95%', '95%', '45%', '25%']}>
            <MotiPressable
              animate={({ hovered, pressed }) => {
                'worklet'

                return {
                  scale: hovered || pressed ? 1.05 : 1,
                }
              }}
            >
              <VStack
                borderWidth="1"
                borderColor="primary.400"
                p="5"
                mt="5"
                bg="white"
                shadow="1"
              >
                <Image
                  alignSelf="center"
                  source={item.source}
                  alt={item.title}
                  size="20"
                />
                <Text
                  fontSize="2xl"
                  // color="primary.400"
                  textAlign="center"
                  fontWeight="semibold"
                  my="2"
                >
                  {item.title}
                </Text>
                <Text fontSize="md" color="gray.600">
                  {item.description}
                </Text>
              </VStack>
            </MotiPressable>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}
