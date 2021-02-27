import React from "react";
import Link from 'next/link'

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


function About() {
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Efetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar LoginEfetuar Login</small>
            </div>
            
          </CardBody>
        </Card>
        
      </Col>
    </>
  );
}

About.layout = Auth;

export default About;
