import { ScrollView, View } from 'react-native'
import { ClientsIntro } from '../../components/clients/Intro'
import { ClientsClientsList } from '../../components/clients/ClientsList'
export function ClientsScreen() {
  return (
    <View>
      <ScrollView>
        <ClientsIntro />
        <ClientsClientsList />
      </ScrollView>
    </View>
  )
}
