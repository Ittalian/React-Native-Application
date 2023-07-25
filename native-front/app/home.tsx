import { Center, ScrollView, Text } from 'native-base'
import React from 'react'

const Home = () => {
  return (
    <ScrollView>
      <Center>
        <Text>ホーム画面</Text>
        <Center marginTop={4}>
          <Text fontSize={'lg'}　style={{ color: 'blue' }}>React Native</Text>
        </Center>
      </Center>
    </ScrollView>
  )
}

export default Home
