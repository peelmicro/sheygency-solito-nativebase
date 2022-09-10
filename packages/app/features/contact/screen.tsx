import {
  ScrollView,
  View,
  HStack,
  Center,
  Flex,
  Box,
  Text,
  Spacer,
  Container,
} from 'native-base'
import { ContactAddress } from '../../components/contact/Address'
import { ContactContactForm } from '../../components/contact/ContactForm'
export function ContactScreen() {
  return (
    <View>
      <ScrollView>
        <HStack
          flexWrap="wrap"
          alignItems="center"
          space="10"
          mt={[5, 20]}
          mx="5"
        >
          <ContactAddress />
          <ContactContactForm />
        </HStack>

        <Box mt="32" borderBottomWidth="2" mx="10" mb="10">
          <Box alignSelf="center" borderWidth="2" borderBottomWidth="0" p="5">
            <Text color="gray.700" fontSize="xl">
              Designed and Developed By
            </Text>
            <Text color="gray.700" fontSize="xl">
              Sathyaprakash Reddy
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </View>
  )
}
