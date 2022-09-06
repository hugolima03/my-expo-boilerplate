import React from 'react'
import { render, screen } from '@testing-library/react-native'

import Home from '.'

describe('<App />', () => {
  it('should render the text correctly', () => {
    render(<Home />)

    expect(
      screen.getByText(/Open up App.tsx to start working on your app!/i)
    ).toBeTruthy()
  })
})
