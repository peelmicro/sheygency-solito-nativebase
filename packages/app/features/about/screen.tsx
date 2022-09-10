import { ScrollView, View } from 'react-native'
import { AboutIntro } from '../../components/about/Intro'
import { AboutWhatWeDo } from '../../components/about/WhatWeDo'
import { AboutWhyChooseUs } from '../../components/about/WhyChooseUs'
export function AboutScreen() {
  return (
    <View>
      <ScrollView>
        <AboutIntro />
        <AboutWhatWeDo />
        <AboutWhyChooseUs />
      </ScrollView>
    </View>
  )
}
