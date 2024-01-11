import HiddenSection from '../components/HiddenSection';
import { render, screen, fireEvent } from '@testing-library/react';

describe('montaggio component', () => {
  it('montaggio corretto del button', () => {
    render(<HiddenSection />);
    const button = screen.getByText(/mostra contenuto/i);
    expect(button).toBeInTheDocument();
  });

  it("assenza della card al montaggio del component tramite verifica dell'esistenza dell'immagine", () => {
    render(<HiddenSection />);
    const image = screen.queryByRole('img');
    expect(image).not.toBeInTheDocument();
  });
});

describe('funzionamento del button', () => {
  it('comparsa della card al click del button', () => {
    render(<HiddenSection />);
    const button = screen.getByText(/mostra contenuto/i);
    fireEvent.click(button);
    const image = screen.queryByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('scomparsa della card al successivo click del button', () => {
    render(<HiddenSection />);
    const button = screen.getByText(/mostra contenuto/i);
    // Clicca una volta per mostrare il contenuto
    fireEvent.click(button);
    // Clicca un'altra volta per nascondere il contenuto
    fireEvent.click(button);
    const image = screen.queryByRole('img');
    expect(image).not.toBeInTheDocument();
  });
});
