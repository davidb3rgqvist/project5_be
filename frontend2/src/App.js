import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    withCredentials: true,
});

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [registrationToggle, setRegistrationToggle] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    useEffect(() => {
        client.get("/api/auth/user/")
            .then(res => setCurrentUser(res.data))
            .catch(() => setCurrentUser(null));
    }, []);

    function updateFormBtn() {
        setRegistrationToggle(!registrationToggle);
    }

    function submitRegistration(e) {
        e.preventDefault();
        client.post("/api/auth/register/", {
            email, username, password1, password2
        }).then(() => {
            client.post("/api/auth/login/", { email, password: password1 })
                .then(res => setCurrentUser(res.data));
        });
    }

    function submitLogin(e) {
        e.preventDefault();
        client.post("/api/auth/login/", { email, password: password1 })
            .then(res => setCurrentUser(res.data));
    }

    function submitLogout(e) {
        e.preventDefault();
        client.post("/api/auth/logout/")
            .then(() => setCurrentUser(null));
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">HealthHub</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Text>
                            {currentUser ? (
                                <form onSubmit={submitLogout}>
                                    <Button type="submit" variant="light">Log out</Button>
                                </form>
                            ) : (
                                <Button id="form-btn" onClick={updateFormBtn} variant="light">
                                    {registrationToggle ? "Login" : "Register"}
                                </Button>
                            )}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-4 center">
                {currentUser ? (
                    <h2>You're logged in!</h2>
                ) : registrationToggle ? (
                    <Form onSubmit={submitRegistration}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formPassword1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password1} onChange={e => setPassword1(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formPassword2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" value={password2} onChange={e => setPassword2(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Register</Button>
                    </Form>
                ) : (
                    <Form onSubmit={submitLogin}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password1} onChange={e => setPassword1(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Login</Button>
                    </Form>
                )}
            </Container>
        </div>
    );
}

export default App;
