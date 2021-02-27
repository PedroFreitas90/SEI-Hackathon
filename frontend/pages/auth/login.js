import React from "react";
import Link from 'next/link'
import axios from 'axios';


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";


export default class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  }

  handlePassChange = event => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password
    };

    const e = this.state.email
    const p = this.state.password

    console.log("email " + this.state.email);
    console.log("pass " + this.state.password);

    axios.post(`http://192.168.1.230:3000/login`, { data })
      .then(res => {
        console.log("res " + res);
        console.log("data " + res.data);
      })
  }

  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Efetuar Login</small>
              </div>
              <form onSubmit={this.handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      onChange={this.handleEmailChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      onChange={this.handlePassChange}
                    />
                  </InputGroup>
                </FormGroup>
                
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Log in
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <Link href="/auth/register">
                <a className="text-light"><small>Create new account</small></a>
              </Link>
            </Col>
          </Row>
  
          
        </Col>
      </>
    );
  }
  
}

Login.layout = Auth;

