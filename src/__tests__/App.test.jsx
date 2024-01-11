// Vogliamo testare l'esistenza di un titolo h1

import App from '../App';
import { render, screen } from '@testing-library/react';

// normalmente i test vanno inseriti in dei raccoglitori, detti anche suites
// con la libreria jest si creano suites personalizzate di test, dando i nomi che preferiamo

describe('Correct mounting', () => {
  {
    // qui si inseriscono tutti i test che si desidera effettuare. Il test sarà verificare la presenza di un h1
    it('monta correttamente gli heading', () => {
      // qui si eseguono i diversi step del test
      // 1. montaggio di App nel virtual DOM, col metodo render
      render(<App />); // nel browser non accade nulla, succede tutto in memoria RAM
      // 2. ricerca di un h1 tramite il suo contenuto testuale (perchè per un utente se l'h1 c'è ma è vuoto, è come se non ci fosse)
      const heading = screen.getByText(/Testing di una app in React/i); // con la i si presuppone che l'elemento venga trovato
      // 3. Interazione con l'elemento, in questo caso non è necessario
      // 4. Verifica delle aspettative: mi aspetto che l'elemento ci sia, verifico se c'è davvero
      expect(heading).toBeInTheDocument();
    });
  }
});
