import React from "react";
import Link from 'next/link'
//import { login } from '../api/login'


import { ReactElement } from 'react'

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

import Auth from "../../layouts/Auth";
import { render } from "node-sass";

export default function Login () {

    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Efetuar Login</small>
              </div>
              <Form onSubmit={e => this.onSubmit(e)}>
                <FormGroup  className="mb-3" >
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className=" form-control-alternative"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i className="ni ni-lock-circle-open" ></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className=" form-control-alternative"
                      id="password"
                      name="password"
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                </FormGroup>
                
                <div>
                  <Button type="submit">
                    Log in
                  </Button>
                </div>
              </Form>
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
    )
  }
  
}

Login.layout = Auth;

