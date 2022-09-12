import { HomeIntro } from '../../components/home/Intro'
import { HomeMarketingStrategies } from '../../components/home/MarketingStrategies'
import { HomeWhyMarketing } from '../../components/home/WhyMarketing'
import { ScrollView, Box } from 'native-base'
// import { ScrollView, Box, Icon } from 'native-base'
// import Entypo from '@expo/vector-icons/Entypo'
export function HomeScreen() {
  return (
    <Box safeArea>
      <ScrollView px={['2', '2', '12', '32']}>
        {/* <Box>
          <Icon
            as={Entypo}
            name="user"
            color="green.500"
            _dark={{
              color: 'warmGray.50',
            }}
          />
        </Box> */}
        <HomeIntro />
        <HomeMarketingStrategies />
        <HomeWhyMarketing />
      </ScrollView>
    </Box>
  )
}
