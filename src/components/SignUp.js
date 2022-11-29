import { Form, Button } from "react-bootstrap";
import { saveUser } from "../redux/user/action";
import { useDispatch } from "react-redux";

const SignUp = () => {
  // Use Controlled Components logic
  let userDetails = {
    fullName: "Mohan Endla",
    email: "mohan@gmail.com",
    password: "123",
  }

  const dispatch = useDispatch()

	const handleSignUp = (e) => {
		e.preventDefault()
		dispatch(saveUser(userDetails))
	}

  return (
    <>
      <h1 className="display-1">SignUp</h1>
      <Form
        style={{ width: "400px", margin: "auto" }}
        onSubmit={(e) => handleSignUp(e)}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default SignUp;
