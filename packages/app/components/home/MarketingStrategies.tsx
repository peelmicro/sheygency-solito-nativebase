/* eslint-disable jsx-a11y/alt-text */
import { MotiPressable } from 'moti/interactions'
import { Text, Image, HStack, VStack, Box } from 'native-base'

export function HomeMarketingStrategies() {
  const strategies = [
    {
      title: 'CONTENT MARKETING',
      description:
        'Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online. ',
      source: require('../../assets/images/content-marketing.png'),
    },
    {
      title: 'INBOUND MARKETING',
      description:
        'Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategies to attract, engage, and delight customers. ',
      source: require('../../assets/images/inbound-marketing.png'),
    },
    {
      title: 'SOCIAL MEDIA',
      description:
        'Social media marketing focuses on providing users with content they find valuable and want to share across their social networks, resulting in increased visibility and website traffic.   ',
      source: require('../../assets/images/social-media.png'),
    },
    {
      title: 'SEARCH ENGINE OPTIMIZATION',
      description:
        'Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.',
      source: require('../../assets/images/seo.png'),
    },
  ]
  return (
    <>
      <Text
        fontSize="3xl"
        fontWeight="semibold"
        color="primary.400"
        mt={[10, 0]}
      >
        Want to boost your business growth?
      </Text>
      <Text
        fontSize={['5xl', '5xl', '7xl']}
        fontWeight="semibold"
        color="primary.400"
        mt="10"
      >
        <Text>The </Text>
        <Text color="secondary.400">SOLUTION </Text>
        <Text>is here... </Text>
      </Text>
      <Text fontSize="xl" color="gray.600" mt="10" mb="10">
        Curious about what business professionals think of different marketing
        strategies. We took a look at recent survey results and reports that
        compiled data on the topic, and created a list of 10 B2B marketing
        strategies commonly recognized as successful regardless of industry.
        Here’s what we found, in no particular order:
      </Text>
      <HStack flexWrap="wrap" justifyContent="center">
        {strategies.map((item) => {
          return (
            <Box
              key={item.title}
              flexBasis={['100%', '50%']}
              mt={['15', '15', '0']}
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
                  borderRadius="sm"
                  mt="10"
                  mb="5"
                  space="3"
                  w="95%"
                  _android={{ h: ['xl', 'xl', 'xl', 'md'] }}
                  h={['lg', 'md', 'md', 'md', '72']}
                >
                  <Text
                    mx={['5', '10']}
                    mt="-8"
                    py="2"
                    bg="white"
                    borderWidth="1"
                    borderColor="primary.400"
                    borderRadius="sm"
                    textAlign="center"
                    fontSize="2xl"
                    color="secondary.400"
                  >
                    {item.title}
                  </Text>
                  <Image
                    ml="5"
                    source={item.source}
                    alt={item.title}
                    size="24"
                  />
                  <Text mx="5" my="4" fontSize="md" color="gray.600">
                    {item.description}
                  </Text>
                </VStack>
              </MotiPressable>
            </Box>
          )
        })}
      </HStack>
    </>
  )
}
