import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample2() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/690212935385088115/1171097645444509796/image-removebg-preview_6.png?ex=655b70ac&is=6548fbac&hm=89a77cdc9d54860ec7d19965f881d5b1b09624997fc2de2089d86d2c938a8787&" />
      <Card.Body>
        <Card.Title>remedio2</Card.Title>
        <Card.Text>
         remedio 2
        </Card.Text>
        <Button variant="primary">R$50,00</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample2;