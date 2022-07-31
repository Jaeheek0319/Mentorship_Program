import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Credentials() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const send = (event) => {
    event.preventDefault();

    try {
      const payload = {
        email,
        password,
        username,
      };

      console.log("******send running", payload);

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(payload),
        redirect: "follow",
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch("/api/user", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form
      onSubmit={(e) => {
        send(e);
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
          value={email}
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
          onChange={(p) => {
            setPassword(p.target.value);
            console.log(password);
          }}
          value={password}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Username"
          onChange={(u) => {
            setUsername(u.target.value);
            console.log(username);
          }}
          value={username}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="Log In">
        Submit
      </Button>
      <div>
        <Button variant="link">Forgot Password?</Button>
      </div>
      <div>
        <hr />
      </div>
      <div class="newacc">
        <Button variant="success" type="submit">
          Create new Account
        </Button>
      </div>
    </Form>
  );
}

export default Credentials;
