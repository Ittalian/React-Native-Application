import { useRouter, Link } from 'expo-router'
import { Box, Center, ScrollView, Text } from 'native-base'

const Page = () => {
  const router = useRouter()
  return (
    <ScrollView>
      <Center mt={'4'}>
        <Text fontSize={'lg'} fontWeight={'bold'}>初期ページ</Text>
      </Center>

      <Center mt={'10'}>
      <Link href="/home">ホーム</Link>
      <Center> </Center>
      <Link href="/account-rock">マイアカウント1</Link>
      <Center> </Center>
      <Link href="/account2-rock">マイアカウント2</Link>
      <Center> </Center>
      <Link href="/search">検索</Link>
      <Center> </Center>
      <Link href="/cart">カート</Link>
      </Center>
    </ScrollView>
  )
}

export default Page
