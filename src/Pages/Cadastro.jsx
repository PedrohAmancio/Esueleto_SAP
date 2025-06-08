import Form from 'react-bootstrap/Form';

function Cadastro() {
  return (
    <Form>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite o email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite a senha" />
      </Form.Group>

        <button>Cadastrar</button>
    </Form>
  );
}
export default Cadastro;