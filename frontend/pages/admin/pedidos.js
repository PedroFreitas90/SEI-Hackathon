import React from "react";

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
    Label,
    Col,
} from "reactstrap";
import Admin from "../../layouts/Admin";
import Image from 'next/image'

import { bgWrap, layout, header } from '../../layouts/styles.module.css'


// layout for this page
// core components

const Background = () => (
    <div>
      <div className={bgWrap}>
          <Image
            alt="bg"
            src="/fundo.png"
            layout="fill"
            objectFit="cover"
            quality={100}
            
          />
        </div>
      </div>
    )



function Pedidos() {
  return (
    
    <div style={{display:"flex", width:'80vw', height: '100vh', flexDirection:'column', justifyContent:'center', alignItems: 'center' }}>
   
    <Col lg="6" md="8" >
       
        <Card className="bg-secondary shadow border-0" >
        
          <CardBody className="px-lg-5 py-lg-5"  >
            <div className="text-center text-muted mb-4">
              <small>Efetue o seu pedido.</small>
            </div>
            <Form role="form">

              <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Português</option>
                  <option>Matemática</option>
                  <option>Estudo Meio</option>
                </Input>
                </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1º ano</option>
                  <option>2º ano</option>
                  <option>3º ano </option>
                  <option>4º ano </option>
                </Input>
                </InputGroup>
            </FormGroup>
           
                    <FormGroup>
                        
                    <InputGroup className="input-group-alternative">
                    
                    
                      <Input style={{width:'30vw', height: '20vh'}}
                     
                        className="form-control-alternative "
                        placeholder=" Observações (Tema, necessidades educativas especiais) "
                        rows="3"
                        type="textarea"
                    
                      />
                      
                        </InputGroup>
                    </FormGroup>
                 
              <div className="text-center">
                <Button className="mt-4" color="primary" type="button">
                  Criar pedidos
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </div>
  );

 
      

}

Pedidos.layout = Admin;

export default Pedidos;
