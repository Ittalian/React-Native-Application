import { Center, ScrollView, Text } from 'native-base'
import React from 'react'

const Home = () => {
  return (
    <ScrollView>
      <Center>
        <Center marginTop={250}>
          <Text fontSize={'lg'}　style={{ color: 'black' }}>ホーム画面</Text>
        </Center>
      </Center>
    </ScrollView>
  )
}

export default Home
