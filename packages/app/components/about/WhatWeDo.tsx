/* eslint-disable jsx-a11y/alt-text */
import { MotiPressable } from 'moti/interactions'
import { Text, Image, Box, HStack, VStack } from 'native-base'

export function AboutWhatWeDo() {
  const items = [
    {
      title: 'Web Development',
      description:
        'Web development is the work involved in developing a website for the Internet or an intranet.',
      source: require('../../assets/images/web.png'),
    },
    {
      title: 'Mobile Development',
      description:
        'Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.',
      source: require('../../assets/images/mobile.png'),
    },
    {
      title: 'Digital Marketing',
      description:
        'Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.',
      source: require('../../assets/images/digital-marketing.png'),
    },
    {
      title: 'Graphic Design',
      description:
        'Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.',
      source: require('../../assets/images/graphicdesign.png'),
    },
  ]
  return (
    <Box zIndex="20" mt={['10', '0']}>
      <Text
        fontSize={['5xl', '8xl']}
        fontWeight="semibold"
        color="secondary.400"
        textAlign="center"
        zIndex="20"
      >
        What We Do ?
      </Text>
      <Box h="96" w="100%" bg="primary.400" mt="12"></Box>
      <HStack
        flexWrap="wrap"
        justifyContent="space-evenly"
        mx={['0', '16', '32']}
        mt="-56"
        px={['5', '0']}
      >
        {items.map((item) => (
          <Box
            key={item.title}
            flexBasis={['95%', '45%', '45%', '22%']}
            mt="10"
          >
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
                bg="white"
                shadow="1"
              >
                <Image
                  alignSelf="center"
                  source={item.source}
                  alt={item.title}
                  size="24"
                />
                <Text
                  fontSize="2xl"
                  color="primary.400"
                  textAlign="center"
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
