import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function CadastroIten() {
  return (
    <Form>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Nome do Livro
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Digite o nome do livro" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Nome do autor
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Digite o nome do autor" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Genero do Livro
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Digite o genero do livro" />
        </Col>
      </Form.Group>

      {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Digite a senha" />
        </Col>
      </Form.Group> */}

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Esado
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label=" Lendo "
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label=" Lido "
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Quero ler"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default CadastroIten;