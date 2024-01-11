import FetchComponent from '../components/FetchComponent';
import { render, screen, fireEvent } from '@testing-library/react';

describe('montaggio corretto', () => {
  it('lista iniziale vuota', () => {
    // 1 - montaggio nel virtual dom
    render(<FetchComponent />);
    // 2 - ricerca di qualcosa
    const lista = screen.queryAllByTestId('listgroup-item');
    // 3 - Interazione con l'elemento in questo caso non è necessaria
    // 4 - Mi aspetto che l'array della lista abbia lunghezza 0
    expect(lista).toHaveLength(0);
  });
});
