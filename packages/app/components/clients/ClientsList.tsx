import {
  View,
  Text,
  Pressable,
  Factory,
  Image,
  Box,
  Flex,
  Spacer,
} from 'native-base'
import { useState } from 'react'
import { ClientsNumbers } from './Numbers'
// import { styled } from 'nativewind'
import ArrowLeftSolid from '../../assets/icons/arrow-left-solid'
import ArrowRightSolid from '../../assets/icons/arrow-right-solid'
import { MotiPressable } from 'moti/interactions'
import { HStack } from 'native-base'

// const StyledArrowLeftSolid = styled(ArrowLeftSolid, {
//   classProps: ['color'],
// })
// const StyledArrowRightSolid = styled(ArrowRightSolid, {
//   classProps: ['color'],
// })
const FactoryPressable = Factory(MotiPressable)

export function ClientsClientsList() {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0)
  const clients = [
    {
      name: 'Slack',
      url: 'https://www.tcs.com/',
      description:
        'Slack is a cloud-based set of tools and services that makes it easy to get work done. It’s built for teams of all sizes, and has a simple, beautiful design that’s easy to use and works great on any device.',
      source: require('../../assets/images/slack.png'),
    },
    {
      name: 'Twitter',
      url: 'https://www.infosys.com/',
      description:
        'Twitter is a social networking service that enables users to send and read short 140-character messages called “tweets”.',
      source: require('../../assets/images/twitter.png'),
    },
    {
      name: 'Instagram',
      url: 'https://www.wipro.com/',
      description:
        'Instagram is a photo-sharing, video-sharing and communication service that is owned and operated by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and launched in October 2010.',
      source: require('../../assets/images/instagram.png'),
    },
    {
      name: 'Spotify',
      url: 'https://www.hcl.com/',
      description:
        'Spotify is a music streaming service that offers a wide range of music genres, including rock, pop, country, electronic, and more. It was created by Swedish computer programmer and programmer Johan Liljegren in 2007.',
      source: require('../../assets/images/spotify.png'),
    },
    {
      name: 'Messenger',
      url: 'https://www.accenture.com/',
      description:
        'Messenger is a messaging app that enables users to communicate with their friends and family. It was created by Facebook in 2011.',
      source: require('../../assets/images/messenger.png'),
    },
    {
      name: 'Cognizant',
      url: 'https://www.capgemini.com/',
      description:
        'Cognizant is a multinational technology company headquartered in Bengaluru, India. It is the largest Indian IT company by market capitalization.',
      source: require('../../assets/images/cognizant.png'),
    },
    {
      name: 'Github',
      url: 'https://www.cognizant.com/',
      description:
        'GitHub is a web-based hosting service for version control of code using the distributed version control (DVCS) model. It was created by Linus Torvalds in 2005.',
      source: require('../../assets/images/github.png'),
    },
  ]

  const next = () => {
    setSelectedClientIndex(selectedClientIndex + 1)
  }

  const previous = () => {
    setSelectedClientIndex(selectedClientIndex - 1)
  }

  return (
    <Box>
      <Box bg="primary.400" h="44" roundedBottom={['2xl', 'full']}></Box>
      <Flex
        flexDirection={['column', 'row']}
        justifyContent="center"
        mt={['-44', '-48', '-48', '-44']}
      >
        <Box
          // display={['hidden', 'flex']}
          w={['0%', '8.333333%']}
          alignSelf="flex-end"
        >
          {selectedClientIndex !== 0 && (
            <Pressable
              onPress={previous}
              _web={{ cursor: 'pointer', alignSelf: 'self-end' }}
              // alignSelf="self-end"
              // alignSelf="auto"
              color={['primary.400', 'gray.600']}
            >
              <ArrowLeftSolid height={36} width={36} />
            </Pressable>
          )}
        </Box>
        <Box alignSelf="center" w={['75%']} m={['5', '5', '0']}>
          <Flex
            flexDirection={['column', 'column', 'column', 'row']}
            alignItems={['center', 'center', 'center', 'stretch']}
          >
            {[
              clients[selectedClientIndex],
              clients[selectedClientIndex + 1],
              clients[selectedClientIndex + 2],
            ].map((item) => (
              <Box
                key={item?.name}
                bg="white"
                shadow="1"
                borderWidth="1"
                p="5"
                mt={['6', '6', '6', '0']}
                w={['95%', '95%', '95%', '33.333333%']}
                h="auto"
              >
                <Box
                  flexDirection={['column', 'column', 'row']}
                  alignContent="space-between"
                  alignItems="center"
                >
                  <Image
                    source={item?.source}
                    alt={item?.description}
                    zIndex="20"
                    w={['10', '16', '16', '24', '32']}
                    h={['10', '16', '16', '24', '32']}
                  />
                  <Spacer />
                  <Text
                    color="primary.400"
                    fontWeight="semibold"
                    fontSize="2xl"
                  >
                    {item?.name}
                  </Text>
                </Box>
                <Text color="gray.600" fontSize="sm" mt="10">
                  {item?.description}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
        <View
          // display={['flex', 'flex']}
          w={['0%', '8.333333%']}
          // alignSelf="self-end"
          _web={{ alignSelf: 'self-end' }}
        >
          {selectedClientIndex < 4 && (
            <Pressable
              onPress={next}
              _web={{ cursor: 'pointer' }}
              fontSize="4xl"
              color="gray.600"
            >
              <ArrowRightSolid height={36} width={36} />
            </Pressable>
          )}
        </View>
      </Flex>

      <HStack
        justifyContent="center"
        // justifyItems="center"
        space="1"
        mt="5"
      >
        {[1, 2, 3, 4, 5].map((_item, index) => (
          <FactoryPressable
            key={index}
            onPress={() => setSelectedClientIndex(index)}
            bg="gray.200"
            h={selectedClientIndex === index ? '10' : '8'}
            w={selectedClientIndex === index ? '10' : '8'}
            mt={selectedClientIndex === index ? '0' : '1'}
            rounded="full"
            _web={{ cursor: 'pointer' }}
            animate={({ hovered, pressed }) => {
              'worklet'

              return {
                scale: hovered || pressed ? 1.05 : 1,
              }
            }}
            borderWidth={selectedClientIndex === index ? '2' : '0'}
            borderColor="secondary.400"
          />
        ))}
      </HStack>

      <ClientsNumbers />
    </Box>
  )
}
