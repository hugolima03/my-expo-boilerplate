import { StatusBar } from 'expo-status-bar'

import * as S from './styles'

const Home = () => {
  return (
    <S.Container>
      <S.Text>Home!</S.Text>
      <StatusBar style="auto" />
    </S.Container>
  )
}

export default Home
