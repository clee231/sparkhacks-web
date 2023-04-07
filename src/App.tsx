import CardDisplay from './components/CardDisplay';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
  const [pokeSearch, setPokeSearch] = useState('');
  const [cardData, setCardData] = useState({name: "Ditto", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"});

  const handleSubmit = async () => {
    if (pokeSearch) {
      try {
        // Grab name to search for.
        console.log(`I should be searching for '${pokeSearch}'`);
        // Get data from the API.
        const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch.toLowerCase()}`)).json()
        // Update the CardDisplay.
        setCardData({name: pokeSearch, image: data.sprites.front_default});
      } catch (e) {
        alert("Pokemon not found!");
      }
    } else {
      alert("Please type a Pokemon Name in the text box.");
    }
  }

  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokeSearch(event.currentTarget.value);
  }

  return <div>
           <InputGroup className="mb-3">
             <Form.Control
                placeholder="Pokemon Name"
                aria-label="Pokemon Name"
                aria-describedby="submit-button"
                value={pokeSearch}
                onChange={handleUpdate}
              />
              <Button variant="outline-secondary" id="submit-button" onClick={handleSubmit}>
                Get Card
              </Button>
            </InputGroup>
          <CardDisplay name={cardData.name} image={cardData.image} />
        </div>;
}

export default App;
