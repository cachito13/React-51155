import Form from 'react-bootstrap/Form';
function TextControlsExample() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label >Email</Form.Label>
          <Form.Control  type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Area de Texto</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    );
  }
  
  export default TextControlsExample;