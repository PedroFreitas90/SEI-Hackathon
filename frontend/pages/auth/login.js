import React, { useContext } from "react";
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
import AppContext from '../context/AppContext'

export default function Login () {

  const [emailInput,setEmailInput] = React.useState('');
  const [passwordInput,setPasswordInput] = React.useState('');
  const { state, signIn } = useContext(AppContext);
  

  const handleSubmit = event => {
    event.preventDefault();

    
    const data = {
      email: emailInput,
      password: passwordInput
    };

    axios.post(`http://192.168.1.230:3000/login`, data )
      .then(res => {
        signIn(res.data.token,res.data.email,res.data.name,res.data.phone,res.data.tipo,res.data.about,res.data.tokenChat);
        console.log("resposta login " + JSON.stringify(res));
      })
  }

  return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Efetuar Login</small>
              </div>
              <form onSubmit={handleSubmit}>
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
                      onChange={e => setEmailInput(e.target.value)}
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
                      onChange={e => setPasswordInput(e.target.value)}
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
        </Col>
      </>
    );
  
}

Login.layout = Auth;

