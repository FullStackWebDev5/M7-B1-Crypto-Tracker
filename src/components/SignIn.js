import { Form, Button } from "react-bootstrap";

const SignIn = () => {
  return (
    <>
      <h1 className="display-1">SignIn</h1>
      <Form style={{ width: "400px", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Sign In
        </Button>
      </Form>
    </>
  );
};

export default SignIn;
