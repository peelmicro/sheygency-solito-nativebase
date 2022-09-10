import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'
import { HomeScreen } from '../../features/home/screen'
import { AboutScreen } from '../../features/about/screen'
import { ClientsScreen } from '../../features/clients/screen'
import { ContactScreen } from '../../features/contact/screen'
import useCachedResources from '../../hooks/useCachedResources'

const BottomTab = createBottomTabNavigator<{
  home: undefined
  about: undefined
  clients: undefined
  contact: undefined
}>()

export function NativeNavigation() {
  const isLoaded = useCachedResources()
  if (isLoaded) {
    return (
      <BottomTab.Navigator screenOptions={{ headerShown: false }}>
        <BottomTab.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="about"
          component={AboutScreen}
          options={{
            title: 'About',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="info-circle" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="clients"
          component={ClientsScreen}
          options={{
            title: 'Clients',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="contact"
          component={ContactScreen}
          options={{
            title: 'Contact',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="address-book" size={size} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    )
  }
  return null
}
