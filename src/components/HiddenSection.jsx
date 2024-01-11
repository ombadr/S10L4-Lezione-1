import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const HiddenSection = () => {
  const [mostra, setMostra] = useState(false);
  return (
    <div className='p-5'>
      <Button variant='warning' onClick={() => setMostra(!mostra)}>
        {mostra ? 'Nascondi' : 'Mostra'} contenuto
      </Button>
      {mostra && (
        <Card className='mt-2'>
          <Card.Img
            variant='top'
            src='https://cdn.pixabay.com/photo/2014/10/11/09/09/erlenmeyer-484349_1280.png'
            alt='image'
          />
          <Card.Body>
            <Card.Title>Ampollina</Card.Title>
            <Card.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              minima tempora dolorum neque iure voluptatibus minus consequuntur
              deleniti explicabo, dignissimos quod. Beatae, corrupti. Similique
              culpa et tenetur voluptatum corporis adipisci.
            </Card.Body>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default HiddenSection;
