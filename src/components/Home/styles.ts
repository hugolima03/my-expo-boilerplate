import styled, { css } from 'styled-components/native'
import { normalize } from 'utils/font-normalize'

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${normalize(24)};
  `}
`
