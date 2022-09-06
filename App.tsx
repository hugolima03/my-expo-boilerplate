// export { default } from "../storybook";

import { ThemeProvider } from 'styled-components/native'

import Home from 'components/Home'
import theme from 'styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
