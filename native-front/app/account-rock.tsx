import { useRouter, Link } from 'expo-router'
import { Avatar, Box, Center, Divider, HStack, Icon, ScrollView, Text, VStack } from 'native-base'
import { MaterialCommunityIcons, Feather, Octicons, Fontisto } from '@expo/vector-icons'
import React from 'react'

const AccountRock = () => {
  return (
    <ScrollView>
      <Center>
        <Text>アカウント画面</Text>
        <Center marginTop={4}>
          <Avatar
            source={{
              uri: ``
            }}
            size={'lg'}
          >
            Profile Avatar
          </Avatar>
          <Text marginTop={4} fontSize={'lg'} fontWeight={'semibold'}>
            Itta
          </Text>
          <Center> </Center>
        </Center>
      </Center>
      <Center marginTop={4}>
        <Divider width={'90%'} />
      </Center>
      <Center> </Center>
      <Center>
      <Text style={{ color: 'black' }} fontSize={'lg'}>
            このアカウントは非公開です
        </Text>
        <Center> </Center>
        <Link href="/account">ログイン</Link>
        </Center>
    </ScrollView>
  )
}

export default AccountRock
