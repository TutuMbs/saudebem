import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
function Contato() {
    return (
        <div className='contatos'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>id_produtoentrega</Form.Label>
            <Form.Control type="email" placeholder="insira aqui!" />
          </Form.Group>
          <Form.Group>
          <Form.Label>Descrição</Form.Label>
          <Form.Control type="text" placeholder="insira aqui!" />
          <br/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Laboratorio</Form.Label>
            <Form.Control type="email" placeholder="insira aqui!" />
          </Form.Group>
          <Form.Group>
          <Form.Label>Data validade</Form.Label>
          <Form.Control type="text" placeholder="insira aqui!" />
          <br/>
          </Form.Group>
          <Form.Group>
          <Form.Label>Quantidade estoque</Form.Label>
          <Form.Control type="text" placeholder="insira aqui!" />
          <br/>
          </Form.Group>
          <Button variant="success" type="submit">
            Confirmar
          </Button>
        </Form>
        </div>
      );
}

export default Contato;