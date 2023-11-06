import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
      <>
        <Navbar variant="dark" style={{ backgroundColor: 'red' }}>
          <Container >
            <Navbar.Brand href="/">SaudeBem</Navbar.Brand>
            <Nav className="me-auto">
            <div className='svg'>
              <img src="https://cdn.discordapp.com/attachments/690212935385088115/1171095532349947914/image-removebg-preview_4.png?ex=655b6eb4&is=6548f9b4&hm=ead250e899400bb66bce1eb909d6faebf0e00825678d6e08bf8ba890db251312&" alt="" width={200} height={60}/>
            </div>
              <div className='direita'>

              <Nav.Link href="/home">Entrar</Nav.Link>
              <Nav.Link href="/login">Cadastro Produto</Nav.Link>
              
              </div>
            </Nav>
          </Container>
        </Navbar>
    
      </>
    );
  }
  
  export default ColorSchemesExample;