import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Home from '../page'

// Mock de fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      main: { temp: 22.5, humidity: 80 },
      weather: [{ description: 'cielo claro' }]
    })
  })
)

describe('Home page', () => {
  beforeEach(() => {
    fetch.mockClear()
  })

  it('debe mostrar un campo de entrada y un botón', () => {
    render(<Home />)
    expect(screen.getByPlaceholderText('Ingresa una ciudad')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument()
  })

  it('muestra datos del clima al buscar una ciudad válida', async () => {
    render(<Home />)

    fireEvent.change(screen.getByPlaceholderText(/ciudad/i), {
      target: { value: 'Quito' }
    })

    fireEvent.click(screen.getByRole('button', { name: /buscar/i }))

    await waitFor(() => {
      expect(screen.getByText(/Temperatura:/)).toBeInTheDocument()
      expect(screen.getByText(/Humedad:/)).toBeInTheDocument()
      expect(screen.getByText(/Descripción:/)).toBeInTheDocument()
    })
  })
})


it('muestra mensaje de error si la ciudad no existe', async () => {
    // Simula una respuesta fallida del fetch
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false
      })
    )
  
    render(<Home />)
  
    fireEvent.change(screen.getByPlaceholderText(/ciudad/i), {
      target: { value: 'asdfgh' }
    })
  
    fireEvent.click(screen.getByRole('button', { name: /buscar/i }))
  
    await waitFor(() => {
      expect(screen.getByText(/Ciudad no encontrada/i)).toBeInTheDocument()
    })
  })
  