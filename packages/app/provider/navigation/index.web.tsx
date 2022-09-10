// on Web, we don't use React Navigation, so we avoid the provider altogether
// instead, we just have a no-op here
// for more, see: https://solito.dev/recipes/tree-shaking

import React from 'react'
import { useRouter } from 'next/router'
import useCachedResources from '../../hooks/useCachedResources'
import {
  View,
  Text,
  Box,
  HStack,
  VStack,
  Link,
  Center,
  Flex,
  Pressable,
  useBreakpointValue,
} from 'native-base'
import Head from 'next/head'
import { Dimensions } from 'react-native'

export interface MenuItem {
  title: string
  path: string
  icon: React.ComponentClass<any> | React.FunctionComponent<any>
  height: number
  width: number
}

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  function WrapperIcon({ icon: Icon }) {
    return <Icon />
  }
  const Icon = (item: MenuItem) => {
    const Component = item.icon
    return () => (
      <Pressable onPress={() => router.push(item.path)}>
        <Component height={item.height} width={item.width} />
      </Pressable>
    )
  }
  const isBase = useBreakpointValue({
    base: true,
    sm: false,
  })
  const size = useBreakpointValue({
    base: 18,
    sm: 24,
  })
  const router = useRouter()
  const menuItems: MenuItem[] = [
    {
      title: 'Home',
      path: '/',
      icon: require('../../assets/icons/house-solid').default,
      height: size,
      width: size,
    },
    {
      title: 'About',
      path: '/about',
      icon: require('../../assets/icons/circle-info-solid').default,
      height: size,
      width: size,
    },
    {
      title: 'Clients',
      path: '/clients',
      icon: require('../../assets/icons/users-solid').default,
      height: size,
      width: size,
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: require('../../assets/icons/address-book-solid').default,
      height: size,
      width: size,
    },
  ]
  const isLoaded = useCachedResources()
  if (!isLoaded) {
    return (
      <View>
        <Text>Resources are loading...</Text>
      </View>
    )
  }
  return (
    <>
      <Head>
        <title>Sheygency - Nextjs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Sheygency NetxJS version." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* content */}
      <Box flex={1}>
        {/* content */}
        <Box pb="32">{children}</Box>

        {/* footer */}
        <Box
          alignSelf="center"
          mt={Dimensions.get('window').height - 120}
          mb={[0, 2]}
          ml="0"
          mr="0"
          alignContent="center"
          position="fixed"
        >
          <HStack safeAreaBottom w="100%">
            {menuItems.map((item: MenuItem, index) => (
              <VStack
                key={item.path}
                alignItems="center"
                justifyContent="flex-end"
              >
                {router.asPath === item.path && (
                  <VStack alignItems="center">
                    <Box
                      h={[5]}
                      w={[6, 8, 10]}
                      roundedTopLeft={9999}
                      roundedTopRight={9999}
                      bg="primary.400"
                    />
                    <Box
                      h={[4, 5]}
                      w={[12, 16, 20]}
                      alignItems="center"
                      justifyContent="center"
                      roundedTopLeft={9999}
                      roundedTopRight={9999}
                      bg="primary.400"
                      color="white"
                    >
                      <WrapperIcon icon={Icon(item)} />
                    </Box>
                  </VStack>
                )}
                <HStack
                  h="60%"
                  px={[8, 8, 20]}
                  bg="primary.400"
                  py={5}
                  roundedLeft={index === 0 ? 9999 : 0}
                  roundedRight={index === menuItems.length - 1 ? 9999 : 0}
                  color="secondary.400"
                  space={2}
                >
                  {router.asPath !== item.path && (
                    <WrapperIcon icon={Icon(item)} />
                  )}
                  {(!isBase || router.asPath === item.path) && (
                    <Link
                      onPress={() => router.push(item.path)}
                      _text={{
                        fontSize: 'lg',
                        color: 'secondary.400',
                      }}
                      isUnderlined={false}
                    >
                      {item.title}
                    </Link>
                  )}
                </HStack>
              </VStack>
            ))}
          </HStack>
        </Box>
      </Box>
    </>
  )
}
