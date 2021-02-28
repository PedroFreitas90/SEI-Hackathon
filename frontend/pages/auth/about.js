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
      <Col lg="5" md="7" style={{width:'200vw'}}>
        <Card className="bg-secondary shadow border-0" >
          
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <p>A Explica é um serviço solidário de apoio a alunos do ensino primário. Efetuando registo na aplicação, podes escolher uma Disciplina na qual tenhas dúvidas e efetuar um pedido de ajuda. Ser-te-á atribuído um Explicador voluntário na hora, com o qual podes trocar mensagens e agendar reuniões para resolver as tuas dúvidas. </p>
              <p>Se queres ser um Explicador voluntário, basta efetuares o registo para ficares elegível a ser escolhido por um aluno.</p>
            </div>
            
          </CardBody>
        </Card>
        
      </Col>
    </>
  );
}

About.layout = Auth;

export default About;
