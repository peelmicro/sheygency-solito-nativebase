import { HomeIntro } from '../../components/home/Intro'
import { HomeMarketingStrategies } from '../../components/home/MarketingStrategies'
import { HomeWhyMarketing } from '../../components/home/WhyMarketing'
import { ScrollView, Box } from 'native-base'
export function HomeScreen() {
  return (
    <Box safeArea>
      <ScrollView px={['2', '2', '12', '32']}>
        <HomeIntro />
        <HomeMarketingStrategies />
        <HomeWhyMarketing />
      </ScrollView>
    </Box>
  )
}
