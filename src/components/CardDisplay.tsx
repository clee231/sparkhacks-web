import './CardDisplay.css'
import Card from 'react-bootstrap/Card';

interface Props {
  name: string;
  image: string;
}

function CardDisplay({name, image}: Props) {
  

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardDisplay;
