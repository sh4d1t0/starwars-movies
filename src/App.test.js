import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

import '@testing-library/jest-dom'

import App from './App'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: BrowserRouter })
}

test('full app rendering/navigating', () => {
  renderWithRouter(<App />, { wrapper: MemoryRouter })
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByAltText(/starwars-logo/i)).toBeInTheDocument()

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/Personajes/i), leftClick)

  // check that the content changed to the new page
  expect(screen.getByText(/Personajes de StarWars/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
  renderWithRouter(<App />, { route: '/harry-potter' })

  expect(screen.getByText(/Error 404/i)).toBeInTheDocument()
})
