import FetchComponent from '../components/FetchComponent';
import { render, screen, fireEvent } from '@testing-library/react';

describe('montaggio corretto', () => {
  it('lista iniziale vuota', () => {
    // 1 - montaggio nel virtual dom
    render(<FetchComponent />);
    // 2 - ricerca di qualcosa
    const lista = screen.queryAllByTestId('listgroup-item'); // cerca
    // 3 - Interazione con l'elemento in questo caso non è necessaria
    // 4 - Mi aspetto che l'array della lista abbia lunghezza 0
    expect(lista).toHaveLength(0);
  });

  it('verifica popolamento con 10 elementi', async () => {
    // 1
    render(<FetchComponent />);
    // 2
    const listaPiena = await screen.findAllByTestId('listgroup-item'); // trova
    // 3 - Anche in questo caso l'interazione non è necessaria
    // 4 - Mi aspetto che l'array della listaPiena abbia lunghezza 10
    expect(listaPiena).toHaveLength(10);
  });
});

describe('comportamento del filtro', () => {
  it('restituire un solo elemento in base a una ricerca puntuale', async () => {
    // 1
    render(<FetchComponent />);
    // 2
    const chiaveRicerca = screen.getByPlaceholderText(/Search for a user/i);
    // 3
    fireEvent.change(chiaveRicerca, { target: { value: 'leanne' } });
    const elencoFiltrato = await screen.findAllByTestId('listgroup-item');
    // 4
    expect(elencoFiltrato).toHaveLength(1);
  });
});
